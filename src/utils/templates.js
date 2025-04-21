// Import all available templates
import { templateName } from '../templates/common/index.js';
import realEstateTemplate from '../templates/real-estate/index.js';
import medicalTemplate from '../templates/medical/index.js';
import restaurantTemplate from '../templates/restaurant/index.js';
import homeServiceTemplate from '../templates/home-service/index.js';
import localStoresTemplate from '../templates/local-stores/index.js';

const templates = {
  "real-estate": realEstateTemplate,
  medical: medicalTemplate,
  restaurant: restaurantTemplate,
  "home-service": homeServiceTemplate,
  "local-stores": localStoresTemplate,
};

// Function to get current template based on templateName
function getCurrentTemplate() {
  return templates[templateName] || templates.realEstate; // Default to real estate template
}

// Function to get template data for a specific section
export function getTemplateData(section) {
  const template = getCurrentTemplate();
  return template[section] || {};
}

// Export the entire template for direct access if needed
export default getCurrentTemplate();