<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# 🌐 Personal Blog

اسایت شخصی من که با **React**, **TypeScript**, و **Tailwind CSS** ساخته شده.  
این پروژه برای نمایش مهارت‌های من در طراحی و توسعه وب، انیمیشن‌های روان، و طراحی ریسپانسیو ساخته شده است.  

---

## 🚀 لینک دمو
[📎 مشاهده سایت آنلاین](https://simurgh420.github.io/personalblog/)

---

## 🖼 پیش‌نمایش
![Preview](./public/preview.png)  
*(تصویر بالا نمونه‌ای از صفحه اصلی سایت است. برای دیدن نسخه کامل روی لینک دمو کلیک کنید.)*

---

## ✨ ویژگی‌ها
- طراحی مدرن و مینیمال با **Tailwind CSS**
- انیمیشن‌های روان با **Framer Motion**
- ریسپانسیو کامل برای موبایل، تبلت و دسکتاپ
- مدیریت مسیرها با **React Router v7 (Data Router API)**
- پشتیبانی از حالت تاریک/روشن (Dark Mode)
- دیپلوی شده روی **GitHub Pages**

---

## 🛠 تکنولوژی‌های استفاده‌شده
- ⚛️ React 
- ⌨️ TypeScript
- 🎨 Tailwind CSS
- 🎬 Framer Motion
- 🧩 shadcn/ui
- 🌍 React Router 
- 🚀 GitHub Pages

---

## 📦 نصب و راه‌اندازی

```bash
# کلون کردن ریپازیتوری
git clone https://github.com/simurgh420/personalblog.git

# ورود به پوشه پروژه
cd personalblog

# نصب وابستگی‌ها
npm install

# اجرای پروژه در حالت توسعه
npm run dev
>>>>>>> fa44b3a7a0c3a5e4d7ad0881da17935bc906ae66
