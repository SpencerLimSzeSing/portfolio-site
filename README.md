# **Data Science Portfolio**
A professional, high-performance portfolio site built with React and Vite to showcase data science projects, technical expertise, and career achievements.

## 🚀 Overview
This project serves as a centralized hub for my data science journey. It features a clean, responsive design and is optimized for fast loading and easy navigation to demonstrate my work to potential employers and collaborators.

🔗 [View My Portfolio](https://your-github-username.github.io/portfolio-site/)

## 🛠️ Technical Stack
- Frontend: React 18, Vite
- Styling: Tailwind CSS (for modern, responsive layouts)
- Deployment: GitHub Pages (automated via GitHub Actions)
- Tools: TypeScript, FontAwesome (for icons), Google Fonts

## 📂 Project Structure
To keep the code maintainable, the project is organized into directories as below:

```
portfolio-site/
├── .github/workflows/
│ └── deploy.yml            # GitHub Actions workflow
│
├── src/
│ ├── DSC02818.jpg          # profile image asset 
│ ├── index.css             # Global styles 
│ ├── App.tsx               # Root React component; defines layout and main sections
│ ├── main.tsx              # Application entry point; mounts App to the DOM
│ ├── constants.ts            # Centralized static data (projects, skills, etc.)
│ ├── metadata.json           # Site metadata 
│ ├── types.ts                # Shared TypeScript types and interfaces
│ └── components/
│   └── ProjectCard.tsx       # Reusable React component to display individual project details
│
├── README.md               # Project documentation
│
├── index.html              # HTML template used by Vite
││
├── package.json            # Project dependencies, scripts, and metadata
├── package-lock.json       # Locked dependency versions for reproducible installs
│
├── tsconfig.json           # TypeScript compiler configuration
│
└── vite.config.ts          # Vite configuration (base path, plugins, build options)
```
    
