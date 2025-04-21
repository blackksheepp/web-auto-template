const TEMPLATE_IMAGES = {
    "real-estate": {
        "1": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "2": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "3": "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "4": "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "medical": {
        "1": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "2": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "3": "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "4": "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "restaurant": {
        "1": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "2": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "3": "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "4": "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "home-service": {
        "1": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "2": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "3": "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "4": "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "local-stores": {
        "1": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "2": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "3": "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "4": "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
}


const SUBTEMPLATE_IMAGES = {
    "real-estate": {
        "residential-wholesalers": "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "agents-brokers": "https://plus.unsplash.com/premium_photo-1661432432946-64cdda213bd1?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "property-management": "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "mortgage-brokers": "https://plus.unsplash.com/premium_photo-1661773084348-cbb7bd5d7c47?q=80&w=2660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "investor-buyers": "https://images.unsplash.com/photo-1615404420216-cc423164563f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "land-acquisition": "https://images.unsplash.com/photo-1669003152631-c953ac9f3ed3?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "vacation-rentals": "https://images.unsplash.com/photo-1610614286984-d89219be9910?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "foreclosure-services": "https://plus.unsplash.com/premium_photo-1680721444743-2a94a309a24a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title-escrow": "https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "medical": {
        "primary-care": "https://plus.unsplash.com/premium_photo-1661602396293-b28df017b9c6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "dental": "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "chiropractic": "https://plus.unsplash.com/premium_photo-1661901748991-17870b6614af?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "urgent-care": "https://plus.unsplash.com/premium_photo-1661410991860-4cd86e2613e7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "dermatology": "https://plus.unsplash.com/premium_photo-1661779386497-1f7b9ec4d8f3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "physical-therapy": "https://plus.unsplash.com/premium_photo-1663052427377-3f41fde11508?q=80&w=2695&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "optometry": "https://plus.unsplash.com/premium_photo-1661281330911-02ee4ecaf0e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3B0b21ldHJpc3R8ZW58MHwwfDB8fHww",
        "pediatrics": "https://plus.unsplash.com/premium_photo-1661607536088-cb28f1d110ab?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "mental-health": "https://plus.unsplash.com/premium_photo-1672292536170-8de3ec091ced?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "wellness-medicine": "https://plus.unsplash.com/premium_photo-1661443936270-0cf1ed6b4817?q=80&w=2634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "restaurant": {
        "fast-casual": "https://drive.google.com/u/0/drive-viewer/AKGpihYqQL-P6zhKNfWcwujdUAWPPIM69RyfxmZRckVwbLTVtmeTq9DMwtT-pvS59q3PvHKphvPeVE_Jg-w-XPH_x5FOU9Gd7Y9atg=s1600-rw-v1",
        "dine-in": "https://drive.google.com/u/0/drive-viewer/AKGpihYqQL-P6zhKNfWcwujdUAWPPIM69RyfxmZRckVwbLTVtmeTq9DMwtT-pvS59q3PvHKphvPeVE_Jg-w-XPH_x5FOU9Gd7Y9atg=s1600-rw-v1",
        "coffee-shops": "https://drive.google.com/u/0/drive-viewer/AKGpihYqQL-P6zhKNfWcwujdUAWPPIM69RyfxmZRckVwbLTVtmeTq9DMwtT-pvS59q3PvHKphvPeVE_Jg-w-XPH_x5FOU9Gd7Y9atg=s1600-rw-v1",
        "food-trucks": "https://drive.google.com/u/0/drive-viewer/AKGpihYqQL-P6zhKNfWcwujdUAWPPIM69RyfxmZRckVwbLTVtmeTq9DMwtT-pvS59q3PvHKphvPeVE_Jg-w-XPH_x5FOU9Gd7Y9atg=s1600-rw-v1",
        "pizzerias": "https://drive.google.com/u/0/drive-viewer/AKGpihYqQL-P6zhKNfWcwujdUAWPPIM69RyfxmZRckVwbLTVtmeTq9DMwtT-pvS59q3PvHKphvPeVE_Jg-w-XPH_x5FOU9Gd7Y9atg=s1600-rw-v1",
        "bars-taprooms": "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "juice-bars": "https://drive.google.com/u/0/drive-viewer/AKGpihYqQL-P6zhKNfWcwujdUAWPPIM69RyfxmZRckVwbLTVtmeTq9DMwtT-pvS59q3PvHKphvPeVE_Jg-w-XPH_x5FOU9Gd7Y9atg=s1600-rw-v1",
        "dessert-shops": "https://drive.google.com/u/0/drive-viewer/AKGpihYqQL-P6zhKNfWcwujdUAWPPIM69RyfxmZRckVwbLTVtmeTq9DMwtT-pvS59q3PvHKphvPeVE_Jg-w-XPH_x5FOU9Gd7Y9atg=s1600-rw-v1",
        "ethnic-restaurants": "https://drive.google.com/u/0/drive-viewer/AKGpihYqQL-P6zhKNfWcwujdUAWPPIM69RyfxmZRckVwbLTVtmeTq9DMwtT-pvS59q3PvHKphvPeVE_Jg-w-XPH_x5FOU9Gd7Y9atg=s1600-rw-v1",
        "franchise-chains": "https://drive.google.com/u/0/drive-viewer/AKGpihYqQL-P6zhKNfWcwujdUAWPPIM69RyfxmZRckVwbLTVtmeTq9DMwtT-pvS59q3PvHKphvPeVE_Jg-w-XPH_x5FOU9Gd7Y9atg=s1600-rw-v1",
    },
    "home-service": {
        "plumbers": "https://drive.google.com/u/0/drive-viewer/AKGpihZC1u0-CZxZbTLqQFjf2qJrxPYVYAbdRGBDHVr0DFrGwDErsf0zcjG9P1NW78i7ofN-VaRAxYOedNO0FSfQANsMWhg2NRh4Aw=s1600-rw-v1",
        "hvac": "https://drive.google.com/u/0/drive-viewer/AKGpihZC1u0-CZxZbTLqQFjf2qJrxPYVYAbdRGBDHVr0DFrGwDErsf0zcjG9P1NW78i7ofN-VaRAxYOedNO0FSfQANsMWhg2NRh4Aw=s1600-rw-v1",
        "electricians": "https://drive.google.com/u/0/drive-viewer/AKGpihZC1u0-CZxZbTLqQFjf2qJrxPYVYAbdRGBDHVr0DFrGwDErsf0zcjG9P1NW78i7ofN-VaRAxYOedNO0FSfQANsMWhg2NRh4Aw=s1600-rw-v1",
        "roofing": "https://drive.google.com/u/0/drive-viewer/AKGpihZC1u0-CZxZbTLqQFjf2qJrxPYVYAbdRGBDHVr0DFrGwDErsf0zcjG9P1NW78i7ofN-VaRAxYOedNO0FSfQANsMWhg2NRh4Aw=s1600-rw-v1",
        "contractors": "https://drive.google.com/u/0/drive-viewer/AKGpihZC1u0-CZxZbTLqQFjf2qJrxPYVYAbdRGBDHVr0DFrGwDErsf0zcjG9P1NW78i7ofN-VaRAxYOedNO0FSfQANsMWhg2NRh4Aw=s1600-rw-v1",
        "landscaping": "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "pest-control": "https://drive.google.com/u/0/drive-viewer/AKGpihZC1u0-CZxZbTLqQFjf2qJrxPYVYAbdRGBDHVr0DFrGwDErsf0zcjG9P1NW78i7ofN-VaRAxYOedNO0FSfQANsMWhg2NRh4Aw=s1600-rw-v1",
        "solar-installation": "https://drive.google.com/u/0/drive-viewer/AKGpihZC1u0-CZxZbTLqQFjf2qJrxPYVYAbdRGBDHVr0DFrGwDErsf0zcjG9P1NW78i7ofN-VaRAxYOedNO0FSfQANsMWhg2NRh4Aw=s1600-rw-v1",
        "garage-door": "https://drive.google.com/u/0/drive-viewer/AKGpihZC1u0-CZxZbTLqQFjf2qJrxPYVYAbdRGBDHVr0DFrGwDErsf0zcjG9P1NW78i7ofN-VaRAxYOedNO0FSfQANsMWhg2NRh4Aw=s1600-rw-v1",
        "window-cleaning": "https://drive.google.com/u/0/drive-viewer/AKGpihZC1u0-CZxZbTLqQFjf2qJrxPYVYAbdRGBDHVr0DFrGwDErsf0zcjG9P1NW78i7ofN-VaRAxYOedNO0FSfQANsMWhg2NRh4Aw=s1600-rw-v1",
    },
    "local-stores": {
        "hair-salons": "https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "boutiques": "https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "pet-supply": "https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "florists": "https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "nail-salons": "https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "gift-shops": "https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "fitness-studios": "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "tattoo-parlors": "https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "day-spas": "https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "cbd-natural": "https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
};

export const getImages = (template, subTemplate) => {
    // Use direct property access instead of Object.keys
    const templateImages = TEMPLATE_IMAGES[template] || TEMPLATE_IMAGES["real-estate"];

    // Create a shallow copy to avoid modifying the original object
    const images = { ...templateImages };

    // Check if both the template category and subTemplate exist
    if (SUBTEMPLATE_IMAGES[template] && SUBTEMPLATE_IMAGES[template][subTemplate]) {
        images["1"] = SUBTEMPLATE_IMAGES[template][subTemplate];
    }

    return images;
};