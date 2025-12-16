# Ankit Kuniyal | The Unspoken Resume

"Tell us something thats not in your resume", here is it !!!
The Unspoken Resume, is the story of my journey, my projects, my achievements, my failures, my joys, my sorrows, my love, my hate, my everything.

![Portfolio Preview](public/preview.png)

## ✨ Core Experience

This portfolio is not just a list of links; it is designed as an immersive narrative:

- **Cinematic Signature Intro**: A custom SVG stroke animation that auto-plays on arrival (desktop only) and smoothly transitions into the main content.
- **Story Mode**: The home page (`/`) functions as a linear "Story," guiding the user through chapters of my journey using scroll-triggered animations.
- **Unique Project Worlds**: The Projects page (`/projects`) abandons generic cards for **full-screen, immersive interactive sections**. Each project (Verve.io, AetherLens, etc.) has a unique UI theme matching its domain (e.g., AI Simulator, AR Product Showcase).
- **Interactive Resume**: The Resume page (`/resume`) features a **3D-tilting glassmorphic card** that renders my resume data as a code object, adding a playful engineering touch.

## 🛠 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first, dark mode focus)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (Complex transitions, SVG paths, physics-based springs)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)

## 📂 Project Structure

```bash
src/
├── components/
│   ├── story/           # Sections for the scrolling Home Page narrative
│   ├── projects/        # Components for the Projects Page
│   │   ├── items/       # Unique UI components for each project (VerveIO.jsx, AetherLens.jsx...)
│   │   └── ProjectsHero.jsx
│   └── ui/              # Shared UI (NavBar, Footer, SignatureTransition, AnimatedHeading)
├── pages/
│   ├── StoryPage.jsx    # Home page (The "Story")
│   ├── ProjectsPage.jsx # Full-screen scrolling project showcase
│   ├── ResumePage.jsx   # Interactive Resume viewer
│   └── ContactPage.jsx  # Contact information
└── lib/                 # Utilities (cn, etc.)
```

## 🚀 Key Features Implementation

### 1. The Scroll-Free Intro (`SignatureTransition.jsx`)

A specialized overlay component that runs once per session.

- **Mechanism**: Checks `sessionStorage` on mount.
- **Logic**: If not seen, it plays a 2-second SVG path drawing animation of my signature, then fades out.
- **Optimization**: Automatically skipped on mobile devices (<768px) for better UX.

### 2. Verve.io Simulator (`VerveIO.jsx`)

Instead of static text, this project section features a **live mini-simulator**.

- **Interactive**: Cycles through "Waiting", "Preparing", and "Live Analysis" states.
- **Visuals**: Animated progress bars for "Confidence" and "Clarity" metrics, plus AI feedback bubbles.

### 3. Gradient Focus Navigation (`NavBar.jsx`)

The navigation header uses `useLocation` to detect the active route and applies a **gradient text mask** (`bg-clip-text`) to the active link, keeping the aesthetic clean and modern without heavy borders.

## 🏃‍♂️ Running Locally

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ankitkuniyal/portfolio-v2.git
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```

---

_Designed & Engineered by Ankit Kuniyal._
