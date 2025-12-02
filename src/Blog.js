import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// נתוני המאמרים
const articles = [
  {
    id: 1,
    title: 'מהפכת הניהול החכם: איך סוכני קול AI משנים את עולם השיחות העסקיות',
    summary: 'גלו כיצד בינה מלאכותית שיחתית, עם דגש על בינה מלאכותית יוצרת (Generative AI), יכולה לייעל את העסק שלכם, לשפר באופן דרמטי את חווית הלקוח ולמקסם את היעילות.',
    content: (
      <>
        <section style={{ borderColor: '#e0e7ff' }}>
          <h2 className="indigo">
            העידן החדש של <span className="green-text">ניהול שיחות חכם AI</span>
          </h2>
          <p>
            בעולם העסקים הדינמי של היום, שבו כל אינטראקציה עם לקוח היא הזדמנות לבנות נאמנות, הצורך בפתרונות <span className="semibold">ניהול שיחות חכם AI</span> הוא קריטי. חברות מחפשות כלים שיאפשרו להן לא רק לטפל בשיחות ביעילות, אלא גם לספק חוויה אישית, פרואקטיבית ובלתי נשכחת. כאן נכנסים לתמונה <span className="semibold">סוכני קול AI</span> – חוד החנית של הטכנולוגיה המשבשת את המודלים המסורתיים של שירות לקוחות ותמיכה.
          </p>
          <p>
            <span className="semibold">סוכן קולי בינה מלאכותית</span> הוא לא עוד מערכת IVR פשוטה. זוהי ישות דיגיטלית מתקדמת, המופעלת על ידי <span className="semibold">עיבוד שפה טבעית (NLP)</span>, <span className="semibold">זיהוי דיבור אוטומטי (ASR)</span> ו<span className="semibold">למידת מכונה (ML)</span>, וכיום גם על ידי <span className="semibold">בינה מלאכותית יוצרת (Generative AI)</span>. יכולות אלו מאפשרות לה להבין את כוונת המתקשר, לנהל שיחות מורכבות, להגיב באופן יצירתי ודינמי, ואף לזהות <span className="semibold">רגשות בשיחה</span>.
          </p>
        </section>

        <section style={{ borderColor: '#ede9fe' }}>
          <h2 className="purple">
            <span className="green-text">חווית לקוח היפר-מותאמת אישית</span>: מעבר לציפיות
          </h2>
          <p>
            אחת המגמות החזקות ביותר ב-2025 היא הדרישה ל<span className="semibold">היפר-התאמה אישית</span>. <span className="semibold">סוכני קול AI</span> מאפשרים זאת על ידי ניתוח נתוני לקוח בזמן אמת, זיהוי העדפות ומתן מענה <span className="semibold">פרואקטיבי</span>. הם מספקים מענה מיידי 24/7, מבטלים זמני המתנה ומונעים תסכול. היכולת לטפל ב<span className="semibold">עומסי שיחות</span> ביעילות היא יתרון עצום, במיוחד בשעות שיא ובאירועים מיוחדים.
          </p>
          <ul>
            <li>
              <span className="semibold">זיהוי רגשות (Emotionally Intelligent AI):</span> סוכנים מתקדמים יכולים לזהות את מצב הרוח של המתקשר ולהתאים את הטון והתגובה בהתאם, מה שיוצר אינטראקציה אמפטית ואנושית יותר.
            </li>
            <li>
              <span className="semibold">רב לשוניות וטיפול במבטאים:</span> <span className="semibold">סוכני קול AI רב לשוניים</span> יכולים לתקשר באופן שוטף במגוון שפות ואף לטפל ב<span className="semibold">מבטאים שונים</span>, מה שפותח את העסק לקהלים גלובליים ומגוונים.
            </li>
            <li>
              <span className="semibold">מעבר חלק לנציג אנושי:</span> כאשר נדרשת התערבות אנושית, <span className="semibold">מעבר חלק מ-AI לנציג אנושי</span> מבטיח שהלקוח לא יצטרך לחזור על המידע, תוך שמירה על הקשר וההקשר של השיחה.
            </li>
          </ul>
        </section>

        <section style={{ borderColor: '#dcfce7' }}>
          <h2 className="green">
            <span className="green-text">אופטימיזציה תפעולית</span> וחיסכון משמעותי בעלויות
          </h2>
          <p>
            <span className="semibold">כיצד AI יכול לחסוך לעסק שלי כסף בניהול שיחות?</span> התשובה טמונה ב<span className="semibold">אוטומציה של משימות חוזרות</span>. סוכני קול AI מפחיתים באופן דרמטי את הצורך בכוח אדם למענה טלפוני, מה שמוביל ל<span className="semibold">חיסכון בעלויות תפעוליות</span> ומאפשר הקצאת משאבים אנושיים למשימות בעלות ערך גבוה יותר.
          </p>
          <ul>
            <li>
              <span className="semibold">פתרון שיחות מהיר (Faster Call Resolution):</span> AI מאפשר לפתור שאילתות נפוצות במהירות שיא, מקצר את זמן הטיפול הממוצע (AHT) ומשפר את שביעות רצון הלקוחות.
            </li>
            <li>
              <span className="semibold">ניהול עומסי שיחות:</span> היכולת לטפל ב<span className="semibold">עומסי שיחות</span> ביעילות היא יתרון עצום, במיוחד בשעות שיא ובאירועים מיוחדים, ללא צורך בהגדלת כוח אדם.
            </li>
            <li>
              <span className="semibold">נתונים וניתוחים (AI Insights):</span> כל אינטראקציה מספקת <span className="semibold">נתונים יקרי ערך</span>. סוכני AI יכולים לנתח דפוסים, לזהות מגמות ולספק <span className="semibold">תובנות עסקיות</span> המאפשרות קבלת החלטות מושכלות ושיפור מתמיד של השירות. זה כולל <span className="semibold">ניתוח דיבור בזמן אמת</span> ו<span className="semibold">אוטומציה של בקרת איכות</span>.
            </li>
          </ul>
        </section>

        <section style={{ borderColor: '#e0e7ff' }}>
          <h2 className="indigo">
            <span className="green-text">מעבר ליעילות</span>: AI קולי במרכזיות ובסביבת העבודה
          </h2>
          <p>
            השפעת סוכני הקול AI חורגת מעבר למענה ללקוחות. הם משנים גם את אופן העבודה בתוך הארגון:
          </p>
          <ul>
            <li>
              <span className="semibold">סיוע לנציגים אנושיים (Agent Assist):</span> סוכני AI יכולים לשמש כ"עוזרים" לנציגים אנושיים, לספק להם מידע רלוונטי בזמן אמת, להציע תגובות מומלצות ואף לסכם שיחות, ובכך לשפר את <span className="semibold">פרודוקטיביות העובדים</span>.
            </li>
            <li>
              <span className="semibold">אוטומציה של משימות פנימיות:</span> <span className="semibold">AI במקום העבודה</span> יכול לטפל במשימות שגרתיות כמו <span className="semibold">תזמון פגישות</span>, <span className="semibold">תמלול שיחות</span>, <span className="semibold">סיכום מסמכים ארוכים</span>, ואף לסייע ב<span className="semibold">אוטומציה של HR ו-IT</span>, ובכך לפנות זמן לעובדים להתמקד בעבודה אסטרטגית ויצירתית.
            </li>
            <li>
              <span className="semibold">בקרת איכות אוטומטית:</span> מערכות AI יכולות לנטר שיחות, לנתח ביצועים ולספק משוב לנציגים, מה שמבטיח <span className="semibold">שירות עקבי ואיכותי</span>.
            </li>
          </ul>
        </section>

        <section style={{ borderColor: '#ede9fe' }}>
          <h2 className="purple">
            העתיד כבר כאן: <span className="green-text">בינה מלאכותית יוצרת (Generative AI)</span> בסוכני קול
          </h2>
          <p>
            ההתקדמות ב<span className="semibold">בינה מלאכותית יוצרת</span>, כמו זו המניעה את Gemini ו-ChatGPT, מביאה את סוכני הקול AI לרמה חדשה לגמרי. במקום תגובות מתוכנתות מראש, סוכנים אלו יכולים כעת:
          </p>
          <ul>
            <li>
              <span className="semibold">לייצר תגובות דינמיות ומותאמות הקשר:</span> הם יכולים ליצור תשובות חדשות לגמרי בזמן אמת, בהתבסס על ההקשר המלא של השיחה ועל הידע הרחב שלהם.
            </li>
            <li>
              <span className="semibold">לנהל שיחות מורכבות:</span> היכולת ללמוד ולהשתפר מכל אינטראקציה מאפשרת להם להתמודד עם שאילתות מורכבות יותר ולספק פתרונות יצירתיים.
            </li>
            <li>
              <span className="semibold">לספק חוויה אנושית יותר:</span> קולות סינתטיים שנשמעים טבעיים יותר, יחד עם הבנה עמוקה יותר של ניואנסים, הופכים את האינטראקציה למשכנעת וקרובה יותר לאינטראקציה אנושית.
            </li>
          </ul>
        </section>

        <section style={{ borderColor: '#dcfce7' }}>
          <h2 className="green">
            <span className="green-text">אבטחה ופרטיות</span>: עמוד תווך חיוני
          </h2>
          <p>
            ככל שסוכני קול AI הופכים לחלק אינטגרלי מהעסק, כך גוברת החשיבות של <span className="semibold">אבטחת מידע ופרטיות</span>. מגמה בולטת היא <span className="semibold">עיבוד קולי על המכשיר (On-device voice processing)</span>, המאפשר עיבוד נתונים מקומי ומפחית את הצורך לשלוח מידע רגיש לענן. בנוסף, חברות מתמקדות ב<span className="semibold">אבטחה ברמת אנטרפרייז</span>, <span className="semibold">ממשל נתונים</span> ו<span className="semibold">הצפנת מידע אישי מזהה (PII)</span> כדי להבטיח עמידה בתקנים כמו GDPR ו-HIPAA.
          </p>
        </section>
        
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '16px', color: '#4c51bf', fontWeight: 600 }}>
            צפו בדוגמה לסוכן קול AI מתקדם בפעולה:
          </p>
          <iframe
            width="360"
            height="640"
            src="https://www.youtube.com/embed/Z4ZL7rmwUCA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ maxWidth: '100%', borderRadius: '16px', boxShadow: '0 10px 24px rgba(76,81,191,0.12)' }}
          ></iframe>
        </div>
      </>
    )
  },
  {
    id: 2,
    title: 'מחשבון ההפסד השנתי: האם אתם זורקים 30% מההכנסות שלכם על אי-מענה לטלפון?',
    summary: 'גלו כמה כסף העסק שלכם מפסיד מדי יום על שיחות שלא נענו. המדריך המלא לחישוב עלויות נסתרות ואיך נציג וירטואלי יכול להפוך כל שיחה אבודה לרווח נקי.',
    content: (
      <>
        <section style={{ borderColor: '#e0e7ff' }}>
          <h2 className="indigo">מתמטיקה של הפסדים: כמה שווה כל שיחה שלא נענתה?</h2>
          <p>
            הטלפון מצלצל. אתם בדיוק בפגישה, בנהיגה, או סתם מטפלים בלקוח אחר. השיחה מתנתקת. מבחינתכם, זה רק פספוס קטן. "אני אחזור אליו אחר כך", אתם אומרים לעצמכם. אבל הסטטיסטיקה מספרת סיפור אחר וכואב הרבה יותר: ב-85% מהמקרים, הלקוח הזה לא יחכה לכם. הוא כבר עבר לתוצאה הבאה בגוגל - למתחרה שלכם.
          </p>
          <p>
            בעולם העסקי של 2025, שיחה שלא נענתה היא לא סתם חוסר נימוס - היא כסף על השולחן שנשרף. רוב בעלי העסקים מחשבים הפסד רק כ"אובדן העסקה". אבל בור ההפסדים עמוק הרבה יותר. כשאתם לא עונים, אתם משלמים "קנס משולש":
          </p>
          <ul>
            <li><span className="semibold">עלות הליד (PPC/Marketing):</span> שילמתם לפייסבוק או גוגל כדי שהלקוח הזה יתקשר. אם לא עניתם, זרקתם את תקציב השיווק לפח.</li>
            <li><span className="semibold">אובדן העסקה (LTV):</span> לא הפסדתם רק מכירה חד-פעמית, אלא את כל ערך חיי הלקוח (שיכול היה לחזור שוב ושוב).</li>
            <li><span className="semibold">נזק תדמיתי:</span> לקוח שלא מקבל מענה תופס את העסק כפחות אמין או שירותי.</li>
          </ul>
        </section>

        <section style={{ borderColor: '#ede9fe' }}>
          <h2 className="purple">למה "לחזור אחר כך" כבר לא עובד היום?</h2>
          <p>
            הלקוח המודרני חסר סבלנות. הוא רוצה פתרון "כאן ועכשיו". בעבר, הפתרון היה לשכור שירותי מוקד הודעות חיצוניים או להעסיק עוד מזכירה. אבל לפתרונות האלו יש חסרונות בולטים:
          </p>
          <ul>
            <li><span className="semibold">זמינות מוגבלת:</span> מזכירה (אנושית) עובדת 9 שעות ביום. מה קורה ב-20:00 בערב כשהלקוח מחפש שירות?</li>
            <li><span className="semibold">צוואר בקבוק:</span> מענה אנושי מוגבל בכמות השיחות במקביל. בשיחה השלישית, הלקוח כבר יקבל צליל תפוס.</li>
            <li><span className="semibold">עלויות:</span> כוח אדם הוא המשאב היקר ביותר בעסק.</li>
          </ul>
        </section>

        <section style={{ borderColor: '#dcfce7' }}>
          <h2 className="green">הפתרון הטכנולוגי: איך סוכן מכירות AI סותם את החור בכיס</h2>
          <p>
            הדור החדש של הפתרונות הוא לא סתם "תא קולי משוכלל", אלא בוט קולי חכם שמבוסס על בינה מלאכותית. זהו נציג וירטואלי שמסוגל לנהל שיחה טבעית, להבין את הלקוח, ולבצע פעולות בזמן אמת.
          </p>
          <p><span className="semibold">היתרונות של בוט לשיחות נכנסות / יוצאות:</span></p>
          <ul>
            <li><span className="semibold">מענה קולי 24/7:</span> הבוט לא ישן, לא יוצא להפסקת צהריים ולא חולה.</li>
            <li><span className="semibold">סקייל אינסופי:</span> הבוט יכול לדבר עם מספר לקוחות במקביל באותה רמת שירות בדיוק.</li>
            <li><span className="semibold">סינון חכם:</span> הבוט יודע לזהות לקוחות בשלים לרכישה ולהעביר אותם לטיפול מיידי.</li>
            <li><span className="semibold">חיסכון בכוח אדם:</span> במקום להחזיק מוקד שלם, מערכת אחת עושה עבודה של חמישה נציגים.</li>
          </ul>
        </section>

        <section style={{ borderColor: '#e0e7ff' }}>
          <h2 className="indigo">דוגמאות מהשטח: מי חייב את זה אתמול?</h2>
          
          <h3>בוט קולי לנדל"ן / מתווכים</h3>
          <p>מתווך מוציא נכס לשוק ומקבל 50 שיחות ביום. במקום לענות לכולם "זה עדיין רלוונטי", הבוט מסנן את המתעניינים, בודק תקציב ומתאם פגישה ביומן רק עם הרלוונטיים.</p>

          <h3>בוט קולי לסוכנויות ביטוח - אימות וזיהוי לקוחות</h3>
          <p>סוכני ביטוח ושירות לקוחות מבזבזים דקות יקרות על נוהל זיהוי. בוט חכם מבצע את תהליך האימות המקדים באופן אוטומטי ומאובטח, ומעביר לשיחה רק לקוח מאומת.</p>
        </section>

        <section style={{ borderColor: '#ede9fe' }}>
          <h2 className="purple">כמה זה עולה לי? (ROI והשורה התחתונה)</h2>
          <p>
            כשבוחנים מחיר בוט קולי לעומת עלות העסקה של עובד נוסף (שכר, סוציאלי, ימי מחלה, הכשרות), המשוואה ברורה. אבל הנתון החשוב יותר הוא ה-ROI (החזר השקעה). מספיק שהבוט הציל לכם 2-3 עסקאות בחודש שמוגדרות כ"אבודות", והוא כבר שילם את עצמו פי כמה!
          </p>
        </section>

        <section style={{ borderColor: '#dcfce7' }}>
           <h2 className="green">לסיכום: תנו ל-AI לענות</h2>
           <p>
             העסק שלכם לא יכול להרשות לעצמו להמשיך לפספס שיחות. כל צלצול שלא נענה הוא הזדמנות שנתתם למתחרים. הטמעת סוכן קולי היא פשוטה, מהירה ומשתלמת יותר מאי פעם.
           </p>
        </section>
      </>
    )
  },
  {
    id: 3,
    title: 'הלקוח שמע "הקש 1" וניתק: למה ה-IVR הורג את המכירות שלכם? ומה התחליף?',
    summary: 'נמאס ללקוחות שלכם להקיש מספרים ולהמתין? גלו למה נתב שיחות (IVR) כבר לא רלוונטי, וכיצד בוט קולי מבוסס בינה מלאכותית מגדיל מכירות.',
    content: (
      <>
        <section style={{ borderColor: '#e0e7ff' }}>
          <h2 className="indigo">למה ה-IVR הוא האויב של המכירות?</h2>
          <p>
            כולנו מכירים את הרגע המתסכל הזה: אנחנו מתקשרים לעסק, מלאים במוטיבציה, ואז זה קורה - הקול הרובוטי עונה: "שלום, הגעתם לחברה, למכירות הקישו 1...". ברגע הזה, רמת הקשב של הלקוח צונחת. הלקוח נאלץ לנווט ב"מבוך" כדי להגיע למטרה, במקום לקבל שירות.
          </p>
          <p>
            הסטטיסטיקה מראה שאחוז גבוה מהלקוחות פשוט מנתקים לפני שהגיעו לנציג. עבור העסק, זו קטסטרופה כפולה: גם שילמתם על הבאת הליד, וגם הפסדתם אותו בגלל חווית שירות טכנית.
          </p>
        </section>

        <section style={{ borderColor: '#ede9fe' }}>
          <h2 className="purple">ההבדל התהומי: נתב קולי (IVR) מול נציג וירטואלי (AI)</h2>
          <p>
            רבים מתבלבלים וחושבים שבוט הוא פשוט גרסה משוכללת של נתב. זו טעות. ההבדל הוא בין מערכת שמסננת לקוחות לבין מערכת שמוכרת להם.
          </p>
          <ul>
            <li><span className="semibold">אינטראקציה:</span> IVR הוא חד-צדדי ("תקשיב ותלחץ"), בעוד בוט קולי הוא דו-צדדי ("דבר איתי").</li>
            <li><span className="semibold">זמינות:</span> IVR מעביר להמתנה או לתא קולי, בוט קולי נותן מענה 24/7 וסוגר מעגל.</li>
            <li><span className="semibold">אינטליגנציה:</span> IVR עיוור לכוונת הלקוח, בוט קולי מזהה לקוחות בשלים לרכישה.</li>
          </ul>
          <p>
            בעוד שהנתב הוא בסך הכל שוטר תנועה, סוכן מכירות AI הוא איש צוות לכל דבר, שיודע לנהל משא ומתן ראשוני, להבין סלנג ולתת תחושת שירות אישית.
          </p>
        </section>

        <section style={{ borderColor: '#dcfce7' }}>
          <h2 className="green">המהפכה של Bot-10: לדבר עם הלקוח, לא להקיש עליו</h2>
          <p>
            הפתרון של Bot-10 מציע תחליף למוקד טלפוני מיושן. במקום שירותי מוקד הודעות שרק לוקחים שם וטלפון, הבוט מנהל דיאלוג. הלקוח אומר: "אני רוצה לברר מחיר", והבוט מבין מיד, עונה לעניין, ואפילו יכול לקדם את המכירה. התוצאה? הלקוח מרגיש שמקשיבים לו, והעסק מקבל ליד חם.
          </p>
        </section>

        <section style={{ borderColor: '#e0e7ff' }}>
          <h2 className="indigo">תרחישי שימוש: איפה ה-AI מביס את הלחצנים?</h2>
          
          <h3>בוט קולי לעורכי דין - ביטול דוחות תעבורה</h3>
          <p>לקוח שקיבל דוח תנועה רוצה פתרון מידי. במקום להמתין, הבוט מזהה את מטרת השיחה, מבצע תשאול משפטי ראשוני, מסנן פניות לא רלוונטיות ומעביר לעורך הדין רק תיקים עם היתכנות משפטית, כולל קביעת פגישה.</p>

          <h3>בוט קולי למרפאות / זימון תורים</h3>
          <p>במקום "לזימון תורים הקישו 2" והמתנה, הבוט מזהה את המטופל, מוצא חלון זמן פנוי וקובע את התור - הכל בשיחה טבעית. חיסכון אדיר בכוח אדם למזכירות.</p>
        </section>

        <section style={{ borderColor: '#ede9fe' }}>
          <h2 className="purple">סיכום: נתקו את ה-IVR, חברו את ה-AI</h2>
          <p>
            הלקוחות שלכם כבר לא מוכנים להקיש 1. הם רוצים לדבר, לקבל תשובות ולהתקדם. אל תתנו לטכנולוגיה של שנות ה-90 לנהל לכם את העסק ב-2025.
          </p>
        </section>
      </>
    )
  }
];

// רכיב דף הבלוג
const BlogPage = () => {
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const selectedArticle = articles.find(a => a.id === selectedArticleId);

  // סגנונות CSS
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    body {
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f3f4f6;
      direction: rtl;
    }

    .blog-container {
      max-width: 1200px;
      margin: 32px auto;
      padding: 16px;
      min-height: 80vh;
    }

    /* Header Styles */
    .blog-main-header {
      text-align: center;
      margin-bottom: 50px;
    }
    
    .blog-main-title {
      font-size: 2.5rem;
      font-weight: 800;
      color: #1c7895;
      margin-bottom: 10px;
    }

    /* Article List (Grid) Styles */
    .articles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .article-card {
      background: #ffffff;
      border-radius: 1rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      padding: 24px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid transparent;
    }

    .article-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border-color: #c7d2fe;
    }

    .article-card-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 12px;
      line-height: 1.4;
    }

    .article-card-summary {
      font-size: 1rem;
      color: #4b5563;
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .read-more-btn {
      display: inline-block;
      color: #4c51bf;
      font-weight: 600;
      text-decoration: none;
      margin-top: auto;
    }

    /* Single Article View Styles */
    .single-article-container {
      background: #ffffff;
      padding: 40px;
      border-radius: 1rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      animation: fadeIn 0.5s ease-out;
    }

    .back-button {
      display: inline-flex;
      align-items: center;
      margin-bottom: 20px;
      color: #4c51bf;
      font-weight: 600;
      cursor: pointer;
      background: none;
      border: none;
      font-size: 1rem;
      padding: 0;
    }
    
    .back-button:hover {
      text-decoration: underline;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .blog-header {
      margin-bottom: 40px;
      text-align: center;
    }

    .blog-title {
      font-size: 2.25rem;
      line-height: 1.25;
      margin-bottom: 16px;
      font-weight: 800;
      background: linear-gradient(to right, #4c51bf, #7c3aed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .blog-article {
      max-width: 800px;
      margin: 0 auto;
      color: #1f2937;
      line-height: 1.75;
    }

    .blog-article section {
      background-color: #ffffff;
      padding: 24px;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      margin-bottom: 24px;
      border: 1px solid;
    }

    .blog-article h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 16px;
    }

    .blog-article h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-top: 20px;
      margin-bottom: 10px;
      color: #374151;
    }

    .blog-article p {
      margin-bottom: 16px;
      font-size: 1.125rem;
    }

    .blog-article ul {
      padding-right: 20px;
      margin-bottom: 16px;
    }
    
    .blog-article li {
      margin-bottom: 8px;
    }

    /* Colors */
    .indigo { color: #4c51bf; }
    .purple { color: #7c3aed; }
    .green { color: #10b981; }
    .green-text { color: #10b981; }
    .semibold { font-weight: 600; }
    
    .call-to-action-text {
      text-align: center;
      font-size: 1.25rem;
      font-weight: 700;
      color: #4c51bf;
      margin-top: 40px;
    }

    .call-to-action-link {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 800;
      color: #7c3aed;
      margin-top: 16px;
    }

    .call-to-action-link a {
      color: #3b82f6;
      text-decoration: none;
    }

    .footer-link {
      display: block;
      text-align: center;
      margin-top: 40px;
      font-size: 1.1rem;
      color: #07455c;
      text-decoration: none;
      font-weight: 600;
    }
  `;

  return (
    <div className="blog-container">
      <style>{styles}</style>

      {/* Header */}
      <header className="blog-main-header">
        <h1 className="blog-main-title">הבלוג של Bot 10</h1>
        <p style={{ fontSize: '1.1rem', color: '#4b5563' }}>תובנות, חידושים וכלים לניהול חכם של העסק בעידן ה-AI</p>
      </header>

      {selectedArticleId === null ? (
        // --- רשימת המאמרים (Boxes) ---
        <div className="articles-grid">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="article-card"
              onClick={() => setSelectedArticleId(article.id)}
            >
              <h2 className="article-card-title">{article.title}</h2>
              <p className="article-card-summary">
                {article.summary.length > 120 
                  ? article.summary.substring(0, 120) + '...' 
                  : article.summary}
              </p>
              <span className="read-more-btn">קרא עוד &larr;</span>
            </div>
          ))}
        </div>
      ) : (
        // --- תצוגת מאמר בודד ---
        <div className="single-article-container">
          <button className="back-button" onClick={() => setSelectedArticleId(null)}>
            &rarr; חזרה לכל המאמרים
          </button>

          <header className="blog-header">
            <h1 className="blog-title">{selectedArticle.title}</h1>
            <p className="blog-intro-text" style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '768px', margin: '0 auto' }}>
              {selectedArticle.summary}
            </p>
          </header>

          <article className="blog-article">
            {selectedArticle.content}

            <p className="call-to-action-text">
              ב-Bot-10.com אנו מובילים את המהפכה הזו, ומספקים <span style={{ fontWeight: 700, background: 'linear-gradient(to right, #4c51bf, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>סוכני קול AI מתקדמים</span> המשלבים את כל המגמות והיכולות הללו.
            </p>
            <p className="call-to-action-link">
              למידע נוסף ולקביעת פגישת ייעוץ, בקרו באתר שלנו: <Link to="/contactform">Bot-10.com</Link>
            </p>
          </article>
        </div>
      )}

      <Link to="/" className="footer-link">חזרה לדף הבית</Link>
    </div>
  );
};

export default BlogPage;