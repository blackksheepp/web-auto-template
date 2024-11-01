import '../css/styles.css';
import './dynamic'
import './menu';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applicationForm');
    const popup = document.getElementById('submitPopup');
    const closeButton = document.querySelector('#submitPopup button');

    // Only proceed if we found both elements
    if (!form || !popup) {
        console.error('Required elements not found');
        return;
    }

    function showPopup() {
        popup.classList.remove('hidden');
        // Hide popup after 5 seconds
        setTimeout(() => {
            closePopup();
        }, 10000);
    }

    function closePopup() {
        popup.classList.add('hidden');
    }

    closeButton.addEventListener('click', closePopup);

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission for this example

        // Here you would typically send the form data to your server
        // For this example, we'll just show the popup
        showPopup();

        // Optional: Reset form
        form.reset();
    });

    function formatUSANumber(input) {
        let value = input.value.replace(/\D/g, '');
        if (value.length >= 4 && value.length <= 14) {
            value = '(' + value.slice(0, 3) + ') ' + value.slice(3);
        } 
        
        if (value.length >= 9 && value.length <= 14) {
            value = value.slice(0, 9) + '-' + value.slice(9);
        }

        
        input.value = value.slice(0, 14);
    }

    // Attach the formatter to an input field
    document.getElementById('phone-number').addEventListener('input', function () {
        formatUSANumber(this);
    });
});