/**
 * Utility for loading assets consistently in the application
 */

/**
 * Load a logo image based on template and logo number
 * 
 * @param {string} template - The template name (e.g., "real-estate")
 * @param {string|number} logoNumber - The logo number to load
 * @returns {string} - The URL to the logo
 */
export function loadLogo(template, logoNumber = "1") {
  try {
    if (logoNumber !== "%COMPANY_LOGO%") {
      return require(`../../assets/logo/${template}/${logoNumber}.png`);
    }
  } catch (error) {
    console.error(`Error loading logo for template ${template}, number ${logoNumber}:`, error);
  }
} 