# WORLD BRANDS

O'zbekiston bozori uchun ko'p valyutali, ochiq sotuvchili marketplace.

## Texnologiyalar
- Next.js 15 App Router, React 19, TypeScript
- Tailwind CSS 4
- PostgreSQL + Prisma 6
- PWA manifest

## Ishga tushirish
1. Node.js 20.9 yoki yangiroq versiyasini o'rnating.
2. npm install
3. .env.example faylidan .env yarating va PostgreSQL DATABASE_URL ni kiriting.
4. npm run db:generate
5. npm run db:migrate
6. npm run dev

## Holat
Bu boshlang'ich commit loyiha poydevori va dastlabki UI konseptini yaratadi. Login, real katalog, savatcha, sotuvchi kabineti, admin paneli, buyurtma va to'lov integratsiyalari hali ishlab chiqilmagan.

## Xavfsizlik
- .env va maxfiy kalitlarni GitHub'ga yuklamang.
- Parollar faqat kuchli password-hash algoritmi bilan saqlanishi kerak.
- To'lov ma'lumotlari platformada saqlanmaydi; provayder tokenlari ishlatiladi.
