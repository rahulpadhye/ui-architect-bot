// deno-lint-ignore-file no-explicit-any
// Supabase Edge Function (Deno) for S3 presigned URLs and listing
// Env required: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET, optional S3_ENDPOINT

import { createPresignedPost } from "npm:@aws-sdk/s3-presigned-post@3.687.0";
import { S3Client, PutObjectCommand, GetObjectCommand, ListObjectsV2Command } from "npm:@aws-sdk/client-s3@3.687.0";
import { getSignedUrl } from "npm:@aws-sdk/s3-request-presigner@3.687.0";

const REGION = Deno.env.get("AWS_REGION");
const ACCESS_KEY_ID = Deno.env.get("AWS_ACCESS_KEY_ID");
const SECRET_ACCESS_KEY = Deno.env.get("AWS_SECRET_ACCESS_KEY");
const BUCKET = Deno.env.get("S3_BUCKET");
const ENDPOINT = Deno.env.get("S3_ENDPOINT"); // optional, for S3-compatible storage

if (!REGION || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY || !BUCKET) {
  console.error("Missing required env vars for S3 integration");
}

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID!,
    secretAccessKey: SECRET_ACCESS_KEY!,
  },
  endpoint: ENDPOINT,
  forcePathStyle: Boolean(ENDPOINT),
});

interface RequestBody {
  action: "presignUpload" | "presignDownload" | "list" | "postPolicy";
  key?: string;
  prefix?: string;
  contentType?: string;
}

function json(res: ResponseInit["status"], body: any) {
  return new Response(JSON.stringify(body), {
    status: res,
    headers: { "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  try {
    if (req.method !== "POST") return json(405, { error: "Method not allowed" });

    const body = (await req.json()) as RequestBody;
    const { action } = body;

    if (action === "presignUpload") {
      if (!body.key || !body.contentType) return json(400, { error: "key and contentType required" });
      // PUT presign URL
      const cmd = new PutObjectCommand({
        Bucket: BUCKET,
        Key: body.key,
        ContentType: body.contentType,
      });
      const url = await getSignedUrl(s3, cmd, { expiresIn: 60 * 5 }); // 5 minutes
      return json(200, { url, method: "PUT" });
    }

    if (action === "presignDownload") {
      if (!body.key) return json(400, { error: "key required" });
      const cmd = new GetObjectCommand({ Bucket: BUCKET, Key: body.key });
      const url = await getSignedUrl(s3, cmd, { expiresIn: 60 * 5 });
      return json(200, { url, method: "GET" });
    }

    if (action === "list") {
      const prefix = body.prefix ?? "";
      const out = await s3.send(new ListObjectsV2Command({ Bucket: BUCKET, Prefix: prefix, Delimiter: "/" }));
      const keys = (out.Contents ?? []).map((o) => o.Key).filter(Boolean) as string[];
      const prefixes = (out.CommonPrefixes ?? []).map((p) => p.Prefix).filter(Boolean) as string[];
      return json(200, { keys, prefixes });
    }

    if (action === "postPolicy") {
      // Alternative: POST policy for browser direct upload (multipart)
      if (!body.key || !body.contentType) return json(400, { error: "key and contentType required" });
      const policy = await createPresignedPost(s3 as any, {
        Bucket: BUCKET!,
        Key: body.key!,
        Conditions: [["content-length-range", 0, 10485760]], // up to 10MB
        Fields: { "Content-Type": body.contentType! },
        Expires: 300,
      });
      return json(200, { method: "POST", ...policy });
    }

    return json(400, { error: "Unknown action" });
  } catch (e) {
    console.error(e);
    return json(500, { error: "Internal error", details: String(e?.message ?? e) });
  }
});
