// ===== CURSOR GLOW =====
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// ===== PARTICLES =====
const particlesEl = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 6 + 's';
    p.style.animationDuration = (4 + Math.random() * 4) + 's';
    p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
    particlesEl.appendChild(p);
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal, .timeline-item');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });
revealElements.forEach(el => revealObserver.observe(el));

// ===== COUNTER ANIMATION =====
const statNumbers = document.querySelectorAll('.stat-number[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseFloat(el.dataset.target);
            const isDecimal = el.classList.contains('special');
            const suffix = el.textContent.replace(/[0-9.]/g, '');
            let current = 0;
            const step = target / 60;
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(counter);
                }
                el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
            }, 25);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
statNumbers.forEach(el => counterObserver.observe(el));

// ===== AUTHOR NAME SPARK EFFECT =====
document.querySelectorAll('.author-name').forEach(name => {
    name.addEventListener('mouseenter', (e) => {
        const rect = name.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        for (let i = 0; i < 12; i++) {
            const spark = document.createElement('div');
            spark.classList.add('author-spark');
            spark.style.position = 'fixed';
            spark.style.left = cx + 'px';
            spark.style.top = cy + 'px';
            const angle = (Math.PI * 2 / 12) * i;
            const dist = 40 + Math.random() * 40;
            spark.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
            spark.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
            spark.style.animation = 'spark-burst 0.6s ease-out forwards';
            spark.style.zIndex = '999';
            document.body.appendChild(spark);
            setTimeout(() => spark.remove(), 600);
        }
    });
});

// ===== SOLUTION CARD CLICK TO EXPAND =====
document.querySelectorAll('.solution-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // If clicking on image wrapper or within it, do not toggle accordion
        if (e.target.closest('.topic-image-wrapper')) return;

        const example = card.querySelector('.solution-example');
        const isActive = card.classList.contains('active');

        // Close all other cards
        document.querySelectorAll('.solution-card').forEach(c => {
            c.classList.remove('active');
            c.querySelector('.solution-example').style.maxHeight = null;
        });

        if (!isActive) {
            card.classList.add('active');
            example.style.maxHeight = example.scrollHeight + 'px';
        }
    });
});

// ===== IMAGE LIGHTBOX MODAL =====
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');

function openLightbox(src, alt) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    if (lightboxCaption) lightboxCaption.textContent = alt;
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.querySelectorAll('.topic-image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        const img = wrapper.querySelector('img');
        if (img) {
            openLightbox(img.src, img.alt);
        }
    });
});

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
        closeLightbox();
    }
});

// ===== SMOOTH SCROLL for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== STYLE SWITCHER (Simple 3D Art vs Detailed V1) =====
const styleSwitcherBtn = document.getElementById('styleSwitcherBtn');
const switcherText = document.getElementById('switcherText');
let currentStyle = localStorage.getItem('se_seminar_image_style') || 'simple';

function applyImageStyle(mode) {
    currentStyle = mode;
    localStorage.setItem('se_seminar_image_style', mode);

    document.querySelectorAll('img.topic-image').forEach(img => {
        const targetSrc = mode === 'v1' ? img.getAttribute('data-v1') : img.getAttribute('data-simple');
        if (targetSrc && img.src !== targetSrc) {
            img.style.opacity = '0.4';
            img.style.transition = 'opacity 0.25s ease';
            setTimeout(() => {
                img.src = targetSrc;
                img.style.opacity = '1';
            }, 150);
        }
    });

    if (styleSwitcherBtn && switcherText) {
        if (mode === 'v1') {
            styleSwitcherBtn.classList.add('v1-mode');
            switcherText.textContent = 'Detailed V1';
        } else {
            styleSwitcherBtn.classList.remove('v1-mode');
            switcherText.textContent = 'Simple 3D Art';
        }
    }
}

// Initial style apply
applyImageStyle(currentStyle);

if (styleSwitcherBtn) {
    styleSwitcherBtn.addEventListener('click', () => {
        const nextMode = currentStyle === 'simple' ? 'v1' : 'simple';
        applyImageStyle(nextMode);
    });
}

// ===== 3D CARD PERSPECTIVE TILT PHYSICS =====
const tiltCards = document.querySelectorAll('.solution-card, .cause-card, .stat-card, .principle-card');
tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const tiltX = -y * 10;
        const tiltY = x * 10;
        card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
});



