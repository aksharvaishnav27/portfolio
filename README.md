# 🚀 Akshar Vaishnav Portfolio

Welcome to my personal portfolio website! This project showcases my skills, projects, achievements, and contact information in a modern, responsive, and interactive way.

![Portfolio Screenshot](public/profile.jpeg)

---

## ✨ Features

- Modern, responsive design with Next.js & Tailwind CSS
- Animated sections and smooth transitions
- Project highlights with code links
- Achievements and certifications
- Contact form and social links
- Dark mode support

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), Framer Motion
- **Icons:** React Icons, Font Awesome
- **Deployment:** Vercel

---

## 📂 Project Structure

```
portfolio/
  ├─ public/
  ├─ src/
  │   ├─ app/
  │   └─ components/
  ├─ package.json
  └─ ...
```

---

## 🖥️ Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/aksharvaishnav27/portfolio.git
   cd portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install
   ```
3. **Run locally:**
   ```bash
   npm run dev
   # or yarn dev
   ```
4. **Open in browser:**
   [http://localhost:3000](http://localhost:3000)

---

## 🌍 Deployment

This portfolio is easily deployable on [Vercel](https://vercel.com/). Just connect your GitHub repo and deploy!

---

## 📬 Contact

- **Email:** vaishnavakshar0@gmail.com
- **Twitter:** [@Akshar2710](https://x.com/Akshar2710)
- **Instagram:** [mr_aksharpatel_27](https://www.instagram.com/mr_aksharpatel_27?igsh=MWQ2N2Q1ZXI3cWk0)

---

## ⭐️ Project Highlights

- **Virtual Credit Card Generator**: Secure, one-time-use cards with real-time tracking ([Code](https://github.com/aksharvaishnav27/Virtual-credit-card))
- **Job Portal**: Full-stack job search and application platform ([Code](https://github.com/aksharvaishnav27/job_portal))
- **Car Dealer Management System**: Inventory and sales management ([Code](https://github.com/aksharvaishnav27/Car-Management-System))

---

> Made with ❤️ by Akshar Vaishnav

---

## How to Fix

### 1. **About.js**

**Error:**

```
48:16  Error: `'` can be escaped with &apos;, &lsquo;, &#39;, &rsquo;.  react/no-unescaped-entities
```

**What to do:**  
Find any text like:

```jsx
I'm a passionate software developer...
```

Change to:

```jsx
I&apos;m a passionate software developer...
```

or

```jsx
I&#39;m a passionate software developer...
```

---

### 2. **Hero.js**

**Error:**

```
21:42  Error: `'` can be escaped with &apos;, &lsquo;, &#39;, &rsquo;.  react/no-unescaped-entities
```

**What to do:**  
Find any text like:

```jsx
<span className="block">Hi, I'm</span>
```

Change to:

```jsx
<span className="block">Hi, I&apos;m</span>
```

or

```jsx
<span className="block">Hi, I&#39;m</span>
```

---

## Quick Fix Steps

1. **Open `src/components/About.js` and `src/components/Hero.js`.**
2. **Search for any `'` in text nodes (not in code/props/JS).**
3. **Replace with `&apos;` or `&#39;`.**
4. **Commit and redeploy.**

---

### Example

**Before:**

```jsx
<p>I'm constantly learning and expanding my skillset.</p>
```

**After:**

```jsx
<p>I&apos;m constantly learning and expanding my skillset.</p>
```

---

## Reference

- [Next.js: Disabling ESLint rules](https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules)

---

**After making these changes, your build will succeed!**  
If you want, I can generate the exact code changes for you—just let me know!
