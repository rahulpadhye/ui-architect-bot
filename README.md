# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/4a7827ab-3678-4cfa-8196-e29300b262d0

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4a7827ab-3678-4cfa-8196-e29300b262d0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4a7827ab-3678-4cfa-8196-e29300b262d0) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## S3 Storage Integration Setup

This project includes S3 integration for organized file storage via Supabase Edge Functions.

### Prerequisites

1. **Supabase Project**: Connect your Lovable project to Supabase
2. **AWS S3 Bucket**: Create an S3 bucket for file storage
3. **AWS IAM User**: Create IAM user with S3 permissions

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Deploy Supabase Edge Function

1. Install Supabase CLI: `npm install -g supabase`
2. Login: `supabase login`
3. Link project: `supabase link --project-ref your-project-ref`
4. Set secrets in Supabase dashboard:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`
   - `S3_BUCKET`
   - `S3_ENDPOINT` (optional, for S3-compatible storage)
5. Deploy function: `supabase functions deploy s3-router`

### Folder Structure

The S3 bucket will be organized as:
- `class-content/class-1/`, `class-content/class-2/`, etc.
- `homework/{year}/{student-name}/class-{number}/{stage}/`
  - Stages: `original`, `good-pics`, `processed`, `final`
- `teacher-resources/`

### Testing

After setup, use the Student Dashboard upload buttons to test file uploads to the organized S3 structure.
