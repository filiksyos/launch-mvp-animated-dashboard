# Launch MVP - Animated Dashboard

A beautiful, animated MVP dashboard built with Next.js 15, featuring dark mode support and smooth animations powered by Framer Motion.

## ✨ Features

- 🎨 **Beautiful Landing Page** - Modern, animated landing page with pricing section
- 📊 **User Dashboard** - Feature-rich dashboard with stats, activities, and quick actions
- 🌓 **Dark Mode Support** - Seamless theme switching with Tailwind CSS
- ✨ **Smooth Animations** - Framer Motion powered animations and transitions
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **TypeScript** - Full type safety throughout the project
- 🚀 **Next.js 15** - Built with the latest Next.js App Router

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/filiksyos/launch-mvp-animated-dashboard.git
cd launch-mvp-animated-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── dashboard/          # Dashboard page
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── ThemeToggle.tsx     # Dark mode toggle
│   ├── TypewriterEffect.tsx # Animated typewriter
│   └── PricingSection.tsx  # Pricing cards
├── contexts/
│   └── ThemeContext.tsx    # Theme management
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling with dark mode
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [React Icons](https://react-icons.github.io/react-icons/) - Additional icons
- [React Scroll](https://www.npmjs.com/package/react-scroll) - Smooth scrolling
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer) - Scroll animations

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: '#3b82f6',
    light: '#60a5fa',
    dark: '#2563eb',
  },
  // Add your custom colors
}
```

### Dark Mode

The theme is managed through `ThemeContext`. Users can toggle between light and dark modes, and their preference is saved to localStorage.

## 📝 License

This project is based on [shenSeanChen/launch-mvp-stripe-nextjs-supabase](https://github.com/shenSeanChen/launch-mvp-stripe-nextjs-supabase)

MIT License - feel free to use this template for your projects!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

## 📧 Contact

For questions or feedback, feel free to reach out!

---

Built with ❤️ using Next.js and Framer Motion