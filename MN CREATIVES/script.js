document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll functionality
    const scrollLinks = document.querySelectorAll('.nav-links a');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Your existing scroll effect for navbar
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = `${scrolled}%`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const text = "Hello, I'm";
    const titleElement = document.querySelector('.hero-content h1');
    titleElement.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
});

// Smoother Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50); // Slightly increased delay for smoother transition
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)'; // Less dramatic scale
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 600); // Increased timeout for smoother fade out
                }
            });
        });
    });

    // Add initial animation on page load
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 + (index * 100)); // Staggered animation
    });
});

// Animated counter function
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / 50; // Divide animation into 50 steps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, duration / 50);
}

// Intersection Observer for triggering animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((number, index) => {
                setTimeout(() => {
                    number.classList.add('animate');
                    animateCounter(number);
                }, index * 200);
            });
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

// Observe the stats section
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    observer.observe(statsSection);
});

// Update the testimonials slider code
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    
    let currentIndex = 0;
    const cardsPerView = window.innerWidth > 992 ? 3 : window.innerWidth > 768 ? 2 : 1;
    const maxIndex = Math.max(0, cards.length - cardsPerView);

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 20; // Include gap
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
    }

    function nextSlide() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }

    // Event Listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Initialize
    updateSlider();

    // Handle window resize
    window.addEventListener('resize', () => {
        const newCardsPerView = window.innerWidth > 992 ? 3 : window.innerWidth > 768 ? 2 : 1;
        if (newCardsPerView !== cardsPerView) {
            location.reload(); // Refresh for new layout
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerOffset = 80; // Adjust this value based on your header height
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for timeline animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all timeline items
    document.querySelectorAll('.timeline-item').forEach((item) => {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.querySelector('.progress');
                const targetWidth = progress.style.width;
                progress.style.width = '0';
                setTimeout(() => {
                    progress.style.width = targetWidth;
                }, 100);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all skill cards
    document.querySelectorAll('.skill-card').forEach((card) => {
        observer.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the form data to your server
            // For now, we'll just show a success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
            
            contactForm.insertBefore(successMessage, contactForm.firstChild);
            successMessage.classList.add('show');
            
            // Reset form
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });

        
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            console.log('Menu clicked'); // Debug log
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});


// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('portfolioModal');
    const modalMedia = modal.querySelector('.modal-media');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const closeButton = modal.querySelector('.modal-bottom-close');

    // Open modal
    document.querySelectorAll('.view-project').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Clear previous content
            modalMedia.innerHTML = '';
            
            // Get data from clicked project
            const type = this.dataset.type;
            const mediaUrl = this.dataset.media;
            
            // Create appropriate media element
            if (type === 'image') {
                const img = document.createElement('img');
                img.src = mediaUrl;
                img.alt = this.dataset.title;
                modalMedia.appendChild(img);
            } else if (type === 'video') {
                const video = document.createElement('video');
                video.controls = true;
                video.autoplay = true;
                const source = document.createElement('source');
                source.src = mediaUrl;
                source.type = 'video/mp4';
                video.appendChild(source);
                modalMedia.appendChild(video);
            }
            
            // Update modal content
            modalTitle.textContent = this.dataset.title;
            modalCategory.textContent = this.dataset.category;
            modalDescription.textContent = this.dataset.description;
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        const video = modalMedia.querySelector('video');
        if (video) video.pause();
    }

    // Close button click
    closeButton.addEventListener('click', closeModal);
    
    // Click outside modal
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') closeModal();
    });
});



// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const processCards = document.querySelectorAll('.process-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Optional: unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,  // 20% of the item must be visible
        rootMargin: '0px'  // No margin
    });

    processCards.forEach(card => {
        observer.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('intro-video');
    
    // Enable inline playback
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    
    // Handle play/pause on mobile touch
    video.addEventListener('touchstart', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});