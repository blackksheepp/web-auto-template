// Import styles
import '../../global.css';

// Import the component
import '../../components/navbar.js';
import '../../components/footer.js';
import { companyName, companyEmail } from '../../templates/common/index.js';

document.title = `${companyName} - Privacy Policy`;

// Set company name in the privacy policy
document.querySelectorAll('.company-name').forEach(element => {
    element.textContent = companyName;
});

// Set company email in the privacy policy
document.querySelectorAll('.company-email').forEach(element => {
    element.textContent = companyEmail;
});