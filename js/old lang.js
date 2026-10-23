// ============================================
// Language Translation File
// ============================================
// This file stores ALL the text for your website.
// When you add Chinese later, just fill in the "zh" section below.

const translations = {
    en: {
        // --- Navigation ---
        "nav.brand_alt": "Alvision Optometrist",
        "nav.menu": "Menu",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.eyecare": "Eye Care",
        "nav.eyewear": "Eyewear",
        "nav.articles": "Articles",
        "nav.contact": "Contact",
        "nav.contact_btn": "Contact Us",

        // --- Hero Section ---
        "hero.title": "Professional Eye Care at Your Neighbourhood Optical Shop",
        "hero.description": "Alvision Optometrist is an optical shop in Taman Cheras, Kuala Lumpur, proudly serving the community since 2003. Our practicing optometrist provide comprehensive eye examinations, eye health screenings, prescription spectacles, and contact lens fittings tailored to your needs.",

                // --- Family Eye Care Section ---
        "family.title": "Eye Care for the Whole Family – Every Age, Every Stage",
        "family.subtitle": "Every stage of life brings different visual needs. From children's developing vision to the changing needs of adults and seniors, we provide professional, personalised eye care for your whole family.",
        "services.paediatric.title": "Paediatric Care & Myopia Control",
        "services.paediatric.desc": "Gentle eye assessments and myopia control solutions to support healthy vision development in children.",
        "services.vision.title": "Vision for Work & Everyday Life",
        "services.vision.desc": "Digital eye strain relief, progressive lens fittings, and tailored solutions for work, sports, and daily activities.",
        "services.screening.title": "Comprehensive Eye Health Screenings",
        "services.screening.desc": "Screenings for glaucoma, cataracts, and retinal conditions are essential for maintaining long-term eye health.",
        // --- Features Section ---
        "features.device_title": "Device Mockups",
        "features.device_desc": "Ready to use HTML/CSS device mockups, no Photoshop required!",
        "features.flexible_title": "Flexible Use",
        "features.flexible_desc": "Put an image, video, animation, or anything else in the screen!",
        "features.free_title": "Free to Use",
        "features.free_desc": "As always, this theme is free to download and use for any purpose!",
        "features.opensource_title": "Open Source",
        "features.opensource_desc": "Since this theme is MIT licensed, you can use it commercially!",

        // --- Basic Features Section ---
        "basic.title": "Enter a new age of web design",
        "basic.desc": "This section is perfect for featuring some information about your application, why it was built, the problem it solves, or anything else! There's plenty of space for text here, so don't worry about writing too much.",

        // --- CTA Section ---
        "cta.line1": "Stop waiting.",
        "cta.line2": "Start building.",
        "cta.button": "Download for free",

        // --- Download Section ---
        "download.title": "Get the app now!",

        // --- Footer ---
        "footer.copyright": "Your Website 2023. All Rights Reserved.",
        "footer.privacy": "Privacy",
        "footer.terms": "Terms",
        "footer.faq": "FAQ",

        // --- Modal / Contact Form ---
        "modal.title": "Send feedback",
        "modal.name_label": "Full name",
        "modal.name_error": "A name is required.",
        "modal.email_label": "Email address",
        "modal.email_error_required": "An email is required.",
        "modal.email_error_invalid": "Email is not valid.",
        "modal.phone_label": "Phone number",
        "modal.phone_error": "A phone number is required.",
        "modal.message_label": "Message",
        "modal.message_error": "A message is required.",
        "modal.success_title": "Form submission successful!",
        "modal.success_text": "To activate this form, sign up at",
        "modal.error": "Error sending message!",
        "modal.submit": "Submit"
    },

    // ============================================
    // CHINESE VERSION - Fill this in later!
    // ============================================
    zh: {
        // Example (you will replace these later):
        // "nav.home": "首页",
        // "nav.about": "关于我们",
        // "hero.title": "您社区眼镜店的专业眼科护理",
    }
};

// ============================================
// Translation Engine (Don't touch this part)
// ============================================
function setLanguage(lang) {
    // Save user's choice in browser
    localStorage.setItem('lang', lang);
    
    // Update the HTML lang attribute
    document.documentElement.lang = lang;
    
    // Find every element with data-i18n and swap the text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang]?.[key];
        
        if (text) {
            el.textContent = text;
        }
    });
    
    // Handle alt text on images (data-i18n-alt)
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        const text = translations[lang]?.[key];
        
        if (text) {
            el.alt = text;
        }
    });
}

// Run on page load: use saved language, or default to English
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
});