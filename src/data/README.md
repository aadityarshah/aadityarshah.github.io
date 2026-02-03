# Data Files

This directory contains JSON data files for the portfolio website.

## Auto-Update Behavior

### Development Mode (`npm run dev`)
- ✅ **Changes to JSON files auto-reload** - No commit needed!
- Just save the file and the browser will automatically refresh
- Perfect for testing changes locally

### Production Mode (GitHub Pages)
- ⚠️ **Requires commit and push** - Changes need to be committed to GitHub
- GitHub Actions will rebuild and redeploy automatically
- Changes go live after the build completes (usually 1-2 minutes)

---

## File: `news.json`

This JSON file contains all the news items displayed on the homepage timeline.

### Format

Each news item should have the following structure:

```json
{
  "date": "YYYY-MM-DD",
  "title": "News Title",
  "content": "News content with emoji and description",
  "category": "Category Name (optional)"
}
```

### Example

```json
{
  "date": "2024-12-20",
  "title": "New Project Released",
  "content": "🎉 Just released my new React Native app to the App Store!",
  "category": "Development"
}
```

### Notes

- Dates should be in `YYYY-MM-DD` format
- News items are automatically sorted by date (newest first)
- The `category` field is optional
- When running `npm run dev`, changes to this file will automatically reload in the browser (hot reload)
- You don't need to commit to GitHub to see changes locally - just save the file!

### Adding New News Items

1. Open `src/data/news.json`
2. Add a new object to the array with your news item
3. Save the file
4. The dev server will automatically reload and show your changes

---

## File: `projects.json`

This JSON file contains all the projects displayed on the projects page and homepage.

### Format

Each project should have the following structure:

```json
{
  "title": "Project Name",
  "description": "Project description",
  "tags": ["Tag1", "Tag2"],
  "links": {
    "playStore": "https://play.google.com/store/apps/details?id=...",
    "website": "https://example.com",
    "demo": "https://demo.example.com",
    "github": "https://github.com/username/repo"
  },
  "featured": true
}
```

### Example

```json
{
  "title": "My Awesome App",
  "description": "A mobile app built with React Native for cross-platform development.",
  "tags": ["React", "React Native", "TypeScript"],
  "links": {
    "website": "https://myapp.com",
    "github": "https://github.com/username/myapp"
  },
  "featured": true
}
```

### Notes

- The `links` object can contain any combination of: `playStore`, `website`, `demo`, `github`
- Set `featured: true` to show the project on the homepage
- Only the first 2 featured projects appear on the homepage
- All projects appear on the `/projects` page
- When running `npm run dev`, changes auto-reload (no commit needed for local testing)

### Adding New Projects

1. Open `src/data/projects.json`
2. Add a new object to the array with your project details
3. Set `featured: true` if you want it on the homepage
4. Save the file - changes appear automatically in dev mode
