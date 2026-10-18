const https = require('https');
const fs = require('fs');
const path = require('path');

// טעינת משתני סביבה מקובץ .env
try {
  const envPath = path.resolve(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2 && parts[0].trim() && !parts[0].trim().startsWith('#')) {
        process.env[parts[0].trim()] = parts.slice(1).join('=').trim();
      }
    });
  }
} catch (e) {}

// הגדרות OneSignal
const APP_ID = process.env.ONESIGNAL_APP_ID || '1c1d3fe1-4d85-47b9-8141-c0521ac19c00';
const API_KEY = process.env.ONESIGNAL_API_KEY || '';

/**
 * פונקציה לשליחת הודעת Push לכל המנויים
 * @param {string} title - כותרת ההודעה
 * @param {string} message - תוכן ההודעה
 * @param {string} url - כתובת הדף שייפתח בלחיצה (אופציונלי)
 * @param {string} imageUrl - כתובת תמונה גדולה שתוצג בהודעה (אופציונלי)
 */
function sendPushNotification({ title, message, url = 'https://bot-10.com', imageUrl = 'https://bot-10.com/push_banner.jpg' }) {
  const payload = JSON.stringify({
    app_id: APP_ID,
    included_segments: ['Total Subscriptions'],
    headings: {
      en: title,
      he: title
    },
    contents: {
      en: message,
      he: message
    },
    url: url,
    chrome_web_image: imageUrl,
    big_picture: imageUrl,
    chrome_web_icon: 'https://bot-10.com/logo192.png'
  });

  const options = {
    hostname: 'onesignal.com',
    path: '/api/v1/notifications',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Key ${API_KEY}`,
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log('✅ ההודעה נשלחה בהצלחה לכל המנויים!');
        console.log('פרטי ההודעה:', body);
      } else {
        console.error(`❌ שגיאה בשליחה (קוד ${res.statusCode}):`, body);
      }
    });
  });

  req.on('error', (e) => console.error('❌ שגיאת רשת:', e.message));
  req.write(payload);
  req.end();
}

// הרצה ישירה אם מופעל מהטרמינל
if (require.main === module) {
  const customTitle = process.argv[2] || 'עדכון חם מ-Bot 10 🤖';
  const customMessage = process.argv[3] || 'רוצים לדעת כמה שעות עבודה וכסף הבוט חוסך לעסק שלכם? לחצו לבדיקה מהירה!';
  sendPushNotification({ title: customTitle, message: customMessage });
}

module.exports = { sendPushNotification };
