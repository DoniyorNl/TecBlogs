# 📚 TecBlogs - Dasturlash Blog Platformasi

> O'zbek tilida dasturlash bo'yicha zamonaviy blog va maqolalar platformasi


## 🌟 Loyiha Haqida

**TecBlogs** - bu dasturlash, texnologiya va IT sohasidagi maqolalarni o'qish va ulashish uchun mo'ljallangan zamonaviy blog platformasi. Loyiha o'zbek tilida dasturlash bo'yicha sifatli kontentni yetkazish maqsadida yaratilgan.

### ✨ Asosiy Xususiyatlar

- 📝 **Blog Maqolalari** - Dasturlash bo'yicha to'liq maqolalar
- 🔍 **Global Qidiruv** - Tez va oson qidiruv tizimi
- 👤 **Muallif Sahifalari** - Har bir muallif uchun shaxsiy sahifa
- 🏷️ **Teg Tizimi** - Mavzu bo'yicha maqolalarni filtrlash
- 📂 **Arxiv** - Yil bo'yicha maqolalar arxivi
- 📱 **Responsive Design** - Barcha qurilmalarda mukammal ko'rinish
- 🌙 **Dark Mode** - Qorong'u mavzu qo'llab-quvvatlash
- ⚡ **SEO Optimized** - Qidiruv tizimlari uchun optimallashtirilgan
- ♿ **Accessibility** - Barcha foydalanuvchilar uchun qulay

## 🚀 Demo

🔗 [Live Demo](https://tec-blogs-red.vercel.app/)

## 🛠️ Texnologiyalar

### Frontend

- **Framework:** Next.js 15.0.3 (App Router)
- **Library:** React 19 RC
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Animations:** Tailwind Animate

### Backend & CMS

- **Headless CMS:** GraphCMS (Hygraph)
- **API:** GraphQL
- **Client:** graphql-request 7.1.2

### Forms & Validation

- **Form Management:** React Hook Form 7.53
- **Schema Validation:** Zod 3.23
- **Resolvers:** @hookform/resolvers 3.9

### Additional Tools

- **Date Formatting:** date-fns 4.1
- **HTML Parser:** html-react-parser 5.2
- **Notifications:** Sonner 1.7
- **Loading:** nextjs-toploader 3.7
- **Fonts:** JetBrains Mono, Roboto

## 📦 O'rnatish

### Talablar

- Node.js 18.0 yoki yuqori
- pnpm, npm yoki yarn package manager
- GraphCMS account va API endpoint

### 1. Repository'ni Clone qiling

```bash
git clone https://github.com/DoniyorNl/TecBlogs.git
cd TecBlogs
```

### 2. Dependencies'ni o'rnating

```bash
# pnpm bilan (tavsiya etiladi)
pnpm install

# yoki npm bilan
npm install

# yoki yarn bilan
yarn install
```

### 3. Environment Variables sozlang

`.env.local` fayl yarating va quyidagi o'zgaruvchilarni qo'shing:

```env
# GraphCMS Configuration
NEXT_PUBLIC_GRAPHCMS_ENDPOINT=your_graphcms_endpoint_here
```

**GraphCMS Endpoint olish:**

1. [Hygraph](https://hygraph.com/) saytiga kiring
2. Yangi proyekt yarating
3. Settings > API Access dan Content API endpoint'ni oling
4. Public content access'ni yoqing

### 4. Development Server'ni ishga tushiring

```bash
pnpm dev
# yoki
npm run dev
# yoki
yarn dev
```

Brauzeringizda [http://localhost:3000](http://localhost:3000) ochilsin.

## 🏗️ Loyiha Strukturasi

```
TecBlogs/
├── app/                        # Next.js App Router
│   ├── (root)/                # Root layout group
│   │   ├── (home)/           # Bosh sahifa
│   │   ├── blogs/            # Blog sahifalari
│   │   ├── author/[id]/      # Muallif sahifasi
│   │   ├── tags/[slug]/      # Teg sahifalari
│   │   ├── about/            # Biz haqimizda
│   │   ├── contact/          # Aloqa
│   │   └── _components/      # Layout komponentlari
│   ├── globals.css           # Global styles
│   └── layout.tsx            # Root layout
├── components/                # Qayta ishlatiladigan komponentlar
│   ├── cards/                # Card komponentlar
│   ├── forms/                # Form komponentlar
│   └── ui/                   # UI primitives (Shadcn)
├── service/                   # API service layer
│   ├── blog.service.ts       # Blog API
│   ├── auth.service.ts       # Author API
│   └── tag.service.ts        # Tag API
├── lib/                       # Utility functions
│   ├── utils.ts              # Helper functions
│   └── validation.ts         # Zod schemas
├── types/                     # TypeScript types
│   └── index.ts              # Type definitions
├── constants/                 # Constants
│   ├── const.ts              # Nav, categories, tags
│   └── site.ts               # SITE_URL, SITE_NAME (single source of truth)
└── public/                    # Static files
```

## 🎨 GraphCMS Schema

Loyihani ishlatish uchun GraphCMS'da quyidagi modellarni yarating:

### Blog Model

```graphql
type Blog {
	title: String!
	slug: String! @unique
	description: String!
	image: Asset!
	contentHtml: RichText!
	author: Author! @relation
	category: Category! @relation
	tag: Tag! @relation
	archive: Boolean! @default(value: false)
	createdAt: DateTime!
}
```

### Author Model

```graphql
type Author {
	name: String!
	avatar: Asset!
	bio: String!
	blogs: [Blog!]! @relation
}
```

### Category Model

```graphql
type Category {
	name: String!
	slug: String! @unique
}
```

### Tag Model

```graphql
type Tag {
	name: String!
	slug: String! @unique
}
```

## 📝 Available Scripts

```bash
# Dependencies
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Start production server (after build)
pnpm start

# Linting
pnpm lint

# TypeScript check (no emit)
pnpm run typecheck
```

**To‘liq tekshirish (deploy/PR oldidan):** `pnpm run typecheck` → `pnpm run lint` → `pnpm run build`. Batafsil: [VERIFY.md](VERIFY.md).

## 🚀 Deploy

### Vercel (Tavsiya etiladi)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. GitHub'ga push qiling
2. Vercel'ga import qiling
3. Environment variables qo'shing
4. Deploy tugmasini bosing

### Boshqa Platformalar

- **Netlify:** `pnpm build` && output: `.next`
- **AWS Amplify:** Next.js preset
- **Docker:** Dockerfile yarating

## 🤝 Contributing

Hissa qo'shish uchun:

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/AmazingFeature`)
3. Commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request oching

## 📄 License

MIT License - batafsil [LICENSE](LICENSE) faylida

## 👨‍💻 Muallif

**Doniyor Nasriddinov**

- Website: [tec-blogs-red.vercel.app](https://tec-blogs-red.vercel.app/)
- GitHub: [@DoniyorNl](https://github.com/DoniyorNl)



- [Next.js](https://nextjs.org/) - Framework
- [Vercel](https://vercel.com/) - Hosting
- [Hygraph](https://hygraph.com/) - CMS
- [Shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## 📞 Aloqa

Savollar yoki takliflar uchun [issue](https://github.com/DoniyorNl/TecBlogs/issues) oching.

---

⭐ Agar loyiha yoqsa, star bering!
