gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.defaults({
  ease: 'power3.out',
  duration: 1
});

const tl = gsap.timeline();

tl.from('.logo', {
  y: -30,
  opacity: 0,
  duration: 0.8
})
.from('.nav-links li', {
  y: -20,
  opacity: 0,
  stagger: 0.1,
  duration: 0.6,
  delay: -0.4
})
.from('.nav-cta', {
  opacity: 0,
  x: 20,
  duration: 0.6,
  delay: -0.4
});

tl.from('.hero-tagline', {
  y: 30,
  opacity: 0,
  duration: 0.8
}, '-=0.2')
.from('.title-line', {
  y: 80,
  opacity: 0,
  stagger: 0.15,
  duration: 1,
  ease: 'power4.out'
}, '-=0.4')
.from('.hero-desc', {
  y: 30,
  opacity: 0,
  duration: 0.8
}, '-=0.5')
.from('.hero-actions', {
  y: 20,
  opacity: 0,
  duration: 0.8
}, '-=0.4');

tl.from('.hero-img', {
  scale: 1.3,
  opacity: 0,
  duration: 1.5,
  ease: 'power3.out'
}, '-=1')
.from('.hero-image-accent', {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
}, '-=1');

gsap.from('.section-tag', {
  scrollTrigger: {
    trigger: '.section-tag',
    start: 'top 85%'
  },
  y: 20,
  opacity: 0,
  duration: 0.6
});

gsap.from('.section-title', {
  scrollTrigger: {
    trigger: '.section-title',
    start: 'top 80%'
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power4.out'
});

gsap.from('.story-visual', {
  scrollTrigger: {
    trigger: '.story-visual',
    start: 'top 70%'
  },
  x: -80,
  opacity: 0,
  duration: 1.2,
  ease: 'power3.out'
});

gsap.from('.story-content p', {
  scrollTrigger: {
    trigger: '.story-content',
    start: 'top 75%'
  },
  y: 30,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8
});

gsap.from('.stat', {
  scrollTrigger: {
    trigger: '.story-stats',
    start: 'top 80%'
  },
  y: 30,
  opacity: 0,
  stagger: 0.15,
  duration: 0.6
});

gsap.utils.toArray('.timeline-item').forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top 80%'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.15,
    ease: 'power3.out'
  });
});

gsap.utils.toArray('.menu-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: 'power3.out'
  });
});

gsap.from('.reserve-details', {
  scrollTrigger: {
    trigger: '.reserve-details',
    start: 'top 75%'
  },
  y: 30,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8
});

gsap.from('.reserve-content .btn', {
  scrollTrigger: {
    trigger: '.reserve-content .btn',
    start: 'top 90%'
  },
  y: 20,
  opacity: 0,
  duration: 0.6
});

gsap.from('.footer-brand', {
  scrollTrigger: {
    trigger: '.footer',
    start: 'top 90%'
  },
  y: 30,
  opacity: 0,
  duration: 0.8
});

gsap.from('.footer-links a', {
  scrollTrigger: {
    trigger: '.footer',
    start: 'top 90%'
  },
  x: -20,
  opacity: 0,
  stagger: 0.1,
  duration: 0.6,
  delay: 0.2
});

gsap.from('.footer-social a', {
  scrollTrigger: {
    trigger: '.footer',
    start: 'top 90%'
  },
  x: 20,
  opacity: 0,
  stagger: 0.1,
  duration: 0.6,
  delay: 0.4
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: target, offsetY: 80 },
        ease: 'power3.inOut'
      });
    }
  });
});

const heroImages = document.querySelectorAll('.hero-img, .hero-image-accent');
heroImages.forEach(img => {
  img.addEventListener('mouseenter', () => {
    gsap.to(img, {
      scale: 1.02,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
  img.addEventListener('mouseleave', () => {
    gsap.to(img, {
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}
