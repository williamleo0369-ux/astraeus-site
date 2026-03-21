/* =====================================================
   ASTRAEUS & CO. - Interactive System
   Refined Edition
   ===================================================== */

// Product Data
const productData = {
    'celestial-ring': {
        ref: 'REF. AR-1778',
        name: 'Celestial Armillary Ring',
        nameCn: '天球浑仪戒指',
        image: 'imgs/古法戒指.png',
        specs: [
            { label: 'METAL', value: '18K Yellow Gold' },
            { label: 'CENTER STONE', value: 'Cabochon Garnet' },
            { label: 'WEIGHT', value: '28.4g' },
            { label: 'TECHNIQUE', value: 'Enamel & Filigree' },
            { label: 'ORIGIN', value: 'Wien, 1778' },
            { label: 'EDITION', value: 'Unique Piece' }
        ],
        deterministic: [
            { value: '0.012', unit: 'mm 加工公差' },
            { value: '98.7', unit: '% 对称精度' },
            { value: '1.618', unit: '黄金比例' }
        ]
    },
    'compass-ring': {
        ref: 'REF. CR-2024',
        name: "Navigator's Signet",
        nameCn: '航海家印戒',
        image: 'imgs/定制戒指.png',
        specs: [
            { label: 'METAL', value: '14K Yellow Gold' },
            { label: 'ACCENT', value: 'Diamond Points' },
            { label: 'WEIGHT', value: '12.8g' },
            { label: 'FINISH', value: 'Brushed Exterior' },
            { label: 'CUSTOM', value: 'GPS Coordinates' },
            { label: 'EDITION', value: 'Bespoke' }
        ],
        deterministic: [
            { value: '0.008', unit: 'mm 加工公差' },
            { value: '99.2', unit: '% 镶嵌精度' },
            { value: '45°', unit: '罗盘角度' }
        ]
    },
    'stellar-pendant': {
        ref: 'REF. SP-1919',
        name: 'Aurora Hexagon',
        nameCn: '极光六芒吊坠',
        image: 'imgs/星芒项链.png',
        specs: [
            { label: 'METAL', value: '18K Yellow Gold' },
            { label: 'SHAPE', value: 'Hexagonal' },
            { label: 'WEIGHT', value: '4.2g' },
            { label: 'CHAIN', value: 'Cable 45cm' },
            { label: 'MOTIF', value: 'Eight-Point Star' },
            { label: 'EDITION', value: 'Limited 88' }
        ],
        deterministic: [
            { value: '120°', unit: '顶角角度' },
            { value: '99.8', unit: '% 对称精度' },
            { value: '0.005', unit: 'mm 加工公差' }
        ]
    },
    'astrolabe-bracelet': {
        ref: 'REF. AB-1762',
        name: 'Horological Cuff',
        nameCn: '星象时计腕饰',
        image: 'imgs/古法手环.png',
        specs: [
            { label: 'METAL', value: '22K Yellow Gold' },
            { label: 'STONE', value: 'Ruby & Diamond' },
            { label: 'WEIGHT', value: '89.6g' },
            { label: 'ENAMEL', value: 'Deep Burgundy' },
            { label: 'ORIGIN', value: 'Austria, 1762' },
            { label: 'EDITION', value: 'Museum Piece' }
        ],
        deterministic: [
            { value: '360°', unit: '旋转角度' },
            { value: '12', unit: '星座刻度' },
            { value: '0.02', unit: 'mm 加工公差' }
        ]
    },
    'celestial-brooch': {
        ref: 'REF. CB-1764',
        name: 'Celestial Globe Brooch',
        nameCn: '天球仪胸针',
        image: 'imgs/胸针.png..webp',
        specs: [
            { label: 'METAL', value: '18K Yellow Gold' },
            { label: 'STONES', value: 'Ruby, Diamond, Pearl' },
            { label: 'WEIGHT', value: '32.4g' },
            { label: 'ENAMEL', value: 'Cobalt Blue & Burgundy' },
            { label: 'ORIGIN', value: 'London, 1764' },
            { label: 'EDITION', value: 'Unique Piece' }
        ],
        deterministic: [
            { value: '23.5°', unit: '黄道倾角' },
            { value: '88', unit: '星座数量' },
            { value: '0.015', unit: 'mm 加工公差' }
        ]
    },
    'orrery-necklace': {
        ref: 'REF. ON-1768',
        name: 'Orrery Grand Collier',
        nameCn: '浑天仪项链',
        image: 'imgs/中世纪复古项链.png.webp',
        specs: [
            { label: 'METAL', value: '22K Yellow Gold' },
            { label: 'STONES', value: 'Diamond, Sapphire, Pearl' },
            { label: 'WEIGHT', value: '124.8g' },
            { label: 'LENGTH', value: '42cm' },
            { label: 'MOTIF', value: 'Orrery & Instruments' },
            { label: 'EDITION', value: 'Unique Piece' }
        ],
        deterministic: [
            { value: '8', unit: '天体数量' },
            { value: '365.25', unit: '日周期' },
            { value: '0.01', unit: 'mm 加工公差' }
        ]
    },
    // ═══ New Products 2026 ═══
    'sextant-pendant': {
        ref: 'REF. CP-2026',
        name: 'Sextant Coordinates',
        nameCn: '北斗坐标吊坠',
        image: 'imgs/ASTRAEUS星座六分仪砖石吊坠.png',
        specs: [
            { label: 'METAL', value: '18K White Gold' },
            { label: 'STONES', value: 'Diamond' },
            { label: 'WEIGHT', value: '8.6g' },
            { label: 'CHAIN', value: 'Cable 50cm' },
            { label: 'MOTIF', value: 'Sextant & Polaris' },
            { label: 'EDITION', value: 'Limited 36' }
        ],
        deterministic: [
            { value: '51.47°', unit: '北极星方位' },
            { value: '99.4', unit: '% 角度精度' },
            { value: '0.006', unit: 'mm 加工公差' }
        ]
    },
    'cipher-ring-1': {
        ref: 'REF. CR-2026-A',
        name: 'Binary Inscription',
        nameCn: '二进制铭刻',
        image: 'imgs/ASTRAEUS现代简约戒指2.png',
        specs: [
            { label: 'METAL', value: '18K Yellow Gold' },
            { label: 'ACCENT', value: 'Diamond' },
            { label: 'WEIGHT', value: '9.2g' },
            { label: 'BAND WIDTH', value: '4mm' },
            { label: 'INSCRIPTION', value: 'Binary Code' },
            { label: 'EDITION', value: 'Made to Order' }
        ],
        deterministic: [
            { value: '256', unit: 'bit 刻字容量' },
            { value: '99.6', unit: '% 对称精度' },
            { value: '0.004', unit: 'mm 加工公差' }
        ]
    },
    'cipher-ring-2': {
        ref: 'REF. CR-2026-B',
        name: 'Geometric Cipher',
        nameCn: '几何密码',
        image: 'imgs/ASTRAEUS现代简约戒指3.png',
        specs: [
            { label: 'METAL', value: '18K Rose Gold' },
            { label: 'PATTERN', value: 'Tessellation' },
            { label: 'WEIGHT', value: '7.8g' },
            { label: 'BAND WIDTH', value: '6mm' },
            { label: 'TECHNIQUE', value: 'CNC Precision' },
            { label: 'EDITION', value: 'Limited 72' }
        ],
        deterministic: [
            { value: '60°', unit: '六边形角度' },
            { value: '99.9', unit: '% 镶嵌精度' },
            { value: '0.003', unit: 'mm 加工公差' }
        ]
    },
    'cipher-necklace': {
        ref: 'REF. CN-2026',
        name: 'Axis Code',
        nameCn: '轴线代码',
        image: 'imgs/ASTRAEUS现代简约项链4.png',
        specs: [
            { label: 'METAL', value: '18K White Gold' },
            { label: 'ACCENT', value: 'Diamond Pavé' },
            { label: 'WEIGHT', value: '6.4g' },
            { label: 'CHAIN', value: 'Snake 45cm' },
            { label: 'MOTIF', value: 'Coordinate Grid' },
            { label: 'EDITION', value: 'Limited 48' }
        ],
        deterministic: [
            { value: '0°/90°', unit: '坐标轴角度' },
            { value: '99.7', unit: '% 对称精度' },
            { value: '0.005', unit: 'mm 加工公差' }
        ]
    },
    'celestial-sphere': {
        ref: 'REF. SP-2026',
        name: 'Celestial Origin',
        nameCn: '天球原点',
        image: 'imgs/1773755290030.png',
        specs: [
            { label: 'METAL', value: '22K Yellow Gold' },
            { label: 'WEIGHT', value: '18.2g' },
            { label: 'SPHERE', value: 'Rotating 12mm' },
            { label: 'MOTIF', value: 'Armillary Sphere' },
            { label: 'EDITION', value: 'Limited 24' }
        ],
        deterministic: [
            { value: '360°', unit: '旋转自由度' },
            { value: '23.5°', unit: '黄道倾角' },
            { value: '0.008', unit: 'mm 加工公差' }
        ]
    },
    'balance-pendant': {
        ref: 'REF. BP-2026',
        name: 'Geometric Equilibrium',
        nameCn: '几何平衡',
        image: 'imgs/ASTRAEUS现代简约项链3.png',
        specs: [
            { label: 'METAL', value: '18K Yellow Gold' },
            { label: 'SHAPE', value: 'Asymmetric Balance' },
            { label: 'WEIGHT', value: '5.6g' },
            { label: 'CHAIN', value: 'Box 42cm' },
            { label: 'TECHNIQUE', value: 'Cold Forging' },
            { label: 'EDITION', value: 'Made to Order' }
        ],
        deterministic: [
            { value: '1:1.618', unit: '黄金分割' },
            { value: '99.5', unit: '% 平衡精度' },
            { value: '0.007', unit: 'mm 加工公差' }
        ]
    },
    'architectural-cuff': {
        ref: 'REF. AC-2026',
        name: 'Architectural Cuff',
        nameCn: '建筑腕饰',
        image: 'imgs/雕塑感手镯2.png',
        specs: [
            { label: 'METAL', value: '18K Yellow Gold' },
            { label: 'STYLE', value: 'Brutalist' },
            { label: 'WEIGHT', value: '68.4g' },
            { label: 'WIDTH', value: '35mm' },
            { label: 'TECHNIQUE', value: 'CNC + Hand Finish' },
            { label: 'EDITION', value: 'Limited 12' }
        ],
        deterministic: [
            { value: '90°', unit: '建筑角度' },
            { value: '99.8', unit: '% 几何精度' },
            { value: '0.01', unit: 'mm 加工公差' }
        ]
    },
    'anchor-ring': {
        ref: 'REF. AR-2026',
        name: 'Absolute Anchor',
        nameCn: '绝对锚点戒指',
        image: 'imgs/绝对锚点戒指.png',
        specs: [
            { label: 'METAL', value: '18K White Gold' },
            { label: 'CENTER STONE', value: 'Diamond 5ct' },
            { label: 'WEIGHT', value: '8.6g' },
            { label: 'SETTING', value: 'Tension Mount' },
            { label: 'TECHNIQUE', value: 'Precision CNC' },
            { label: 'EDITION', value: 'Made to Order' }
        ],
        deterministic: [
            { value: '0.001', unit: 'mm 张力公差' },
            { value: '99.9', unit: '% 中心对称' },
            { value: '58', unit: '面切割' }
        ]
    },
    'bezel-ring': {
        ref: 'REF. BR-2026',
        name: 'Orbital Bezel',
        nameCn: '轨道包镶戒指',
        image: 'imgs/包镶戒指2.png',
        specs: [
            { label: 'METAL', value: '18K Yellow Gold' },
            { label: 'STONES', value: 'Natural Diamond Setting' },
            { label: 'WEIGHT', value: '12.4g' },
            { label: 'SETTING', value: 'Full Bezel' },
            { label: 'FINISH', value: 'Satin Interior' },
            { label: 'EDITION', value: 'Limited 36' }
        ],
        deterministic: [
            { value: '360°', unit: '包镶角度' },
            { value: '0.02', unit: 'mm 镶嵌间隙' },
            { value: '99.6', unit: '% 圆度精度' }
        ]
    },
    'bezel-stud': {
        ref: 'REF. BE-2026',
        name: 'Orbital Stud',
        nameCn: '轨道包镶耳钉',
        image: 'imgs/包镶耳钉1.png',
        specs: [
            { label: 'METAL', value: '18K Yellow Gold' },
            { label: 'STONES', value: 'Diamond 0.3ct each' },
            { label: 'WEIGHT', value: '3.2g (pair)' },
            { label: 'SETTING', value: 'Orbital Bezel' },
            { label: 'BACK', value: 'Screw Post' },
            { label: 'EDITION', value: 'Made to Order' }
        ],
        deterministic: [
            { value: '8mm', unit: '直径' },
            { value: '99.8', unit: '% 配对精度' },
            { value: '0.005', unit: 'mm 加工公差' }
        ]
    },
    'inscription-ring': {
        ref: 'REF. IR-1919',
        name: 'Inner Inscription',
        nameCn: '内壁铭刻戒指',
        image: 'imgs/内壁铭刻戒指.png',
        specs: [
            { label: 'METAL', value: '18K Gold' },
            { label: 'CENTER STONE', value: '2ct / Excellent Round Brilliant Cut Diamond' },
            { label: 'INSCRIPTION', value: 'ASTRAEUS & CO. 18K / 0.004mm' },
            { label: 'DESIGN', value: '1919 Floating Tension Structure' },
            { label: 'TECHNIQUE', value: 'Aerospace-Grade Micro Cold Forging' },
            { label: 'EDITION', value: 'Limited Collection' }
        ],
        deterministic: [
            { value: '0.004', unit: 'mm 铭刻精度' },
            { value: '99.9', unit: '% 张力稳定性' },
            { value: '1919', unit: '悬浮结构代码' }
        ]
    }
};

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initFormSubmission();
    initScrollAnimations();
    initLanguageSwitcher();
    initCategoryFilter();
    initTrinityNavigation();
    generateHexStream();
});

// Smooth Scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Product Modal
function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    const product = productData[productId];

    if (!product || !modal) return;

    // Update modal content
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalRef').textContent = product.ref;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalTitleCn').textContent = product.nameCn;

    // Specs
    const specsContainer = document.getElementById('modalSpecs');
    specsContainer.innerHTML = product.specs.map(spec => `
        <div class="spec-row">
            <span class="spec-label">${spec.label}</span>
            <span class="spec-value">${spec.value}</span>
        </div>
    `).join('');

    // Deterministic Values
    const detContainer = document.getElementById('modalDeterministic');
    detContainer.innerHTML = product.deterministic.map(item => `
        <div class="det-item">
            <span class="det-value">${item.value}</span>
            <span class="det-unit">${item.unit}</span>
        </div>
    `).join('');

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});

// Form Submission
function initFormSubmission() {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Show success message
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>INQUIRY SUBMITTED · 已提交</span>';
        submitBtn.style.background = '#2C2C2C';
        submitBtn.style.color = '#FAFAF8';

        // Reset form
        setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.style.color = '';
        }, 3000);
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.maison, .collection, .heritage, .contact').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Navigation scroll effect
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > 100) {
        nav.style.borderBottomColor = 'rgba(213, 213, 211, 0.8)';
    } else {
        nav.style.borderBottomColor = 'rgba(232, 232, 230, 1)';
    }

    lastScrollY = currentScrollY;
});

// Language Switcher
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    if (!langBtns.length) return;

    // Get saved language or default to 'en'
    let currentLang = localStorage.getItem('astraeus-lang') || 'en';
    applyLanguage(currentLang);

    langBtns.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;

            // Update active state
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Apply language
            currentLang = lang;
            localStorage.setItem('astraeus-lang', lang);
            applyLanguage(lang);
        });
    });
}

function applyLanguage(lang) {
    // Toggle visibility of language-specific elements
    document.querySelectorAll('[data-en]').forEach(el => {
        if (lang === 'en') {
            el.textContent = el.dataset.en;
        } else {
            el.textContent = el.dataset.cn;
        }
    });

    // Show/hide language-specific blocks
    document.querySelectorAll('.lang-en').forEach(el => {
        el.style.display = lang === 'en' ? '' : 'none';
    });
    document.querySelectorAll('.lang-cn').forEach(el => {
        el.style.display = lang === 'cn' ? '' : 'none';
    });
}

// Category Filter
function initCategoryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (!filterBtns.length || !productCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter products
            productCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    // Re-trigger animation
                    card.style.animation = 'none';
                    card.offsetHeight; // Trigger reflow
                    card.style.animation = '';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// WeChat QR Toggle
function toggleWechatQR() {
    const popup = document.getElementById('wechatQrPopup');
    if (popup) {
        popup.classList.toggle('active');
    }
}

// Close WeChat QR when clicking outside
document.addEventListener('click', (e) => {
    const popup = document.getElementById('wechatQrPopup');
    const wechatBtn = document.querySelector('.contact-float-btn.wechat');

    if (popup && !popup.contains(e.target) && e.target !== wechatBtn && !wechatBtn.contains(e.target)) {
        popup.classList.remove('active');
    }
});

// Trinity Navigation System
function initTrinityNavigation() {
    const trinityBtns = document.querySelectorAll('.trinity-btn');
    const trinityZones = document.querySelectorAll('.trinity-zone');

    if (!trinityBtns.length) return;

    trinityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const zone = btn.dataset.zone;

            // ═══ SHUTTER FLASH - 相机快门瞬间反色 (0.1s) ═══
            btn.classList.add('shutter-active');
            setTimeout(() => btn.classList.remove('shutter-active'), 100);

            // ═══ STARFIELD GLITCH - 星轨高频震荡联动 ═══
            const heroCircles = document.querySelector('.hero-circles');
            if (heroCircles) {
                heroCircles.classList.add('glitch-active');
                setTimeout(() => heroCircles.classList.remove('glitch-active'), 250);
            }

            // Toggle active state on button
            trinityBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Activate corresponding zone
            trinityZones.forEach(z => {
                if (z.dataset.zone === zone) {
                    z.classList.add('active');
                } else {
                    z.classList.remove('active');
                }
            });

            // Highlight center point for AXIS zone
            const centerPoint = document.querySelector('.center-point');
            if (centerPoint) {
                if (zone === 'axis') {
                    centerPoint.setAttribute('r', '6');
                    centerPoint.style.fill = '#2C2C2C';
                } else {
                    centerPoint.setAttribute('r', '3');
                }
            }
        });

        // Also handle hover for preview
        btn.addEventListener('mouseenter', () => {
            const zone = btn.dataset.zone;
            const targetZone = document.querySelector(`.trinity-zone[data-zone="${zone}"]`);
            if (targetZone && !btn.classList.contains('active')) {
                targetZone.style.opacity = '0.5';
            }
        });

        btn.addEventListener('mouseleave', () => {
            const zone = btn.dataset.zone;
            const targetZone = document.querySelector(`.trinity-zone[data-zone="${zone}"]`);
            if (targetZone && !btn.classList.contains('active')) {
                targetZone.style.opacity = '0';
            }
        });
    });
}

// Generate Hex Stream for CODE zone
function generateHexStream() {
    const hexContainer = document.querySelector('.hex-stream');
    if (!hexContainer) return;

    const hexChars = '0123456789ABCDEF';
    let hexContent = '';

    // Generate hex stream content
    for (let i = 0; i < 200; i++) {
        let line = '';
        for (let j = 0; j < 8; j++) {
            line += hexChars[Math.floor(Math.random() * 16)];
        }
        hexContent += line + '\n';
    }

    hexContainer.textContent = hexContent;

    // Continuously update hex stream
    setInterval(() => {
        let newContent = '';
        for (let i = 0; i < 200; i++) {
            let line = '';
            for (let j = 0; j < 8; j++) {
                line += hexChars[Math.floor(Math.random() * 16)];
            }
            newContent += line + '\n';
        }
        hexContainer.textContent = newContent;
    }, 2000);
}
