document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('svg');

            // Toggle answer visibility
            answer.classList.toggle('hidden');

            // Rotate icon
            icon.style.transform = answer.classList.contains('hidden')
                ? 'rotate(0deg)'
                : 'rotate(180deg)';
        });
    });
});