# Rodax Refacciones - Hero Section

## 📋 Overview

This is a professional, responsive hero section designed for **Rodax Refacciones**, a heavy-duty truck parts supplier in Saltillo, Mexico. The component is built with Astro.js and Tailwind CSS, focusing on B2B trucking industry aesthetics and functionality.

## 🚀 Features

### Core Business Features
- **Fast Delivery**: Immediate delivery in Saltillo, free home delivery
- **Personalized Service**: Expert advice for different vehicle types  
- **Quality Parts**: Trusted brands like Fleetguard, Donaldson, Philips, and AMTRK
- **Professional Design**: Clean, trustworthy appearance suitable for B2B audience

### Technical Features
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Performance**: Optimized fonts, efficient CSS, minimal JavaScript
- **SEO Optimized**: Proper meta tags, structured data, semantic markup

## 🏗️ Implementation

### File Structure
```
src/
├── components/
│   └── HeroSection.astro     # Main hero component
├── pages/
│   └── index.astro           # Updated homepage
└── test/
    └── HeroSection.test.js   # Component tests
```

### Installation Steps

1. **Install Dependencies**
```bash
# Install Astro Tailwind integration
npm install --legacy-peer-deps @astrojs/tailwind
```

2. **Configuration Files**
- `astro.config.mjs`: Updated with Tailwind integration
- `tailwind.config.mjs`: Custom color scheme for trucking industry

3. **Component Usage**
```astro
---
import HeroSection from '../components/HeroSection.astro';
---

<HeroSection 
  title="Custom Title"
  subtitle="Custom Subtitle"
  ctaText="Custom CTA"
  ctaLink="/custom-link"
/>
```

## 🎨 Design System

### Color Palette
```css
--rodax-blue: #1e40af     /* Professional blue */
--rodax-orange: #ea580c   /* Truck orange */
--rodax-gray: #374151     /* Industrial gray */
--rodax-dark: #111827     /* Dark professional */
--rodax-light: #f8fafc    /* Clean light */
```

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800
- **Scale**: Responsive typography using Tailwind classes

### Layout Structure
```
Hero Section (Full Height)
├── Background Gradient + Pattern
├── Left Column (Content)
│   ├── Company Logo/Branding
│   ├── Main Headlines  
│   ├── Key Features Grid
│   ├── CTA Buttons
│   └── Contact Information
└── Right Column (Visual)
    ├── Hero Image Placeholder
    ├── Trusted Brands Grid
    └── Statistics Cards
```

## 🔧 Customization

### Props Interface
```typescript
interface Props {
  title?: string;        // Main headline
  subtitle?: string;     // Supporting text
  ctaText?: string;      // Primary button text
  ctaLink?: string;      // Primary button link
}
```

### Default Values
```javascript
const defaults = {
  title: "Refacciones de Calidad para Camiones Pesados",
  subtitle: "Entrega inmediata en Saltillo • Servicio personalizado • Marcas de confianza",
  ctaText: "Ver Catálogo de Productos",
  ctaLink: "/catalog"
};
```

### Trusted Brands
Easy to modify in the component's frontmatter:
```javascript
const trustedBrands = [
  { name: "Fleetguard", logo: "/brands/fleetguard.png" },
  { name: "Donaldson", logo: "/brands/donaldson.png" },
  { name: "Philips", logo: "/brands/philips.png" },
  { name: "AMTRK", logo: "/brands/amtrk.png" }
];
```

## 🧪 Testing

### Manual Testing
1. **Start Development Server**
```bash
npm run dev
```

2. **Run Browser Tests**
Open browser console and run:
```javascript
// Load and run all tests
window.HeroSectionTests.runAllTests();

// Run individual tests
window.HeroSectionTests.testBasicStructure();
window.HeroSectionTests.testAccessibility();
```

### Test Coverage
- ✅ **Structure**: Component renders correctly
- ✅ **Content**: Text and elements display properly  
- ✅ **Accessibility**: ARIA labels and semantic HTML
- ✅ **Responsive**: Mobile and desktop layouts
- ✅ **Interactions**: Hover states and transitions

## 📱 Responsive Breakpoints

| Breakpoint | Description | Features |
|------------|-------------|----------|
| `sm` (640px+) | Small tablets | Horizontal button layout |
| `md` (768px+) | Tablets | 3-column feature grid |
| `lg` (1024px+) | Desktop | 2-column main layout |
| `xl` (1280px+) | Large screens | Optimal spacing |

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA Labels**: Screen reader friendly
- **Keyboard Navigation**: Focus management
- **Reduced Motion**: Respects user preferences
- **Color Contrast**: WCAG AA compliant
- **Alt Text**: All images have descriptive alt text

## 🔄 Animation & Interactions

### Hover Effects
- Button scale on hover
- Card background opacity changes
- Smooth color transitions

### Performance Optimizations
- CSS-only animations
- Hardware acceleration where beneficial
- Reduced motion media query support

## 📈 SEO Optimization

### Meta Tags
```html
<title>Rodax Refacciones - Repuestos para Camiones Pesados en Saltillo</title>
<meta name="description" content="...">
<meta name="keywords" content="refacciones, camiones pesados, Saltillo...">
```

### Open Graph
```html
<meta property="og:title" content="Rodax Refacciones...">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_MX">
```

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Performance Checklist
- [ ] Fonts preloaded
- [ ] Images optimized
- [ ] CSS minified
- [ ] JavaScript minimal
- [ ] Lighthouse score > 90

## 🛠️ Maintenance

### Regular Updates
1. **Brand Logos**: Update `/public/brands/` directory
2. **Contact Info**: Modify contact details in component
3. **Content**: Update titles and descriptions as needed
4. **Colors**: Adjust theme in `tailwind.config.mjs`

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📞 Support

For questions about implementation or customization:
- Review the component code in `src/components/HeroSection.astro`
- Check test results in browser console
- Validate responsive design in browser dev tools

---

**Built with ❤️ for the trucking industry in Mexico** 🇲🇽 