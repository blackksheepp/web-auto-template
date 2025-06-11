const params = new URLSearchParams(window.location.search);

export const templateName = params.get("templateName") || "%TEMPLATE_NAME%";
export const subTemplateName = params.get("subTemplateName") || "%SUB_TEMPLATE_NAME%";
export const companyName = params.get("companyName") || "%COMPANY_NAME%";
export const companyEmail = params.get("companyEmail") || "%COMPANY_EMAIL%";
export const companyPhone = params.get("companyPhone") || "%COMPANY_PHONE%";
export const companyAddress = params.get("companyAddress") || "%COMPANY_ADDRESS%";
export const companyLogo = params.get("companyLogo") || "%COMPANY_LOGO%"; // Logo index
export const companyImages = params.get("companyImages") || "%COMPANY_IMAGES%"; // Image index
export const companyColor = params.get("companyColor") || "%COMPANY_COLOR%"; // Color scheme
export const companyConsent = params.get("companyConsent") || "%COMPANY_CONSENT%"; // Consent text
