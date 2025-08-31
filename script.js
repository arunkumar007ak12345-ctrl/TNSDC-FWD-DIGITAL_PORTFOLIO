// --- SCROLL PROGRESS BAR LOGIC ---
const progressBar = document.getElementById('scroll-progress-bar');

window.addEventListener('scroll', () => {
    // Calculate the scroll percentage
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    
    // Update the width of the progress bar
    progressBar.style.width = `${scrollPercent}%`;
});


// --- EMAIL COPY LOGIC ---
const emailLink = document.getElementById('email-link');
const copyFeedback = document.getElementById('copy-feedback');

emailLink.addEventListener('click', function(event) {
    // Prevent the default mailto: action
    event.preventDefault(); 

    const email = this.textContent.trim();
    
    // Use the modern Clipboard API to copy text
    navigator.clipboard.writeText(email).then(() => {
        // On success, show the feedback message
        copyFeedback.style.opacity = '1';
        
        // Hide the feedback message after 2 seconds
        setTimeout(() => {
            copyFeedback.style.opacity = '0';
        }, 2000);

    }).catch(err => {
        // Log an error if copying fails
        console.error('Failed to copy email: ', err);
    });
});