# S3 Integration Setup TODO

## ✅ Completed
- [x] Frontend Supabase client setup
- [x] S3 folder structure implementation
- [x] Upload functionality in Student Dashboard
- [x] Supabase Edge Function code created
- [x] Environment variables configured locally

## 🚀 Remaining Setup Steps

### 1. Install Supabase CLI
```bash
npm install -g supabase
```

### 2. Login to Supabase
```bash
supabase login
```

### 3. Link Project
```bash
# Replace with your actual project ref
supabase link --project-ref klgdrsgngjmvyyqqxzyv
```

### 4. Deploy Edge Function
```bash
supabase functions deploy s3-router
```

### 5. Configure S3 Environment Variables
Go to Supabase Dashboard > Project Settings > Edge Functions > Environment Variables

Add these secrets:
- [ ] `AWS_ACCESS_KEY_ID` - Your AWS access key
- [ ] `AWS_SECRET_ACCESS_KEY` - Your AWS secret key  
- [ ] `AWS_REGION` - Your S3 bucket region (e.g., `us-east-1`)
- [ ] `S3_BUCKET` - Your S3 bucket name
- [ ] `S3_ENDPOINT` - (Optional) For S3-compatible storage like DigitalOcean Spaces

### 6. AWS S3 Setup (if not done)
- [ ] Create S3 bucket
- [ ] Create IAM user with S3 permissions
- [ ] Generate access keys for the IAM user
- [ ] Configure bucket permissions (public read if needed)

### 7. Test Upload Functionality
- [ ] Click upload buttons in Student Dashboard
- [ ] Verify files upload to correct S3 paths:
  - `homework/{year}/{student-name}/class-{number}/original/`
  - `class-content/class-{number}/`
  - `teacher-resources/`

## 📁 Expected S3 Folder Structure
```
your-s3-bucket/
├── class-content/
│   ├── class-1/
│   ├── class-2/
│   └── class-n/
├── homework/
│   └── {year}/
│       └── {student-name}/
│           └── class-{number}/
│               ├── original/
│               ├── good-pics/
│               ├── processed/
│               └── final/
└── teacher-resources/
```

## 🔧 Troubleshooting
- Check browser console for errors
- Verify Edge Function logs in Supabase dashboard
- Ensure S3 bucket permissions allow uploads
- Test Edge Function directly via Supabase dashboard

## 📝 Notes
- Upload functionality is wired to all buttons in Student Dashboard
- Files currently go to `homework/{year}/alex/class-1/original/` by default
- Can be extended later for teacher dashboard and class content uploads
- Authentication integration needed for real student/teacher context
