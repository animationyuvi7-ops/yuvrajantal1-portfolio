/* ==========================================================================
   MINIMALIST EDITORIAL PORTFOLIO — APPLICATION LOGIC
   ========================================================================== */

const siteData = {
  hero: {
    subtitle: "Currently working with clients as a Level 1 Seller on Fiverr while documenting my journey on youtube."
  },

  currently: [
    "Editing Videos for clients",
    "Creating Content on YouTube",
    "Building Products with AI",
    "Doing BA (English)"
  ],

  services: {
    shortForm: [
      {
        id: "sf-1",
        title: "High-Hook Viral Podcast Reel",
        retention: "88% Retention",
        views: "1.4M Views",
        hue: 200
      },
      {
        id: "sf-2",
        title: "Founder Storytelling Short",
        retention: "92% Retention",
        views: "890K Views",
        hue: 215
      },
      {
        id: "sf-3",
        title: "Tech Explainer Vertical Edit",
        retention: "86% Retention",
        views: "2.1M Views",
        hue: 195
      }
    ],

    youtubeInformative: [
      {
        id: "yt-1",
        title: "How AI Models Actually Process Language",
        duration: "10:45",
        description: "Deep dive informative video featuring custom animated infographics, kinetic typography, and structured pacing.",
        tags: ["Visual Explainer", "Infographics", "Kinetic Typography"],
        hue: 210
      },
      {
        id: "yt-2",
        title: "The Architecture of High-Scale Web Apps",
        duration: "08:20",
        description: "Educational explainer video deconstructing complex system architecture into clear visual diagrams.",
        tags: ["System Design", "Motion Graphics", "Pacing"],
        hue: 190
      },
      {
        id: "yt-3",
        title: "Productivity Systems for Creators & Engineers",
        duration: "12:15",
        description: "Engaging video edit combining A-roll talking head with dynamic B-roll cuts and acoustic sound design.",
        tags: ["Color Science", "Sound Design", "Story Structure"],
        hue: 220
      }
    ]
  },

  contact: {
    email: "animationyuvi7@gmail.com",
    socials: [
      { name: "YOUTUBE", link: "https://youtube.com/@yuvrajantal?si=SF4PmvPqtsV4Mw7I", arrow: "↗" },
      { name: "FIVERR", link: "https://www.fiverr.com/s/432WP11", arrow: "↗" }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initHeroTypewriter();
  initWorkSectionScrollObserver();
  initCustomVideoPlayer();
  renderCurrentlyList();
  initScrollFadeSectionsObserver();
  initFooterTypewriter();
  renderSocialTable();
});

/* --------------------------------------------------------------------------
   1. HERO TYPEWRITER & STAGGERED REVEAL ANIMATION (CONTINUOUS REVERSE LOOP)
   -------------------------------------------------------------------------- */
function initHeroTypewriter() {
  const target = document.getElementById('typewriter-target');
  const cursor = document.getElementById('typewriter-cursor');
  const subtitle = document.getElementById('hero-subtitle');
  const ctaGroup = document.getElementById('hero-cta-group');
  if (!target) return;

  const textToType = "YUVRAJ";
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    target.textContent = textToType;
    if (subtitle) subtitle.classList.add('visible');
    if (ctaGroup) ctaGroup.classList.add('visible');
    return;
  }

  let isDeleting = false;
  let charIndex = 0;
  let revealedSubElements = false;

  function typeStep() {
    target.textContent = textToType.substring(0, charIndex);

    let nextDelay = isDeleting ? 75 : 125;

    if (!isDeleting && charIndex === textToType.length) {
      // Full text typed — pause for 2.4 seconds before backspacing
      nextDelay = 2400;
      isDeleting = true;

      // Reveal subtitle & buttons on first full render
      if (!revealedSubElements) {
        revealedSubElements = true;
        if (subtitle) subtitle.classList.add('visible');
        setTimeout(() => {
          if (ctaGroup) ctaGroup.classList.add('visible');
        }, 350);
      }
    } else if (isDeleting && charIndex === 0) {
      // Full text deleted — pause for 600ms before typing again
      nextDelay = 600;
      isDeleting = false;
    }

    if (isDeleting && charIndex > 0) {
      charIndex--;
    } else if (!isDeleting && charIndex < textToType.length) {
      charIndex++;
    }

    setTimeout(typeStep, nextDelay);
  }

  // Initial startup delay
  setTimeout(typeStep, 400);
}

/* --------------------------------------------------------------------------
   2. WORK SECTION SCROLL REVEAL OBSERVER
   -------------------------------------------------------------------------- */
function initWorkSectionScrollObserver() {
  const revealElements = document.querySelectorAll('.reveal-item');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   3. CUSTOM MINIMAL VIDEO PLAYER CONTROLLER
   -------------------------------------------------------------------------- */
function initCustomVideoPlayer() {
  const playerContainer = document.getElementById('work-video-player');
  const video = document.getElementById('project-video-element');
  const playOverlay = document.getElementById('custom-play-overlay');
  const playPauseBtn = document.getElementById('ctrl-play-btn');
  const iconPlay = playPauseBtn?.querySelector('.icon-play');
  const iconPause = playPauseBtn?.querySelector('.icon-pause');
  const muteBtn = document.getElementById('ctrl-mute-btn');
  const fullscreenBtn = document.getElementById('ctrl-fullscreen-btn');
  const progressContainer = document.getElementById('video-progress-container');
  const progressFill = document.getElementById('video-progress-fill');
  const timeDisplay = document.getElementById('video-time-display');

  if (!video || !playerContainer) return;

  function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }

  function updatePlayState() {
    if (video.paused) {
      playerContainer.classList.remove('playing');
      playerContainer.classList.add('paused');
      if (iconPlay) iconPlay.style.display = 'block';
      if (iconPause) iconPause.style.display = 'none';
    } else {
      playerContainer.classList.add('playing');
      playerContainer.classList.remove('paused');
      if (iconPlay) iconPlay.style.display = 'none';
      if (iconPause) iconPause.style.display = 'block';
    }
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function updateProgress() {
    if (!video.duration) return;
    const percent = (video.currentTime / video.duration) * 100;
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (timeDisplay) {
      timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
    }
  }

  function setVideoProgress(e) {
    if (!video.duration || !progressContainer) return;
    const rect = progressContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  }

  // Event Listeners
  playOverlay?.addEventListener('click', togglePlay);
  playPauseBtn?.addEventListener('click', togglePlay);
  video.addEventListener('click', togglePlay);

  video.addEventListener('play', updatePlayState);
  video.addEventListener('pause', updatePlayState);
  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('loadedmetadata', updateProgress);

  muteBtn?.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.style.opacity = video.muted ? '0.5' : '1';
  });

  fullscreenBtn?.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      playerContainer.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen();
    }
  });

  let isScrubbing = false;
  progressContainer?.addEventListener('mousedown', (e) => {
    isScrubbing = true;
    setVideoProgress(e);
  });

  window.addEventListener('mousemove', (e) => {
    if (isScrubbing) setVideoProgress(e);
  });

  window.addEventListener('mouseup', () => {
    if (isScrubbing) isScrubbing = false;
  });
}

/* --------------------------------------------------------------------------
   2. RENDER CURRENTLY LIST (REFERENCE IMAGE 2)
   -------------------------------------------------------------------------- */
function renderCurrentlyList() {
  const container = document.getElementById('currently-list-container');
  if (!container) return;

  container.innerHTML = siteData.currently.map((item, index) => `
    <li class="currently-item" style="--item-index: ${index};">
      <span class="arrow">→</span>
      <span>${item}</span>
    </li>
  `).join('');
}

function initScrollFadeSectionsObserver() {
  const sections = document.querySelectorAll('#currently, #about, #contact');
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '-30px 0px -30px 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

/* --------------------------------------------------------------------------
   FOOTER CREATIVITY TYPEWRITER ANIMATION (CONTINUOUS REVERSE LOOP)
   -------------------------------------------------------------------------- */
function initFooterTypewriter() {
  const target = document.getElementById('footer-typewriter-text');
  if (!target) return;

  const textToType = "Enjoy with creativity";
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    target.textContent = textToType;
    return;
  }

  let isDeleting = false;
  let charIndex = 0;

  function typeStep() {
    target.textContent = textToType.substring(0, charIndex);

    let nextDelay = isDeleting ? 60 : 110;

    if (!isDeleting && charIndex === textToType.length) {
      // Full text typed -> pause for 2.2 seconds before deleting
      nextDelay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Fully deleted -> pause for 500ms before typing again
      nextDelay = 500;
      isDeleting = false;
    }

    if (isDeleting && charIndex > 0) {
      charIndex--;
    } else if (!isDeleting && charIndex < textToType.length) {
      charIndex++;
    }

    setTimeout(typeStep, nextDelay);
  }

  typeStep();
}

/* --------------------------------------------------------------------------
   3. RENDER SERVICES (SHORT FORM & YOUTUBE INFORMATIVE)
   -------------------------------------------------------------------------- */
function renderShortFormServices() {
  const container = document.getElementById('short-form-grid');
  if (!container) return;

  container.innerHTML = siteData.services.shortForm.map(item => `
    <article class="short-form-card" data-id="${item.id}">
      <div class="reel-aspect-frame">
        <canvas class="reel-canvas" data-hue="${item.hue}"></canvas>
        <span class="reel-badge">${item.retention}</span>
      </div>

      <h3 class="short-form-title">${item.title}</h3>
      <div class="short-form-meta">
        <span>${item.views}</span>
        <span>Preview →</span>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.reel-canvas').forEach(c => {
    drawCanvasThumbnail(c, parseInt(c.dataset.hue || '200'), true);
  });
}

function renderYouTubeServices() {
  const container = document.getElementById('youtube-grid');
  if (!container) return;

  container.innerHTML = siteData.services.youtubeInformative.map(item => `
    <article class="yt-card" data-id="${item.id}">
      <div class="yt-widescreen-frame">
        <canvas class="yt-canvas" data-hue="${item.hue}"></canvas>
        <span class="yt-duration-badge">${item.duration}</span>
      </div>

      <h3 class="yt-title">${item.title}</h3>
      <p class="yt-desc">${item.description}</p>

      <div class="yt-tags-list">
        ${item.tags.map(t => `<span class="yt-tag">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.yt-canvas').forEach(c => {
    drawCanvasThumbnail(c, parseInt(c.dataset.hue || '210'), false);
  });
}

function drawCanvasThumbnail(canvas, hue, isVertical) {
  const ctx = canvas.getContext('2d');
  canvas.width = isVertical ? 270 : 480;
  canvas.height = isVertical ? 480 : 270;

  ctx.fillStyle = `hsl(${hue}, 15%, 8%)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, `hsla(${hue}, 80%, 50%, 0.15)`);
  grad.addColorStop(1, 'transparent');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Playhead accent indicator
  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(15, canvas.height - 15, canvas.width - 30, 2);
}

/* --------------------------------------------------------------------------
   4. RENDER SOCIAL TABLE (REFERENCE IMAGE 3)
   -------------------------------------------------------------------------- */
function renderSocialTable() {
  const container = document.getElementById('social-table-container');
  if (!container) return;

  container.innerHTML = siteData.contact.socials.map(item => `
    <a href="${item.link}" target="_blank" rel="noopener" class="social-row-item">
      <span class="social-item-name">${item.name}</span>
      <span class="social-item-arrow">${item.arrow}</span>
    </a>
  `).join('');
}
