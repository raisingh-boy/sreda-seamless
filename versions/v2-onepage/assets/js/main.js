/* ═══════════════════════════════════════
   VERSION 3 — Main
   ═══════════════════════════════════════ */

// ═══ Viewport Fix — если браузер застрял в «Режим ПК» на телефоне
(function(){
  // Флаг чтобы не зациклиться
  if (sessionStorage.getItem('vp-fixed')) return;
  var sw = window.screen.width;
  var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  if (sw > 0 && sw < 600 && vw > 768) {
    var m = document.querySelector('meta[name="viewport"]');
    if (m) {
      m.setAttribute('content', 'width=' + sw + ', initial-scale=1.0');
      sessionStorage.setItem('vp-fixed', '1');
      window.location.reload();
    }
  }
})();

const LANG = {
  en: {
    'lbl-edition': 'sreda+seamless',
    't-main': 'Performance & iPhone',
    't-sub': 'An online exhibition',
    't-line': 'Two masters of contemporary dance.<br>One evening of conversation, practice, and discovery.',
    't-date': 'June 7 · 19:00 CET',
    't-lang': 'Russian with English translation',
    't-scroll': '↓ Enter the exhibition',

    'a-name': 'Alexander Andriyashkin',
    'a-role': 'Choreographer · Director · Educator',
    'a-quote': '"The body is not an instrument.<br>The body is the event."',
    'a-bio': 'Golden Mask nominee. Creator of The_Marusya. Interdisciplinary works at the intersection of contemporary dance, theatre and performance. Since 2014 — author of his own movement laboratory exploring stage presence and new forms of interaction between body, space and audience.',

    'v-name': 'Vladimir Varnava',
    'v-role': 'Dancer · Choreographer · Director',
    'v-quote': '"Movement is not something you do.<br>Movement is something you witness."',
    'v-bio': 'Two-time Golden Mask nominee. Artist of the Mariinsky Theatre. Participant of Context. Diana Vishneva festival. His distinctive style blends authentic physicality with theatricality, humour and deep exploration of human nature. Works presented across Europe, Asia and the Americas.',

    'e-title': 'Free materials',
    'e-sub': 'Two exhibits — watch before the webinar to enter the context.',
    'e1-tag': 'Theory',
    'e1-name': 'Andriyashkin — 100 years in 100 minutes',
    'e1-desc': 'A lecture-performance on the history of contemporary dance. From modern to post-modern to now.',
    'e2-tag': 'Practice',
    'e2-name': 'Varnava — Body & Gravity',
    'e2-desc': 'A practical session on weight, gravity and presence in movement. Exercises you can do at home.',

    'c-title': 'Tools of the Performative Body',
    'c-desc': 'How to use your body as a tool for expression in social media. Not about going viral. About presence. About being seen.',
    'top-1': 'What is performance vs dance — and where is the line?',
    'top-2': 'Social media as a full stage for contemporary art',
    'top-3': 'Practical tools and approaches for making performance',
    'top-4': 'Live Q&A — ask your teachers anything',

    'cm-date': 'Date',
    'cv-date': 'June 7 · 19:00 CET / 20:00 MSK',
    'cm-format': 'Format',
    'cv-format': 'Online · 1–2 hours · Zoom',
    'cm-lang': 'Language',
    'cv-lang': 'Russian with English translation',
    'cm-rec': 'Recording',
    'cv-rec': 'Available to all participants',

    'cp-cur': '$47',
    'cp-info': 'Early bird — use code EARLY47',
    'col-text': 'Join two masters of contemporary dance for an evening of conversation, practice and discovery. After payment you\'ll receive the Zoom link and recording access.',
    'btn-en': 'Buy ticket — $47',
    'btn-ru': 'Купить билет — $47',

    'f-line': 'An online exhibition · June 7, 2026',
  },
  ru: {
    'lbl-edition': 'sreda+seamless',
    't-main': 'Performance & iPhone',
    't-sub': 'Онлайн-выставка',
    't-line': 'Два мастера современного танца.<br>Один вечер разговора, практики и открытий.',
    't-date': '7 июня · 19:00 CET',
    't-lang': 'Русский с английским переводом',
    't-scroll': '↓ Войти в экспозицию',

    'a-name': 'Александр Андрияшкин',
    'a-role': 'Хореограф · Режиссёр · Педагог',
    'a-quote': '«Тело — не инструмент.<br>Тело — это событие.»',
    'a-bio': 'Номинант «Золотой Маски». Создатель проекта The_Marusya. Междисциплинарные проекты на стыке современного танца, театра и перформанса. С 2014 — автор собственной лаборатории движения, исследующей сценическое присутствие и новые формы взаимодействия тела, пространства и зрителя.',

    'v-name': 'Владимир Варнава',
    'v-role': 'Танцовщик · Хореограф · Режиссёр',
    'v-quote': '«Движение — это не то, что ты делаешь.<br>Движение — это то, чему ты свидетель.»',
    'v-bio': 'Двукратный номинант «Золотой Маски». Артист Мариинского театра. Участник фестиваля Context. Diana Vishneva. Его стиль сочетает подлинную физичность с театральностью, юмором и глубоким исследованием человеческой природы. Работы представлены в Европе, Азии и Америке.',

    'e-title': 'Бесплатные материалы',
    'e-sub': 'Два экспоната — посмотрите перед вебинаром, чтобы войти в контекст.',
    'e1-tag': 'Теория',
    'e1-name': 'Андрияшкин — 100 лет за 100 минут',
    'e1-desc': 'Лекция-перформанс по истории современного танца. От модерна до постмодерна до наших дней.',
    'e2-tag': 'Практика',
    'e2-name': 'Варнава — Тело и гравитация',
    'e2-desc': 'Практическое занятие о весе, гравитации и присутствии в движении. Упражнения, которые можно делать дома.',

    'c-title': 'Инструменты перформативного тела',
    'c-desc': 'Как использовать своё тело как инструмент выражения в социальных медиа. Не про вирусность. Про присутствие. Про то, как быть увиденным.',
    'top-1': 'Чем перформанс отличается от танца — и где граница?',
    'top-2': 'Социальные сети как полноценная сцена для современного искусства',
    'top-3': 'Практические инструменты и подходы к созданию перформанса',
    'top-4': 'Живой Q&A — спросите учителей о чём угодно',

    'cm-date': 'Дата',
    'cv-date': '7 июня · 19:00 CET / 20:00 MSK',
    'cm-format': 'Формат',
    'cv-format': 'Онлайн · 1–2 часа · Zoom',
    'cm-lang': 'Язык',
    'cv-lang': 'Русский с английским переводом',
    'cm-rec': 'Запись',
    'cv-rec': 'Доступна всем участникам',

    'cp-cur': '$47',
    'cp-info': 'Ранняя птица — код EARLY47',
    'col-text': 'Присоединяйтесь к двум мастерам современного танца на вечер разговора, практики и открытий. После оплаты вы получите ссылку на Zoom и доступ к записи.',
    'btn-en': 'Buy ticket — $47',
    'btn-ru': 'Купить билет — $47',

    'f-line': 'Онлайн-выставка · 7 июня 2026',
  },
};

// Video IDs by language
const VIDEOS = {
  andriyashkin: { en: 'JlVPtblL_2g', ru: '0-pUiSubwSI' },
  varnava: { en: 'EYgnHrYCMHQ', ru: 'pyU1CMrvRLA' },
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.body.className = 'lang-' + lang;

  // Update toggle buttons
  document.querySelectorAll('.ln').forEach(b => b.classList.remove('ln-active'));
  document.querySelector('.ln[data-lang="' + lang + '"]').classList.add('ln-active');

  // Update all text nodes
  const data = LANG[lang];
  for (const [id, text] of Object.entries(data)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = text;
  }

  // Store preference
  try { localStorage.setItem('seamless-lang', lang); } catch(e) {}
}

function playVid(n) {
  const name = n === 1 ? 'andriyashkin' : 'varnava';
  const id = VIDEOS[name][currentLang];
  const embed = document.getElementById('e' + n + '-embed');
  if (!embed) return;
  embed.classList.remove('hidden');
  embed.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}

// Init — restore saved language
document.addEventListener('DOMContentLoaded', () => {
  try {
    const saved = localStorage.getItem('seamless-lang');
    if (saved && LANG[saved]) setLang(saved);
    else setLang('en');
  } catch(e) {
    setLang('en');
  }

  // Touch support for clip videos
  document.querySelectorAll('.spread-vids video').forEach(v => {
    v.addEventListener('click', function() {
      if (this.paused) { this.play(); } else { this.pause(); }
    });
    v.addEventListener('touchstart', function(e) {
      e.preventDefault();
      if (this.paused) { this.play(); } else { this.pause(); }
    }, { passive: false });
    // Mouse hover
    v.addEventListener('mouseenter', function() { this.play(); });
    v.addEventListener('mouseleave', function() { this.pause(); });
  });
});
