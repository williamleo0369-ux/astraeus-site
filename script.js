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

const commerceCatalog = {
    'celestial-ring': { price: null, currency: 'USD', stockStatus: 'Archive consultation', sellable: false, leadTime: 'Private appointment', fulfillment: 'Museum-grade handling' },
    'compass-ring': { price: null, currency: 'USD', stockStatus: 'Bespoke', sellable: false, leadTime: '6-8 weeks', fulfillment: 'Made to order' },
    'stellar-pendant': { price: 6800, currency: 'USD', stockStatus: 'Limited availability', sellable: true, leadTime: '10-14 days', fulfillment: 'Insured express' },
    'astrolabe-bracelet': { price: null, currency: 'USD', stockStatus: 'Archive consultation', sellable: false, leadTime: 'Private appointment', fulfillment: 'White-glove logistics' },
    'celestial-brooch': { price: null, currency: 'USD', stockStatus: 'Unique piece', sellable: false, leadTime: 'Private appointment', fulfillment: 'White-glove logistics' },
    'orrery-necklace': { price: null, currency: 'USD', stockStatus: 'Unique piece', sellable: false, leadTime: 'Private appointment', fulfillment: 'White-glove logistics' },
    'sextant-pendant': { price: 12800, currency: 'USD', stockStatus: 'Limited 36', sellable: true, leadTime: '14-21 days', fulfillment: 'Insured express' },
    'cipher-ring-1': { price: 4200, currency: 'USD', stockStatus: 'Made to order', sellable: true, leadTime: '4-6 weeks', fulfillment: 'Insured express' },
    'cipher-ring-2': { price: 4800, currency: 'USD', stockStatus: 'Limited 72', sellable: true, leadTime: '3-5 weeks', fulfillment: 'Insured express' },
    'cipher-necklace': { price: 7600, currency: 'USD', stockStatus: 'Limited 48', sellable: true, leadTime: '3-4 weeks', fulfillment: 'Insured express' },
    'celestial-sphere': { price: 16800, currency: 'USD', stockStatus: 'Limited 24', sellable: true, leadTime: '6-8 weeks', fulfillment: 'Insured express' },
    'balance-pendant': { price: 5200, currency: 'USD', stockStatus: 'Made to order', sellable: true, leadTime: '4-6 weeks', fulfillment: 'Insured express' },
    'architectural-cuff': { price: 19800, currency: 'USD', stockStatus: 'Limited 12', sellable: true, leadTime: '8-10 weeks', fulfillment: 'White-glove logistics' },
    'anchor-ring': { price: null, currency: 'USD', stockStatus: 'Stone quote required', sellable: false, leadTime: 'Private quotation', fulfillment: 'White-glove logistics' },
    'bezel-ring': { price: 11800, currency: 'USD', stockStatus: 'Limited 36', sellable: true, leadTime: '5-7 weeks', fulfillment: 'Insured express' },
    'bezel-stud': { price: 3600, currency: 'USD', stockStatus: 'Made to order', sellable: true, leadTime: '3-4 weeks', fulfillment: 'Insured express' },
    'inscription-ring': { price: null, currency: 'USD', stockStatus: 'Diamond quote required', sellable: false, leadTime: 'Private quotation', fulfillment: 'White-glove logistics' }
};

Object.entries(commerceCatalog).forEach(([id, commerce]) => {
    if (productData[id]) {
        productData[id] = { ...productData[id], ...commerce };
    }
});

const CART_STORAGE_KEY = 'astraeus-cart';
let currentProductId = null;

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initDynamicShowcase();
    initSmoothScroll();
    initFormSubmission();
    initScrollAnimations();
    initLanguageSwitcher();
    initCategoryFilter();
    initProductCommerceCards();
    initCart();
    initTrackingSearch();
    initProductDetailPage();
    initOrderPage();
    initAdminPage();
    applyPendingInquiry();
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

function initDynamicShowcase() {
    requestAnimationFrame(() => {
        document.body.classList.add('page-ready');
    });

    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href') || '';
        const isLocalPage = href.endsWith('.html') || href.includes('.html#') || href.includes('.html?');
        if (!isLocalPage || link.target) return;

        link.addEventListener('click', event => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            document.body.classList.add('page-leaving');
            setTimeout(() => {
                window.location.href = href;
            }, 180);
        });
    });

    initProductTilt();
}

function initProductTilt() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.querySelectorAll('.product-card').forEach(card => {
        card.classList.add('is-revealing');

        card.addEventListener('mousemove', event => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            card.style.setProperty('--tilt-x', `${x * 5}deg`);
            card.style.setProperty('--tilt-y', `${y * -5}deg`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--tilt-x', '0deg');
            card.style.setProperty('--tilt-y', '0deg');
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.product-card').forEach(card => observer.observe(card));
}

// Product Modal
function openProductPage(productId) {
    document.body.classList.add('page-leaving');
    setTimeout(() => {
        window.location.href = `product.html?id=${encodeURIComponent(productId)}`;
    }, 180);
}

function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    const product = productData[productId];

    if (!product || !modal) return;
    currentProductId = productId;

    // Update modal content
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalRef').textContent = product.ref;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalTitleCn').textContent = product.nameCn;
    document.getElementById('modalCommerce').innerHTML = `
        <div class="commerce-price">${formatProductPrice(product)}</div>
        <div class="commerce-meta">
            <span>${product.stockStatus}</span>
            <span>${product.leadTime}</span>
            <span>${product.fulfillment}</span>
        </div>
    `;

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

    const buyButton = document.querySelector('.modal-buy');
    if (buyButton) {
        buyButton.disabled = false;
        buyButton.textContent = productRequiresQuote(product) ? 'ADD TO CART · 加入询价车' : 'ADD TO CART · 加入购物车';
    }

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

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        syncCartSummaryField();
        const formData = new FormData(form);
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>SENDING · 发送中</span>';

        try {
            const payload = Object.fromEntries(formData.entries());
            payload.source_path = window.location.pathname + window.location.hash;

            const response = await fetch(form.action, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            const data = await readApiJson(response);
            if (!response.ok) {
                throw new Error(data.error || 'Inquiry submission failed');
            }

            submitBtn.innerHTML = '<span>INQUIRY SUBMITTED · 已提交</span>';
            submitBtn.style.background = '#2C2C2C';
            submitBtn.style.color = '#FAFAF8';
            form.reset();

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.style.color = '';
                submitBtn.disabled = false;
            }, 3000);
        } catch (error) {
            submitBtn.innerHTML = '<span>SUBMISSION FAILED · 请稍后重试</span>';
            submitBtn.disabled = false;

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
            }, 3000);
        }
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
    document.querySelectorAll('.maison, .collection, .heritage, .contact, .services').forEach(section => {
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
    const formLanguage = document.getElementById('formLanguage');
    if (formLanguage) {
        formLanguage.value = lang;
    }

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

function initProductCommerceCards() {
    document.querySelectorAll('.product-card').forEach(card => {
        const clickHandler = card.getAttribute('onclick') || '';
        const match = clickHandler.match(/openProduct(?:Modal|Page)\('([^']+)'\)/);
        if (!match) return;

        const product = productData[match[1]];
        const info = card.querySelector('.product-info');
        if (!product || !info || info.querySelector('.product-commerce')) return;

        const commerce = document.createElement('div');
        commerce.className = 'product-commerce';
        commerce.innerHTML = `
            <span>${formatProductPrice(product)}</span>
            <em>${product.sellable ? 'AVAILABLE' : 'PRIVATE'}</em>
        `;
        info.appendChild(commerce);
    });
}

function initCart() {
    updateCartCount();
    renderCart();
}

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    } catch (error) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartCount(true);
    renderCart();
}

function addCurrentProductToCart() {
    if (!currentProductId) return;
    addProductToCart(currentProductId);
}

function addProductToCart(productId) {
    const product = productData[productId];
    if (!product) return;

    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    saveCart(cart);
    openCartDrawer();
}

function productRequiresQuote(product) {
    return !product || !product.price;
}

function cartRequiresQuote(cart = getCart()) {
    return cart.some((item) => productRequiresQuote(productData[item.id]));
}

function getCartCheckoutLabel(cart = getCart()) {
    if (!cart.length) return 'SECURE CHECKOUT · 安全支付';
    return cartRequiresQuote(cart)
        ? 'REQUEST CART QUOTE · 提交购物车询价'
        : 'SECURE CHECKOUT · 安全支付';
}

function initProductDetailPage() {
    const detail = document.getElementById('productDetail');
    if (!detail) return;

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 'sextant-pendant';
    const product = productData[productId];

    if (!product) {
        detail.innerHTML = `
            <div class="detail-missing">
                <span>ARCHIVE REFERENCE NOT FOUND</span>
                <h1>Piece unavailable</h1>
                <a href="index.html#collection">Return to collection</a>
            </div>
        `;
        return;
    }

    currentProductId = productId;
    document.title = `${product.name} | ASTRAEUS & CO.`;

    const image = document.getElementById('detailImage');
    const ref = document.getElementById('detailRef');
    const galleryRef = document.getElementById('detailGalleryRef');
    const title = document.getElementById('detailTitle');
    const titleCn = document.getElementById('detailTitleCn');
    const commerce = document.getElementById('detailCommerce');
    const specs = document.getElementById('detailSpecs');
    const deterministic = document.getElementById('detailDeterministic');
    const buyButton = document.getElementById('detailBuyButton');
    const inquiryButton = document.getElementById('detailInquiryButton');

    if (image) {
        image.src = product.image;
        image.alt = product.name;
    }
    if (ref) ref.textContent = product.ref;
    if (galleryRef) galleryRef.textContent = product.ref;
    if (title) title.textContent = product.name;
    if (titleCn) titleCn.textContent = product.nameCn;
    if (commerce) {
        commerce.innerHTML = `
            <div class="commerce-price">${formatProductPrice(product)}</div>
            <div class="commerce-meta">
                <span>${product.stockStatus}</span>
                <span>${product.leadTime}</span>
                <span>${product.fulfillment}</span>
            </div>
        `;
    }
    if (specs) {
        specs.innerHTML = product.specs.map(spec => `
            <div class="spec-row">
                <span class="spec-label">${spec.label}</span>
                <span class="spec-value">${spec.value}</span>
            </div>
        `).join('');
    }
    if (deterministic) {
        deterministic.innerHTML = product.deterministic.map(item => `
            <div class="det-item">
                <span class="det-value">${item.value}</span>
                <span class="det-unit">${item.unit}</span>
            </div>
        `).join('');
    }
    if (buyButton) {
        buyButton.disabled = false;
        buyButton.textContent = productRequiresQuote(product) ? 'ADD TO CART · 加入询价车' : 'ADD TO CART · 加入购物车';
        buyButton.onclick = () => addProductToCart(productId);
    }
    if (inquiryButton) {
        inquiryButton.onclick = () => requestProductInquiry(productId);
    }
}

function removeCartItem(productId) {
    saveCart(getCart().filter(item => item.id !== productId));
}

function updateCartCount(pulse = false) {
    const count = getCart().reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
    });
    if (!pulse) return;
    document.querySelectorAll('.cart-icon').forEach(icon => {
        icon.classList.remove('cart-pulse');
        void icon.offsetWidth;
        icon.classList.add('cart-pulse');
    });
}

function renderCart() {
    const cart = getCart();
    const itemsContainer = document.getElementById('cartItems');
    const empty = document.getElementById('cartEmpty');
    const total = document.getElementById('cartTotal');
    const checkoutButton = document.querySelector('.cart-checkout');
    const cartNote = document.querySelector('.cart-summary .cart-note');

    if (!itemsContainer || !empty || !total) return;

    if (!cart.length) {
        itemsContainer.innerHTML = '';
        empty.style.display = 'block';
        total.textContent = 'Upon inquiry';
        if (checkoutButton) checkoutButton.textContent = getCartCheckoutLabel(cart);
        if (cartNote) cartNote.textContent = '结账金额为所选作品价格；目的地关税、税费或特殊配送费用可能另行产生。';
        return;
    }

    empty.style.display = 'none';
    itemsContainer.innerHTML = cart.map(item => {
        const product = productData[item.id];
        if (!product) return '';

        return `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-item-body">
                    <span>${product.ref}</span>
                    <strong>${product.name}</strong>
                    <small>${formatProductPrice(product)} · Qty ${item.quantity}</small>
                    <button type="button" onclick="removeCartItem('${item.id}')">Remove</button>
                </div>
            </div>
        `;
    }).join('');

    const totalValue = cart.reduce((sum, item) => {
        const product = productData[item.id];
        return sum + ((product && product.price) ? product.price * item.quantity : 0);
    }, 0);

    total.textContent = totalValue ? formatCurrency(totalValue, 'USD') : 'Upon inquiry';
    if (checkoutButton) checkoutButton.textContent = getCartCheckoutLabel(cart);
    if (cartNote) {
        cartNote.textContent = cartRequiresQuote(cart)
            ? '含价格面议作品；提交后私人顾问会确认最终报价、证书、税费与保价配送安排。'
            : '结账金额为所选作品价格；目的地关税、税费或特殊配送费用可能另行产生。';
    }
}

function openCartDrawer() {
    renderCart();
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;

    drawer.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;

    drawer.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

async function sendCartInquiry() {
    syncCartSummaryField();
    const cart = getCart();
    const checkoutButton = document.querySelector('.cart-checkout');
    const originalCheckoutText = checkoutButton ? checkoutButton.textContent : '';

    if (!cart.length) {
        openCartDrawer();
        return;
    }

    if (!cartRequiresQuote(cart)) {
        if (checkoutButton) {
            checkoutButton.disabled = true;
            checkoutButton.textContent = 'CREATING SECURE CHECKOUT · 正在创建支付';
        }

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items: cart })
            });
            const data = await readApiJson(response);
            if (!response.ok || !data.url) {
                throw new Error(data.error || 'Checkout is not configured');
            }
            window.location.href = data.url;
            return;
        } catch (error) {
            console.warn('Secure checkout unavailable, falling back to concierge inquiry:', error);
        } finally {
            if (checkoutButton) {
                checkoutButton.disabled = false;
                checkoutButton.textContent = originalCheckoutText;
            }
        }
    }

    closeCartDrawer();

    const contactSection = document.querySelector('#contact');
    if (!contactSection) {
        localStorage.setItem('astraeus-pending-inquiry', JSON.stringify({
            inquiry: 'I would like to confirm availability, final quotation, insured delivery, and checkout details for the selected pieces.',
            selectedPiece: `Service reference: ${createServiceReference()}`,
            cartSummary: getCartSummary()
        }));
        window.location.href = 'index.html#contact';
        return;
    }

    const inquiry = document.querySelector('textarea[name="inquiry"]');
    if (inquiry && !inquiry.value.trim()) {
        inquiry.value = 'I would like to confirm availability, final quotation, insured delivery, and checkout details for the selected pieces.';
    }

    const reference = createServiceReference();
    const selectedPiece = document.getElementById('selectedPiece');
    if (selectedPiece) {
        selectedPiece.value = `${selectedPiece.value ? selectedPiece.value + ' | ' : ''}Service reference: ${reference}`;
    }

    contactSection.scrollIntoView({ behavior: 'smooth' });
}

function requestProductInquiry(productId = currentProductId) {
    const product = productData[productId];
    if (!product) return;

    const selectedPiece = document.getElementById('selectedPiece');
    const inquiry = document.querySelector('textarea[name="inquiry"]');
    const inquiryText = `I would like to inquire about ${product.ref} · ${product.name}. Please confirm availability, sizing, certificate, insured delivery, and final quotation.`;

    if (!selectedPiece && !inquiry) {
        localStorage.setItem('astraeus-pending-inquiry', JSON.stringify({
            inquiry: inquiryText,
            selectedPiece: `${product.ref} · ${product.name} · ${formatProductPrice(product)}`,
            cartSummary: getCartSummary()
        }));
        window.location.href = 'index.html#contact';
        return;
    }

    if (selectedPiece) {
        selectedPiece.value = `${product.ref} · ${product.name} · ${formatProductPrice(product)}`;
    }

    if (inquiry && !inquiry.value.trim()) {
        inquiry.value = inquiryText;
    }

    closeProductModal();
}

function syncCartSummaryField() {
    const cartSummary = document.getElementById('cartSummary');
    if (!cartSummary) return;

    cartSummary.value = getCartSummary();
}

function getCartSummary() {
    return getCart().map(item => {
        const product = productData[item.id];
        if (!product) return null;
        return `${product.ref} · ${product.name} · ${formatProductPrice(product)} · Qty ${item.quantity} · ${product.leadTime}`;
    }).filter(Boolean).join('\n');
}

function applyPendingInquiry() {
    const pendingRaw = localStorage.getItem('astraeus-pending-inquiry');
    if (!pendingRaw) return;

    const inquiry = document.querySelector('textarea[name="inquiry"]');
    const selectedPiece = document.getElementById('selectedPiece');
    const cartSummary = document.getElementById('cartSummary');
    if (!inquiry && !selectedPiece && !cartSummary) return;

    try {
        const pending = JSON.parse(pendingRaw);
        if (inquiry && pending.inquiry) inquiry.value = pending.inquiry;
        if (selectedPiece && pending.selectedPiece) selectedPiece.value = pending.selectedPiece;
        if (cartSummary && pending.cartSummary) cartSummary.value = pending.cartSummary;
        localStorage.removeItem('astraeus-pending-inquiry');
    } catch (error) {
        localStorage.removeItem('astraeus-pending-inquiry');
    }
}

function initTrackingSearch() {
    const trackingForm = document.querySelector('.tracking-form');
    if (!trackingForm) return;

    trackingForm.addEventListener('submit', lookupTracking);
}

async function lookupTracking(event) {
    event.preventDefault();

    const input = document.getElementById('trackingInput');
    const result = document.getElementById('trackingResult');
    if (!input || !result) return;

    const value = input.value.trim();
    if (!value) {
        result.innerHTML = '<span>Please enter an order reference or tracking number.</span>';
        return;
    }

    result.innerHTML = '<span>Looking up concierge record...</span>';

    try {
        const response = await fetch(`/api/tracking?reference=${encodeURIComponent(value)}`);
        const data = await readApiJson(response);
        if (!response.ok) throw new Error(data.error || 'Tracking unavailable');

        result.innerHTML = renderTrackingSummary(data);
        return;
    } catch (error) {
        const savedReference = localStorage.getItem('astraeus-latest-reference');
        const isKnownReference = savedReference && value.toUpperCase() === savedReference.toUpperCase();
        const looksLikeOrder = /^AST[-\s]?\d{4}/i.test(value);

        result.innerHTML = `
            <span>${isKnownReference || looksLikeOrder ? 'Concierge status: Inquiry received' : 'Tracking request received'}</span>
            <p>当前环境尚未连接订单数据库或物流 API。部署并配置 DATABASE_URL / AFTERSHIP_API_KEY 后，这里将显示实时订单与物流节点。</p>
        `;
    }
}

function initOrderPage() {
    const orderDetail = document.getElementById('orderDetail');
    if (!orderDetail) return;

    const params = new URLSearchParams(window.location.search);
    const reference = params.get('id') || params.get('session_id');
    if (!reference) {
        orderDetail.innerHTML = '<p class="admin-empty">Missing order reference.</p>';
        return;
    }

    if (params.get('session_id')) {
        localStorage.removeItem(CART_STORAGE_KEY);
        updateCartCount();
    }

    renderOrderStatus(reference);
}

async function renderOrderStatus(reference) {
    const orderDetail = document.getElementById('orderDetail');
    if (!orderDetail) return;

    orderDetail.innerHTML = '<p class="admin-empty">Loading order status...</p>';
    try {
        const response = await fetch(`/api/tracking?reference=${encodeURIComponent(reference)}`);
        const data = await readApiJson(response);
        if (!response.ok) throw new Error(data.error || 'Order not found');

        orderDetail.innerHTML = `
            <div class="order-status-card">
                <span class="service-kicker">${escapeHtml(data.orderId)}</span>
                <h1 class="detail-title">Order received</h1>
                ${renderTrackingSummary(data)}
                ${renderOrderTimeline(data.events || [])}
                <p class="cart-note">私人顾问会确认尺码、证书、保价物流和交付时间。</p>
            </div>
        `;
    } catch (error) {
        orderDetail.innerHTML = `<p class="admin-empty">${escapeHtml(error.message)}</p>`;
    }
}

function initAdminPage() {
    const adminApp = document.getElementById('adminApp');
    if (!adminApp) return;

    const tokenInput = document.getElementById('adminToken');
    const loadButton = document.getElementById('loadOrdersButton');
    const loadInquiriesButton = document.getElementById('loadInquiriesButton');
    const exportInquiriesButton = document.getElementById('exportInquiriesButton');
    const configButton = document.getElementById('checkConfigButton');
    const savedToken = sessionStorage.getItem('astraeus-admin-token');
    if (tokenInput && savedToken) tokenInput.value = savedToken;

    if (loadButton) {
        loadButton.addEventListener('click', () => loadAdminOrders(tokenInput?.value || ''));
    }
    if (loadInquiriesButton) {
        loadInquiriesButton.addEventListener('click', () => loadAdminInquiries(tokenInput?.value || ''));
    }
    if (exportInquiriesButton) {
        exportInquiriesButton.addEventListener('click', () => exportAdminInquiries(tokenInput?.value || ''));
    }
    if (configButton) {
        configButton.addEventListener('click', () => loadAdminConfig(tokenInput?.value || ''));
    }
    if (tokenInput) {
        tokenInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') loadAdminConfig(tokenInput.value || '');
        });
    }
}

async function loadAdminConfig(token) {
    const configOutput = document.getElementById('adminConfig');
    if (!configOutput) return;
    configOutput.innerHTML = '<p class="admin-empty">Checking production setup...</p>';

    try {
        const response = await fetch('/api/admin/config', {
            headers: { 'x-admin-token': token }
        });
        const data = await readApiJson(response);
        if (!response.ok) throw new Error(data.error || 'Unable to check setup');

        sessionStorage.setItem('astraeus-admin-token', token);
        configOutput.innerHTML = `
            <article class="admin-config-card ${data.ready ? 'ready' : 'missing'}">
                <div class="admin-order-head">
                    <strong>${data.ready ? 'Production setup ready' : 'Setup incomplete'}</strong>
                    <span>${data.ready ? 'READY' : `${data.missing.length} MISSING`}</span>
                </div>
                <div class="config-checks">
                    ${data.checks.map((check) => `
                        <div class="config-check ${check.configured ? 'ready' : 'missing'}">
                            <span>${check.configured ? 'READY' : 'MISSING'}</span>
                            <strong>${escapeHtml(check.label)}</strong>
                            <p>${escapeHtml(check.key)} · ${escapeHtml(check.purpose)}</p>
                        </div>
                    `).join('')}
                </div>
                <p class="cart-note">AfterShip API version: ${escapeHtml(data.aftershipApiVersion || '2026-01')}</p>
            </article>
        `;
    } catch (error) {
        configOutput.innerHTML = `<p class="admin-empty">${escapeHtml(error.message)}</p>`;
    }
}

async function loadAdminOrders(token) {
    const adminOutput = document.getElementById('adminOrders');
    if (!adminOutput) return;
    adminOutput.innerHTML = '<p class="admin-empty">Loading orders...</p>';

    try {
        const response = await fetch('/api/admin/orders', {
            headers: { 'x-admin-token': token }
        });
        const data = await readApiJson(response);
        if (!response.ok) throw new Error(data.error || 'Unable to load orders');

        if (!data.orders.length) {
            adminOutput.innerHTML = '<p class="admin-empty">No orders yet.</p>';
            return;
        }

        adminOutput.innerHTML = data.orders.map((order) => `
            <article class="admin-order">
                <div class="admin-order-head">
                    <strong>${escapeHtml(order.id)}</strong>
                    <span>${escapeHtml(order.status)} · ${escapeHtml(order.payment_status)} · ${escapeHtml(order.fulfillment_status)}</span>
                </div>
                <div class="admin-row"><span>Customer</span><strong>${escapeHtml(order.customer_email || 'Unknown')}</strong></div>
                <div class="admin-row"><span>Total</span><strong>${formatCurrency((order.total_cents || 0) / 100, order.currency || 'USD')}</strong></div>
                <div class="admin-row"><span>Tracking</span><strong>${escapeHtml(order.carrier_slug || '-')} ${escapeHtml(order.tracking_number || '')}</strong></div>
                <div class="admin-update">
                    <select data-field="status" data-order="${escapeHtml(order.id)}">
                        ${renderSelectOptions(['checkout_created', 'checkout_failed', 'paid', 'processing', 'fulfilled', 'cancelled', 'refunded'], order.status)}
                    </select>
                    <select data-field="paymentStatus" data-order="${escapeHtml(order.id)}">
                        ${renderSelectOptions(['unpaid', 'paid', 'refunded', 'failed'], order.payment_status)}
                    </select>
                    <select data-field="fulfillmentStatus" data-order="${escapeHtml(order.id)}">
                        ${renderSelectOptions(['pending', 'preparing', 'dispatched', 'in_transit', 'delivered', 'exception'], order.fulfillment_status)}
                    </select>
                    <input placeholder="Carrier slug" value="${escapeHtml(order.carrier_slug || '')}" data-field="carrierSlug" data-order="${escapeHtml(order.id)}">
                    <input placeholder="Tracking number" value="${escapeHtml(order.tracking_number || '')}" data-field="trackingNumber" data-order="${escapeHtml(order.id)}">
                    <button type="button" onclick="updateAdminOrder('${escapeAttribute(order.id)}')">Update</button>
                </div>
            </article>
        `).join('');
        sessionStorage.setItem('astraeus-admin-token', token);
    } catch (error) {
        adminOutput.innerHTML = `<p class="admin-empty">${escapeHtml(error.message)}</p>`;
    }
}

async function loadAdminInquiries(token) {
    const adminOutput = document.getElementById('adminInquiries');
    if (!adminOutput) return;
    adminOutput.innerHTML = '<p class="admin-empty">Loading inquiries...</p>';

    try {
        const response = await fetch('/api/admin/inquiries?limit=200', {
            headers: { 'x-admin-token': token }
        });
        const data = await readApiJson(response);
        if (!response.ok) throw new Error(data.error || 'Unable to load inquiries');

        if (!data.inquiries.length) {
            adminOutput.innerHTML = '<p class="admin-empty">No inquiries yet.</p>';
            return;
        }

        adminOutput.innerHTML = data.inquiries.map((inquiry) => `
            <article class="admin-order">
                <div class="admin-order-head">
                    <strong>${escapeHtml(inquiry.name || 'Private inquiry')}</strong>
                    <span>${escapeHtml(formatTimelineDate(inquiry.created_at))} · ${escapeHtml(inquiry.status || 'new')}</span>
                </div>
                <div class="admin-row"><span>Email</span><strong>${escapeHtml(inquiry.email || '-')}</strong></div>
                <div class="admin-row"><span>Phone</span><strong>${escapeHtml(inquiry.phone || '-')}</strong></div>
                <div class="admin-row"><span>Selected Piece</span><strong>${escapeHtml(inquiry.selected_piece || '-')}</strong></div>
                <div class="admin-row"><span>Cart</span><strong>${escapeHtml(inquiry.cart_summary || '-')}</strong></div>
                <p class="cart-note">${escapeHtml(inquiry.inquiry || 'No message provided.')}</p>
                <div class="admin-inquiry-actions">
                    <button type="button" onclick="updateAdminInquiry('${escapeAttribute(inquiry.id)}', 'archive')">归档</button>
                    <button class="danger" type="button" onclick="updateAdminInquiry('${escapeAttribute(inquiry.id)}', 'delete')">删除</button>
                </div>
            </article>
        `).join('');
        sessionStorage.setItem('astraeus-admin-token', token);
    } catch (error) {
        adminOutput.innerHTML = `<p class="admin-empty">${escapeHtml(error.message)}</p>`;
    }
}

async function exportAdminInquiries(token) {
    if (!token) {
        alert('Enter ADMIN_API_TOKEN first');
        return;
    }
    try {
        const response = await fetch('/api/admin/inquiries?format=csv&limit=500', {
            headers: { 'x-admin-token': token }
        });
        if (!response.ok) {
            const data = await readApiJson(response);
            throw new Error(data.error || 'Export failed');
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'astraeus-inquiries.csv';
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        sessionStorage.setItem('astraeus-admin-token', token);
    } catch (error) {
        alert(error.message || 'Export failed');
    }
}

async function updateAdminInquiry(inquiryId, action) {
    const token = sessionStorage.getItem('astraeus-admin-token') || document.getElementById('adminToken')?.value || '';
    const actionLabel = action === 'delete' ? '删除' : '归档';
    if (action === 'delete' && !confirm('确定要永久删除这条询盘吗？此操作无法撤销。')) {
        return;
    }

    const response = await fetch('/api/admin/update-inquiry', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-admin-token': token
        },
        body: JSON.stringify({ inquiryId, action })
    });
    const data = await readApiJson(response);
    if (!response.ok) {
        alert(data.error || `${actionLabel}失败`);
        return;
    }
    await loadAdminInquiries(token);
}

async function updateAdminOrder(orderId) {
    const token = sessionStorage.getItem('astraeus-admin-token') || document.getElementById('adminToken')?.value || '';
    const fields = document.querySelectorAll(`[data-order="${orderId}"]`);
    const patch = { orderId };
    fields.forEach((field) => {
        patch[field.dataset.field] = field.value.trim();
    });

    const response = await fetch('/api/admin/update-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-admin-token': token
        },
        body: JSON.stringify(patch)
    });
    const data = await readApiJson(response);
    if (!response.ok) {
        alert(data.error || 'Update failed');
        return;
    }
    await loadAdminOrders(token);
}

async function readApiJson(response) {
    const text = await response.text();
    if (!text) return {};
    try {
        return JSON.parse(text);
    } catch (error) {
        return {
            error: response.ok
                ? 'The server returned an unreadable response.'
                : 'The service is not available in this preview environment.'
        };
    }
}

function renderTrackingSummary(data) {
    const trackingLine = data.trackingNumber
        ? `${data.carrierSlug || 'carrier'} ${data.trackingNumber}`
        : 'Pending concierge dispatch';
    const checkpoint = data.aftership?.data?.checkpoint || data.aftership?.checkpoint;
    const checkpointText = checkpoint
        ? `${checkpoint.checkpoint_time || ''} ${checkpoint.location || ''} ${checkpoint.message || checkpoint.tag || ''}`.trim()
        : '';

    return `
        <div class="tracking-summary">
            <div class="admin-row"><span>Order</span><strong>${escapeHtml(data.orderId || '-')}</strong></div>
            <div class="admin-row"><span>Status</span><strong>${escapeHtml(data.status || '-')}</strong></div>
            <div class="admin-row"><span>Payment</span><strong>${escapeHtml(data.paymentStatus || '-')}</strong></div>
            <div class="admin-row"><span>Fulfillment</span><strong>${escapeHtml(data.fulfillmentStatus || '-')}</strong></div>
            <div class="admin-row"><span>Tracking</span><strong>${escapeHtml(trackingLine)}</strong></div>
            ${checkpointText ? `<p class="tracking-checkpoint">${escapeHtml(checkpointText)}</p>` : ''}
        </div>
    `;
}

function renderOrderTimeline(events = []) {
    if (!events.length) {
        return '<div class="order-timeline"><span class="deterministic-label">TIMELINE · 履约记录</span><p class="cart-note">Timeline will update after payment and concierge processing.</p></div>';
    }

    return `
        <div class="order-timeline">
            <span class="deterministic-label">TIMELINE · 履约记录</span>
            ${events.map((event) => `
                <div class="timeline-item">
                    <span>${escapeHtml(formatTimelineDate(event.created_at))}</span>
                    <strong>${escapeHtml(event.message || event.type || 'Order update')}</strong>
                    <p>${escapeHtml(event.type || '')}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function formatTimelineDate(value) {
    if (!value) return 'Pending';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    return date.toLocaleString('en-US', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
}

function renderSelectOptions(options, currentValue) {
    return options.map((option) => {
        const selected = option === currentValue ? ' selected' : '';
        return `<option value="${escapeAttribute(option)}"${selected}>${escapeHtml(option)}</option>`;
    }).join('');
}

function createServiceReference() {
    const date = new Date();
    const reference = `AST-${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}-${String(date.getHours()).padStart(2, '0')}${String(date.getMinutes()).padStart(2, '0')}`;
    localStorage.setItem('astraeus-latest-reference', reference);
    return reference;
}

function formatProductPrice(product) {
    if (!product || !product.price) return 'Price upon inquiry';
    return formatCurrency(product.price, product.currency || 'USD');
}

function formatCurrency(value, currency) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        maximumFractionDigits: 0
    }).format(value);
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[char]);
}

function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, '&#96;');
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

    if (popup && wechatBtn && !popup.contains(e.target) && e.target !== wechatBtn && !wechatBtn.contains(e.target)) {
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
