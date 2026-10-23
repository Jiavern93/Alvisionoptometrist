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
        "nav.eyecare": "Eyecare",
        "nav.brands": "Brands",
        "nav.eyehealthtips": "Eye Health Tips",
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

        // --- Our Eye Care Services Section ---
        "services.section.title": "Our Eye Care Services",
        "services.section.subtitle": "From routine eye examinations to prescription spectacles, contact lenses and eye health screenings - professional eye care tailored to your visual needs.",
        "services.1.title": "Comprehensive Eye Examination",
        "services.1.desc": "A thorough assessments of your vision and eye health, including binocular vision, color vision, and early signs of eye conditions - helping you see clearly and comfortably.",
        "services.2.title": "Prescription Spectacles",
        "services.2.desc": "Spectacles tailored to your lifestyle, with lens options including single vision, bifocal, progressive, and specialised lenses.",
        "services.3.title": "Contact Lens Fittings",
        "services.3.desc": "Professional fitting for all visual needs - from first-time wearers to astigmatism, presbyopia, and specialised requirements - with assessment, guidance, and follow-up care.",
        "services.4.title": "Paediatric Vision Care",
        "services.4.desc": "Child-friendly eye assessments to evaluate vision and visual development, including binocular vision assessment and myopia management for healthy vision growth.",
        "services.5.title": "Cataract Screening",
        "services.5.desc": "Cataract screening to assess for signs of cataracts and vision changes, with a clear explanation of findings and appropriate advise on next steps.",
        "services.6.title": "Retinal Screening",
        "services.6.desc": "Advanced retinal imaging to screen for diabetic retinopathy, macular degeneration, and glaucoma - often before symptoms appear.",

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
        "modal.title": "Have Questions About Your Eyes?",
        "modal.name_label": "Name",
        "modal.name_error": "A name is required.",
        "modal.email_label": "Email address (Optional)",
        "modal.email_error_invalid": "Email is not valid.",
        "modal.phone_label": "Phone number",
        "modal.phone_error": "A phone number is required.",
        "modal.message_label": "Ask us anything about your eyes",
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