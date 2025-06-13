// js/script.js

/**
 * Asynchronously loads HTML content from a specified component file
 * into a target DOM element by its ID.
 * @param {string} componentPath - The relative path to the HTML component file (e.g., 'components/hero.html').
 * @param {string} targetElementId - The ID of the HTML element where the component's content will be loaded.
 */
async function loadComponent(componentPath, targetElementId) {
    try {
        const response = await fetch(componentPath); // Fetch the HTML content
        if (!response.ok) { // Check if the network request was successful
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text(); // Get the response as plain text (HTML)
        document.getElementById(targetElementId).innerHTML = html; // Inject HTML into the target element
        console.log(`Successfully loaded ${componentPath} into #${targetElementId}`);
    } catch (error) {
        console.error(`Error loading component from ${componentPath}:`, error);
        // Display a user-friendly error message on the page if a component fails to load
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = `<p class="text-red-500 text-center py-10">
                Failed to load content for this section. Please try again later.
            </p>`;
        }
    }
}

/**
 * Initializes all static components after the DOM is fully loaded.
 * This function also acts as the main entry point after the page loads.
 */
document.addEventListener('DOMContentLoaded', async () => {
    // Load each section component asynchronously
    await loadComponent('components/hero.html', 'hero');
    await loadComponent('components/about.html', 'about');
    await loadComponent('components/projects.html', 'projects');
    await loadComponent('components/contact.html', 'contact');

    // After all components are loaded, initialize dynamic functionalities
    initializeFormValidation(); // Set up contact form validation
    initializeSpline();       // Embed the Spline 3D model
});

/**
 * Sets up client-side validation for the contact form.
 * Prevents submission if fields are empty or email format is invalid.
 */
function initializeFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Add an event listener for the form's submit event
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Stop the browser from submitting the form normally

            let isValid = true; // Flag to track overall form validity

            // Get references to input elements
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Get references to error message elements
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            // Reset all error messages to hidden state before re-validating
            nameError.classList.add('hidden');
            emailError.classList.add('hidden');
            messageError.classList.add('hidden');

            // 1. Name validation: Check if name field is empty
            if (nameInput.value.trim() === '') {
                nameError.classList.remove('hidden'); // Show error message
                isValid = false; // Mark form as invalid
            }

            // 2. Email validation: Check for empty and valid format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for basic email format check
            if (emailInput.value.trim() === '') {
                emailError.textContent = 'Email cannot be empty.'; // Set specific error message
                emailError.classList.remove('hidden');
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) { // Test email against regex
                emailError.textContent = 'Please enter a valid email address (e.g., example@domain.com).';
                emailError.classList.remove('hidden');
                isValid = false;
            }

            // 3. Message validation: Check if message field is empty
            if (messageInput.value.trim() === '') {
                messageError.classList.remove('hidden');
                isValid = false;
            }

            // If all checks pass, the form is valid
            if (isValid) {
                // In a real-world scenario, you would send this data to a backend server
                // using `fetch()` or `XMLHttpRequest`.
                // For this assignment, a simple alert demonstrates functionality.
                alert('Thank you for your message! We will get back to you soon.\n\n' +
                    'Name: ' + nameInput.value + '\n' +
                    'Email: ' + emailInput.value + '\n' +
                    'Message: ' + messageInput.value);

                contactForm.reset(); // Clear the form fields after successful submission
            }
        });
    } else {
        console.warn('Contact form element (id="contactForm") not found. Form validation not initialized.');
    }
}

/**
 * Integrates the Spline 3D model into the Hero section.
 * YOU MUST REPLACE THE PLACEHOLDER SPLINE EMBED CODE WITH YOUR OWN.
 */
function initializeSpline() {
    const splineContainer = document.getElementById('spline-model-container');
    if (splineContainer) {
        // --- IMPORTANT: REPLACE THE FOLLOWING PLACEHOLDER WITH YOUR ACTUAL SPLINE EMBED CODE ---
        // 1. Go to your Spline scene (spline.design)
        // 2. Click "Export" (top right corner)
        // 3. Select "Viewer" -> "Code Embed"
        // 4. Copy the entire HTML code (usually an iframe or a script tag)
        // 5. Paste it here, replacing the placeholder string below.
        //    Ensure it's an iframe for simplicity, and add styling for responsiveness if not already present.



        const splineEmbedCode = `
            <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.4/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/nqpIQvYZ2PK7SS2Z/scene.splinecode"></spline-viewer>
        `;


        splineContainer.innerHTML = splineEmbedCode;
        console.log('Spline integration initiated.');


        if (splineEmbedCode.includes('<script')) {
            const scriptElement = document.createElement('script');
            scriptElement.type = "module";
            // Extract the src URL from your copied Spline script tag
            scriptElement.src = "https://unpkg.com/@splinetool/viewer@1.0.9/build/spline-viewer.js";
            splineContainer.appendChild(scriptElement);
            // Then add the <spline-viewer> tag
            const splineViewerElement = document.createElement('spline-viewer');
            splineViewerElement.setAttribute('url', 'YOUR_SPLINE_SCENE_URL_HERE_FROM_SPLINE_SCRIPT');
            splineContainer.appendChild(splineViewerElement);
        }


    } else {
        console.warn('Spline container element (id="spline-model-container") not found. 3D integration not initialized.');
    }
}