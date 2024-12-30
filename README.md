# UI/UX E-commerce Website Hackathon 🚀  

This is a modern e-commerce website built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The project was created for a hackathon, focusing on delivering an intuitive and user-friendly shopping experience.

---

## 🌟 Features  

- **Modern UI/UX Design**: Attractive and responsive design optimized for all devices.  
- **Next.js Framework**: Blazing fast performance with server-side rendering (SSR) and static site generation (SSG).  
- **TypeScript Integration**: Type safety and improved developer experience.  
- **Tailwind CSS**: Rapid styling with utility-first CSS framework.  
- **E-commerce Functionalities**:  
  - Product catalog with categories and filters.  
  - Shopping cart and checkout system.  
  - User authentication and profile management.  
- **Dynamic Routing**: Seamless navigation between product pages.  

---

## 🛠️ Tech Stack  

- **Frontend**:  
  - [Next.js](https://nextjs.org/)  
  - [TypeScript](https://www.typescriptlang.org/)  
  - [Tailwind CSS](https://tailwindcss.com/)  

- **Backend** (Optional for API integration):  
  - [Node.js](https://nodejs.org/)   


## 🚀 Getting Started  

### Prerequisites  
- Node.js v16+  
- npm or yarn  


 ### Project Directory Structure

 ```
 root/
├── node_modules/          # Dependencies (auto-managed by npm/yarn)
│
├── public/                # Static assets (images, fonts, etc.)
│
├── src/                   # Source code
│   ├── app/               # Pages and routing logic for Next.js
│   │   ├── about/         # About page route
│   │   │   └── page.tsx   # Main About page component
│   │   ├── cart/          # Cart page route
│   │   │   └── page.tsx   # Main Cart page component
│   │   ├── contact/       # Contact-related pages
│   │   │   ├── faq/       # FAQ sub-section under Contact
│   │   │   │   └── page.tsx # FAQ page component
│   │   │   └── page.tsx   # Main Contact page component
│   │   ├── pages/         # Generic and product-specific pages
│   │   │   ├── need-help/ # Need Help sub-section
│   │   │   │   └── page.tsx # Need Help page component
│   │   │   ├── page.tsx   # Generic page component
│   │   │   └── product/   # Product details or listing page route
│   │   │       └── page.tsx # Product page component
│   │   └── shop/          # Shop-related pages
│   │       ├── global.css # Global styles for the shop section
│   │       ├── layout.tsx # Layout for shop pages
│   │       └── page.tsx   # Main Shop page component
│
│   ├── components/        # Reusable components directory
│   │   └── ui/            # UI components
│   │       ├── Badge.tsx          # Badge component
│   │       ├── FeaturedProducts.tsx # Featured Products section
│   │       ├── Footer.tsx         # Footer section
│   │       ├── Hero.tsx           # Hero section
│   │       ├── Navbar.tsx         # Header and navigation bar
│   │       ├── OurProducts.tsx    # Display of products
│   │       ├── PopularStyles.tsx  # Vertical text and styles
│   │       ├── Sheet.tsx          # Generic reusable sheet component
│   │       ├── Sponsors.tsx       # Sponsors listing component
│   │       ├── TopBar.tsx         # Top bar for navigation or notices
│   │       └── TopCategories.tsx  # Top categories listing
│
│   ├── lib/               # Utility functions and libraries
│   │   └── utils.ts       # General utility functions
│
│   ├── fonts/             # Font assets for the project (if used)
│
│   └── styles/            # Custom styles (if any additional styles are defined)
│
├── .eslintrc.json         # Configuration file for ESLint
├── .gitignore             # Git ignore file to exclude files from version control
├── next-env.d.ts          # TypeScript definitions for Next.js
├── next.config.js         # Next.js configuration for build and runtime settings
├── package.json           # Metadata and dependencies for the project
├── package-lock.json      # Locked versions of dependencies for consistent builds
├── postcss.config.mjs     # Configuration file for PostCSS (used with TailwindCSS)
├── tailwind.config.ts     # Configuration file for customizing TailwindCSS
├── tsconfig.json          # TypeScript configuration file
└── README.md              # Documentation for the project


 ```



### Custom CSS breakpoints
```
@layer base {
  /* Mobile Small */
  @media (max-width: 480px) {
    html {
      font-size: 14px;
    }
  }
  
  /* Mobile Large */
  @media (min-width: 481px) and (max-width: 768px) {
    html {
      font-size: 15px;
    }
  }
  
  /* Tablet */
  @media (min-width: 769px) and (max-width: 1024px) {
    html {
      font-size: 16px;
    }
  }
  
  /* Small Laptop */
  @media (min-width: 1025px) and (max-width: 1440px) {
    html {
      font-size: 16px;
    }
  }
  
  /* Large Desktop */
  @media (min-width: 1441px) {
    html {
      font-size: 18px;
    }
  }
}
```

### Tailwind.config.ts alternative
```
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '481px',     // Mobile Large starts
        'sm': '769px',     // Tablet starts
        'md': '1025px',    // Small Laptop starts
        'lg': '1441px',    // Large Desktop starts
      },
      spacing: {
        // Common spacing values.
        '0': '0',
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
      },
      fontSize: {
        // Typography scale.
        'xs': '0.75rem',      // 12px
        'sm': '0.875rem',     // 14px
        'base': '1rem',       // 16px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
        '6xl': '3.75rem',     // 60px
      },
    },
  },
  plugins: [],
}

export default config
```
