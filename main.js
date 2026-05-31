const CONFIG = {
  password: 'goldenbites',
  birthday: new Date('2026-06-03T00:00:00'),
  particleCount: 30,
  heartColors: ['#FFB6C1', '#E8B4B8', '#DDA0DD', '#FFDAB9'],

  galleryMedia: [
    { type: 'image', src: '/img4.jpg', caption: 'Her adorable smile', size: 'large' },

    { type: 'image', src: '/img6.jpg', caption: 'Our first picture together' },

    { type: 'image', src: '/img18.jpg', caption: 'Precious memories', size: 'tall' },

    { type: 'video', src: '/vid18.mp4', caption: 'Precious times' },

    { type: 'image', src: '/img13.jpg', caption: 'Forever grateful' },
      
    { type: 'image', src: '/img29.jpg' , caption: '' ,size:'large'},
    
    { type: 'image', src: '/img17.jpg', caption: 'Happy times' },
    
    { type: 'video', src: '/vid1.mp4', caption: 'Special moment together' ,size:'tall'},

    { type: 'image', src: '/img22.jpg', caption: '' },

    { type: 'image', src: '/img3.jpg', caption: 'My favorite person' },

    { type: 'video', src: '/vid4.mp4' , caption: '' },

    { type: 'image', src: '/img5.jpg', caption: 'Special bond' },

    { type: 'video', src: '/vid16.mp4', caption: 'Beautiful memories' ,size: 'large' },

    { type: 'image', src: '/img20.jpg', caption: 'Ser her face', size: 'tall' },

    { type: 'image', src: '/img19.jpg', caption: '' },

    { type: 'video', src: '/vid3.mp4', caption: 'Fun times' },

    { type: 'image', src: '/img9.jpg', caption: 'My heart smiles for you', size: 'large' },

    { type: 'image', src: '/img10.jpg', caption: 'Joy and laughter' },

    { type: 'video', src: '/vid5.mp4', caption: 'Celebrating you' },

    { type: 'image', src: '/img15.jpg', caption: '' },

    { type: 'video', src: '/vid17.mp4', caption: 'Her Sister' },

    { type: 'image', src: '/img21.jpg', size: 'tall' , caption:''},

    { type: 'video', src: '/vid7.mp4', caption: 'Precious times' },

    { type: 'image', src: '/img12.jpg', caption: '' },

    { type: 'image', src: '/img7.jpg', caption: '' },

    { type: 'video', src: '/vid13.mp4', caption: 'Precious times' },

    { type: 'image', src: '/img8.jpg' , caption: ''},

    { type: 'image', src: '/img14.jpg', caption: ''},

    { type: 'image', src: '/img1.jpg', caption: 'Her dear brother❤️', size: 'large' },

    { type: 'image', src: '/img.jpg', caption: ''  },

    { type: 'image', src: '/img7.jpg' , caption: ''},

    { type: 'image', src: '/img13.jpg', caption: '' },

    { type: 'video', src: '/vid8.mp4', caption: '' },

    { type: 'image', src: '/img23.jpg', caption: '' },

    { type: 'image', src: '/img12.jpg', caption: ''},

    { type: 'image', src: '/img30.jpg' , caption: '' },

    {type:'video', src: '/vid19.mp4', caption: 'First Time announcing her birthday at MFMCF😊😁', size: 'large' },
    
    { type: 'image', src: '/img27.jpg' , caption: '' },
    
    { type: 'image', src: '/img24.jpg' , caption: '' },

    { type: 'image', src: '/img25.jpg' , caption: '' },

    { type: 'image', src: '/img26.jpg' , caption: 'Her sister💕', size:'large'},

    
  ]
};

let elements = {};

function initElements() {
  elements = {
    lockScreen: document.getElementById('lock-screen'),
    passwordInput: document.getElementById('password-input'),
    unlockBtn: document.getElementById('unlock-btn'),
    errorMessage: document.getElementById('error-message'),
    mainContent: document.getElementById('main-content'),
    confettiCanvas: document.getElementById('confetti-canvas'),
    musicControl: document.getElementById('music-control'),
    musicToggle: document.getElementById('music-toggle'),
    particlesContainer: document.getElementById('particles-container'),
    cursorTrail: document.getElementById('cursor-trail'),
    countdown: {
      days: document.getElementById('days'),
      hours: document.getElementById('hours'),
      minutes: document.getElementById('minutes'),
      seconds: document.getElementById('seconds')
    },
    letterParagraphs: document.querySelectorAll('.letter-paragraph'),
    timelineItems: document.querySelectorAll('.timeline-item'),
    galleryItems: document.querySelectorAll('.gallery-item'),
    lightbox: document.getElementById('lightbox'),
    lightboxContent: document.querySelector('.lightbox-content'),
    lightboxClose: document.querySelector('.lightbox-close'),
    lightboxPrev: document.querySelector('.lightbox-prev'),
    lightboxNext: document.querySelector('.lightbox-next'),
    heartBurstBtn: document.getElementById('heart-burst-btn'),
    loveNotes: document.getElementById('love-notes')
  };
}

function initPasswordLock() {
  const { passwordInput, unlockBtn, errorMessage, lockScreen, mainContent } = elements;

  if (!passwordInput || !unlockBtn) {
    console.error('Password elements not found');
    return;
  }

  passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      checkPassword();
    }
  });

  
  unlockBtn.addEventListener('click', checkPassword);

  function checkPassword() {
    const enteredPassword = passwordInput.value.toLowerCase().trim();

    if (enteredPassword === CONFIG.password) {
    
      unlockSuccess();
    } else {
      
      passwordInput.classList.add('error');
      errorMessage.classList.add('show');

      setTimeout(() => {
        passwordInput.classList.remove('error');
        passwordInput.value = '';
      }, 500);

      setTimeout(() => {
        errorMessage.classList.remove('show');
      }, 2000);
    }
  }

  function unlockSuccess() {

  triggerConfetti();

  lockScreen.classList.add('unlocked');

  setTimeout(() => {
    lockScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');

    setTimeout(() => {
      mainContent.classList.add('visible');

      initAllAnimations();

      initMusic();

      // START MUSIC AUTOMATICALLY
      if (bgMusic) {

        bgMusic.volume = 0.25;

        bgMusic.play()
          .then(() => {
            isPlaying = true;

            if (elements.musicToggle) {
              elements.musicToggle.classList.add('playing');
            }
          })
          .catch(err => {
            console.log('Audio failed:', err);
          });
      }

    }, 100);

  }, 1200);
}
}

function triggerConfetti() {
  const canvas = elements.confettiCanvas;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#FFB6C1', '#E8B4B8', '#DDA0DD', '#FFDAB9', '#FF8FA3', '#ffffff'];

  class Confetti {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 10;
      this.size = Math.random() * 8 + 4;
      this.speedY = Math.random() * 15 + 8;
      this.speedX = Math.random() * 10 - 5;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 10 - 5;
      this.opacity = 1;
      this.shape = Math.random() > 0.5 ? 'rect' : 'heart';
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.speedY -= 0.2; 
      this.rotation += this.rotationSpeed;
      this.opacity -= 0.008;

      if (this.y < -50 || this.opacity <= 0) {
        return false;
      }
      return true;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation * Math.PI / 180);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;

      if (this.shape === 'heart') {
        this.drawHeart(ctx, this.size);
      } else {
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
      }

      ctx.restore();
    }

    drawHeart(ctx, size) {
      const x = 0;
      const y = 0;
      ctx.beginPath();
      ctx.moveTo(x, y + size / 4);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size / 4);
      ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size * 0.7, x, y + size);
      ctx.bezierCurveTo(x, y + size * 0.7, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 4);
      ctx.fill();
    }
  }

  
  for (let i = 0; i < 300; i++) {
    setTimeout(() => {
      particles.push(new Confetti());
    }, i * 5);
  }

 
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].draw();
      if (!particles[i].update()) {
        particles.splice(i, 1);
      }
    }

    if (particles.length > 0) {
      requestAnimationFrame(animate);
    } else {
      canvas.width = 0;
      canvas.height = 0;
    }
  }

  animate();
}

function initParticles() {
  const container = elements.particlesContainer;
  if (!container) return;

  setInterval(() => {
    createParticle(container);
  }, 300);
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';

  const size = Math.random() * 8 + 4;
  const startX = Math.random() * window.innerWidth;
  const duration = Math.random() * 10 + 10;
  const color = CONFIG.heartColors[Math.floor(Math.random() * CONFIG.heartColors.length)];

  
  if (Math.random() > 0.6) {
    particle.innerHTML = '&#10084;';
    particle.style.fontSize = size * 2 + 'px';
  } else {
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
  }

  particle.style.left = startX + 'px';
  particle.style.bottom = '0';
  particle.style.backgroundColor = color;
  particle.style.animationDuration = duration + 's';

  container.appendChild(particle);

  
  setTimeout(() => {
    particle.remove();
  }, duration * 1000);
}

function initCursorTrail() {
  let lastX = 0;
  let lastY = 0;

  document.addEventListener('mousemove', (e) => {
    const distance = Math.sqrt(Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2));

    if (distance > 50) {
      createCursorHeart(e.clientX, e.clientY);
      lastX = e.clientX;
      lastY = e.clientY;
    }
  });
}

function createCursorHeart(x, y) {
  if (!elements.cursorTrail) return;

  const heart = document.createElement('div');
  heart.className = 'cursor-heart';
  heart.innerHTML = '&#10084;';
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  elements.cursorTrail.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
}

function initClickHearts() {
  document.addEventListener('click', (e) => {
    
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.closest('button')) {
      return;
    }

    createClickHearts(e.clientX, e.clientY);
  });
}

function createClickHearts(x, y) {
  if (!elements.cursorTrail) return;

  for (let i = 0; i < 5; i++) {
    const heart = document.createElement('div');
    heart.className = 'cursor-heart';
    heart.innerHTML = '&#10084;';

    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;

    heart.style.left = x + offsetX + 'px';
    heart.style.top = y + offsetY + 'px';

    elements.cursorTrail.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}

function initCountdown() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const now = new Date();
  const diff = CONFIG.birthday - now;

  if (diff <= 0) {
  
    if (elements.countdown.days) {
      elements.countdown.days.textContent = '00';
      elements.countdown.hours.textContent = '00';
      elements.countdown.minutes.textContent = '00';
      elements.countdown.seconds.textContent = '00';
    }
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (elements.countdown.days) {
    elements.countdown.days.textContent = String(days).padStart(2, '0');
    elements.countdown.hours.textContent = String(hours).padStart(2, '0');
    elements.countdown.minutes.textContent = String(minutes).padStart(2, '0');
    elements.countdown.seconds.textContent = String(seconds).padStart(2, '0');
  }
}

function initScrollAnimations() {

  const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay * 200);
      }
    });
  }, { threshold: 0.2 });

  elements.letterParagraphs.forEach(para => {
    letterObserver.observe(para);
  });

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  elements.timelineItems.forEach(item => {
    timelineObserver.observe(item);
  });

  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach(el => {
    fadeObserver.observe(el);
  });
}

let currentGalleryIndex = 0;
let galleryItems = [];

function initGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = '';


  CONFIG.galleryMedia.forEach((media, index) => {
    const item = createGalleryItem(media, index);
    galleryGrid.appendChild(item);
  });

 
  elements.galleryItems = document.querySelectorAll('.gallery-item');

  
  initLightbox();
}

function createGalleryItem(media, index) {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  if (media.size === 'large') item.classList.add('large');
  if (media.size === 'tall') item.classList.add('tall');
  item.dataset.type = media.type;
  item.dataset.index = index;

  if (media.type === 'image') {
    item.innerHTML = `
      <img src="${media.src}" alt="${media.caption}" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-caption">${media.caption}</span>
      </div>
    `;
  } else if (media.type === 'video') {
    item.innerHTML = `
      <video src="${media.src}" muted loop playsinline></video>
      <div class="gallery-play-icon">&#9658;</div>
      <div class="gallery-overlay">
        <span class="gallery-caption">${media.caption}</span>
      </div>
    `;

    
    const video = item.querySelector('video');
    item.addEventListener('mouseenter', () => video.play());
    item.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  }

  
  const img = item.querySelector('img');
  if (img) {
    img.onerror = () => {
      item.innerHTML = `
        <div class="gallery-placeholder">
          <span class="placeholder-icon">&#128247;</span>
          <span>Image not found</span>
          <span style="font-size: 0.8rem; opacity: 0.7;">${media.src}</span>
        </div>
      `;
    };
  }

  return item;
}

function initLightbox() {
  galleryItems = Array.from(elements.galleryItems);

  // Open lightbox on gallery click
  elements.galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentGalleryIndex = index;
      openLightbox(item);
    });
  });

  // Close lightbox
  if (elements.lightboxClose) {
    elements.lightboxClose.addEventListener('click', closeLightbox);
  }

  if (elements.lightbox) {
    elements.lightbox.addEventListener('click', (e) => {
      if (e.target === elements.lightbox) {
        closeLightbox();
      }
    });
  }

  // Navigation
  if (elements.lightboxPrev) {
    elements.lightboxPrev.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
      openLightbox(galleryItems[currentGalleryIndex]);
    });
  }

  if (elements.lightboxNext) {
    elements.lightboxNext.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
      openLightbox(galleryItems[currentGalleryIndex]);
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!elements.lightbox || !elements.lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && elements.lightboxPrev) elements.lightboxPrev.click();
    if (e.key === 'ArrowRight' && elements.lightboxNext) elements.lightboxNext.click();
  });
}

function openLightbox(item) {
  if (!elements.lightbox || !elements.lightboxContent) return;

  elements.lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';

  const type = item.dataset.type;
  const index = parseInt(item.dataset.index);
  const media = CONFIG.galleryMedia[index];

  if (type === 'image') {
    const img = item.querySelector('img');
    if (img) {
      elements.lightboxContent.innerHTML = `
        <img src="${media.src}" alt="${media.caption}" style="max-width: 90vw; max-height: 90vh; border-radius: 15px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
        <p style="color: white; text-align: center; margin-top: 1rem; font-family: 'Cormorant Garamond', serif; font-size: 1.3rem;">${media.caption}</p>
      `;
    } else {
      elements.lightboxContent.innerHTML = `
        <div class="lightbox-placeholder">
          <span class="placeholder-icon">&#128247;</span>
          <span>Image not available</span>
        </div>
      `;
    }
  } else if (type === 'video') {
    elements.lightboxContent.innerHTML = `
      <video src="${media.src}" controls autoplay style="max-width: 90vw; max-height: 85vh; border-radius: 15px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);"></video>
      <p style="color: white; text-align: center; margin-top: 1rem; font-family: 'Cormorant Garamond', serif; font-size: 1.3rem;">${media.caption}</p>
    `;
  }
}

function closeLightbox() {
  if (!elements.lightbox) return;
  elements.lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// =============================================
// HEART BURST BUTTON
// =============================================
function initHeartBurst() {
  if (!elements.heartBurstBtn) return;

  elements.heartBurstBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    createHeartBurst(e.clientX, e.clientY);
  });
}

function createHeartBurst(x, y) {
  const heartCount = 30;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.className = 'burst-heart-particle';
    heart.innerHTML = '&#10084;';

    const angle = (i / heartCount) * 360;
    const distance = 100 + Math.random() * 100;
    const tx = Math.cos(angle * Math.PI / 180) * distance;
    const ty = Math.sin(angle * Math.PI / 180) * distance;

    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.setProperty('--tx', tx + 'px');
    heart.style.setProperty('--ty', ty + 'px');
    heart.style.color = CONFIG.heartColors[Math.floor(Math.random() * CONFIG.heartColors.length)];

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}

// =============================================
// FLOATING LOVE NOTES
// =============================================
const loveNotes = [
  "You're amazing!",
  "Stay beautiful",
  "Keep smiling",
  "You're special",
  "Forever grateful",
  "Best wishes",
  "Have a wonderful day!",
  "You deserve the world"
];

function initLoveNotes() {
  setInterval(() => {
    if (Math.random() > 0.7) {
      createLoveNote();
    }
  }, 3000);
}

function createLoveNote() {
  if (!elements.loveNotes) return;

  const note = document.createElement('div');
  note.className = 'love-note';
  note.textContent = loveNotes[Math.floor(Math.random() * loveNotes.length)];

  note.style.left = Math.random() * 80 + 10 + '%';
  note.style.animationDelay = Math.random() * 2 + 's';

  elements.loveNotes.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 10000);
}
let bgMusic;
let isPlaying = false;

function initMusic() {
    bgMusic = document.getElementById("bgMusic");

    if (bgMusic) {
        bgMusic.volume = 0.25;
    }

    if (elements.musicToggle) {
        elements.musicToggle.addEventListener("click", toggleMusic);
    }
}

function toggleMusic() {

    if (!bgMusic) return;

    if (isPlaying) {
        bgMusic.pause();
        elements.musicToggle.classList.remove("playing");
    } else {
        bgMusic.play();
        elements.musicToggle.classList.add("playing");
    }

    isPlaying = !isPlaying;
}
function initLockParticles() {
  const container = document.querySelector('.lock-particles');
  if (!container) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: rgba(255, 182, 193, ${Math.random() * 0.5 + 0.2});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: sparkle ${Math.random() * 3 + 2}s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
    `;
    container.appendChild(particle);
  }

  // Add sparkle animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes sparkle {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.5); }
    }
  `;
  document.head.appendChild(style);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// =============================================
// INITIALIZE ALL
// =============================================
function initAllAnimations() {
  initParticles();
  initCursorTrail();
  initClickHearts();
  initCountdown();
  initScrollAnimations();
  initGallery();
  initHeartBurst();
  initLoveNotes();
  initSmoothScroll();
}

// =============================================
// START APPLICATION
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  initElements();
  initLockParticles();
  initPasswordLock();
});
