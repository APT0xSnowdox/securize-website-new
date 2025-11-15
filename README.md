# XBOW Website

A complete Next.js implementation of the XBOW website, featuring modern design, responsive layout, and comprehensive security solutions.

## Features

- 🚀 Built with Next.js 16 and React 19
- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Fully mobile-responsive
- ⚡ Fast and optimized performance
- 🔒 Security-focused content and design
- 🎯 SEO-friendly structure

## Pages

- **Home** (`/`) - Landing page with hero section, features, and CTA
- **About** (`/about`) - Company information, mission, values, and team
- **Services** (`/services`) - Comprehensive list of security services
- **Solutions** (`/solutions`) - Detailed security solutions and features
- **Contact** (`/contact`) - Contact form and company information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
securize-website/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── services/
│   │   ├── solutions/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       └── Footer.tsx
├── public/
├── package.json
└── README.md
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

## Customization

You can customize the website by:

1. Updating content in the page components (`src/app/*/page.tsx`)
2. Modifying styles in `src/app/globals.css`
3. Adding new components in `src/components/`
4. Updating metadata in `src/app/layout.tsx`

## License

This project is created for demonstration purposes.
