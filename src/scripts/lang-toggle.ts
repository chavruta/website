const FORM_URL = 'https://forms.gle/hziLtmJYyiqWpH5u8';

const hashToLang: Record<string, string> = {
  en: 'en', eng: 'en', english: 'en',
  he: 'he', heb: 'he', hebrew: 'he', 'עברית': 'he',
  ar: 'ar', ara: 'ar', arabic: 'ar', 'العربية': 'ar',
};

const langConfig: Record<string, { idx: number; lang: string; dir: string; title: string }> = {
  en: { idx: 0, lang: 'en', dir: 'ltr', title: 'Chavruta — AI-Powered Emergency Education for Israel' },
  he: { idx: 1, lang: 'he', dir: 'rtl', title: 'חברותא — למידה מונעת AI לילדי ישראל' },
  ar: { idx: 2, lang: 'ar', dir: 'rtl', title: 'حَبْروتا — تعليم طوارئ مدعوم بالذكاء الاصطناعي لأطفال إسرائيل' },
};

function showLang(lang: string) {
  document.querySelectorAll('.section-en, .section-he, .section-ar').forEach(el => el.classList.remove('visible'));
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));

  const cfg = langConfig[lang];
  if (!cfg) return;

  document.querySelector(`.section-${lang}`)?.classList.add('visible');
  document.querySelectorAll('.lang-btn')[cfg.idx]?.classList.add('active');
  document.documentElement.lang = cfg.lang;
  document.documentElement.dir = cfg.dir;
  document.title = cfg.title;
  history.replaceState(null, '', `#${lang}`);
}

function langFromHash(): string | null {
  const hash = location.hash.slice(1).toLowerCase();
  return hashToLang[hash] || null;
}

// Attach click handlers to language buttons
document.querySelectorAll('.lang-btn').forEach((btn, idx) => {
  const langs = ['en', 'he', 'ar'];
  btn.addEventListener('click', () => showLang(langs[idx]));
});

// Handle hash changes
window.addEventListener('hashchange', () => {
  const lang = langFromHash();
  if (lang) showLang(lang);
});

// On load, check hash
const initialLang = langFromHash();
if (initialLang) showLang(initialLang);
