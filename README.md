# Modern Professional Portfolio

A modern, responsive, and professional portfolio website built with HTML, CSS, and JavaScript. This portfolio is designed to showcase your skills, projects, and experience in a visually appealing way.

## Features

- **Fully Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**: Animated skill bars, project cards with hover effects
- **Contact Form**: With client-side validation
- **Smooth Scrolling**: For better user experience
- **Mobile-Friendly Navigation**: Hamburger menu for smaller screens

## How to Customize

### 1. Personal Information

Edit the following sections in `index.html`:

- **Name**: Replace "Your Name" with your actual name
- **Profession**: Update the tagline under your name
- **About Me**: Edit the paragraphs in the About section
- **Personal Info**: Update your email, location, and availability
- **Contact Details**: Update your email, phone, and location

### 2. Profile Picture

Replace the profile image:

1. Add your profile picture to the `images` folder
2. Update the image path in the hero section of `index.html`:
   ```html
   <img src="images/your-image-name.jpg" alt="Profile Image">
   ```

### 3. Skills

Customize your skills in the skills section of `index.html`. For each skill:

1. Update the skill name
2. Change the percentage value (e.g., "90%")

The skill bars will automatically animate to the specified percentage.

### 4. Projects

For each project in the projects section:

1. Update the project image
2. Edit the project title, description, and tags
3. Update the "Live Demo" and "GitHub" links

To add more projects, duplicate the project card structure.

### 5. Colors and Styling

To change the color scheme, edit the CSS variables in the `:root` section of `styles.css`:

```css
:root {
    --primary-color: #4a6cf7; /* Main accent color */
    --secondary-color: #6c757d; /* Secondary text color */
    --dark-color: #2b2d42; /* Dark text/background color */
    --light-color: #f8f9fa; /* Light background color */
    /* ... other variables ... */
}
```

### 6. Social Media Links

Update your social media links in both the contact section and footer:

```html
<div class="social-links">
    <a href="your-linkedin-url"><i class="fab fa-linkedin"></i></a>
    <a href="your-github-url"><i class="fab fa-github"></i></a>
    <!-- Other social media links -->
</div>
```

## Browser Compatibility

This portfolio is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Credits

- **Font Awesome**: For the icons
- **Google Fonts**: For the Poppins font family
- **Placeholder.com**: For placeholder images (replace with your actual project images)

## License

Feel free to use this template for your personal portfolio. Attribution is appreciated but not required.

---

Customize this portfolio to showcase your unique skills and projects. If you have any questions or need assistance, feel free to reach out! 