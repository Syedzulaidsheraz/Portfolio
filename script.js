// ============================================
// PRELOADER
// ============================================

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 800);
});

// ============================================
// SCROLL PROGRESS BAR
// ============================================

window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = progress + '%';
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// TYPING EFFECT
// ============================================

const typingElement = document.getElementById('typingText');
if (typingElement) {
    const words = ['Frontend Developer', 'UI/UX Designer', 'Creative Thinker', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }
    
    typeEffect();
}

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = parseInt(counter.parentElement.parentElement.getAttribute('data-count'));
            const count = parseInt(counter.innerText);
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + (target === 100 ? '%' : '+');
            }
        };
        
        updateCount();
    });
}

// ============================================
// SKILLS ANIMATION
// ============================================

function animateSkills() {
    const skillFills = document.querySelectorAll('.skill-fill');
    const skillsSection = document.getElementById('skills');
    
    if (!skillsSection) return;
    
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight - 100) {
        skillFills.forEach(fill => {
            const progress = fill.getAttribute('data-progress');
            fill.style.width = progress + '%';
        });
        window.removeEventListener('scroll', animateSkills);
    }
}

// ============================================
// ACTIVE NAV LINK
// ============================================

function setActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// PROJECTS DATA
// ============================================

const projects = [
    {
        title: "Quantum Calculator",
        category: "Web Application",
        description: "Modern calculator with keyboard support, arithmetic operations, and smooth glassmorphism UI.",
        image: "data:image/jpeg;base64,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",
        live: "https://shazishah5352-dotcom.github.io/Calculator-App/"
    },
    {
        title: "ArtSpace Gallery",
        category: "Image Gallery",
        description: "Professional image gallery with lightbox view, category filters, search functionality, and smooth animations.",
        image: "https://picsum.photos/id/104/600/450",
        github: "https://github.com/YOUR-USERNAME/CodeAlpha_ImageGallery",
        live: "https://shazishah5352-dotcom.github.io/CodeAlpha_ImageGallery/"
    },
    {
        title: "Luxe Portfolio",
        category: "Personal Brand",
        description: "Premium portfolio website with glassmorphism, custom cursor, GSAP animations, and responsive design.",
        image: "https://picsum.photos/id/30/600/450",
        github: "https://github.com/YOUR-USERNAME/CodeAlpha_Portfolio",
        live: "https://YOUR-USERNAME.github.io/CodeAlpha_Portfolio"
    }
];

function renderProjects() {
    const workGrid = document.getElementById('workGrid');
    if (!workGrid) return;
    
    workGrid.innerHTML = '';
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'work-card';
        card.setAttribute('data-aos', 'fade-up');
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="work-img">
            <div class="work-info">
                <div class="work-category">${project.category}</div>
                <h3 class="work-title">${project.title}</h3>
                <p class="work-desc">${project.description}</p>
                <div style="display:flex;gap:12px;margin-top:15px;">
                    <a href="${project.github}" target="_blank" style="color:var(--primary);text-decoration:none;font-size:14px;">
                        <i class="fab fa-github"></i> Code
                    </a>
                    <a href="${project.live}" target="_blank" style="color:var(--primary);text-decoration:none;font-size:14px;">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        `;
        workGrid.appendChild(card);
    });
}

// ============================================
// THEME TOGGLE
// ============================================

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.documentElement.toggleAttribute('data-theme');
        const icon = themeToggle.querySelector('i');
        if (document.documentElement.hasAttribute('data-theme')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
}

// ============================================
// MOBILE MENU
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.padding = '40px';
        navLinks.style.background = 'var(--bg)';
        navLinks.style.gap = '20px';
        navLinks.style.borderBottom = '1px solid var(--border)';
    });
}

// ============================================
// 3D TILT EFFECT
// ============================================

VanillaTilt.init(document.querySelectorAll('.work-card, .testimonial-card'), {
    max: 5,
    speed: 400,
    glare: true,
    'max-glare': 0.2,
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✨ Thank you! I will get back to you within 24 hours.');
        contactForm.reset();
    });
}

// ============================================
// AOS INITIALIZATION
// ============================================

AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic',
});

// ============================================
// GSAP ANIMATIONS
// ============================================

gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-image', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    scale: 0.9,
    opacity: 0,
    ease: 'power3.out'
});

// ============================================
// INITIALIZE
// ============================================

renderProjects();
animateCounters();
window.addEventListener('scroll', animateSkills);
window.addEventListener('scroll', setActiveNav);
setActiveNav();

console.log('✨ Professional Portfolio Loaded!');
