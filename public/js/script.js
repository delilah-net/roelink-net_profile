// PARALLAX //

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  const strength = 10;

  const offsetX = 50 + (x - 50) * (strength / 100);
  const offsetY = 50 + (y - 50) * (strength / 100);

  document.body.style.backgroundPosition = `${offsetX}% ${offsetY}%`;
});

// PARALLAX //

// WALLPAPER RANDOMIZER //

const wallpapers = [
    "/resources/backgrounds/greenfishes.png",
    "/resources/backgrounds/redweavebg.gif",
    "/resources/backgrounds/graybat.png",
    "/resources/backgrounds/bluecats.png",
    "/resources/backgrounds/redwater.gif",
    "/resources/backgrounds/greenflowers.png",
    "/resources/backgrounds/flowerz.png",
    "/resources/backgrounds/witchbg04.gif",
    "/resources/backgrounds/pinkbricks.gif",
    "/resources/backgrounds/pentagram.jpg",
    "/resources/backgrounds/fish.png",
    "/resources/backgrounds/tiles1.png",
    "/resources/backgrounds/bluefishes.png",
];

function randomizeWallpaper() {
    const last = sessionStorage.getItem('lastWallpaper');
    let choice;
    do {
        choice = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    } while (choice === last && wallpapers.length > 1);

    sessionStorage.setItem('lastWallpaper', choice);
    document.body.style.backgroundImage = `url("${choice}")`;
}

randomizeWallpaper();

const randomizeBtn = document.getElementById('randomizeWallpaperBtn');
if (randomizeBtn) {
    randomizeBtn.addEventListener('click', randomizeWallpaper);
}

// WALLPAPER RANDOMIZER //


/* TAB SWAP */
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const tabId = link.getAttribute('data-tab');
        
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        
        document.getElementById(tabId).style.display = 'block';
        
        document.querySelectorAll('.tab-link').forEach(l => {
            l.classList.remove('active');
        });
        
        link.classList.add('active');
    });
});
/* TAB SWAP */

async function loadUpdates() {
    const res = await fetch('/updates/updates.json');
    const data = await res.json();
    const container = document.getElementById('updates-container');
    
    container.innerHTML = [...data.updates].reverse().map(update => `
    <div class="window">
    <div class="title-bar">
        <div class="title-bar-text">${update.name}</div>
        <div class="title-bar-controls">
    <span class="update-level level-${update.level}">${update.level}</span>
    <img src="/resources/icons/${update.level.toLowerCase()}.ico" class="level-icon-img" alt="">
    ${update.icon ? `<img src="${update.icon}" class="update-icon update-custom-icon" alt="">` : ''}
</div>
    </div>
    <div class="window-body">
        <div class="update-date">Posted: ${update.date}</div>
        
        <div class="update-action-row">
    <button class="button update-toggle" data-id="${update.id}">View Update</button>
    <progress max="100" value="${update.progress}"></progress>
</div>
        </div>
        
        <div class="update-description" id="desc-${update.id}">
            <p>${update.description}</p>
        </div>
    </div>
</div>
`).join('');
    
    document.querySelectorAll('.update-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const desc = document.getElementById(`desc-${id}`);
            desc.classList.toggle('open');
        });
    });
}

loadUpdates();

/* BACK TO TOP */

document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* BACK TO TOP */

// MOODBOARD //

const moodboardImages = [
    "/resources/sections/moodboard/1.webp",
    "/resources/sections/moodboard/2.webp",
    "/resources/sections/moodboard/3.webp",
    "/resources/sections/moodboard/4.webp",
    "/resources/sections/moodboard/5.webp",
    "/resources/sections/moodboard/6.webp",
    "/resources/sections/moodboard/7.jpg",
    "/resources/sections/moodboard/8.jpg",
    "/resources/sections/moodboard/9.jpg",
    "/resources/sections/moodboard/10.jpg",
];

function loadMoodboard() {
    const grid = document.getElementById('moodboard-grid');
    if (!grid) return;
    
    grid.innerHTML = moodboardImages.map(src => `
        <div class="moodboard-item">
            <img src="${src}" alt="Moodboard image" loading="lazy">
        </div>
    `).join('');
}

loadMoodboard();

// MOODBOARD //

// IMAGE JS //

const personalartImages = [
    { src: "/art-section/drawings/fullbody.webp", name: "Fullbody" },
    { src: "/art-section/drawings/delilah2.webp", name: "Delilah" },
    { src: "/art-section/drawings/frutiger.webp", name: "Frutiger" },
    { src: "/art-section/drawings/mercedez.webp", name: "Mercedez Benz" },
    { src: "/art-section/drawings/heat.webp", name: "Que calor de mierda" },
    { src: "/art-section/drawings/valencina.webp", name: "Valencina" },
    { src: "/art-section/drawings/kromer.webp", name: "Kromer" },
    { src: "/art-section/drawings/fish-shop.webp", name: "Fish Shop" },
    { src: "/art-section/drawings/corteo.webp", name: "Corteo" },
    { src: "/art-section/drawings/corteomaw.webp", name: "Corteo (Maw)" },
    { src: "/art-section/drawings/chroma.webp", name: "Chromakopia" },
    { src: "/art-section/drawings/sketchessol.webp", name: "Sol badguy Sketches" },
    { src: "/art-section/drawings/yawn.webp", name: "Yawn" },
    { src: "/art-section/drawings/monstercan.webp", name: "Monster Can" },
    { src: "/art-section/drawings/dellhon-ref.webp", name: "Dellhon Ref" },
    { src: "/art-section/drawings/keychains.webp", name: "Keychains" },
    { src: "/art-section/drawings/sheep.gif", name: "Sheep" },
    { src: "/art-section/drawings/collagefura.webp", name: "Furakua Collage" },
    { src: "/art-section/drawings/joycorp.webp", name: "Joycorp" },
    { src: "/art-section/drawings/cross.webp", name: "Cross" },
    { src: "/art-section/drawings/sleepy.webp", name: "Sleepy" },
    { src: "/art-section/drawings/pridemonth.webp", name: "Pride Month" },
    { src: "/art-section/drawings/pallete.webp", name: "Palette" },
    { src: "/art-section/drawings/first.webp", name: "First" },
    { src: "/art-section/drawings/cardboard.webp", name: "Cardboard" },
];

function loadPersonalart() {
    const grid = document.getElementById('personalart-grid');
    if (!grid) return;

    grid.innerHTML = personalartImages.map(item => `
        <div class="personalart-item">
            <img src="${item.src}" alt="${item.name}" loading="lazy" decoding="async">
            <div class="art-caption">${item.name}</div>
        </div>
    `).join('');
}

loadPersonalart();

(function () {
    const grid          = document.getElementById('personalart-grid');
    if (!grid) return;

    const overlay      = document.getElementById('personalartModalOverlay');
    const modalImg      = document.getElementById('personalartModalImg');
    const viewport      = document.getElementById('personalartViewport');
    const closeBtn       = document.getElementById('personalartModalClose');
    const zoomInBtn      = document.getElementById('personalartZoomIn');
    const zoomOutBtn     = document.getElementById('personalartZoomOut');
    const zoomResetBtn   = document.getElementById('personalartZoomReset');
    const zoomLabel      = document.getElementById('personalartZoomLabel');

    const MIN_ZOOM = 1, MAX_ZOOM = 4, STEP = 0.25;
    let zoom = 1, panX = 0, panY = 0;
    let isDragging = false, startX = 0, startY = 0, startPanX = 0, startPanY = 0;

    function applyTransform() {
        modalImg.style.transform =
            `translate(-50%, -50%) translate(${panX}px, ${panY}px) scale(${zoom})`;
        zoomLabel.textContent = Math.round(zoom * 100) + '%';
        viewport.style.cursor = zoom > MIN_ZOOM ? 'grab' : 'default';
    }

    function setZoom(next) {
        zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
        if (zoom === MIN_ZOOM) { panX = 0; panY = 0; }
        applyTransform();
    }

    function openModal(src, alt) {
        zoom = 1; panX = 0; panY = 0;
        modalImg.src = src;
        modalImg.alt = alt || '';
        applyTransform();
        overlay.classList.add('open');
    }

    function closeModal() {
        overlay.classList.remove('open');
        modalImg.src = '';
    }

    grid.addEventListener('click', (e) => {
        const img = e.target.closest('.personalart-item img');
        if (img) openModal(img.currentSrc || img.src, img.alt);
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        setZoom(zoom + (e.deltaY > 0 ? -STEP : STEP));
    }, { passive: false });

    zoomInBtn.addEventListener('click', () => setZoom(zoom + STEP));
    zoomOutBtn.addEventListener('click', () => setZoom(zoom - STEP));
    zoomResetBtn.addEventListener('click', () => setZoom(1));

    viewport.addEventListener('pointerdown', (e) => {
        if (zoom <= MIN_ZOOM) return;
        isDragging = true;
        viewport.classList.add('dragging');
        startX = e.clientX; startY = e.clientY;
        startPanX = panX; startPanY = panY;
        viewport.setPointerCapture(e.pointerId);
    });

    viewport.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        panX = startPanX + (e.clientX - startX);
        panY = startPanY + (e.clientY - startY);
        applyTransform();
    });

    ['pointerup', 'pointercancel'].forEach(evt =>
        viewport.addEventListener(evt, () => {
            isDragging = false;
            viewport.classList.remove('dragging');
        })
    );
})();

// IMAGE JS //

// COMM JS //

const commImages = [
    { src: "/art-section/comms/pizz.webp", name: "Pizz" },
    { src: "/art-section/comms/monarch.webp", name: "Monarch" },
    { src: "/art-section/comms/furarob.webp", name: "Fura-rob" },
    { src: "/art-section/comms/firewolfu.webp", name: "Firewolfu" },
    { src: "/art-section/comms/burgers.webp", name: "Bungers" },
    { src: "/art-section/comms/manitwo.webp", name: "Manitwo" },
];

function loadComm() {
    const grid = document.getElementById('comm-grid');
    if (!grid) return;

    grid.innerHTML = commImages.map(item => `
        <div class="comm-item">
            <img src="${item.src}" alt="${item.name}" loading="lazy" decoding="async">
            <div class="art-caption">${item.name}</div>
        </div>
    `).join('');
}

loadComm();

(function () {
    const grid          = document.getElementById('comm-grid');
    if (!grid) return;

    const overlay      = document.getElementById('commModalOverlay');
    const modalImg      = document.getElementById('commModalImg');
    const viewport      = document.getElementById('commViewport');
    const closeBtn       = document.getElementById('commModalClose');
    const zoomInBtn      = document.getElementById('commZoomIn');
    const zoomOutBtn     = document.getElementById('commZoomOut');
    const zoomResetBtn   = document.getElementById('commZoomReset');
    const zoomLabel      = document.getElementById('commZoomLabel');

    const MIN_ZOOM = 1, MAX_ZOOM = 4, STEP = 0.25;
    let zoom = 1, panX = 0, panY = 0;
    let isDragging = false, startX = 0, startY = 0, startPanX = 0, startPanY = 0;

    function applyTransform() {
        modalImg.style.transform =
            `translate(-50%, -50%) translate(${panX}px, ${panY}px) scale(${zoom})`;
        zoomLabel.textContent = Math.round(zoom * 100) + '%';
        viewport.style.cursor = zoom > MIN_ZOOM ? 'grab' : 'default';
    }

    function setZoom(next) {
        zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
        if (zoom === MIN_ZOOM) { panX = 0; panY = 0; }
        applyTransform();
    }

    function openModal(src, alt) {
        zoom = 1; panX = 0; panY = 0;
        modalImg.src = src;
        modalImg.alt = alt || '';
        applyTransform();
        overlay.classList.add('open');
    }

    function closeModal() {
        overlay.classList.remove('open');
        modalImg.src = '';
    }

    grid.addEventListener('click', (e) => {
        const img = e.target.closest('.comm-item img');
        if (img) openModal(img.currentSrc || img.src, img.alt);
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        setZoom(zoom + (e.deltaY > 0 ? -STEP : STEP));
    }, { passive: false });

    zoomInBtn.addEventListener('click', () => setZoom(zoom + STEP));
    zoomOutBtn.addEventListener('click', () => setZoom(zoom - STEP));
    zoomResetBtn.addEventListener('click', () => setZoom(1));

    viewport.addEventListener('pointerdown', (e) => {
        if (zoom <= MIN_ZOOM) return;
        isDragging = true;
        viewport.classList.add('dragging');
        startX = e.clientX; startY = e.clientY;
        startPanX = panX; startPanY = panY;
        viewport.setPointerCapture(e.pointerId);
    });

    viewport.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        panX = startPanX + (e.clientX - startX);
        panY = startPanY + (e.clientY - startY);
        applyTransform();
    });

    ['pointerup', 'pointercancel'].forEach(evt =>
        viewport.addEventListener(evt, () => {
            isDragging = false;
            viewport.classList.remove('dragging');
        })
    );
})();

// COMM JS //

// FANARTS //

const fanartImages = [
    { src: "/art-section/fanarts/ar4.webp", name: "arsyle1" },
    { src: "/art-section/fanarts/zwei.webp", name: "Vyzwei" },
    { src: "/art-section/fanarts/ar3.webp", name: "arsyle1" },
    { src: "/art-section/fanarts/ar2.png", name: "arsyle1" },
    { src: "/art-section/fanarts/ar1.webp", name: "arsyle1" },
    { src: "/art-section/fanarts/rikard.png", name: "Rikard" },
    { src: "/art-section/fanarts/kin3.png", name: "Kinaeyan" },
    { src: "/art-section/fanarts/jaxe3.png", name: "Jaxe" },
    { src: "/art-section/fanarts/jaxe2.webp", name: "Jaxe" },
    { src: "/art-section/fanarts/jaxe1.webp", name: "Jaxe" },
    { src: "/art-section/fanarts/rage.webp", name: "Rage" },
    { src: "/art-section/fanarts/yoshi2.webp", name: "Yoshi" },
    { src: "/art-section/fanarts/mon.webp", name: "Name here" },
    { src: "/art-section/fanarts/sol.webp", name: "Sol" },
    { src: "/art-section/fanarts/yoshiref.webp", name: "Yoshi" },
    { src: "/art-section/fanarts/idk.webp", name: "[UNKNOWN]" },
    { src: "/art-section/fanarts/maca.webp", name: "Maca :3" },
    { src: "/art-section/fanarts/kinref.webp", name: "Kinaeyan" },
    { src: "/art-section/fanarts/banner.webp", name: "eddrichard" },
    { src: "/art-section/fanarts/kin2.webp", name: "Kinaeyan" },
];

function loadFanart() {
    const grid = document.getElementById('fanart-grid');
    if (!grid) return;

    grid.innerHTML = fanartImages.map(item => `
        <div class="fanart-item">
            <img src="${item.src}" alt="${item.name}" loading="lazy" decoding="async">
            <div class="art-caption">${item.name}</div>
        </div>
    `).join('');
}

loadFanart();

(function () {
    const grid          = document.getElementById('fanart-grid');
    if (!grid) return;

    const overlay      = document.getElementById('fanartModalOverlay');
    const modalImg      = document.getElementById('fanartModalImg');
    const viewport      = document.getElementById('fanartViewport');
    const closeBtn       = document.getElementById('fanartModalClose');
    const zoomInBtn      = document.getElementById('fanartZoomIn');
    const zoomOutBtn     = document.getElementById('fanartZoomOut');
    const zoomResetBtn   = document.getElementById('fanartZoomReset');
    const zoomLabel      = document.getElementById('fanartZoomLabel');

    const MIN_ZOOM = 1, MAX_ZOOM = 4, STEP = 0.25;
    let zoom = 1, panX = 0, panY = 0;
    let isDragging = false, startX = 0, startY = 0, startPanX = 0, startPanY = 0;

    function applyTransform() {
        modalImg.style.transform =
            `translate(-50%, -50%) translate(${panX}px, ${panY}px) scale(${zoom})`;
        zoomLabel.textContent = Math.round(zoom * 100) + '%';
        viewport.style.cursor = zoom > MIN_ZOOM ? 'grab' : 'default';
    }

    function setZoom(next) {
        zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
        if (zoom === MIN_ZOOM) { panX = 0; panY = 0; }
        applyTransform();
    }

    function openModal(src, alt) {
        zoom = 1; panX = 0; panY = 0;
        modalImg.src = src;
        modalImg.alt = alt || '';
        applyTransform();
        overlay.classList.add('open');
    }

    function closeModal() {
        overlay.classList.remove('open');
        modalImg.src = '';
    }

    grid.addEventListener('click', (e) => {
        const img = e.target.closest('.fanart-item img');
        if (img) openModal(img.currentSrc || img.src, img.alt);
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        setZoom(zoom + (e.deltaY > 0 ? -STEP : STEP));
    }, { passive: false });

    zoomInBtn.addEventListener('click', () => setZoom(zoom + STEP));
    zoomOutBtn.addEventListener('click', () => setZoom(zoom - STEP));
    zoomResetBtn.addEventListener('click', () => setZoom(1));

    viewport.addEventListener('pointerdown', (e) => {
        if (zoom <= MIN_ZOOM) return;
        isDragging = true;
        viewport.classList.add('dragging');
        startX = e.clientX; startY = e.clientY;
        startPanX = panX; startPanY = panY;
        viewport.setPointerCapture(e.pointerId);
    });

    viewport.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        panX = startPanX + (e.clientX - startX);
        panY = startPanY + (e.clientY - startY);
        applyTransform();
    });

    ['pointerup', 'pointercancel'].forEach(evt =>
        viewport.addEventListener(evt, () => {
            isDragging = false;
            viewport.classList.remove('dragging');
        })
    );
})();

// FANARTS //

// 3D MODELS //

const gunmodelsCategories = {
    "Ak74-U [Custom Parts] [Interior]": [
        { src: "/art-section/models/aks-74u/aku6.webp", name: "Ak74u" },
        { src: "/art-section/models/aks-74u/aku7.webp", name: "Ak74u" },
        { src: "/art-section/models/aks-74u/aku12.gif", name: "Ak74u" },
        { src: "/art-section/models/aks-74u/aku10.webp", name: "Ak74u" },
        { src: "/art-section/models/aks-74u/aku1.webp", name: "Ak74u" },
        { src: "/art-section/models/aks-74u/aku2.webp", name: "Ak74u" },
        { src: "/art-section/models/aks-74u/aku3.webp", name: "Ak74u" },
        { src: "/art-section/models/aks-74u/aku4.webp", name: "Ak74u" },
        { src: "/art-section/models/aks-74u/aku5.webp", name: "Ak74u" },
        { src: "/art-section/models/aks-74u/aku8.webp", name: "Ak74u" },
        { src: "/art-section/models/aks-74u/aku9.webp", name: "Ak74u" },
        { src: "/art-section/models/aks-74u/aku11.webp", name: "Ak74u" },
    ],
    "Sturmgewehr 44 [Interior]": [
        { src: "/art-section/models/stg44/stg8.webp", name: "Stg44" },
        { src: "/art-section/models/stg44/stg1.webp", name: "Stg44" },
        { src: "/art-section/models/stg44/stg3.webp", name: "Stg44" },
        { src: "/art-section/models/stg44/stg2.webp", name: "Stg44" },
        { src: "/art-section/models/stg44/stg4.webp", name: "Stg44" },
        { src: "/art-section/models/stg44/stg5.webp", name: "Stg44" },
        { src: "/art-section/models/stg44/stg6.webp", name: "Stg44" },
        { src: "/art-section/models/stg44/stg7.webp", name: "Stg44" },
    ],
    "Spectre M4 [Interior]": [
        { src: "/art-section/models/spectre-m4/spectre1.webp", name: "Spectre M4" },
        { src: "/art-section/models/spectre-m4/spectre2.webp", name: "Spectre M4" },
        { src: "/art-section/models/spectre-m4/spectre6.webp", name: "Spectre M4" },
        { src: "/art-section/models/spectre-m4/spectre4.webp", name: "Spectre M4" },
        { src: "/art-section/models/spectre-m4/spectre3.webp", name: "Spectre M4" },
        { src: "/art-section/models/spectre-m4/spectre7.webp", name: "Spectre M4" },
        { src: "/art-section/models/spectre-m4/spectre8.webp", name: "Spectre M4" },
        { src: "/art-section/models/spectre-m4/spectre5.webp", name: "Spectre M4" },
    ],
    "Desert Eagle [Interior]": [
        { src: "/art-section/models/desert/deagle1.webp", name: "Deagle" },
        { src: "/art-section/models/desert/deagle3.webp", name: "Deagle" },
        { src: "/art-section/models/desert/deagle6.webp", name: "Deagle" },
        { src: "/art-section/models/desert/deagle7.webp", name: "Deagle" },
        { src: "/art-section/models/desert/deagle4.webp", name: "Deagle" },
        { src: "/art-section/models/desert/deagle5.webp", name: "Deagle" },
        { src: "/art-section/models/desert/deagle2.webp", name: "Deagle" },
    ],
    "Accuracy International Arctic Warfare [AWP]": [
        { src: "/art-section/models/awp/awp1.webp", name: "AWP" },
        { src: "/art-section/models/awp/awp3.webp", name: "AWP" },
        { src: "/art-section/models/awp/awp2.webp", name: "AWP" },
        { src: "/art-section/models/awp/awp4.webp", name: "AWP" },
        { src: "/art-section/models/awp/awp5.webp", name: "AWP" },
        { src: "/art-section/models/awp/awp6.webp", name: "AWP" },
    ],
    "Landstad Revolver [Interior]": [
        { src: "/art-section/models/landstad/landstad1.webp", name: "Rev" },
        { src: "/art-section/models/landstad/landstad2.webp", name: "Rev" },
        { src: "/art-section/models/landstad/landstad3.webp", name: "Rev" },
        { src: "/art-section/models/landstad/landstad5.webp", name: "Rev" },
        { src: "/art-section/models/landstad/landstad6.webp", name: "Rev" },
        { src: "/art-section/models/landstad/landstad7.webp", name: "Rev" },
        { src: "/art-section/models/landstad/landstad8.webp", name: "Rev" },
    ],
    "Mac-10": [
        { src: "/art-section/models/mac10/mac1.webp", name: "Mac10" },
        { src: "/art-section/models/mac10/mac3.webp", name: "Mac10" },
        { src: "/art-section/models/mac10/mac4.webp", name: "Mac10" },
        { src: "/art-section/models/mac10/mac5.webp", name: "Mac10" },
        { src: "/art-section/models/mac10/mac6.webp", name: "Mac10" },
        { src: "/art-section/models/mac10/mac2.webp", name: "Mac10" },
    ],
    "Glock 18": [
        { src: "/art-section/models/glock/glock1.webp", name: "Glock" },
        { src: "/art-section/models/glock/glock2.webp", name: "Glock" },
        { src: "/art-section/models/glock/glock3.webp", name: "Glock" },
        { src: "/art-section/models/glock/glock4.webp", name: "Glock" },
        { src: "/art-section/models/glock/glock5.webp", name: "Glock" },
    ],
    "C4": [
        { src: "/art-section/models/c4/c4.webp", name: "C4" },
        { src: "/art-section/models/c4/c44.webp", name: "C4" },
        { src: "/art-section/models/c4/c43.webp", name: "C4" },
        { src: "/art-section/models/c4/c42.webp", name: "C4" },
        { src: "/art-section/models/c4/c45.webp", name: "C4" },
    ],
    "Ak-47 [Interior]": [
        { src: "/art-section/models/ak47/ak47-5.webp", name: "AK47" },
        { src: "/art-section/models/ak47/ak47-1.webp", name: "AK47" },
        { src: "/art-section/models/ak47/ak47-2.webp", name: "AK47" },
        { src: "/art-section/models/ak47/ak47-3.webp", name: "AK47" },
        { src: "/art-section/models/ak47/ak47-4.webp", name: "AK47" },
    ],
    "Beretta 93R": [
        { src: "/art-section/models/93r/93r4.webp", name: "Beretta" },
        { src: "/art-section/models/93r/93r3.webp", name: "Beretta" },
        { src: "/art-section/models/93r/93r1.webp", name: "Beretta" },
    ],
    "XM 250 [Interior]": [
        { src: "/art-section/models/xm250/xm6.webp", name: "XM250" },
        { src: "/art-section/models/xm250/xm5.webp", name: "XM250" },
        { src: "/art-section/models/xm250/xm4.webp", name: "XM250" },
        { src: "/art-section/models/xm250/xm3.webp", name: "XM250" },
        { src: "/art-section/models/xm250/xm2.webp", name: "XM250" },
        { src: "/art-section/models/xm250/xm1.webp", name: "XM250" },
    ],
    "Mag 7": [
        { src: "/art-section/models/mag7/mag6.webp", name: "Mag7" },
        { src: "/art-section/models/mag7/mag5.webp", name: "Mag7" },
        { src: "/art-section/models/mag7/mag3.webp", name: "Mag7" },
        { src: "/art-section/models/mag7/mag2.webp", name: "Mag7" },
        { src: "/art-section/models/mag7/mag1.webp", name: "Mag7" },
        { src: "/art-section/models/mag7/mag4.webp", name: "Mag7" },
    ],
    "Tar 21": [
        { src: "/art-section/models/tar21/tar2.webp", name: "Tar21" },
        { src: "/art-section/models/tar21/tar1.webp", name: "Tar21" },
        { src: "/art-section/models/tar21/tar3.webp", name: "Tar21" },
        { src: "/art-section/models/tar21/tar5.webp", name: "Tar21" },
        { src: "/art-section/models/tar21/tar4.webp", name: "Tar21" },
    ],
    "MCX Rifle": [
        { src: "/art-section/models/mcx/mcx1.webp", name: "MCX" },
        { src: "/art-section/models/mcx/mcx2.webp", name: "MCX" },
        { src: "/art-section/models/mcx/mcx4.webp", name: "MCX" },
        { src: "/art-section/models/mcx/mcx3.webp", name: "MCX" },
    ],
    "Famas G1": [
        { src: "/art-section/models/famas/famas4.webp", name: "FamasG1" },
        { src: "/art-section/models/famas/famas1.webp", name: "FamasG1" },
        { src: "/art-section/models/famas/famas2.webp", name: "FamasG1" },
        { src: "/art-section/models/famas/famas3.webp", name: "FamasG1" },
    ],
    "Uncategorized": [
        { src: "/art-section/models/uncategorized/smoke.webp", name: "Smoke" },
        { src: "/art-section/models/uncategorized/smoke2.webp", name: "Smoke" },
        { src: "/art-section/models/uncategorized/flashbang1.webp", name: "Flashbang" },
        { src: "/art-section/models/uncategorized/shotty.webp", name: "Shorty" },
        { src: "/art-section/models/uncategorized/scope1.webp", name: "Scope" },
        { src: "/art-section/models/uncategorized/scope2.webp", name: "Scope" },
        { src: "/art-section/models/uncategorized/scope3.webp", name: "Scope" },
        { src: "/art-section/models/uncategorized/scope4.webp", name: "Scope" },
        { src: "/art-section/models/uncategorized/mp7.webp", name: "Mp7" },
        { src: "/art-section/models/uncategorized/mp72.webp", name: "Mp7" },
        { src: "/art-section/models/uncategorized/molotov.webp", name: "Molotov" },
        { src: "/art-section/models/uncategorized/butterfly.webp", name: "Butterfly Knife" },
    ],
};

function loadGunmodels() {
    const grid = document.getElementById('gunmodels-grid');
    if (!grid) return;

    grid.innerHTML = Object.entries(gunmodelsCategories).map(([category, items]) => `
        <div class="gunmodels-section">
            <h3 class="gunmodels-category">${category}</h3>
            <div class="gunmodels-subgrid">
                ${items.map(item => `
                    <div class="gunmodels-item">
                        <img src="${item.src}" alt="${item.name}" loading="lazy" decoding="async">
                        <div class="art-caption">${item.name}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

loadGunmodels();

(function () {
    const grid          = document.getElementById('gunmodels-grid');
    if (!grid) return;

    const overlay      = document.getElementById('gunmodelsModalOverlay');
    const modalImg      = document.getElementById('gunmodelsModalImg');
    const viewport      = document.getElementById('gunmodelsViewport');
    const closeBtn       = document.getElementById('gunmodelsModalClose');
    const zoomInBtn      = document.getElementById('gunmodelsZoomIn');
    const zoomOutBtn     = document.getElementById('gunmodelsZoomOut');
    const zoomResetBtn   = document.getElementById('gunmodelsZoomReset');
    const zoomLabel      = document.getElementById('gunmodelsZoomLabel');

    const MIN_ZOOM = 1, MAX_ZOOM = 4, STEP = 0.25;
    let zoom = 1, panX = 0, panY = 0;
    let isDragging = false, startX = 0, startY = 0, startPanX = 0, startPanY = 0;

    function applyTransform() {
        modalImg.style.transform =
            `translate(-50%, -50%) translate(${panX}px, ${panY}px) scale(${zoom})`;
        zoomLabel.textContent = Math.round(zoom * 100) + '%';
        viewport.style.cursor = zoom > MIN_ZOOM ? 'grab' : 'default';
    }

    function setZoom(next) {
        zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
        if (zoom === MIN_ZOOM) { panX = 0; panY = 0; }
        applyTransform();
    }

    function openModal(src, alt) {
        zoom = 1; panX = 0; panY = 0;
        modalImg.src = src;
        modalImg.alt = alt || '';
        applyTransform();
        overlay.classList.add('open');
    }

    function closeModal() {
        overlay.classList.remove('open');
        modalImg.src = '';
    }

    grid.addEventListener('click', (e) => {
        const img = e.target.closest('.gunmodels-item img');
        if (img) openModal(img.currentSrc || img.src, img.alt);
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        setZoom(zoom + (e.deltaY > 0 ? -STEP : STEP));
    }, { passive: false });

    zoomInBtn.addEventListener('click', () => setZoom(zoom + STEP));
    zoomOutBtn.addEventListener('click', () => setZoom(zoom - STEP));
    zoomResetBtn.addEventListener('click', () => setZoom(1));

    viewport.addEventListener('pointerdown', (e) => {
        if (zoom <= MIN_ZOOM) return;
        isDragging = true;
        viewport.classList.add('dragging');
        startX = e.clientX; startY = e.clientY;
        startPanX = panX; startPanY = panY;
        viewport.setPointerCapture(e.pointerId);
    });

    viewport.addEventListener('pointermove', (e) => {
        if (!isDragging) return;
        panX = startPanX + (e.clientX - startX);
        panY = startPanY + (e.clientY - startY);
        applyTransform();
    });

    ['pointerup', 'pointercancel'].forEach(evt =>
        viewport.addEventListener(evt, () => {
            isDragging = false;
            viewport.classList.remove('dragging');
        })
    );
})();

// 3D MODELS //

// MUSIC ALBUM DISPLAY //

document.addEventListener("DOMContentLoaded", () => {
  const coverEl = document.getElementById("cover");
  if (!coverEl) return;

  const albums = [
    { name: "Initial D OSTs",    artist: "Initial D",   cover: "resources/albums/initiald.webp" },
    { name: "King Of Fighters 2002",    artist: "SNK",   cover: "resources/albums/kof02.jpeg" },
    { name: "Rust in Peace",    artist: "Megadeath",   cover: "resources/albums/megadeath.jpg" },
    { name: "Travelling without Moving",    artist: "Jamiroquai",   cover: "resources/albums/jamiroquai.jpg" },
    { name: "Absolution",    artist: "Muse",   cover: "resources/albums/absolution.jpeg" },
    { name: "Significant Other",    artist: "Limp Bizkit",   cover: "resources/albums/limp.jpeg" },
    { name: "Songs for the Deaf",    artist: "Queens of the Stone Age",   cover: "resources/albums/queens.jpg" },
    { name: "Chromakopia",    artist: "Tyler the Creator",   cover: "resources/albums/chroma.jpeg" },
    { name: "Flower Boy",    artist: "Tyler the Creator",   cover: "resources/albums/flower.jpeg" },
    { name: "Hypnotize",    artist: "System of a Down",   cover: "resources/albums/hypnotize.webp" },
    { name: "Mesmerize",    artist: "System of a Down",   cover: "resources/albums/mesmerize.png" },
    { name: "Origin of Symettry",    artist: "Muse",   cover: "resources/albums/origin.jpg" },
    { name: "Demon Days",    artist: "Gorillaz",   cover: "resources/albums/demon.webp" },
    { name: "Plastic Beach",    artist: "Gorillaz",   cover: "resources/albums/beach.webp" },
    { name: "And Justice for All",    artist: "Metallica",   cover: "resources/albums/justice.jpg" },
  ];

  const FALLBACK_COVER = "data:image/svg+xml;utf8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="200" height="200" fill="#c0c0c0"/>
      <text x="100" y="105" font-family="Tahoma" font-size="13" fill="#444" text-anchor="middle">No Cover</text>
    </svg>`
  );

  let index = 0;
  const nameEl = document.getElementById("albumName");
  const artistEl = document.getElementById("artistName");
  const counterEl = document.getElementById("counter");

  coverEl.addEventListener("error", () => { coverEl.src = FALLBACK_COVER; });

  function render() {
    const album = albums[index];
    coverEl.src = album.cover || FALLBACK_COVER;
    nameEl.textContent = album.name;
    artistEl.textContent = album.artist;
    counterEl.textContent = (index + 1) + " / " + albums.length;
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + albums.length) % albums.length;
    render();
  });
  document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % albums.length;
    render();
  });

  render();
});

// MUSIC ALBUM DISPLAY //