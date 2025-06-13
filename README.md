# My Interactive Portfolio Website

## Overview
A responsive single-page portfolio website designed and developed for the Eco AI Media Web Development Internship Assignment. This project demonstrates modern frontend web development skills, emphasizing clean code, responsiveness, and mandatory 3D model integration.

## Technologies Used
* **Frontend Languages:** HTML5, CSS3, JavaScript (Vanilla)
* **CSS Framework:** Tailwind CSS (via CDN)
* **3D Integration:** Spline (for creating and embedding 3D scenes)
* **Version Control:** Git
* **Deployment:** GitHub Pages

## Website Sections
The portfolio includes the following core sections:
1.  **Hero Section:** Features my full name, professional role, a visually engaging background, and an interactive 3D model.
2.  **About Section:** Provides a concise introduction about my background, skills, and passion for web development, accompanied by a profile picture.
3.  **Projects Section:** Showcases 3 sample projects, each with a title, preview image, brief description, and a link to its repository (or a placeholder).
4.  **Contact Section:** A simple contact form with fields for Name, Email, and Message, incorporating client-side JavaScript validation for empty fields and valid email format.

## 3D Integration Details
* **Method:** Spline
* **Location:** The 3D model is seamlessly integrated into the **Hero Section** as a background element, enhancing the visual appeal and creating an engaging first impression.
* **Description:** I designed a simple [e.g., spinning geometric shape / animated icon / abstract scene] in Spline and embedded it using the `iframe` export option. The model is interactive (e.g., allows rotation/zoom on hover/drag) and responsive, adapting to different screen sizes.

## Deployment
* **Live Demo URL:** [**PASTE YOUR GITHUB PAGES URL HERE** (e.g., `https://yourusername.github.io/my-portfolio/`)]
* **Deployment Steps (on GitHub Pages):**
    1.  Ensure all project files are committed and pushed to the `main` branch of this GitHub repository.
    2.  Navigate to the repository on GitHub.
    3.  Go to `Settings` > `Pages`.
    4.  Under "Build and deployment", set "Source" to "Deploy from a branch".
    5.  Select `main` as the branch and `/ (root)` as the folder.
    6.  Click `Save`. The site should become live within a few minutes.

## Setup Instructions (Local Development)
To run this project locally on your machine:
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/my-portfolio.git](https://github.com/yourusername/my-portfolio.git)
    ```
    (Replace `yourusername/my-portfolio` with your actual GitHub repository URL)
2.  **Navigate to the project directory:**
    ```bash
    cd my-portfolio
    ```
3.  **Open `index.html`:**
    * You can simply open the `index.html` file directly in your web browser.
    * **Recommended:** For a better development experience, open the `my-portfolio` folder in Visual Studio Code (`code .` from the terminal) and use the "Live Server" extension to serve the `index.html` file. This provides live reloading as you make changes.

## Folder Structure

/portfolio
├── /css
│   └── styles.css
├── /js
│   └── script.js
├── /images
│   ├── profile.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
├── /components
│   ├── hero.html
│   ├── about.html
│   ├── projects.html
│   └── contact.html
└── index.html


## Bonus: WordPress / Node.js Integration (Theoretical Description)
If I were to integrate 3D models (Spline or Three.js) into a WordPress or Node.js environment, here's how I would approach it:

### WordPress Integration
* **Plugin-Based Embedding:** For Spline, the simplest method would be to use a WordPress plugin that allows embedding custom HTML or JavaScript snippets (e.g., "Insert HTML Snippet," "Embed Any Document," or a custom HTML block in the Gutenberg editor). I would paste the Spline `iframe` code directly into the desired page or post.
* **Custom Theme Development:** For a more integrated solution, I would create a custom WordPress theme or a child theme. I would add the Spline `iframe` or Three.js canvas setup directly into the theme's relevant template files (e.g., `front-page.php` for the hero section). For Three.js, I would enqueue the Three.js CDN and my custom JavaScript file using `functions.php` to ensure proper loading. CSS for responsiveness would be added to the theme's stylesheet.

### Node.js Integration
* **Static Server with Express:** If the frontend is purely static HTML/CSS/JS (like this project), I would use Node.js with the Express framework. An Express server would be set up to serve the static files from the `public` or `dist` directory. The `index.html` would contain the Spline `iframe` or the Three.js canvas, and all associated JavaScript and CSS files would be served statically. This provides a simple way to host the frontend.
* **React-Based Frontend with `@react-three/fiber` / `@splinetool/react-spline`:** For a more dynamic and component-driven approach, I would build the frontend using React.
    * For Three.js, I would leverage libraries like `@react-three/fiber` and `@react-three/drei` to declaratively render 3D scenes within React components.
    * For Spline, the `@splinetool/react-spline` package offers a convenient React component for embedding Spline scenes.
    * The Node.js part would then typically serve this React application (e.g., by running `npm run build` and serving the `build` folder statically) or act as a backend API for any dynamic data requirements.
