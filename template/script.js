document.addEventListener('DOMContentLoaded', () => {
    // JavaScript code for additional interactive animations if needed
    console.log("Page Loaded and Animations Initialized");
});

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the button element
    var redirectButton = document.getElementById('redirectButton');

    // Add click event listener to the button
    redirectButton.addEventListener('click', function() {
        // Redirect to project.html
        window.location.href = 'projects.html';
    });
});
