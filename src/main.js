// База данных оптового каталога (все 122 позиции на английском языке)
const productsData = [
    // --- AKYUREK ---
    { code: "A-001", brand: "akyurek", name: "Ak ýürek Key of Happiness Assorti", weight: "160 gr", pack: "12 шт в коробке" },
    { code: "A-002", brand: "akyurek", name: "Ak ýürek Key of Happiness Assorti", weight: "168 gr", pack: "12 шт в коробке" },
    { code: "A-003", brand: "akyurek", name: "Ak ýürek Key of Happiness Assorti", weight: "112 gr", pack: "12 шт в коробке" },
    { code: "A-004", brand: "akyurek", name: "Ak ýürek Key of Happiness Assorti", weight: "112 gr", pack: "12 шт в коробке" },
    { code: "A-005", brand: "akyurek", name: "Ak ýürek hazelnut flavored milky baton", weight: "40 gr", pack: "24 шт / 6 коробок" },
    { code: "A-006", brand: "akyurek", name: "Akyürek milky baton", weight: "2500 gr", pack: "Оптовый блок" },
    { code: "A-007", brand: "akyurek", name: "Ak ýürek Premium", weight: "3000 gr", pack: "Оптовый блок" },
    { code: "A-008", brand: "akyurek", name: "Ak ýurek Premium", weight: "3000 gr", pack: "Оптовый блок" },

    // --- ALYBER ---
    { code: "A-009", brand: "alyber", name: "Alyber confectionery tablet with strawberry pieces", weight: "30 gr", pack: "24 шт / 6 коробок" },
    { code: "A-010", brand: "alyber", name: "Alyber hazelnut flavored milky confectionery tablet", weight: "30 gr", pack: "24 шт / 6 коробок" },
    { code: "A-011", brand: "alyber", name: "Alyber hazelnut flavored bitter confectionery tablet", weight: "30 gr", pack: "24 шт / 6 коробок" },
    { code: "A-012", brand: "alyber", name: "Alyber hazelnut flavored milky confectionery tablet (New Year)", weight: "30 gr", pack: "24 шт / 6 коробок" },
    { code: "A-013", brand: "alyber", name: "Alyber hazelnut flavored milky baton", weight: "16 gr", pack: "48 шт / 12 коробок" },
    { code: "A-014", brand: "alyber", name: "Alyber hazelnut flavored bitter baton", weight: "16 gr", pack: "48 шт / 12 коробок" },
    { code: "A-015", brand: "alyber", name: "Alyber hazelnut flavored bitter baton", weight: "8 gr", pack: "60 шт / 12 коробок" },
    { code: "A-016", brand: "alyber", name: "Alyber hazelnut flavored milky baton", weight: "8 gr", pack: "60 шт / 12 коробок" },
    { code: "A-017", brand: "alyber", name: "Alyber bitter baton filled with hazelnut flavored cream", weight: "2500 gr", pack: "Оптовый блок" },
    { code: "A-018", brand: "alyber", name: "Alyber milky baton filled with hazelnut flavored cream", weight: "2500 gr", pack: "Оптовый блок" },

    // --- JANYM ---
    { code: "A-019", brand: "janym", name: "Janym hazelnut flavored milky baton", weight: "16 gr", pack: "48 шт / 12 коробок" },
    { code: "A-020", brand: "janym", name: "Janym milky candy", weight: "250 gr", pack: "8 коробок" },
    { code: "A-021", brand: "janym", name: "Janym milky baton filled with hazelnut flavored cream", weight: "1000 gr", pack: "5 коробок" },
    { code: "A-022", brand: "janym", name: "Janym bitter baton filled with hazelnut flavored cream", weight: "1000 gr", pack: "6 коробок" },

    // --- ALTYN DAG ---
    { code: "A-023", brand: "altyndag", name: "Altyn dag milky chocolate tablet", weight: "70 gr", pack: "12 шт / 6 коробок" },
    { code: "A-024", brand: "altyndag", name: "Altyn dag milky chocolate tablet (New Year)", weight: "70 gr", pack: "12 шт / 6 коробок" },
    { code: "A-025", brand: "altyndag", name: "Altyn dag bitter chocolate tablet", weight: "70 gr", pack: "12 шт / 6 коробок" },
    { code: "A-026", brand: "altyndag", name: "Altyn dag bitter chocolate tablet (New Year)", weight: "70 gr", pack: "12 шт / 6 коробок" },
    { code: "A-027", brand: "altyndag", name: "Altyn dag bitter chocolate sweet with praline mass", weight: "300 gr", pack: "6 коробок" },
    { code: "A-028", brand: "altyndag", name: "Altyn dag Mixed chocolate sweets (New Year)", weight: "300 gr", pack: "6 коробок" },
    { code: "A-029", brand: "altyndag", name: "Altyn dag bitter sweet with orange flavored filled with bitter chocolate", weight: "300 gr", pack: "6 коробок" },
    { code: "A-030", brand: "altyndag", name: "Altyn dag milky chocolate sweet with praline mass", weight: "300 gr", pack: "6 коробок" },
    { code: "A-031", brand: "altyndag", name: "Altyn dag Mixed chocolate sweets", weight: "300 gr", pack: "6 коробок" },
    { code: "A-032", brand: "altyndag", name: "Altyn dag vanilla milky chocolate sweet", weight: "300 gr", pack: "6 коробок" },
    { code: "A-033", brand: "altyndag", name: "Altyn dag bitter chocolate sweet with praline mass", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-034", brand: "altyndag", name: "Altyn dag milky chocolate sweet with praline mass", weight: "1000 gr", pack: "Оптовый блок" },
    { code: "A-035", brand: "altyndag", name: "Altyn dag vanilla milky chocolate sweet", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-036", brand: "altyndag", name: "Altyn dag bitter sweet with orange flavored filled with bitter chocolate", weight: "2000 gr", pack: "Оптовый блок" },

    // --- MERW ---
    { code: "A-037", brand: "merw", name: "Merw sweet with sesame fast glazed with bitter chocolate", weight: "45 gr", pack: "12 шт / 4 коробки" },
    { code: "A-038", brand: "merw", name: "Merw sweet with orange flavor glazed with bitter chocolate", weight: "45 gr", pack: "12 шт / 4 коробки" },
    { code: "A-039", brand: "merw", name: "Merw chocolate sweet with peanut flavor glazed with bitter chocolate", weight: "45 gr", pack: "12 шт / 4 коробки" },
    { code: "A-040", brand: "merw", name: "Merw bitter chocolate candy with hazelnut", weight: "45 gr", pack: "12 шт / 4 коробки" },
    { code: "A-041", brand: "merw", name: "Merw milky chocolate candy with hazelnut", weight: "45 gr", pack: "12 шт / 4 коробки" },
    { code: "A-042", brand: "merw", name: "Merw paste with sesame flavor glazed with bitter chocolate", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-043", brand: "merw", name: "Merw sweet with orange flavor glazed with bitter chocolate", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-044", brand: "merw", name: "Merw chocolate sweet with peanut flavor glazed with bitter chocolate", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-045", brand: "merw", name: "Merw bitter chocolate candy with hazelnut", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-046", brand: "merw", name: "Merw milky chocolate candy with hazelnut", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-047", brand: "merw", name: "Merw sweet with raspberry flavor glazed with bitter chocolate", weight: "2000 gr", pack: "Оптовый блок" },

    // --- BALTOP ---
    { code: "A-048", brand: "baltop", name: "Baltop bitter/milky chocolate candy (Mix)", weight: "150 gr", pack: "Коробка" },
    { code: "A-049", brand: "baltop", name: "Baltop bitter/milky chocolate candy (Mix)", weight: "150 gr", pack: "12 шт" },
    { code: "A-050", brand: "baltop", name: "Baltop bitter/milky chocolate candy (Mix)", weight: "225 gr", pack: "Коробка" },
    { code: "A-051", brand: "baltop", name: "Baltop milky chocolate candy with hazelnut", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-052", brand: "baltop", name: "Baltop bitter chocolate candy with hazelnut", weight: "2000 gr", pack: "Оптовый блок" },

    // --- BABELLA ---
    { code: "A-053", brand: "babella", name: "Babella Duo chocolate paste", weight: "250 gr", pack: "12 шт" },
    { code: "A-054", brand: "babella", name: "Babella Hazelnut chocolate paste", weight: "250 gr", pack: "12 шт" },
    { code: "A-055", brand: "babella", name: "Babella Duo chocolate paste", weight: "400 gr", pack: "12 шт" },
    { code: "A-056", brand: "babella", name: "Babella Hazelnut chocolate paste", weight: "400 gr", pack: "12 шт" },
    { code: "A-057", brand: "babella", name: "Babella Duo chocolate paste", weight: "400 gr", pack: "12 шт" },
    { code: "A-058", brand: "babella", name: "Babella Hazelnut chocolate paste", weight: "400 gr", pack: "12 шт" },
    { code: "A-059", brand: "babella", name: "Babella Duo chocolate paste", weight: "650 gr", pack: "Коробка" },
    { code: "A-060", brand: "babella", name: "Babella Hazelnut chocolate paste", weight: "650 gr", pack: "12 шт" },
    { code: "A-061", brand: "babella", name: "Babella Duo chocolate paste", weight: "900 gr", pack: "8 шт" },
    { code: "A-062", brand: "babella", name: "Babella Hazelnut chocolate paste", weight: "900 gr", pack: "Коробка" },
    { code: "A-063", brand: "babella", name: "Babella Hazelnut chocolate paste", weight: "350 gr", pack: "12 шт" },
    { code: "A-064", brand: "babella", name: "Babella Praline chocolate paste", weight: "350 gr", pack: "12 шт" },
    { code: "A-065", brand: "babella", name: "Babella Hazelnut chocolate paste", weight: "350 gr", pack: "12 шт" },
    { code: "A-066", brand: "babella", name: "Babella Praline chocolate paste", weight: "350 gr", pack: "12 шт" },

    // --- MIKOO ---
    { code: "A-067", brand: "mikoo", name: "Mikoo Panda milky chocolate", weight: "65 gr", pack: "20 шт" },
    { code: "A-068", brand: "mikoo", name: "Mikoo Panda milky chocolate", weight: "65 gr", pack: "20 шт" },
    { code: "A-069", brand: "mikoo", name: "Mikoo Panda milky chocolate", weight: "65 gr", pack: "20 шт" },
    { code: "A-070", brand: "mikoo", name: "Mikoo Panda milky chocolate", weight: "65 gr", pack: "20 шт" },
    { code: "A-071", brand: "mikoo", name: "Mikoo Panda milky chocolate", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-072", brand: "mikoo", name: "Mikoo Panda milky chocolate", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-073", brand: "mikoo", name: "Mikoo Panda milky chocolate", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-074", brand: "mikoo", name: "Mikoo Panda milky chocolate", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-075", brand: "mikoo", name: "Mikoo Panda milky chocolate MIX", weight: "500 gr", pack: "Оптовый блок" },
    { code: "A-076", brand: "mikoo", name: "Mikoo Car milky chocolate", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-077", brand: "mikoo", name: "Mikoo Car milky chocolate", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-078", brand: "mikoo", name: "Mikoo Car milky chocolate", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-079", brand: "mikoo", name: "Mikoo Car milky chocolate", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-080", brand: "mikoo", name: "Mikoo Car milky chocolate", weight: "60 gr", pack: "20 шт" },
    { code: "A-081", brand: "mikoo", name: "Mikoo Car milky chocolate", weight: "40 gr", pack: "20 шт" },
    { code: "A-082", brand: "mikoo", name: "Mikoo Car milky chocolate", weight: "60 gr", pack: "20 шт" },
    { code: "A-083", brand: "mikoo", name: "Mikoo Car milky chocolate", weight: "60 gr", pack: "20 шт" },
    { code: "A-084", brand: "mikoo", name: "Mikoo Car milky chocolate MIX", weight: "500 gr", pack: "Оптовый блок" },

    // --- TURKMENISTAN ---
    { code: "A-085", brand: "turkmenistan", name: "Turkmenistan bitter milky chocolate", weight: "210 gr", pack: "8 коробок" },
    { code: "A-086", brand: "turkmenistan", name: "Turkmenistan bitter chocolate", weight: "70 gr", pack: "12 шт / 6 коробок" },
    { code: "A-087", brand: "turkmenistan", name: "Turkmenistan milky chocolate", weight: "70 gr", pack: "12 шт / 6 коробок" },

    // --- SYRDAS ---
    { code: "A-088", brand: "syrdas", name: "Syrdas peanut flavored bar", weight: "1000 gr", pack: "6 коробок" },
    { code: "A-089", brand: "syrdas", name: "Syrdas bitter bar", weight: "1000 gr", pack: "6 коробок" },
    { code: "A-090", brand: "syrdas", name: "Syrdas bitter bar with filling", weight: "1000 gr", pack: "6 коробок" },
    { code: "A-091", brand: "syrdas", name: "Syrdas Truffle type candies with orange flavor", weight: "1000 gr", pack: "6 коробок" },
    { code: "A-092", brand: "syrdas", name: "Syrdas Truffle type candies with strawberry flavor", weight: "1000 gr", pack: "6 коробок" },
    { code: "A-093", brand: "syrdas", name: "Syrdas Truffle type candies with lemon flavor", weight: "1000 gr", pack: "6 коробок" },
    { code: "A-094", brand: "syrdas", name: "Syrdas Milk bar", weight: "1000 gr", pack: "4 коробки" },
    { code: "A-095", brand: "syrdas", name: "Syrdas Bitter bar", weight: "1000 gr", pack: "6 коробок" },

    // --- SYRDAS PASTA ---
    { code: "A-096", brand: "syrdaspasta", name: "Syrdas Bitter dessert paste", weight: "500 gr", pack: "12 шт" },
    { code: "A-097", brand: "syrdaspasta", name: "Syrdas Bitter dessert paste", weight: "350 gr", pack: "12 шт" },
    { code: "A-098", brand: "syrdaspasta", name: "Syrdas Bitter dessert paste", weight: "150 gr", pack: "12 шт" },
    { code: "A-099", brand: "syrdaspasta", name: "Syrdas Dessert paste with peanut taste", weight: "500 gr", pack: "12 шт" },
    { code: "A-100", brand: "syrdaspasta", name: "Syrdas Dessert paste with peanut taste", weight: "350 gr", pack: "12 шт" },
    { code: "A-101", brand: "syrdaspasta", name: "Syrdas Dessert paste with peanut taste", weight: "150 gr", pack: "12 шт" },
    { code: "A-102", brand: "syrdaspasta", name: "Syrdas Milk dessert paste", weight: "500 gr", pack: "12 шт" },
    { code: "A-103", brand: "syrdaspasta", name: "Syrdas Milk dessert paste", weight: "350 gr", pack: "12 шт" },
    { code: "A-104", brand: "syrdaspasta", name: "Syrdas Milk dessert paste", weight: "150 gr", pack: "12 шт" },

    // --- SYRDAS (Продолжение) ---
    { code: "A-105", brand: "syrdas", name: "Syrdas Peanut flavored bar", weight: "84 gr", pack: "12 шт" },
    { code: "A-106", brand: "syrdas", name: "Syrdas Peanut flavored bar", weight: "84 gr", pack: "12 шт" },
    { code: "A-107", brand: "syrdas", name: "Syrdas Peanut flavored bar (NEW YEAR)", weight: "84 gr", pack: "12 шт" },
    { code: "A-108", brand: "syrdas", name: "Syrdas Cocoa bar", weight: "500 gr", pack: "6 коробок" },
    { code: "A-109", brand: "syrdas", name: "Syrdas White bar", weight: "500 gr", pack: "6 коробок" },
    { code: "A-110", brand: "syrdas", name: "Syrdas Milk bar", weight: "500 gr", pack: "6 коробок" },

    // --- CHOCOLEY ---
    { code: "A-111", brand: "chocoley", name: "Chocoley Cocoa bar", weight: "450 gr", pack: "6 коробок" },
    { code: "A-112", brand: "chocoley", name: "Chocoley White bar", weight: "450 gr", pack: "6 коробок" },
    { code: "A-113", brand: "chocoley", name: "Chocoley Milk bar", weight: "450 gr", pack: "6 коробок" },

    // --- LOVER, MORSELLO, KARALINA ---
    { code: "A-114", brand: "lover", name: "Lover premium classic", weight: "300 gr", pack: "6 коробок" },
    { code: "A-115", brand: "lover", name: "Lover premium classic", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-116", brand: "morsello", name: "Morsello premium classic", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-117", brand: "morsello", name: "Morsello premium classic", weight: "300 gr", pack: "6 коробок" },
    { code: "A-118", brand: "karalina", name: "Karalina premium classic", weight: "300 gr", pack: "6 коробок" },
    { code: "A-119", brand: "karalina", name: "Karalina premium classic", weight: "2000 gr", pack: "Оптовый блок" },
    { code: "A-120", brand: "lover", name: "Lover peanut cocoa confectionery bar", weight: "32.5 gr", pack: "18 шт / 6 коробок" },
    { code: "A-121", brand: "mikoo", name: "Mikoo cocoa bar", weight: "32.5 gr", pack: "18 шт / 6 коробок" },
    { code: "A-122", brand: "karalina", name: "Karalina peanut cocoa confectionery bar", weight: "46 gr", pack: "12 шт" }
];

function renderProducts(filterCategory, targetBtn = null) {
    const container = document.getElementById('catalog-container');
    if (!container) return;

    container.innerHTML = '';

    if (targetBtn) {
        document.querySelectorAll('.brand-tab').forEach(tab => {
            tab.classList.remove('bg-amber-500', 'text-black');
            tab.classList.add('bg-[#1A1816]', 'text-amber-200');
        });
        targetBtn.classList.remove('bg-[#1A1816]', 'text-amber-200');
        targetBtn.classList.add('bg-amber-500', 'text-black');
    }

    const filtered = filterCategory === 'all' 
        ? productsData 
        : productsData.filter(item => item.brand === filterCategory);

    filtered.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "product-card bg-[#1A1816] rounded-2xl p-5 border border-amber-900/30 flex flex-col shadow-lg";
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index % 4) * 50);

        const imgFileName = item.code.toLowerCase() + '.png';
        const imgPath = `assets/catalog/${imgFileName}`;

        card.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-3">
                    <span class="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded font-mono font-bold">Code: ${item.code}</span>
                    <span class="text-xs text-gray-400 font-medium">${item.weight}</span>
                </div>
                <!-- Кликабельный блок картинки для увеличения -->
                <div onclick="openModal('${imgPath}', '${item.code} - ${item.name.replace(/'/g, "")}')" 
                     class="h-36 bg-[#3D2922] rounded-xl mb-3 overflow-hidden flex items-center justify-center p-2 cursor-pointer active:scale-95 transition-transform">
                    <img src="${imgPath}" 
                         alt="${item.name}" 
                         data-code="${item.code.toLowerCase()}"
                         class="product-img h-full w-full object-contain"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <span class="text-amber-200/60 font-semibold text-xs text-center" style="display: none;">[ Photo ${item.code} ]</span>
                </div>
                <span class="text-[10px] text-amber-500 uppercase tracking-widest font-bold">${item.brand.toUpperCase()}</span>
                <h3 class="text-sm font-bold mt-0.5 mb-1 leading-tight text-white">${item.name}</h3>
                <p class="text-xs text-gray-400">${item.pack}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50
        });
    }

    renderProducts('all');

    if (document.querySelector('.heroSwiper')) {
        new Swiper('.heroSwiper', {
            loop: true,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            autoplay: { delay: 3500, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
        });
    }

    if (document.querySelector('.certSwiper')) {
        new Swiper('.certSwiper', {
            loop: true,
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: { delay: 3000, disableOnInteraction: false },
            breakpoints: {
                640: { slidesPerView: 3, spaceBetween: 40 },
                1024: { slidesPerView: 3, spaceBetween: 60 }
            }
        });
    }
});
