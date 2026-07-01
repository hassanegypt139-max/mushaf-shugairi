// ===========================
// 📖 مصحف الشقيري - سكريبت
// ===========================

// السور الـ 18 اللي عايزينها بس (عشان التطبيق يفتح بسرعة)
const surahsData = [
    { number: 1, name: "الفاتحة", type: "مكية", ayatCount: 7 },
    { number: 2, name: "البقرة", type: "مدنية", ayatCount: 286 },
    { number: 18, name: "الكهف", type: "مكية", ayatCount: 110 },
    { number: 19, name: "مريم", type: "مكية", ayatCount: 98 },
    { number: 20, name: "طه", type: "مكية", ayatCount: 135 },
    { number: 36, name: "يس", type: "مكية", ayatCount: 83 },
    { number: 55, name: "الرحمن", type: "مدنية", ayatCount: 78 },
    { number: 56, name: "الواقعة", type: "مكية", ayatCount: 96 },
    { number: 67, name: "الملك", type: "مكية", ayatCount: 30 },
    { number: 78, name: "النبأ", type: "مكية", ayatCount: 40 },
    { number: 93, name: "الضحى", type: "مكية", ayatCount: 11 },
    { number: 94, name: "الشرح", type: "مكية", ayatCount: 8 },
    { number: 97, name: "القدر", type: "مكية", ayatCount: 5 },
    { number: 112, name: "الإخلاص", type: "مكية", ayatCount: 4 },
    { number: 113, name: "الفلق", type: "مكية", ayatCount: 5 },
    { number: 114, name: "الناس", type: "مكية", ayatCount: 6 },
    { number: 115, name: "النصر", type: "مدنية", ayatCount: 3 },
    { number: 116, name: "الكافرون", type: "مكية", ayatCount: 6 }
];

// ===========================
// 🎬 لما الصفحة تفتح
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    renderSurahsList();
    registerServiceWorker();
});

// ===========================
// 📋 عرض قائمة السور
// ===========================
function renderSurahsList() {
    const list = document.getElementById('surahsList');
    if (!list) return;
    
    list.innerHTML = surahsData.map(surah => `
        <div class="surah-card" onclick="openSurah(${surah.number})">
            <div class="surah-number">${surah.number}</div>
            <div class="surah-info">
                <div class="surah-name">${surah.name}</div>
                <div class="surah-meta">
                    <span>📍 ${surah.type}</span>
                    <span>📜 ${surah.ayatCount} آية</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===========================
// 📖 فتح سورة
// ===========================
async function openSurah(number) {
    // إخفاء القائمة
    document.getElementById('homePage').style.display = 'none';
    
    // إظهار صفحة السورة
    const surahPage = document.getElementById('surahPage');
    surahPage.classList.add('active');
    document.getElementById('backBtn').classList.add('active');
    
    // تحميل
    surahPage.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>جاري تحميل السورة...</p>
        </div>
    `;
    
    try {
        // جلب من API
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${number}/ar.alafasy`);
        const data = await response.json();
        
        if (data.code === 200) {
            displaySurah(data.data);
        } else {
            surahPage.innerHTML = `
                <div class="loading">
                    <p>❌ حدث خطأ في تحميل السورة</p>
                    <button onclick="openSurah(${number})" style="margin-top:15px;padding:10px 20px;background:var(--primary);color:white;border:none;border-radius:8px;cursor:pointer;">
                        🔄 حاول مرة أخرى
                    </button>
                </div>
            `;
        }
    } catch (error) {
        surahPage.innerHTML = `
            <div class="loading">
                <p>❌ لا يوجد اتصال بالإنترنت</p>
                <p style="font-size:14px;margin-top:10px;">تأكد من اتصالك وحاول مرة أخرى</p>
            </div>
        `;
    }
}

// ===========================
// 📜 عرض السورة
// ===========================
function displaySurah(surah) {
    const surahPage = document.getElementById('surahPage');
    
    const bismillah = surah.number !== 1 && surah.number !== 9 
        ? '<div class="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>' 
        : '';
    
    const ayatHtml = surah.ayahs.map(ayah => `
        <span class="ayah" onclick="playAyah('${ayah.audio}', ${ayah.numberInSurah})">
            ${ayah.text}
            <span class="ayah-number">${ayah.numberInSurah}</span>
        </span>
    `).join(' ');
    
    surahPage.innerHTML = `
        <div class="surah-header">
            <h2>سورة ${surah.name}</h2>
            <p class="meta">${surah.revelationType} • ${surah.numberOfAyahs} آية</p>
        </div>
        ${bismillah}
        <div class="ayahs-container">
            ${ayatHtml}
        </div>
    `;
}

// ===========================
// 🔊 تشغيل الآية
// ===========================
let currentAudio = null;

function playAyah(audioUrl, ayahNumber) {
    // إيقاف الصوت الحالي
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    // تشغيل الجديد
    currentAudio = new Audio(audioUrl);
    currentAudio.play().catch(err => {
        console.log('خطأ في تشغيل الصوت:', err);
    });
}

// ===========================
// 🔙 الرجوع للقائمة
// ===========================
function goBack() {
    // إيقاف أي صوت شغال
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('surahPage').classList.remove('active');
    document.getElementById('backBtn').classList.remove('active');
}

// ===========================
// 🔧 Service Worker (للـ PWA)
// ===========================
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('✅ Service Worker مسجّل'))
                .catch(err => console.log('❌ خطأ في Service Worker:', err));
        });
    }
}