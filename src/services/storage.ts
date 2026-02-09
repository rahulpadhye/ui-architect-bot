import { supabase } from "@/lib/supabase";

export type PresignUploadRequest = {
  key: string;
  contentType: string;
};

export type PresignResponse = {
  url: string; // presigned URL
  method: "PUT" | "GET";
  headers?: Record<string, string>;
};

export async function presignUpload(req: PresignUploadRequest): Promise<PresignResponse> {
  // Check if Supabase is properly configured
  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    throw new Error("Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local");
  }
  
  const { data, error } = await supabase.functions.invoke("s3-router", {
    body: { action: "presignUpload", key: req.key, contentType: req.contentType },
  });
  if (error) throw error;
  return data as PresignResponse;
}

export async function presignDownload(key: string): Promise<PresignResponse> {
  const { data, error } = await supabase.functions.invoke("s3-router", {
    body: { action: "presignDownload", key },
  });
  if (error) throw error;
  return data as PresignResponse;
}

export async function listPrefix(prefix: string): Promise<{ keys: string[] }>{
  const { data, error } = await supabase.functions.invoke("s3-router", {
    body: { action: "list", prefix },
  });
  if (error) throw error;
  return data as { keys: string[] };
}

export async function uploadFileToS3(presigned: PresignResponse, file: File): Promise<void> {
  const res = await fetch(presigned.url, {
    method: presigned.method,
    headers: {
      "Content-Type": file.type,
      ...(presigned.headers || {}),
    },
    body: file,
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`S3 upload failed: ${res.status} ${txt}`);
  }
}
