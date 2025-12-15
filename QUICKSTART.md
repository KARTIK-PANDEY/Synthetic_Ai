# Quick Start Guide

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── search/            # Search page
│   ├── photos/            # Photos page
│   ├── videos/            # Videos page
│   ├── music/             # Music page
│   ├── category/          # Category pages
│   ├── media/             # Media detail pages
│   ├── collections/       # Collections pages
│   ├── upload/            # Upload page
│   └── login/             # Authentication
├── components/            # React components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── MediaGallery.tsx   # Media grid
│   ├── SearchFilters.tsx  # Advanced filters
│   └── ...
├── lib/                   # Utilities
│   └── data.ts           # Mock data
└── public/                # Static assets
```

## Key Features to Test

1. **Homepage** - Browse featured collections and categories
2. **Search** - Try searching for "nature" or "city"
3. **Filters** - Use advanced filters on search page
4. **Media Detail** - Click any image to see full details
5. **Categories** - Browse by category
6. **Upload** - Test drag-and-drop upload
7. **Responsive** - Resize browser to test mobile view

## Customization

- **Colors**: Edit `tailwind.config.ts`
- **Data**: Modify `lib/data.ts` for mock data
- **Styling**: Update components in `components/`
- **Pages**: Add new pages in `app/`

## Build for Production

```bash
npm run build
npm start
```

Enjoy SyntheticsAI! 🎨

