// Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// Scroll to sections smoothly when clicking on nav links
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const nav = document.querySelector('.nav-links');
            const burger = document.querySelector('.burger');
            
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                
                document.querySelectorAll('.nav-links li').forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
};

// Sticky Header
const stickyHeader = () => {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
};

// Form Validation
const formValidation = () => {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            if (name.value.trim() === '') {
                valid = false;
                showError(name, 'Name is required');
            } else {
                removeError(name);
            }
            
            if (email.value.trim() === '') {
                valid = false;
                showError(email, 'Email is required');
            } else if (!isValidEmail(email.value)) {
                valid = false;
                showError(email, 'Please enter a valid email');
            } else {
                removeError(email);
            }
            
            if (subject.value.trim() === '') {
                valid = false;
                showError(subject, 'Subject is required');
            } else {
                removeError(subject);
            }
            
            if (message.value.trim() === '') {
                valid = false;
                showError(message, 'Message is required');
            } else {
                removeError(message);
            }
            
            if (valid) {
                // Here you would typically send the form data to a server
                // For now, we'll just show a success message
                form.reset();
                alert('Message sent successfully!');
            }
        });
    }
};

// Helper function to show error
const showError = (input, message) => {
    const formGroup = input.parentElement;
    formGroup.classList.add('error');
    
    let errorElement = formGroup.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
};

// Helper function to remove error
const removeError = (input) => {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
};

// Helper function to validate email
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// Initialize skill bars
const initSkillBars = () => {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    if (skillLevels.length > 0) {
        skillLevels.forEach(skill => {
            const parentElement = skill.parentElement.previousElementSibling;
            const percentValue = parentElement.querySelector('span:last-child').textContent;
            skill.style.setProperty('--width', percentValue);
        });
    }
};

// Page Transitions
const pageTransitions = () => {
    // Create transition element if it doesn't exist
    if (!document.querySelector('.page-transition')) {
        const transitionElement = document.createElement('div');
        transitionElement.className = 'page-transition';
        document.body.appendChild(transitionElement);
    }
    
    const transitionElement = document.querySelector('.page-transition');
    
    // Add click event to all navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't transition if it's the current page
            if (this.classList.contains('active')) {
                return;
            }
            
            e.preventDefault();
            const target = this.getAttribute('href');
            
            // Animate transition
            transitionElement.classList.add('active');
            
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });
    
    // Hide transition element when page loads
    window.addEventListener('load', () => {
        transitionElement.classList.remove('active');
    });
};

// Activate current page in navigation
const activateCurrentPage = () => {
    const currentPage = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Scroll Reveal Animation
const scrollReveal = () => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    // Add active class to hero section immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('active');
    }
    
    // Add active class to page sections immediately
    const pageSections = document.querySelectorAll('.page-section');
    if (pageSections.length > 0) {
        pageSections.forEach(section => {
            section.classList.add('active');
        });
    }
    
    // Check initial position of sections
    sections.forEach(section => {
        if (!section.classList.contains('page-section')) {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('active');
            }
        }
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            if (!section.classList.contains('page-section')) {
                const sectionTop = section.getBoundingClientRect().top;
                
                if (sectionTop < windowHeight * 0.75) {
                    section.classList.add('active');
                }
            }
        });
    });
};

// Preload images for better performance
const preloadImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const newImg = new Image();
            newImg.src = src;
        }
    });
};

// Handle responsive behavior
const handleResponsive = () => {
    // Add touch support for mobile devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Adjust padding on smaller screens
    const adjustPadding = () => {
        const windowWidth = window.innerWidth;
        const sections = document.querySelectorAll('section');
        
        if (windowWidth <= 480) {
            sections.forEach(section => {
                if (!section.classList.contains('page-section')) {
                    section.style.padding = '40px 15px';
                }
            });
        }
    };
    
    // Call once on load
    adjustPadding();
    
    // Call on resize
    window.addEventListener('resize', adjustPadding);
};

// Initialize all functions
const app = () => {
    preloadImages();
    navSlide();
    smoothScroll();
    stickyHeader();
    formValidation();
    initSkillBars();
    scrollReveal();
    handleResponsive();
    pageTransitions();
    activateCurrentPage();
};

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', app); 