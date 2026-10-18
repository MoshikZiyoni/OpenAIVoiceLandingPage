const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');

if (!fs.existsSync(BUILD_DIR)) {
  console.log('Build directory does not exist yet.');
  process.exit(0);
}

const baseIndexHtml = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf-8');

const PAGES = [
  {
    route: 'virtual-secretary',
    title: 'מזכירה וירטואלית AI לעסקים 24/7 | מענה טלפוני אוטומטי חכם - Bot 10',
    description: 'מחפשים מזכירה וירטואלית לעסק? Bot 10 מספק מענה טלפוני חכם 24/7 מבוסס AI בעברית טבעית, סינון פניות, תיאום פגישות ביומן וחיסכון של אלפי שקלים בחודש.',
    canonical: 'https://bot-10.com/virtual-secretary'
  },
  {
    route: 'insurance-finance',
    title: 'סוכן קולי AI לסוכנויות ביטוח, משכנתאות ופיננסים | Bot 10',
    description: 'סוכן קולי מבוסס AI ייעודי לסוכנויות ביטוח ויועצי משכנתאות. אימות מאובטח של תעודת זהות ותאריך לידה, סינון לידים חם ומענה מהיר 24/7 לכל פניה.',
    canonical: 'https://bot-10.com/insurance-finance'
  },
  {
    route: 'real-estate',
    title: 'בוט קולי AI לנדל״ן ותיווך | סינון לידים ותיאום צפיות בנכסים 24/7 - Bot 10',
    description: 'פתרון קולי מבוסס AI למשרדי תיווך, יזמי נדל״ן ומשווקי פרויקטים. סינון תקציב, אזור ומוכנות לעסקה ותיאום סיור בנכס ביומן המתווך תוך שניות.',
    canonical: 'https://bot-10.com/real-estate'
  },
  {
    route: 'clinics-lawyers',
    title: 'מענה קולי ותיאום תורים AI לקליניקות, רופאים ומשרדי עו״ד | Bot 10',
    description: 'מענה טלפוני מקצועי, דיסקרטי וחכם 24/7 לקליניקות רפואיות ומשרדי עורכי דין. זימון תורים ביומן, סינון פניות דחופות ואפס זמן המתנה למטופלים ולקוחות.',
    canonical: 'https://bot-10.com/clinics-lawyers'
  },
  {
    route: 'outbound-sales',
    title: 'בוט שיחות יוצאות AI וטיוב לידים קרים אוטומטי | Outbound Voice - Bot 10',
    description: 'מנוע שיחות יוצאות (Outbound) מבוסס AI לחיוג מיידי ללידים חדשים, חימום דאטה ישנה ומערך Follow-up חכם שמתאם פגישות לנציגי המכירות שלך.',
    canonical: 'https://bot-10.com/outbound-sales'
  },
  {
    route: 'blog',
    title: 'בלוג בינה מלאכותית וסוכני קול AI לעסקים | Bot 10',
    description: 'מאמרים מקצועיים, תובנות ומדריכים על סוכני קול AI, בינה מלאכותית שיחתית, אוטומציה של מוקדי שירות ושיפור אחוזי המרה בעסקים בישראל.',
    canonical: 'https://bot-10.com/blog'
  },
  {
    route: 'roi-calculator',
    title: 'מחשבון שיחות שלא נענו וחישוב אובדן הכנסות | Bot 10',
    description: 'מחשבון אינטראקטיבי: בדקו כמה כסף העסק שלכם מפסיד בחודש על שיחות שלא נענו ולידים שמתקררים מחוץ לשעות הפעילות.',
    canonical: 'https://bot-10.com/roi-calculator'
  },
  {
    route: 'cost-calculator',
    title: 'מחשבון חיסכון בעלויות שכר ומוקד שירות | Bot 10',
    description: 'בדקו כמה תוכלו לחסוך בהעסקת נציגי שירות ומכירות באמצעות הטמעת סוכן AI קולי שעובד 24/7 ללא הפסקה.',
    canonical: 'https://bot-10.com/cost-calculator'
  },
  {
    route: 'contactform',
    title: 'יצירת קשר ותיאום שיחת הדגמה אישית | Bot 10',
    description: 'השאירו פרטים לשיחת אפיון והדגמה אישית עם צוות המייסדים של Bot 10. סוכן קולי AI מותאם אישית לעסק שלך.',
    canonical: 'https://bot-10.com/contactform'
  },
  {
    route: 'accessibility',
    title: 'הצהרת נגישות | Bot 10',
    description: 'הצהרת הנגישות של אתר Bot 10. אנו מחויבים להנגשת האתר והשירותים לכלל האוכלוסייה בהתאם לתקן הישראלי.',
    canonical: 'https://bot-10.com/accessibility'
  }
];

PAGES.forEach((page) => {
  const pageDir = path.join(BUILD_DIR, page.route);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  let html = baseIndexHtml;
  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);
  // Replace Description
  html = html.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="description" content="${page.description}">`);
  // Replace Canonical
  html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i, `<link rel="canonical" href="${page.canonical}">`);
  // Replace OpenGraph
  html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:title" content="${page.title}">`);
  html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:description" content="${page.description}">`);
  html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:url" content="${page.canonical}">`);

  // Add BreadcrumbList Schema for Google Search Rich Results
  const breadcrumbName = page.title.split('|')[0].trim();
  const breadcrumbSchema = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "דף הבית",
        "item": "https://bot-10.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "${breadcrumbName}",
        "item": "${page.canonical}"
      }
    ]
  }
  </script>
</head>`;

  html = html.replace(/<\/head>/i, breadcrumbSchema);

  fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf-8');
  console.log(`✓ Pre-rendered static entry: /${page.route}/index.html`);
});

// Ensure 200.html and 404.html fallback exist for Cloudflare, GitHub Pages and static hosts
fs.writeFileSync(path.join(BUILD_DIR, '200.html'), baseIndexHtml, 'utf-8');
fs.writeFileSync(path.join(BUILD_DIR, '404.html'), baseIndexHtml, 'utf-8');
console.log('✓ Created 200.html & 404.html fallbacks for static hosts');

// Remove conflicting _redirects file if present (Cloudflare now rejects /* /index.html 200 as infinite loop)
const redirectsBuildFile = path.join(BUILD_DIR, '_redirects');
if (fs.existsSync(redirectsBuildFile)) {
  fs.unlinkSync(redirectsBuildFile);
  console.log('✓ Cleaned up conflicting _redirects from build output');
}
