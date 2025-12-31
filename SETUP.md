# Environment Variables Setup Guide

## GraphCMS (Hygraph) Configuration

### Step 1: Create Account

1. Go to [Hygraph](https://hygraph.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Project

1. Click "New Project"
2. Choose region (Europe/USA/Asia)
3. Select "Start from scratch"
4. Name your project (e.g., "TecBlogs Blog")

### Step 3: Create Schema Models

Create the following models in your Hygraph project:

#### 1. Author Model

- Go to Schema > Add Model
- Model Name: `Author`
- API ID: `author`
- Add fields:
  - `name` (String, Single line text) - Required
  - `bio` (String, Multi line text) - Required
  - `avatar` (Asset, Single asset) - Required
  - `blogs` (Reference, Multiple values) - References: Blog

#### 2. Category Model

- Model Name: `Category`
- API ID: `category`
- Add fields:
  - `name` (String) - Required, Unique
  - `slug` (String) - Required, Unique

#### 3. Tag Model

- Model Name: `Tag`
- API ID: `tag`
- Add fields:
  - `name` (String) - Required
  - `slug` (String) - Required, Unique

#### 4. Blog Model

- Model Name: `Blog`
- API ID: `blog`
- Add fields:
  - `title` (String) - Required
  - `slug` (String) - Required, Unique
  - `description` (String, Multi line text) - Required
  - `image` (Asset, Single asset) - Required
  - `contentHtml` (Rich Text) - Required
  - `author` (Reference, Single value) - Required, References: Author
  - `category` (Reference, Single value) - Required, References: Category
  - `tag` (Reference, Single value) - Required, References: Tag
  - `archive` (Boolean) - Default: false
  - `createdAt` (DateTime) - Auto-generated

### Step 4: Enable Public Access

1. Go to Settings > API Access
2. Find "Content API"
3. Scroll down to "Public Content API"
4. Toggle ON the "Default" endpoint
5. Copy the endpoint URL (looks like: `https://api-region.hygraph.com/v2/xxx/master`)

### Step 5: Configure Environment

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and replace:
   ```env
   NEXT_PUBLIC_GRAPHCMS_ENDPOINT=your_copied_endpoint_here
   ```

### Step 6: Add Sample Content

1. Go to Content in Hygraph
2. Create at least one Author
3. Create categories (Front end, Back end, etc.)
4. Create tags (ReactJS, JavaScript, etc.)
5. Create blog posts

### Step 7: Publish Content

⚠️ **Important**: Content must be published to be visible!

1. Select all created content
2. Click "Publish" button
3. Choose "Publish now"

## Verification

Run the development server:

```bash
pnpm dev
```

Visit `http://localhost:3000` - you should see your blog posts!

## Troubleshooting

### Issue: "GraphCMS endpoint is not defined"

- Make sure `.env.local` exists
- Check that variable name is exactly `NEXT_PUBLIC_GRAPHCMS_ENDPOINT`
- Restart dev server after changing env variables

### Issue: "No blogs showing"

- Verify content is published in Hygraph
- Check Public API is enabled
- Verify endpoint URL is correct
- Check browser console for errors

### Issue: "Unauthorized" or "403 Forbidden"

- Make sure "Public Content API" is enabled
- Check that "Default" endpoint permission is ON

## Production Deployment (Vercel)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variable:
   - Name: `NEXT_PUBLIC_GRAPHCMS_ENDPOINT`
   - Value: Your Hygraph endpoint
4. Deploy!

## Optional: Analytics Setup

### Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

---

Need help? Check [Hygraph Documentation](https://hygraph.com/docs)
