# Font System Documentation

## Overview

This project uses a comprehensive font system with the **Manrope** font family as the primary font and **Inter** as the secondary font. All font sizes have been standardized and made smaller throughout the project.

## Font Families

### Primary Font: Manrope
- **Source**: Google Fonts
- **Weights**: 200, 300, 400, 500, 600, 700, 800
- **Usage**: Primary font for all text content
- **CSS Variable**: `var(--font-family-primary)`

### Secondary Font: Inter
- **Source**: Google Fonts  
- **Weights**: 300, 400, 500, 600, 700
- **Usage**: Fallback and secondary text
- **CSS Variable**: `var(--font-family-secondary)`

## Font Size Scale

The project uses a standardized font size scale with smaller sizes:

| Class | Size (rem) | Size (px) | Usage |
|-------|------------|-----------|-------|
| `--text-xs` | 0.75rem | 12px | Captions, small labels |
| `--text-sm` | 0.875rem | 14px | Small text, buttons |
| `--text-base` | 1rem | 16px | Body text, default |
| `--text-lg` | 1.125rem | 18px | Large body text |
| `--text-xl` | 1.25rem | 20px | Subheadings |
| `--text-2xl` | 1.5rem | 24px | H3 headings |
| `--text-3xl` | 1.875rem | 30px | H2 headings |
| `--text-4xl` | 2.25rem | 36px | H1 headings |
| `--text-5xl` | 3rem | 48px | Large headings |
| `--text-6xl` | 3.75rem | 60px | Hero headings |

## Font Weights

| Class | Weight | Usage |
|-------|--------|-------|
| `--font-light` | 300 | Light text |
| `--font-normal` | 400 | Normal text |
| `--font-medium` | 500 | Medium text, buttons |
| `--font-semibold` | 600 | Semibold headings |
| `--font-bold` | 700 | Bold headings |
| `--font-extrabold` | 800 | Extra bold text |

## Line Heights

| Class | Value | Usage |
|-------|-------|-------|
| `--leading-tight` | 1.25 | Headings |
| `--leading-snug` | 1.375 | Subheadings |
| `--leading-normal` | 1.5 | Normal text |
| `--leading-relaxed` | 1.625 | Body text |
| `--leading-loose` | 2 | Large text blocks |

## Usage Examples

### Basic Typography Classes
```html
<h1 class="text-4xl font-bold">Main Heading</h1>
<h2 class="text-3xl font-semibold">Sub Heading</h2>
<p class="text-base font-normal">Body text</p>
<button class="text-sm font-medium">Button Text</button>
```

### Predefined Text Combinations
```html
<h1 class="heading-1">Main Heading</h1>
<h2 class="heading-2">Sub Heading</h2>
<h3 class="heading-3">Section Heading</h3>
<p class="body-large">Large body text</p>
<p class="body-medium">Normal body text</p>
<p class="body-small">Small body text</p>
<span class="caption">Caption text</span>
```

### Responsive Typography
```html
<h1 class="text-4xl md:text-3xl sm:text-2xl">Responsive Heading</h1>
<p class="text-lg md:text-base sm:text-sm">Responsive text</p>
```

## CSS Variables

All font properties are defined as CSS variables in `css/styles.css`:

```css
:root {
    /* Font Families */
    --font-family-primary: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    --font-family-secondary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    
    /* Font Sizes */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
    --text-5xl: 3rem;
    --text-6xl: 3.75rem;
    
    /* Font Weights */
    --font-light: 300;
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
    --font-extrabold: 800;
    
    /* Line Heights */
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;
}
```

## Implementation

### Files Updated
1. **`css/styles.css`** - Added font system variables and updated base styles
2. **`css/font-utilities.css`** - Created utility classes for typography
3. **`css/header.css`** - Updated to use new font system
4. **`css/carousel.css`** - Updated to use new font system
5. **`css/footer.css`** - Updated to use new font system
6. **`index.html`** - Added Manrope font import and font utilities CSS

### Key Changes
- ✅ **Manrope font** added as primary font family
- ✅ **Smaller font sizes** throughout the project
- ✅ **Standardized font weights** using CSS variables
- ✅ **Consistent line heights** for better readability
- ✅ **Responsive typography** for all screen sizes
- ✅ **Utility classes** for easy typography management

## Browser Support

The font system supports all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- Fonts are loaded from Google Fonts CDN
- Font display is optimized for performance
- Fallback fonts ensure text displays even if primary fonts fail to load

## Best Practices

1. **Use CSS variables** instead of hardcoded values
2. **Apply font utilities** for consistent typography
3. **Test responsive behavior** on different screen sizes
4. **Maintain hierarchy** using appropriate font sizes and weights
5. **Consider readability** when choosing font sizes and line heights 