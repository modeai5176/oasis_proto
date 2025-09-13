// Scroll-driven animation utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // Use passive listener for better performance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Use requestAnimationFrame for smooth animations
        requestAnimationFrame(() => {
          entry.target.classList.add('animate');
        });
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .stagger-item, .slide-in-left, .slide-in-right, .slide-in-top, .slide-in-bottom, .card-slide-left, .card-slide-right, .card-slide-top'
  );

  animatedElements.forEach((el) => observer.observe(el));

  // Stagger animation for lists
  const staggerContainers = document.querySelectorAll('.stagger-container');
  staggerContainers.forEach((container) => {
    const items = container.querySelectorAll('.stagger-item');
    items.forEach((item, index) => {
      (item as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
    });
  });

  return observer;
};

// Parallax effect utility
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element) => {
          const speed = (element as HTMLElement).dataset.speed || '0.5';
          const yPos = -(scrolled * parseFloat(speed));
          (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
      });
      
      ticking = true;
    }
  };

  // Use passive listener for better performance
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
};

// Smooth reveal animation for text
export const initTextReveal = () => {
  const textElements = document.querySelectorAll('.text-reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.5 });

  textElements.forEach((el) => observer.observe(el));
  return observer;
};

// Hover effect utilities
export const initHoverEffects = () => {
  // Add hover classes to elements
  const cards = document.querySelectorAll('.card-hover');
  const buttons = document.querySelectorAll('.btn-hover');
  
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hover-lift');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hover-lift');
    });
  });

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('hover-glow');
    });
    
    button.addEventListener('mouseleave', () => {
      button.classList.remove('hover-glow');
    });
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  if (typeof window !== 'undefined') {
    // Check if device is mobile for performance optimizations
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Initialize core animations
    initScrollAnimations();
    
    // Only initialize heavy animations on desktop
    if (!isMobile) {
      initParallax();
      initHoverEffects();
    }
    
    // Initialize text reveal (lightweight)
    initTextReveal();
  }
};
