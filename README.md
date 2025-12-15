# SyntheticsAI

SyntheticsAI is a modern media platform for high-quality images, videos, and music built with Next.js 14, TypeScript, and Tailwind CSS. This repository is a feature-rich, educational clone demonstrating search, filtering, responsive media galleries, collections, and upload flows.

---

## Quick Start

Prerequisites: Node.js LTS (recommended Node >= 18) and npm on your PATH.

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser at http://localhost:3000

For full platform-specific setup and troubleshooting see [HOW_TO_RUN.md](HOW_TO_RUN.md).

---

## Features

- Responsive homepage with hero, featured collections, and categories
- Advanced search with filters (type, orientation, category, color, size)
- Media gallery supporting photos, videos, and music
- Media detail pages and collection pages
- Upload workflow and user pages (stubbed UI)
- Modern UI with Tailwind CSS, Framer Motion animations, and Lucide icons

---

## Tech Stack

- Next.js 14 (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

---

## Development

- Run: `npm run dev` — starts Next.js dev server with fast refresh.
- Lint: `npm run lint`
- Build: `npm run build` (creates optimized production build in `.next`)

Notes:
- If a page uses client-only hooks (like `useSearchParams`), it must be marked dynamic (e.g., `export const dynamic = 'force-dynamic'`) to avoid prerender build errors.

---

## Production & Persistent Server

1. Build for production:

```bash
npm run build
```

2. Start production server:

```bash
npm start
```

3. If you want a persistent process manager (recommended on servers):

```bash
# install pm2 globally
npm install -g pm2
# start the app (example)
pm run build && pm2 start node --name syntheticsai -- ./node_modules/next/dist/bin/next start -p 3000
pm2 save
pm2 startup
```

---

## Deployment Options

- Vercel: recommended for Next.js apps — supports App Router and Edge functions.
- Docker: containerize the app and run with your orchestrator (Kubernetes, Docker Compose).
- Traditional VM: use `pm2` (or systemd) to manage and restart the app.

---

## Project Structure

Key folders:

- `app/` — Next.js App Router pages and layout
- `components/` — UI components (Header, Footer, MediaGallery, etc.)
- `lib/` — mock data and helpers
- `public/` — static assets

---

## Troubleshooting

- `npm`/`node` not found: install Node.js LTS and reopen your terminal.
- PowerShell `npm.ps1` blocked: use `npm.cmd` or set execution policy: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`.
- Port 3000 in use: stop existing process or set `PORT` env var (PowerShell: `$env:PORT=4000; npm run dev`).
- Build errors referencing prerendering and `useSearchParams`: mark such pages as dynamic (`export const dynamic = 'force-dynamic'`) or adjust server/client logic.

---

## Contributing

Contributions are welcome. Steps:

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description and tests if applicable

---

## License

This project is provided for educational/demo purposes. No license is specified by default — add one if you plan to publish this project.

---

## 🚀 Features

### Core Features
- **Homepage** with hero section, featured collections, and category grid
- **Advanced Search** with real-time filtering
- **Media Gallery** with responsive grid layout
- **Media Detail Pages** with full information and download options
- **Category Browsing** for easy content discovery
- **User Authentication** (login/signup pages)
- **Upload Functionality** with drag-and-drop support
- **Collections** for curated content

### Advanced Features
- **Advanced Filters**: Filter by type, orientation, category, color, and size
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Modern UI/UX**: Beautiful, intuitive interface with smooth animations
- **Search Functionality**: Search across titles, descriptions, and tags
- **Media Types**: Support for photos, videos, and music
- **User Profiles**: Author information and user pages
- **Related Content**: Show related media based on categories
- **Social Features**: Like, share, and download functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image Component

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Run

See detailed setup and troubleshooting instructions in [HOW_TO_RUN.md](HOW_TO_RUN.md).

## 🎨 Pages & Routes

- `/` - Homepage with featured content
- `/search?q=query` - Search results page
- `/photos` - Browse all photos
- `/videos` - Browse all videos
- `/music` - Browse all music
- `/category/[id]` - Browse by category
- `/media/[id]` - Media detail page
- `/collections` - Featured collections
- `/upload` - Upload new content
- `/login` - User authentication

## 🎯 Key Components

- `Header` - Navigation and search bar
- `Footer` - Site links and information
- `Hero` - Homepage hero section
- `MediaGallery` - Responsive media grid
- `SearchFilters` - Advanced filtering system
- `FeaturedCollections` - Curated collections display
- `CategoryGrid` - Category browsing

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🔮 Future Enhancements

- Backend API integration
- Real user authentication
- File upload to cloud storage
- User profiles and dashboards
- Comments and ratings
- Advanced analytics
- API for third-party integrations
- Multi-language support



## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

Built with ❤️ using Next.js and Tailwind CSS


