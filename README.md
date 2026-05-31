# T💖lulope Birthday Website

A beautiful, emotional birthday website created with love.

## How to Add Your Photos and Videos

### Step 1: Add Your Media Files
Put your image and video files in the `public` folder:
- **Images**: jpg, png, gif, webp files
- **Videos**: mp4, webm files

### Step 2: Edit the Configuration
Open `main.js` and find the `CONFIG` section at the top (around line 10).

Look for `galleryMedia: [...]` and add your files like this:

```javascript
galleryMedia: [
  // YOUR PHOTOS - just add your filenames!
  { type: 'image', src: 'your-photo.jpg', caption: 'Our first photo' },
  { type: 'image', src: 'photo2.png', caption: 'Beautiful memory', size: 'large' },
  { type: 'image', src: 'photo3.jpg', caption: 'Forever' },

  // YOUR VIDEOS
  { type: 'video', src: 'birthday-video.mp4', caption: 'Special moment' },

  // USE ONLINE IMAGES (optional)
  { type: 'image', src: 'https://example.com/image.jpg', caption: 'From the web' },
]
```

### Step 3: Gallery Item Sizes (Optional)
You can add a `size` option:
- `size: 'normal'` - default size (square)
- `size: 'large'` - takes 4 spaces (2x2)
- `size: 'tall'` - takes 2 vertical spaces (1x2)

### Examples

```javascript
// Simple - just add your files
galleryMedia: [
  { type: 'image', src: 'img11.jpg', caption: 'Together' },
  { type: 'image', src: 'img13.jpg', caption: 'My favorite', size: 'large' },
  { type: 'video', src: 'memory.mp4', caption: 'Best day ever' },
]

// Mix of local and online images
galleryMedia: [
  { type: 'image', src: 'public-photo.jpg', caption: 'Local photo' },
  { type: 'image', src: 'https://images.pexels.com/photos/12345.jpeg', caption: 'Beautiful moment' },
]
```

### Password
The default password is `goldenbites`
To change it, edit line 11 in `main.js`:
```javascript
password: 'your-new-password',
```

### Birthday Date
The countdown is set to June 3rd, 2026
To change it, edit line 12 in `main.js`:
```javascript
birthday: new Date('2026-06-03T00:00:00'),
```

## Running the Website

The website will start automatically when you open the preview.

Enter the password to unlock the magical birthday experience!

## Features
- Password-protected entry with confetti unlock animation
- Custom countdown timer
- Beautiful glassmorphism design
- Responsive gallery with lightbox
- Animated particles and hearts
- Memory timeline
- And much more!

Made with love for T💖lulope
