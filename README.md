# Instagram Clone - README

## Overview
This is a responsive Instagram clone frontend built with Tailwind CSS in a single HTML file. It includes all the core UI components of Instagram with sample data.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop screens
- **Core Instagram Components**:
  - Header with navigation
  - Stories section with gradient borders
  - Feed posts with like/comment functionality
  - Right sidebar with suggestions (desktop only)
  - Mobile bottom navigation
- **Interactive Elements**:
  - Like button toggles between states
  - Sample data loaded dynamically
  - Comment input fields

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Font Awesome icons (via CDN)
- Vanilla JavaScript

## How to Use

1. Simply open the HTML file in any modern web browser
2. No server or additional dependencies required
3. The page will automatically load with sample data

## File Structure

The project consists of a single self-contained HTML file with:

- All Tailwind CSS classes
- Embedded JavaScript for functionality
- Sample data for posts, stories, and suggestions
- Custom CSS utilities for Instagram-specific styling

## Customization

To modify the content:

1. Edit the sample data arrays in the JavaScript section:
   - `stories` array for stories content
   - `posts` array for feed posts
   - `suggestions` array for right sidebar suggestions

2. To change styling:
   - Modify Tailwind classes directly in the HTML
   - Add custom utilities in the `<style>` section

## Browser Support

The page should work in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Limitations

- This is a frontend-only implementation with no backend functionality
- All data is hardcoded and won't persist between page refreshes
- Some Instagram features are simplified for demonstration purposes

## License

This project is open source and available for anyone to use or modify.
