# anandshah.blog

A modern, personal website and blog showcasing my journey as a Data Scientist, Photographer, and Tech Enthusiast.

## Features

- 🎨 Modern, responsive design with dark mode support
- 📝 MDX-powered blog for sharing insights and experiences
- 📸 Photo gallery showcasing my photography work
- 👨‍💻 About page highlighting my skills and expertise
- 🔗 Referral system for product recommendations
- 🛍️ Store page (coming soon)

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Image Gallery**: [PhotoSwipe](https://photoswipe.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/anandshahblog.git
   cd anandshahblog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create necessary directories:
   ```bash
   mkdir -p content/blog public/images
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/                # Next.js app router pages
│   │   ├── page.tsx       # Home page
│   │   ├── about/        # About section
│   │   ├── blog/         # Blog section
│   │   ├── clicks/       # Photography portfolio
│   │   ├── referrals/    # Product recommendations
│   │   └── store/        # Digital products store
│   ├── components/        # React components
│   │   ├── shared/       # Shared components
│   │   └── gallery/      # Photo gallery components
│   └── lib/              # Utility functions
├── content/
│   └── blog/             # MDX blog posts
├── public/
│   └── images/           # Static images
└── package.json          # Project dependencies
```

## Adding Content

### Blog Posts

Create new blog posts in the `content/blog` directory using MDX:

```mdx
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "Brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Photos

1. Add photos to the `public/images` directory
2. Update the photo array in `src/app/clicks/page.tsx`:

```typescript
const photos = [
  {
    src: '/images/your-photo.jpg',
    width: 1920,
    height: 1080,
    alt: 'Photo description',
    caption: 'Optional caption',
  },
]
```

## Development

- **Styling**: The project uses Tailwind CSS for styling. Configure styles in `tailwind.config.ts`.
- **Components**: Reusable components are in the `src/components` directory.
- **Pages**: Page components are in the `src/app` directory following Next.js 14 app router conventions.

## Deployment

The site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure your deployment settings
4. Deploy!

## License

MIT © Anand Shah
