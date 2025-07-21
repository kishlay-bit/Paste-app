# Paste App

A modern, minimal, and fast pastebin-like web app built with React, Redux Toolkit, and Tailwind CSS. Easily create, update, view, search, share, and delete text pastes with a beautiful dark UI.

## Features

- Create and update text pastes with a title and content
- View any paste by its unique link
- Search pastes by title
- Copy paste content or share a direct link
- Delete pastes
- All data is stored in your browser's localStorage
- Responsive, mobile-friendly, and dark-themed UI

## Tech Stack

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/paste-app.git
   cd paste-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Folder Structure

```
paste-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Paste.jsx
│   │   └── ViewPaste.jsx
│   ├── redux/
│   │   └── PasteSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Customization
- You can easily change the theme, add authentication, or connect to a backend for persistent storage.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using React, Redux, and Tailwind CSS.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
