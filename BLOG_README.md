# Blog System Documentation

## Overview

The Securize blog system is a complete, professional blog implementation that follows the same dark theme and styling as the homepage. It includes:

- Blog listing page with featured posts
- Individual blog post pages
- Easy-to-update article management
- Professional styling with tech grid patterns and lime green accents

## File Structure

```
src/
├── data/
│   └── blog.ts              # Blog articles data
├── app/
│   └── blog/
│       ├── page.tsx         # Blog listing page
│       └── [slug]/
│           └── page.tsx     # Individual blog post page
```

## Adding New Articles

To add a new blog article, edit `/src/data/blog.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  slug: "your-article-slug",
  title: "Your Article Title",
  excerpt: "A brief description of your article (1-2 sentences)",
  content: `# Your Article Title

Your article content here. You can use markdown-style formatting:
- Headings with #, ##, ###
- Lists with -
- Code blocks with \`\`\`
- Regular paragraphs

## Section Title

More content here...`,
  author: "Author Name",
  authorRole: "Author Title",
  date: "2025-01-20", // Format: YYYY-MM-DD
  readTime: "5 min read",
  category: "Category Name",
  tags: ["Tag1", "Tag2", "Tag3"],
  featured: false // Set to true to feature on homepage
}
```

## Article Fields

- **slug**: URL-friendly identifier (e.g., "ai-pentesting-revolution")
- **title**: Article headline
- **excerpt**: Short description shown in listings
- **content**: Full article content (supports markdown-style formatting)
- **author**: Author's name
- **authorRole**: Author's title/role
- **date**: Publication date (YYYY-MM-DD format)
- **readTime**: Estimated reading time
- **category**: Article category
- **tags**: Array of tags
- **featured**: Boolean to feature on blog homepage

## Content Formatting

The blog system supports markdown-style formatting:

- **Headings**: `# H1`, `## H2`, `### H3`
- **Lists**: `- Item`
- **Code blocks**: Wrap with ` ``` `
- **Paragraphs**: Regular text (separated by blank lines)

## Styling

The blog system uses the same professional theme as the homepage:
- Dark black background
- Lime green (#84cc16) accents
- Tech grid patterns
- Professional card layouts
- Hover effects and animations

## Features

1. **Featured Posts**: Articles with `featured: true` appear in a special section
2. **Category Tags**: Each post displays its category
3. **Author Information**: Shows author name and role
4. **Reading Time**: Displays estimated reading time
5. **Tags**: Posts can have multiple tags
6. **Responsive Design**: Works on all screen sizes
7. **Navigation**: Easy navigation between posts and back to blog listing

## Updating Articles

Simply edit the `blogPosts` array in `/src/data/blog.ts` to:
- Add new articles
- Update existing articles
- Change featured status
- Modify content, titles, or metadata

The changes will automatically appear on the blog pages.

