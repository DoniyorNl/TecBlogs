# ✅ TecBlogs — Tekshirish buyruqlari

Loyihani lokal va production uchun tekshirish uchun quyidagi buyruqlardan foydalaning. **Package manager:** `pnpm` (tavsiya etiladi).

---

## 📦 Oʻrnatish

```bash
pnpm install
```

`.env.local` faylida `NEXT_PUBLIC_GRAPHCMS_ENDPOINT` o‘rnatilgan bo‘lishi kerak (SETUP.md qarang).

---

## 🔨 Build (production build)

```bash
pnpm run build
```

Next.js production build. Xatolik bo‘lsa bu yerda chiqadi.

---

## 🚀 Ishga tushirish

**Development (hot reload):**

```bash
pnpm run dev
```

Brauzer: [http://localhost:3000](http://localhost:3000)

**Production rejimida (build dan keyin):**

```bash
pnpm run build
pnpm run start
```

---

## 🔍 Lint (ESLint)

```bash
pnpm run lint
```

Kod uslubi va umumiy xatolarni tekshiradi.

---

## 📐 TypeCheck (TypeScript)

```bash
pnpm run typecheck
```

TypeScript xatolarini tekshiradi (compile qilmaydi, faqat tekshiradi).

---

## 📋 Barcha skriptlar (package.json)

| Buyruq              | Qisqacha            |
|----------------------|---------------------|
| `pnpm run dev`       | Dev server          |
| `pnpm run build`     | Production build    |
| `pnpm run start`     | Production server   |
| `pnpm run lint`      | ESLint              |
| `pnpm run typecheck` | TypeScript tekshiruv |

---

## 🧪 Test

Loyihada hozircha `test` yoki `jest` skripti yo‘q. Kelajakda qo‘shilsa:

```bash
pnpm run test
# yoki
pnpm run test:watch
```

---

## ✅ To‘liq tekshirish (bir ketma-ketlikda)

Deploy yoki PR oldidan barcha tekshiruvlarni ishga tushiring:

```bash
pnpm install
pnpm run typecheck
pnpm run lint
pnpm run build
```

Barchasi xatosiz o‘tsa, `pnpm run start` bilan production rejimida tekshiring.
