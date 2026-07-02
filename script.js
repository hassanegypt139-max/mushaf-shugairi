const surahs = [
    {n:1,name:"الفاتحة",t:"مكية",a:7},{n:2,name:"البقرة",t:"مدنية",a:286},
    {n:3,name:"آل عمران",t:"مدنية",a:200},{n:4,name:"النساء",t:"مدنية",a:176},
    {n:5,name:"المائدة",t:"مدنية",a:120},{n:6,name:"الأنعام",t:"مكية",a:165},
    {n:7,name:"الأعراف",t:"مكية",a:206},{n:8,name:"الأنفال",t:"مدنية",a:75},
    {n:9,name:"التوبة",t:"مدنية",a:129},{n:10,name:"يونس",t:"مكية",a:109},
    {n:11,name:"هود",t:"مكية",a:123},{n:12,name:"يوسف",t:"مكية",a:111},
    {n:13,name:"الرعد",t:"مدنية",a:43},{n:14,name:"إبراهيم",t:"مكية",a:52},
    {n:15,name:"الحجر",t:"مكية",a:99},{n:16,name:"النحل",t:"مكية",a:128},
    {n:17,name:"الإسراء",t:"مكية",a:111},{n:18,name:"الكهف",t:"مكية",a:110},
    {n:19,name:"مريم",t:"مكية",a:98},{n:20,name:"طه",t:"مكية",a:135},
    {n:21,name:"الأنبياء",t:"مكية",a:112},{n:22,name:"الحج",t:"مدنية",a:78},
    {n:23,name:"المؤمنون",t:"مكية",a:118},{n:24,name:"النور",t:"مدنية",a:64},
    {n:25,name:"الفرقان",t:"مكية",a:77},{n:26,name:"الشعراء",t:"مكية",a:227},
    {n:27,name:"النمل",t:"مكية",a:93},{n:28,name:"القصص",t:"مكية",a:88},
    {n:29,name:"العنكبوت",t:"مكية",a:69},{n:30,name:"الروم",t:"مكية",a:60},
    {n:31,name:"لقمان",t:"مكية",a:34},{n:32,name:"السجدة",t:"مكية",a:30},
    {n:33,name:"الأحزاب",t:"مدنية",a:73},{n:34,name:"سبأ",t:"مكية",a:54},
    {n:35,name:"فاطر",t:"مكية",a:45},{n:36,name:"يس",t:"مكية",a:83},
    {n:37,name:"الصافات",t:"مكية",a:182},{n:38,name:"ص",t:"مكية",a:88},
    {n:39,name:"الزمر",t:"مكية",a:75},{n:40,name:"غافر",t:"مكية",a:85},
    {n:41,name:"فصلت",t:"مكية",a:54},{n:42,name:"الشورى",t:"مكية",a:53},
    {n:43,name:"الزخرف",t:"مكية",a:89},{n:44,name:"الدخان",t:"مكية",a:59},
    {n:45,name:"الجاثية",t:"مكية",a:37},{n:46,name:"الأحقاف",t:"مكية",a:35},
    {n:47,name:"محمد",t:"مدنية",a:38},{n:48,name:"الفتح",t:"مدنية",a:29},
    {n:49,name:"الحجرات",t:"مدنية",a:18},{n:50,name:"ق",t:"مكية",a:45},
    {n:51,name:"الذاريات",t:"مكية",a:60},{n:52,name:"الطور",t:"مكية",a:49},
    {n:53,name:"النجم",t:"مكية",a:62},{n:54,name:"القمر",t:"مكية",a:55},
    {n:55,name:"الرحمن",t:"مدنية",a:78},{n:56,name:"الواقعة",t:"مكية",a:96},
    {n:57,name:"الحديد",t:"مدنية",a:29},{n:58,name:"المجادلة",t:"مدنية",a:22},
    {n:59,name:"الحشر",t:"مدنية",a:24},{n:60,name:"الممتحنة",t:"مدنية",a:13},
    {n:61,name:"الصف",t:"مدنية",a:14},{n:62,name:"الجمعة",t:"مدنية",a:11},
    {n:63,name:"المنافقون",t:"مدنية",a:11},{n:64,name:"التغابن",t:"مدنية",a:18},
    {n:65,name:"الطلاق",t:"مدنية",a:12},{n:66,name:"التحريم",t:"مدنية",a:12},
    {n:67,name:"الملك",t:"مكية",a:30},{n:68,name:"القلم",t:"مكية",a:52},
    {n:69,name:"الحاقة",t:"مكية",a:52},{n:70,name:"المعارج",t:"مكية",a:44},
    {n:71,name:"نوح",t:"مكية",a:28},{n:72,name:"الجن",t:"مكية",a:28},
    {n:73,name:"المزمل",t:"مكية",a:20},{n:74,name:"المدثر",t:"مكية",a:56},
    {n:75,name:"القيامة",t:"مكية",a:40},{n:76,name:"الإنسان",t:"مدنية",a:31},
    {n:77,name:"المرسلات",t:"مكية",a:50},{n:78,name:"النبأ",t:"مكية",a:40},
    {n:79,name:"النازعات",t:"مكية",a:46},{n:80,name:"عبس",t:"مكية",a:42},
    {n:81,name:"التكوير",t:"مكية",a:29},{n:82,name:"الانفطار",t:"مكية",a:19},
    {n:83,name:"المطففين",t:"مكية",a:36},{n:84,name:"الانشقاق",t:"مكية",a:25},
    {n:85,name:"البروج",t:"مكية",a:22},{n:86,name:"الطارق",t:"مكية",a:17},
    {n:87,name:"الأعلى",t:"مكية",a:19},{n:88,name:"الغاشية",t:"مكية",a:26},
    {n:89,name:"الفجر",t:"مكية",a:30},{n:90,name:"البلد",t:"مكية",a:20},
    {n:91,name:"الشمس",t:"مكية",a:15},{n:92,name:"الليل",t:"مكية",a:21},
    {n:93,name:"الضحى",t:"مكية",a:11},{n:94,name:"الشرح",t:"مكية",a:8},
    {n:95,name:"التين",t:"مكية",a:8},{n:96,name:"العلق",t:"مكية",a:19},
    {n:97,name:"القدر",t:"مكية",a:5},{n:98,name:"البينة",t:"مدنية",a:8},
    {n:99,name:"الزلزلة",t:"مدنية",a:8},{n:100,name:"العاديات",t:"مكية",a:11},
    {n:101,name:"القارعة",t:"مكية",a:11},{n:102,name:"التكاثر",t:"مكية",a:8},
    {n:103,name:"العصر",t:"مكية",a:3},{n:104,name:"الهمزة",t:"مكية",a:9},
    {n:105,name:"الفيل",t:"مكية",a:5},{n:106,name:"قريش",t:"مكية",a:4},
    {n:107,name:"الماعون",t:"مكية",a:7},{n:108,name:"الكوثر",t:"مكية",a:3},
    {n:109,name:"الكافرون",t:"مكية",a:6},{n:110,name:"النصر",t:"مدنية",a:3},
    {n:111,name:"المسد",t:"مكية",a:5},{n:112,name:"الإخلاص",t:"مكية",a:4},
    {n:113,name:"الفلق",t:"مكية",a:5},{n:114,name:"الناس",t:"مكية",a:6}
];

const athkar = [
    {c:"morning",text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ",count:1,benefit:"من قالها كتب الله له ما بعدها من الخير"},
    {c:"morning",text:"اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",count:1,benefit:"دعاء بداية اليوم"},
    {c:"morning",text:"اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ",count:1,benefit:"سيد الاستغفار"},
    {c:"morning",text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",count:100,benefit:"حُطَّت خطاياه ولو كانت مثل زبد البحر"},
    {c:"morning",text:"لاَ إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",count:10,benefit:"كانت له عدل عشر رقاب"},
    {c:"morning",text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",count:100,benefit:"مائة حسنة ومغفرة"},
    {c:"morning",text:"اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",count:10,benefit:"صلاة على النبي"},
    
    {c:"evening",text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ",count:1,benefit:"من قالها كتب الله له ما بعدها من الخير"},
    {c:"evening",text:"اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",count:1,benefit:"دعاء المساء"},
    {c:"evening",text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",count:3,benefit:"لم تضره حُمَة تلك الليلة"},
    {c:"evening",text:"بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",count:3,benefit:"لم يضره شيء"},
    {c:"evening",text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",count:3,benefit:"كلمات ثقيلات في الميزان"},
    
    {c:"sleep",text:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",count:1,benefit:"دعاء قبل النوم"},
    {c:"sleep",text:"اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",count:3,benefit:"من أذكار النوم"},
    {c:"sleep",text:"سُبْحَانَ اللَّهِ",count:33,benefit:"تسبيح قبل النوم"},
    {c:"sleep",text:"الْحَمْدُ لِلَّهِ",count:33,benefit:"تحميد قبل النوم"},
    {c:"sleep",text:"اللَّهُ أَكْبَرُ",count:34,benefit:"تكبير قبل النوم"},
    {c:"sleep",text:"آيَةُ الْكُرْسِيِّ",count:1,benefit:"من قرأها قبل النوم لا يزال عليه من الله حافظ"},
    
    {c:"prayer",text:"أَسْتَغْفِرُ اللَّهَ (ثلاثًا) اللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ",count:1,benefit:"بعد السلام من الصلاة"},
    {c:"prayer",text:"سُبْحَانَ اللَّه",count:33,benefit:"تسبيح بعد الصلاة"},
    {c:"prayer",text:"الْحَمْدُ لِلَّه",count:33,benefit:"تحميد بعد الصلاة"},
    {c:"prayer",text:"اللَّهُ أَكْبَرُ",count:34,benefit:"تكبير بعد الصلاة"},
    {c:"prayer",text:"لاَ إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",count:1,benefit:"المعوذات بعد الصلاة"}
];

const duas = [
    {title:"دعاء الهم والحزن",text:"اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي"},
    {title:"دعاء الحاجة",text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى"},
    {title:"دعاء قبل الأكل",text:"بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ"},
    {title:"دعاء بعد الأكل",text:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ"},
    {title:"دعاء السفر",text:"سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ"},
    {title:"دعاء المطر",text:"اللَّهُمَّ صَيِّبًا نَافِعًا"},
    {title:"دعاء دخول المنزل",text:"بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا"},
    {title:"دعاء لبس الثوب",text:"الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ"}
];

// ==================== القرآن ====================
function renderSurahs(filter = '') {
    const list = document.getElementById('surahList');
    const filtered = surahs.filter(s => s.name.includes(filter));
    list.innerHTML = filtered.map(s => `
        <div class="surah-card" onclick="openSurah(${s.n})">
            <div class="surah-number">${s.n}</div>
            <div class="surah-info">
                <div class="surah-name">سورة ${s.name}</div>
                <div class="surah-meta">
                    <span>📍 ${s.t}</span>
                    <span>📜 ${s.a} آية</span>
                </div>
            </div>
        </div>
    `).join('');
}

document.getElementById('searchInput').addEventListener('input', e => {
    renderSurahs(e.target.value);
});

async function openSurah(num) {
    document.getElementById('homePage').style.display = 'none';
    const page = document.getElementById('surahPage');
    page.classList.add('active');
    
    const surah = surahs.find(s => s.n === num);
    document.getElementById('surahTitle').textContent = `سورة ${surah.name}`;
    document.getElementById('surahInfo').textContent = `${surah.t} • ${surah.a} آية`;
    
    const container = document.getElementById('ayahContainer');
    container.innerHTML = '<div class="loading"><div class="spinner"></div><p>جاري التحميل...</p></div>';
    
    try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${num}/ar.abdulbasitmurattal`);
        const data = await res.json();
        
        if (data.code === 200) {
            const surahData = data.data;
            let html = num !== 1 && num !== 9 ? '<div class="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>' : '';
            
            surahData.ayahs.forEach(ayah => {
                html += `<div class="ayah" onclick="playSurah(${num})">${ayah.text} <span class="ayah-number">${ayah.numberInSurah}</span></div>`;
            });
            
            container.innerHTML = html;
        } else {
            container.innerHTML = '<div class="loading"><p>❌ حدث خطأ</p></div>';
        }
    } catch (e) {
        container.innerHTML = '<div class="loading"><p>❌ لا يوجد اتصال</p></div>';
    }
}

function goHome() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('surahPage').classList.remove('active');
    document.getElementById('audioPlayer').style.display = 'none';
    document.getElementById('audio').pause();
}

function playSurah(num) {
    const surah = surahs.find(s => s.n === num);
    const audio = document.getElementById('audio');
    const player = document.getElementById('audioPlayer');
    
    audio.src = `https://cdn.islamic.network/quran/audio-surah/128/ar.abdulbasit/${num}.mp3`;
    audio.play();
    
    document.getElementById('playerName').textContent = `سورة ${surah.name}`;
    player.style.display = 'flex';
}

function togglePlay() {
    const audio = document.getElementById('audio');
    const btn = document.getElementById('playBtn');
    if (audio.paused) {
        audio.play();
        btn.textContent = '⏸';
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}

function closePlayer() {
    document.getElementById('audioPlayer').style.display = 'none';
    document.getElementById('audio').pause();
}

// ==================== التبويبات ====================
function switchTab(tab) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tab + 'Page').classList.add('active');
    event.target.classList.add('active');
}

// ==================== الأذكار ====================
let currentFilter = 'all';

function renderAthkar(filter = 'all') {
    currentFilter = filter;
    const list = document.getElementById('athkarList');
    const filtered = filter === 'all' ? athkar : athkar.filter(a => a.c === filter);
    
    list.innerHTML = filtered.map((a, i) => `
        <div class="athkar-item">
            <span class="athkar-counter">${a.count > 1 ? '× ' + a.count : ''}</span>
            <div class="athkar-text">${a.text}</div>
            <div class="athkar-benefit">${a.benefit}</div>
            <div class="athkar-actions">
                <button class="athkar-btn counter-btn" id="counter-${i}" onclick="countAthkar(${i}, ${a.count})">🔢 تسبيح (0/${a.count})</button>
                <button class="athkar-btn" onclick="copyText('${a.text.replace(/'/g, "\\'")}')">📋 نسخ</button>
            </div>
        </div>
    `).join('');
}

function filterAthkar(filter) {
    document.querySelectorAll('.cat-btn').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    renderAthkar(filter);
}

let counters = {};
function countAthkar(index, total) {
    if (!counters[index]) counters[index] = 0;
    counters[index]++;
    if (counters[index] > total) counters[index] = 0;
    
    const btn = document.getElementById(`counter-${index}`);
    btn.textContent = `🔢 تسبيح (${counters[index]}/${total})`;
    btn.classList.add('counted');
    setTimeout(() => btn.classList.remove('counted'), 200);
    
    if (navigator.vibrate) navigator.vibrate(50);
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ تم النسخ');
    });
}

// ==================== الأدعية ====================
function renderDuas() {
    const list = document.getElementById('duaList');
    list.innerHTML = duas.map(d => `
        <div class="dua-item">
            <div class="dua-title">🤲 ${d.title}</div>
            <div class="dua-text">${d.text}</div>
            <div class="athkar-actions">
                <button class="athkar-btn" onclick="copyText('${d.text.replace(/'/g, "\\'")}')">📋 نسخ الدعاء</button>
            </div>
        </div>
    `).join('');
}

// ==================== PWA ====================
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installBtn').style.display = 'block';
});

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

// ==================== تشغيل ====================
renderSurahs();
renderAthkar();
renderDuas();
