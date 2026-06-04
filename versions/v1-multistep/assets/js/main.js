/* ===== SEAMLESS WEBINAR — JS v4 (расширенная форма + свои ответы + q7) ===== */
const lang = {
  ru: {
    "lang-subtitle": "Выбери язык",
    "lang-quote": "«Поднимите руку, если за последний месяц вы видели перформанс» — поднялась половина группы.<br>«А теперь те, кто смотрел stories или Reels» — встали все.",
    "lang-quote-author": "— Александр Андрияшкин",
    "lang-email-label": "Email",
    "lang-name-label": "Имя",
    "lang-country-label": "Страна",
    "custom-submit": "Отправить",
    "btn-email-submit": "Получить доступ →",
    "teachers-step": "ШАГ 1",
    "survey-1-step": "ШАГ 2",
    "content-1-step": "ШАГ 3",
    "survey-2-step": "ШАГ 4",
    "content-2-step": "ШАГ 5",
    "webinar-step": "ШАГ 6",
    "back-lang": "Назад",
    "back-teachers": "Кураторы",
    "back-survey-1": "Вопросы",
    "back-content-1": "Теория",
    "back-survey-2": "Вопросы",
    "back-content-2": "Материалы",
    "welcome-title": "Кураторы",
    "welcome-desc": "Лекция и практика от Александра Андрияшкина и Владимира Варнавы — «Зачем нам performance, если у нас есть iPhone»",
    "trust-years-l": "ЛЕТ ОПЫТА",
    "trust-awards-l": "ЗОЛОТАЯ МАСКА",
    "trust-countries-l": "СТРАН",
    "trust-price-l": "ВКЛАД",
    "trust-seats-l": "МЕСТ ОСТАЛОСЬ",
    "trust-days-l": "СЕССИЯ 2 ЧАСА",
    "teacher-1-name": "Александр Андрияшкин",
    "teacher-1-role": "Хореограф, режиссёр, педагог",
    "teacher-1-bio": "Лауреат «Золотой Маски» (премия 2017 — спектакль The_Marusya). Шортлист Aerowaves (топ-20 хореографов Европы). Резиденции: Jacob's Pillow (США), Tanzquartier (Вена), SiWiC (Цюрих). Преподавал в 14 странах — от США до Японии.",
    "teacher-2-name": "Владимир Варнава",
    "teacher-2-role": "Танцовщик, хореограф, режиссёр",
    "teacher-2-bio": "Двукратный лауреат «Золотой Маски» (2011, 2014 — лучшая мужская роль). Лауреат Harlequin (2011). Победитель Context. Diana Vishneva (2013). Постановки в Мариинском театре, Пермском театре оперы и балета, AKHE театре.",
    "welcome-cta": "Получить бесплатные материалы — ответить на 6 вопросов",
    "btn-to-survey": "Получить бесплатные материалы →",
    
    "sq1-title": "Когда смотришь на себя в видео или рилс — что чувствуешь?",
    "sq1-opt1": "Вижу себя — и мне это нравится",
    "sq1-opt2": "Что-то не то: выгляжу не так, как ощущаю внутри",
    "sq1-opt3": "Напрягаюсь, зажимаюсь, начинаю «играть на камеру»",
    "sq1-opt4": "Давно не смотрел на себя со стороны",
    "sq1-other": "Другое: напиши свой ответ",
    "sq2-title": "Что из этого резонирует прямо сейчас?",
    "sq2-opt1": "Хочу понять, как работать с телом не только на сцене",
    "sq2-opt2": "Связь движения, присутствия и цифрового мира",
    "sq2-opt3": "Хочу сделать что-то своё — выразить через тело",
    "sq2-opt4": "Интересуюсь contemporary dance, но не знаю с чего начать",
    "sq2-other": "Другое: напиши свой ответ",
    "sq3-title": "Вкладывал(а) деньги в развитие за последний год?",
    "sq3-opt1": "Да, инвестирую регулярно",
    "sq3-opt2": "Да, один-два раза",
    "sq3-opt3": "Пока нет, но думаю об этом",
    "sq3-opt4": "Нет, предпочитаю бесплатные форматы",
    "sq3-other": "Другое: напиши свой ответ",
    
    "content-1-title": "Твой первый материал",
    "content-1-desc": "Теория: История современного танца",
    "content-1-note": "",
    "v1-label": "Андрияшкин — 100 лет за 100 минут",
    "v1-desc": "Перфолекция об истории современного танца. От модерна до метамодерна.",
    "content-1-cta": "Хочешь ещё? Ответь на 4 вопроса →",
    "btn-to-survey-2": "Продолжить →",
    
    "sq4-title": "Чем ты занимаешься?",
    "sq4-opt1": "Работаю с телом: танец, движение, театр, йога, спорт",
    "sq4-opt2": "Визуальный контент: фото, видео, дизайн, соцсети",
    "sq4-opt3": "Помогающие профессии: коуч, психолог, педагог",
    "sq4-opt4": "Предпринимаю что-то своё — онлайн или офлайн",
    "sq4-other": "Другое: напиши свой ответ",
    "sq5-title": "Если бы вложил(а) деньги в обучение прямо сейчас — что бы это было?",
    "sq5-opt1": "Работа с телом, движением, присутствием",
    "sq5-opt2": "Съёмка, монтаж, контент для соцсетей",
    "sq5-opt3": "Личный бренд и самопозиционирование",
    "sq5-opt4": "Творческое самовыражение — найти свой голос",
    "sq5-other": "Другое: напиши свой ответ",
    "sq6-title": "Как часто появляешься в кадре — в рилсах, сторис, видео?",
    "sq6-opt1": "Регулярно снимаю — часть работы или жизни",
    "sq6-opt2": "Иногда снимаю, но без системы",
    "sq6-opt3": "Хотел бы снимать, но что-то останавливает",
    "sq6-opt4": "Не снимаю и пока не планирую",
    "sq6-other": "Другое: напиши свой ответ",
    "sq7-title": "Как часто ты появляешься в кадре — в Рилсах, сторис, видео?",
    "sq7-opt1": "Регулярно снимаю — это часть моей работы или жизни",
    "sq7-opt2": "Иногда снимаю, но без системы",
    "sq7-opt3": "Хотел(а) бы снимать, но что-то останавливает",
    "sq7-opt4": "Не снимаю и пока не планирую",
    "sq7-other": "Другое: впиши свой ответ",
    
    "content-2-title": "Твои бесплатные материалы готовы",
    "content-2-desc": "Практика: Body & Gravity с Варнавой",
    "v2-label": "Варнава — Body & Gravity (RUS)",
    "v2-desc": "Танц практика: вес, гравитация и присутствие в движении.",
    "want-more-text": "Хочешь глубже? Присоединяйся к полному курсу.",
    "btn-want-more": "Хочу больше →",
    
    "badge-webinar": "sreda+seamless",
    "webinar-title": "Зачем нам performance если у нас есть iPhone",
    "webinar-sub": "Современное искусство во времена рилс",
    "problem-title": "Вопрос",
    "problem-text": "Что происходит, когда перформанс покидает театр и оказывается в телефоне? Когда движение переживается через экран? Когда соцсети становятся местом, где мы показываем и конструируем себя?",
    "why-title": "Почему мы делаем этот интенсив",
    "why-p1": "Мы живём в эпоху контента. Каждый день снимаем сторис, рилсы, видео, созвоны. Камера стала частью нашей жизни — нравится нам это или нет.",
    "why-p2": "Нас постоянно учат алгоритмам, охватам и удержанию внимания. Но почти никто не говорит о человеке по ту сторону камеры.",
    "why-p3": "Почему в жизни ты один, а в кадре становишься другим? Почему тело напрягается? Почему исчезает живое присутствие?",
    "research-title": "Что мы будем исследовать",
    "research-1": "Телефон как новая сцена",
    "research-2": "Перформанс в эпоху соцсетей",
    "research-3": "Присутствие и тело в кадре",
    "research-4": "Камера как пространство высказывания",
    "research-5": "Как движение меняется, проходя через экран",
    "not-title": "Мы не будем говорить",
    "not-1": "Как набрать просмотры",
    "not-2": "Как обмануть алгоритмы",
    "not-3": "Как снять вирусный рилс",
    "yes-title": "Мы будем говорить",
    "yes-1": "Что происходит с человеком в кадре",
    "yes-2": "Как камера меняет присутствие",
    "yes-3": "Почему телефон стал новой сценой",
    "yes-4": "Как использовать видео как художественное высказывание",
    "for-title": "Кому это может быть интересно",
    "for-1": "Ты работаешь с движением, перформансом или хореографией",
    "for-2": "Создаёшь контент и чувствуешь: здесь есть что-то глубже охватов",
    "for-3": "Тебе интересна связь тела, изображения и внимания",
    "for-4": "Хочешь понять, как эволюционирует перформанс в эпоху соцсетей",
    "for-5": "Чувствуешь: телефон может быть не просто камерой, а сценой",
    "for-6": "Тебе интересно присутствие, тело и цифровой век — даже если ты не танцор",
    "outcomes-title": "Что останется с вами после этого опыта",
    "outcome-1": "Новое отношение к камере — как к пространству перформанса",
    "outcome-2": "Понимание: почему движение меняется, попадая в кадр",
    "outcome-3": "Взгляд на присутствие в цифровой среде",
    "outcome-4": "Новые вопросы о перформансе в эпоху соцсетей",
    "format-title": "Формат",
    "format-1": "2-часовая сессия: инструменты для создания перформанса",
    "format-2": "Возможность задать вопросы в прямом эфире",
    "format-3": "",
    "format-4": "Запись остаётся после вебинара",
    "session-ru-label": "🇷🇺 Русская сессия",
    "session-en-label": "🇬🇧 Английская сессия",
    "session-ru-date-label": "7 июля, вторник",
    "session-en-date-label": "15 июля, среда",
    "faq-q1": "Нужен ли опыт танцев?",
    "faq-a1": "Любой уровень. Интенсив подходит и новичкам, и практикующим танцорам, перформерам, исследователям движения — и всем, кому интересна тема тела и камеры.",
    "faq-q2": "Будет ли запись?",
    "faq-a2": "Да, все участники получат запись.",
    "faq-q3": "Как это работает онлайн?",
    "faq-a3": "Ты получишь приватную Zoom-ссылку после покупки.",
    "timer-label": "Специальная цена действует до:",
    "price-old": "$67",
    "price-current": "$47",
    "price-info": "Текущая цена — $47. После Early Bird — $67",
    "btn-buy": "Купить билет — $47",
    "buy-link": "https://web.tribute.tg/s/X01",
    "small-text": ""
  },
  en: {
    "lang-subtitle": "Choose your language",
    "lang-quote": "«Raise your hand if in the last month you've seen a performance» — half the group raised their hand.<br>«Now those who watched stories or Reels» — everyone stood up.",
    "lang-quote-author": "— Alexander Andriyashkin",
    "lang-email-label": "Email",
    "lang-name-label": "Name",
    "lang-country-label": "Country",
    "custom-submit": "Submit",
    "btn-email-submit": "Get access →",
    "teachers-step": "STEP 1",
    "survey-1-step": "STEP 2",
    "content-1-step": "STEP 3",
    "survey-2-step": "STEP 4",
    "content-2-step": "STEP 5",
    "webinar-step": "STEP 6",
    "back-lang": "Back",
    "back-teachers": "Curators",
    "back-survey-1": "Questions",
    "back-content-1": "Theory",
    "back-survey-2": "Questions",
    "back-content-2": "Materials",
    "welcome-title": "Curators",
    "welcome-desc": "Lecture and practice from Alexander Andriyashkin and Vladimir Varnava — \"Why do we need performance if we have an iPhone\"",
    "trust-years-l": "YEARS EXPERIENCE",
    "trust-awards-l": "GOLDEN MASK",
    "trust-countries-l": "COUNTRIES",
    "trust-price-l": "INVESTMENT",
    "trust-seats-l": "SEATS LEFT",
    "trust-days-l": "SESSION 2h",
    "teacher-1-name": "Alexander Andriyashkin",
    "teacher-1-role": "Choreographer, director, educator",
    "teacher-1-bio": "Laureate of the Golden Mask Award (2017 — The_Marusya). Aerowaves shortlist (Europe's top 20 choreographers). Residencies: Jacob's Pillow (USA), Tanzquartier (Vienna), SiWiC (Zurich). Taught in 14 countries — from the US to Japan.",
    "teacher-2-name": "Vladimir Varnava",
    "teacher-2-role": "Dancer, choreographer, director",
    "teacher-2-bio": "Two-time Golden Mask laureate (2011, 2014 — Best Male Role in Ballet). Harlequin Award winner (2011). Winner of Context. Diana Vishneva choreography competition (2013). Productions at Mariinsky Theatre, Perm Opera, AKHE Theatre.",
    "welcome-cta": "Get free materials — answer 6 quick questions",
    "btn-to-survey": "Get free materials →",
    
    "sq1-title": "When you watch yourself in a video or Reel — what do you feel?",
    "sq1-opt1": "I see myself — and I like it",
    "sq1-opt2": "Something is off: I look different from how I feel inside",
    "sq1-opt3": "I tense up, freeze, start performing for the camera",
    "sq1-opt4": "I haven't watched myself in a while — interesting question",
    "sq1-other": "Other: write your own answer",
    "sq2-title": "Which of these speaks to you right now?",
    "sq2-opt1": "Work with body and space — not just on stage",
    "sq2-opt2": "Connection between movement, presence and digital world",
    "sq2-opt3": "I want to make something of my own — express through body",
    "sq2-opt4": "Curious about contemporary dance, don't know where to start",
    "sq2-other": "Other: write your own answer",
    "sq3-title": "Have you invested money in your growth in the last year?",
    "sq3-opt1": "Yes, I invest regularly",
    "sq3-opt2": "Yes, once or twice",
    "sq3-opt3": "Not yet, but thinking about it",
    "sq3-opt4": "No, I prefer free formats",
    "sq3-other": "Other: write your own answer",
    
    "content-1-title": "Here's your first material",
    "content-1-desc": "Theory: History of Contemporary Dance",
    "content-1-note": "",
    "v1-label": "Andriyashkin — 100 Years In 100 Minutes",
    "v1-desc": "A lecture-performance on the history of contemporary dance. From modern to metamodern.",
    "content-1-cta": "Want more? Answer 4 more questions →",
    "btn-to-survey-2": "Continue →",
    
    "sq4-title": "What do you do?",
    "sq4-opt1": "I work with the body: dance, movement, theater, yoga, sports",
    "sq4-opt2": "Visual content: photo, video, design, social media",
    "sq4-opt3": "Helping professions: coach, therapist, educator",
    "sq4-opt4": "I run something of my own — online or offline",
    "sq4-other": "Other: write your own answer",
    "sq5-title": "If you were to invest in learning right now — what would it be?",
    "sq5-opt1": "Working with body, movement, presence",
    "sq5-opt2": "Filming, editing, content for social media",
    "sq5-opt3": "Personal brand and self-positioning",
    "sq5-opt4": "Creative self-expression — finding your voice",
    "sq5-other": "Other: write your own answer",
    "sq6-title": "How often do you appear on camera — in Reels, stories, videos?",
    "sq6-opt1": "Regularly — it's part of my work or life",
    "sq6-opt2": "Sometimes, but without a system",
    "sq6-opt3": "I would like to, but something holds me back",
    "sq6-opt4": "I don't and don't plan to",
    "sq6-other": "Other: write your own answer",
    "sq7-title": "How often do you appear on camera — in Reels, stories, videos?",
    "sq7-opt1": "Regularly — it's part of my work or life",
    "sq7-opt2": "Sometimes, but without a system",
    "sq7-opt3": "I would like to, but something holds me back",
    "sq7-opt4": "I don't and don't plan to",
    "sq7-other": "Other: write your own answer",
    
    "content-2-title": "Your free materials are ready",
    "content-2-desc": "Practice: Body & Gravity with Varnava",
    "v2-label": "Varnava — Body & Gravity (EN)",
    "v2-desc": "A practical session on weight, gravity and presence in movement.",
    "want-more-text": "Want to go deeper? Join the full intensive.",
    "btn-want-more": "I want more →",
    
    "badge-webinar": "sreda+seamless",
    "webinar-title": "Why do we need performance if we have an iPhone",
    "webinar-sub": "Contemporary art in the age of Reels",
    "problem-title": "A question",
    "problem-text": "What happens when performance leaves the theatre and enters the phone? When movement is experienced through a screen? When social media becomes the place where we show and construct ourselves?",
    "why-title": "Why we are doing this",
    "why-p1": "We live in the age of content. Every day we film stories, Reels, videos, calls. The camera is now part of our lives — whether we like it or not.",
    "why-p2": "We're constantly taught algorithms, reach and attention metrics. But almost nobody talks about the person on the other side of the camera.",
    "why-p3": "Why are you one person in life and another on camera? Why does your body tense up? Why does presence disappear?",
    "research-title": "What we will explore",
    "research-1": "The phone as a new stage",
    "research-2": "Performance in the age of social media",
    "research-3": "Presence and the body in the frame",
    "research-4": "The camera as a space for expression",
    "research-5": "How movement changes through the screen",
    "not-title": "We won't talk about",
    "not-1": "How to get views",
    "not-2": "How to game the algorithm",
    "not-3": "How to make viral Reels",
    "yes-title": "We will talk about",
    "yes-1": "What happens to the person in the frame",
    "yes-2": "How the camera changes presence",
    "yes-3": "Why the phone became a new stage",
    "yes-4": "How to use video as artistic expression",
    "for-title": "Who might find this relevant",
    "for-1": "You work with movement, performance or choreography",
    "for-2": "You create content and feel there's more to explore than visibility",
    "for-3": "You're interested in the relationship between body, image and attention",
    "for-4": "You're curious how performance evolves in the age of social media",
    "for-5": "You sense that a phone can be more than a camera — it can be a stage",
    "for-6": "You're curious about presence, body and the digital age — even if you're not a dancer",
    "outcomes-title": "What you may leave with",
    "outcome-1": "A different relationship with the camera — as a performance space",
    "outcome-2": "Understanding why movement changes once it enters the frame",
    "outcome-3": "A new perspective on presence in digital space",
    "outcome-4": "New questions about performance in the age of social media",
    "format-title": "Format",
    "format-1": "2-hour session: tools to build your own performance",
    "format-2": "Live Q&A session",
    "format-3": "",
    "format-4": "Recording available after",
    "session-ru-label": "🇷🇺 RU session",
    "session-en-label": "🇬🇧 EN session",
    "session-ru-date-label": "July 7, Tuesday",
    "session-en-date-label": "July 15, Wednesday",
    "faq-q1": "Do I need dance experience?",
    "faq-a1": "Any level. Designed for both beginners and practicing dancers, performers, movement researchers — and anyone curious about body and camera.",
    "faq-q2": "Will there be a recording?",
    "faq-a2": "Yes. All participants receive the recording.",
    "faq-q3": "How does it work online?",
    "faq-a3": "You'll receive a private Zoom link after purchase.",
    "timer-label": "Special price valid until:",
    "price-old": "$67",
    "price-current": "$47",
    "price-info": "Current price — $47. After Early Bird — $67",
    "btn-buy": "Buy ticket — $47",
    "buy-link": "https://web.tribute.tg/s/X02",
    "small-text": ""
  }
};
let currentLang = 'ru';
let stepHistory = ['step-lang'];
let timerInterval = null;
let surveyData = {};

// ===== PROGRESS =====
function updateProgress() {
  const steps = ['step-lang','step-teachers','step-survey-1','step-content-1','step-survey-2','step-content-2','step-webinar'];
  const current = stepHistory[stepHistory.length - 1];
  const idx = steps.indexOf(current);
  const total = steps.length - 1;
  const pct = idx >= 0 ? Math.round((idx / total) * 100) : 0;
  const fill = document.getElementById('progress-fill');
  if (fill) fill.style.width = pct + '%';
  const label = document.getElementById('progress-label');
  if (label) {
    if (idx <= 1) label.textContent = currentLang === 'ru' ? 'ЗНАКОМСТВО' : 'WELCOME';
    else if (idx <= 2) label.textContent = currentLang === 'ru' ? 'ВОПРОСЫ' : 'QUESTIONS';
    else if (idx <= 3) label.textContent = currentLang === 'ru' ? 'МАТЕРИАЛЫ' : 'MATERIALS';
    else if (idx <= 4) label.textContent = currentLang === 'ru' ? 'ЕЩЁ ВОПРОСЫ' : 'MORE QS';
    else if (idx <= 5) label.textContent = currentLang === 'ru' ? 'ГОТОВО' : 'DONE';
    else label.textContent = currentLang === 'ru' ? 'БИЛЕТЫ' : 'TICKETS';
  }
}

// ===== LANG =====
function setLang(l) {
  currentLang = l;
  applyLang(l);
}
function applyLang(l) {
  const t = lang[l];
  for (const [key, value] of Object.entries(t)) {
    const el = document.getElementById(key);
    if (el) {
      if (key === 'lang-quote' || key === 'session-ru-date-label' || key === 'session-en-date-label') el.innerHTML = value;
      else el.textContent = value;
    }
    if (key === 'btn-buy') {
      const link = lang[l]['buy-link'];
      const btn = document.getElementById('btn-buy');
      if (link && btn) btn.href = link;
    }
  }
  // Update custom submit buttons
  const submitLabel = lang[l]['custom-submit'] || 'Submit';
  for (let i = 1; i <= 7; i++) {
    const btn = document.getElementById('sq' + i + '-submit-btn');
    if (btn) btn.textContent = submitLabel;
  }
  document.documentElement.lang = l;
  // Show/hide session cards based on language
  document.querySelectorAll('.session-card[data-lang]').forEach(card => {
    if (card.dataset.lang === l) card.classList.remove('hidden');
    else card.classList.add('hidden');
  });
  updateProgress();
}

// ===== FORM SUBMIT (name + country + email) =====
function submitForm() {
  const name = document.getElementById('lang-name').value.trim();
  const country = document.getElementById('lang-country').value;
  const email = document.getElementById('lang-email').value.trim();
  
  if (!name) {
    alert(currentLang === 'ru' ? 'Пожалуйста, введи своё имя' : 'Please enter your name');
    return;
  }
  if (!country) {
    alert(currentLang === 'ru' ? 'Пожалуйста, выбери страну' : 'Please select your country');
    return;
  }
  if (!email || !email.includes('@')) {
    alert(currentLang === 'ru' ? 'Пожалуйста, введи корректный email' : 'Please enter a valid email');
    return;
  }
  
  surveyData.name = name;
  surveyData.country = country;
  surveyData.email = email;
  surveyData.lang = currentLang;
  surveyData.timestamp = new Date().toISOString();
  localStorage.setItem('seamless_survey', JSON.stringify(surveyData));
  
  fetch(window.location.origin + '/api/survey', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, country, email, lang: currentLang, step: 'registration' })
  }).catch(() => {});
  
  goToStep('step-teachers');
}

// ===== NAV =====
function goToStep(stepId) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(stepId).classList.add('active');
  stepHistory.push(stepId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateProgress();
  if (stepId === 'step-webinar') startTimer();
}
function goBack() {
  if (stepHistory.length > 1) {
    stepHistory.pop();
    const prev = stepHistory[stepHistory.length - 1];
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.getElementById(prev).classList.add('active');
    updateProgress();
  }
}

// ===== SURVEY CAROUSEL =====
function answerSurvey(qNum, value) {
  // Hide any open custom input for this question
  const customDiv = document.getElementById('sq' + qNum + '-custom');
  if (customDiv) { customDiv.classList.add('hidden'); customDiv.style.display = 'none'; }
  
  surveyData['q' + qNum] = value;
  localStorage.setItem('seamless_survey', JSON.stringify(surveyData));
  
  const currentStep = stepHistory[stepHistory.length - 1];
  const isBlock1 = (currentStep === 'step-survey-1');
  const blockLimit = isBlock1 ? 3 : 7; // block1: q1-3, block2: q4-7
  
  
  if (qNum < blockLimit) {
    const currentQ = document.getElementById('survey-q' + qNum);
    const nextQ = document.getElementById('survey-q' + (qNum + 1));
    if (currentQ && nextQ) {
      currentQ.classList.add('hidden');
      nextQ.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.error('SEAMLESS: missing DOM elements for q' + qNum);
    }
  } else {
    // All questions in this block done
    fetch(window.location.origin + '/api/survey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(surveyData)
    }).catch(() => {});
    
    if (currentStep === 'step-survey-1') {
      goToStep('step-content-1');
    } else if (currentStep === 'step-survey-2') {
      goToStep('step-content-2');
    }
  }
}

// ===== SURVEY PREVIOUS QUESTION =====
function prevQuestion(qNum) {
  const currentQ = document.getElementById('survey-q' + qNum);
  const prevQ = document.getElementById('survey-q' + (qNum - 1));
  
  // Hide custom input for current q if open
  const customDiv = document.getElementById('sq' + qNum + '-custom');
  if (customDiv) { customDiv.classList.add('hidden'); customDiv.style.display = 'none'; }
  
  if (currentQ && prevQ) {
    currentQ.classList.add('hidden');
    prevQ.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ===== CUSTOM INPUT =====
function showCustomInput(qNum) {
  const customDiv = document.getElementById('sq' + qNum + '-custom');
  customDiv.classList.remove('hidden');
  customDiv.style.display = 'block';
    const inp = document.getElementById('sq' + qNum + '-custom-input');
    if (inp) {
      setTimeout(() => inp.focus(), 200);
      inp.onkeydown = function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleCustomSubmit(qNum);
        }
      };
    }
}

function handleCustomSubmit(qNum) {
  const inp = document.getElementById('sq' + qNum + '-custom-input');
  if (!inp) return;
  const val = inp.value.trim();
  if (!val) {
    alert(currentLang === 'ru' ? 'Напиши свой ответ' : 'Please write your answer');
    return;
  }
  surveyData['q' + qNum] = 'custom: ' + val;
  surveyData['q' + qNum + '_custom'] = val;
  localStorage.setItem('seamless_survey', JSON.stringify(surveyData));
  
  // Hide custom container
  const customDiv = document.getElementById('sq' + qNum + '-custom');
  if (customDiv) { customDiv.classList.add('hidden'); customDiv.style.display = 'none'; }
  
  answerSurvey(qNum, 'custom: ' + val);
}

function submitCustom(qNum) {
  handleCustomSubmit(qNum);
}

// ===== VIDEOS =====
function playVideo(n) {
  const links = {
    1: { ru: '0-pUiSubwSI', en: 'JlVPtblL_2g' },
    2: { ru: 'pyU1CMrvRLA', en: 'EYgnHrYCMHQ' }
  };
  const container = document.getElementById(`video-${n}-container`);
  const id = links[n][currentLang] || links[n]['ru'];
  container.innerHTML = `
    <iframe width="100%" height="100%"
      src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen style="width:100%;height:100%;object-fit:cover">
    </iframe>`;
}

// ===== TIMER =====
function startTimer() {
  if (timerInterval) return;
  const end = new Date('2026-07-07T20:00:00+08:00');
  timerInterval = setInterval(() => {
    const now = new Date();
    const diff = Math.max(0, end - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const daysEl = document.getElementById('timer-days');
    if (daysEl) {
      daysEl.textContent = d;
      document.getElementById('timer-hours').textContent = String(h).padStart(2, '0');
    } else {
      document.getElementById('timer-hours').textContent = String(d * 24 + h).padStart(2, '0');
    }
    document.getElementById('timer-mins').textContent = String(m).padStart(2, '0');
    document.getElementById('timer-secs').textContent = String(s).padStart(2, '0');
    if (diff <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// ===== FAQ =====
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('open');
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  try {
    applyLang('ru');
  updateProgress();
  initFaq();
  const stored = localStorage.getItem('seamless_survey');
  if (stored) {
    try {
      const d = JSON.parse(stored);
      surveyData = d;
      if (d.lang) {
        currentLang = d.lang;
        applyLang(currentLang);
      }
    } catch(e) {}
  }
  const emailInput = document.getElementById('lang-email');
  if (emailInput) setTimeout(() => emailInput.focus(), 500);
  
  // Enter key on any form field triggers submit
  ['lang-name', 'lang-country', 'lang-email'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          submitForm();
        }
      });
    }
  });
  
  // Bind custom submit buttons by ID (more reliable than onclick)
  for (let i = 1; i <= 7; i++) {
    const btn = document.getElementById('sq' + i + '-submit-btn');
    if (btn) {
      btn.addEventListener('click', function(e) {
        submitCustom(i);
      });
    } else {
      console.error('SEAMLESS: sq' + i + '-submit-btn NOT FOUND');
    }
  }
  } catch(e) {
    console.error('SEAMLESS INIT ERROR:', e);
    alert('SEAMLESS INIT ERROR: ' + e.message);
  }
});
