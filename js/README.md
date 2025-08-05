# JavaScript Include Methods

This folder contains different approaches for including HTML layouts in your pages.

## Available Include Methods

### 1. `template-includes.js` (Recommended)
- **Approach**: Template-based system using fetch and template literals
- **Features**: 
  - Loads templates asynchronously
  - Caches templates in memory
  - Clean and efficient
  - Error handling included
- **Usage**: Include this script in your HTML

### 2. `includes.js` (Simple)
- **Approach**: Direct fetch and inject method
- **Features**:
  - Simple and straightforward
  - No caching
  - Direct DOM manipulation
- **Usage**: Alternative to template-includes.js

### 3. `html-imports.js` (Alternative)
- **Approach**: HTML imports style approach
- **Features**:
  - Similar to HTML imports (deprecated but concept remains)
  - Clean separation of concerns
- **Usage**: Another alternative method

### 4. `layout-loader.js` (Original)
- **Approach**: Original layout loader with more features
- **Features**:
  - More complex with additional functionality
  - Better error handling
  - More robust
- **Usage**: If you need more advanced features

## How to Use

### Basic Usage:
```html
<!-- In your HTML file -->
<div id="header-placeholder"></div>
<!-- Your content -->
<div id="footer-placeholder"></div>

<!-- Include the script -->
<script src="js/template-includes.js"></script>
```

### Switching Between Methods:
Simply change the script reference in your HTML:
```html
<!-- For template approach -->
<script src="js/template-includes.js"></script>

<!-- For simple approach -->
<script src="js/includes.js"></script>

<!-- For HTML imports approach -->
<script src="js/html-imports.js"></script>
```

## Benefits of Template Approach

1. **Performance**: Templates are cached after first load
2. **Reliability**: Better error handling
3. **Maintainability**: Clean, organized code
4. **Flexibility**: Easy to extend with more templates

## File Structure

```
js/
├── template-includes.js    # Recommended approach
├── includes.js            # Simple approach
├── html-imports.js        # Alternative approach
├── layout-loader.js       # Original approach
└── README.md             # This file
```

## Choosing the Right Method

- **Use `template-includes.js`** for most projects (recommended)
- **Use `includes.js`** for simple projects
- **Use `html-imports.js`** if you prefer that style
- **Use `layout-loader.js`** if you need advanced features 