# Deployment Guide

## 🚀 Quick Start

The Rush The Line landing page is now ready for deployment! Here are your options:

### Local Development
```bash
npm start
```
Opens http://localhost:3000 in your browser

### Production Build
```bash
npm run build
```
Creates optimized build in `build/` folder

## 🌐 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect React and build the project
3. Your site will be live at `your-project.vercel.app`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## 🔧 Environment Variables

If you need to add environment variables later:
1. Create `.env` file in root directory
2. Add variables like: `REACT_APP_API_URL=your-api-url`
3. Access in code: `process.env.REACT_APP_API_URL`

## 📱 Performance Notes

- All images are optimized for web
- CSS animations are hardware-accelerated
- Mobile-first responsive design
- Custom scrollbar for better UX
- Smooth scrolling throughout

## 🎨 Customization

To modify colors, update `tailwind.config.js`:
```javascript
colors: {
  'rtl-bg': '#272830',      // Primary background
  'rtl-dark': '#1A1A1D',    // Darker background
  'rtl-magenta': '#A61470', // Magenta accent
  'rtl-red': '#E2021A',     // Red accent
  'rtl-glow': '#23FF95',    // Glow effect
}
```

## 📞 Support

For any issues or questions about the landing page, check the component files in `src/components/` or refer to the README.md for detailed documentation.
