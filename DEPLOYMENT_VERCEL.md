# نشر مشروع InternWay على Vercel

هذه الخطوات تضبط المشروع للنشر كـ SPA باستخدام Vite على Vercel.

## المتطلبات
- حساب Vercel مفعّل
- Node.js 20 على Vercel (تم ضبطه في `package.json`)

## إعدادات المشروع
- ملف `vercel.json` موجود في الجذر:
  - `buildCommand`: `npm run build`
  - `outputDirectory`: `dist/public`
  - `framework`: `vite`
  - `rewrites`: لإعادة توجيه مسارات ال-SPA إلى `index.html` بدون التأثير على ملفات الأصول

## خطوات النشر
1. تأكد محليًا أن البيلد يعمل:
   - `npm install`
   - `npm run build`
2. ادفع الكود إلى GitHub/GitLab/Bitbucket (اختياري) أو استخدم Vercel CLI.
3. على لوحة Vercel:
   - New Project → اختر المستودع/ارفع المجلد.
   - تأكد أن:
     - Build Command = `npm run build`
     - Output Directory = `dist/public`
   - لا حاجة لتشغيل سيرفر Node لأن المشروع ينشر كـ Static SPA.
4. اضبط المتغيرات البيئية إن احتجت مستقبلًا (لا توجد متطلبات حالية للـ backend).

## ملاحظات
- الـ backend الحالي (Express) يُستخدم للتطوير فقط؛ النشر يتم كصفحات ثابتة حاليًا.
- إذا أضفت لاحقًا API، استخدم مجلد `api/` بوظائف Serverless على Vercel بدل تشغيل سيرفر Express.
- نظام التوجيه يستخدم Wouter؛ إعادة كتابة المسارات مضبوطة في `vercel.json`.