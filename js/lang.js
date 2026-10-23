// ============================================
// Language Translation File
// ============================================
// This file stores ALL the text for your website.
// When you add Chinese later, just fill in the "zh" section below.

// 1. Define the translations
const translations = {
    en: {
        // --- Navigation ---
        "nav.brand_alt": "Alvision Optometrist",
        "nav.menu": "Menu",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.eyecare": "Eye Care",
        "nav.brands": "Brands",
        "nav.eyehealthtips": "Eye Health Tips",
        "nav.contact": "Contact",
        "nav.contact_btn": "Message Us",

        // --- Hero Section ---
        "hero.title": "Professional Eye Care at Your Neighbourhood Optical Shop",
        "hero.description": "Alvision Optometrist is an optical shop in Taman Cheras, Kuala Lumpur, proudly serving the community since 2003. Our practicing optometrist provide comprehensive eye examinations, eye health screenings, prescription spectacles, and contact lens fittings tailored to your needs.",

        // --- Section 2: Family Eye Care ---
        "family.title": "Eye Care for the Whole Family – Every Age, Every Stage",
        "family.subtitle": "Every stage of life brings different visual needs. From children's developing vision to the changing needs of adults and seniors, we provide professional, personalised eye care for your whole family.",
        "services.paediatric.title": "Paediatric Care & Myopia Control",
        "services.paediatric.desc": "Gentle eye assessments and myopia control solutions to support healthy vision development in children.",
        "services.vision.title": "Vision for Work & Everyday Life",
        "services.vision.desc": "Digital eye strain relief, progressive lens fittings, and tailored solutions for work, sports, and daily activities.",
        "services.screening.title": "Comprehensive Eye Health Screenings",
        "services.screening.desc": "Screenings for glaucoma, cataracts, and retinal conditions are essential for maintaining long-term eye health.",

        // --- Section 3: Services Grid ---
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

        // --- Section 4: More Than Just Eyewear ---
        "choose.title": "More Than Just Eyewear",
        "choose.subtitle": "Eye care goes beyond checking your prescription. We take the time to understand your vision, lifestyle, and daily activities - recommending solutions tailored to your needs.",
        "choose.1.title": "Beyond the Prescription",
        "choose.1.desc": "We provide thorough assessments of your vision and eye health to understand your visual needs and detect changes early.",
        "choose.2.title": "Solutions Tailored to You",
        "choose.2.desc": "Everyone has different visual demands. We consider your work, lifestyle, and daily routines when recommending spectacles, contact lenses or specialised lenses.",
        "choose.3.title": "Ongoing Aftercare",
        "choose.3.desc": "Our care continues long after you receive your eyewear - with fitting adjustments, routine servicing, and follow-up support to keep your eyewear comfortable.",

        // --- Section 5: History ---
        "history.title": "From Alvision Optical to Alvision Optometrist",
        "history.subtitle": "Serving the Cheras community since 2003, Alvision began as a small neighbourhood optical shop. In 2024, we transformed into Alvision Optometrist, expanding our practice with advanced diagnostic instruments for comprehensive eye examinations and eye health assessments. Today, we continue to provide personalised eye care while staying true to our neighbourhood roots.",
        "history.1.title": "Alvision Optical",
        "history.1.desc": "Our beginnings as a trusted neighbourhood optical shop in Taman Cheras.",
        "history.1.alt": "Alvision Optical 2003",
        "history.2.title": "Alvision Optometrist",
        "history.2.desc": "Our clinical evolution—bringing primary eye care and advanced diagnostic screening to Cheras families.",
        "history.2.alt": "Alvision Optometrist 2024",
        "basic.title": "The People Behind Alvision",
        "basic.desc": "Alvision is a family-run practice combining decades of optical craftmanship with dedicated clinical eye care.",
        "history.img1.title": "Optometrist",
        "history.img1.desc": "Comprehensive Eye Examinations · Eye Health Assessments · Personalised Vision Care",
        "history.img2.title": "Optician",
        "history.img2.desc": "Vision Assessment · Optical Dispensing · Spectacle Fitting & Adjustments · Optical Workmanship",

        // --- Section 6: Eye Health Tips ---
        "tips.title": "Eye Health Tips & Insights",
        "tips.subtitle": "Explore helpful information about eye health, vision & everyday eye care - from Alvision Optometrist.",
        "tips.1.title": "Cataracts: Early Signs and How They Affect Your Vision",
        "tips.1.desc": "Learn about common signs of cataracts, how they can affect your vision and when to have your eyes checked.",
        "tips.2.title": "Digital Eye Strain: Why Your Eyes Feel Tired After Screen Use?",
        "tips.2.desc": "Discover common causes of digital eye strain and practical ways to make screen time more comfortable.",
        "tips.3.title": "Children Vision: Is Your Child Seeing Clearly?",
        "tips.3.desc": "Children's vision plays an important role in learning and development. Learn to recognise signs of blurry vision and when your child may need an eye examination.",
        "tips.readmore": "Read more",

        // --- Section 7: Visit Our Clinic ---
        "contact.title": "Visit Alvision Optometrist in Taman Cheras",
        "contact.subtitle": "Looking for a professional optical shop & optometry practice in Taman Cheras, Kuala Lumpur? Visit Alvision Optometrist for comprehensive eye examinations, prescription spectacles, contact lens fittings, and personalised eye care. Walk-ins are welcome.",
        "contact.address_title": "Address",
        "contact.address_text": "Alvision Optometrist\n6, Jalan 1/95\nTaman Cheras, 56100 Cheras\nKuala Lumpur",
        "contact.contact_title": "Contact",
        "contact.phone_label": "Phone:",
        "contact.whatsapp_label": "WhatsApp:",
        "contact.hours_title": "Operating Hours",
        "contact.mon_sat": "Monday – Saturday",
        "contact.time_mon_sat": "9:00 AM – 7:00 PM",
        "contact.sunday": "Sunday",
        "contact.time_sun": "9:00 AM – 2:00 PM",
        "contact.book_btn": "Book an Eye Examination",

        // --- Modal / Contact Form ---
        "modal.title": "Have Questions About Your Vision or Eye Health?",
        "modal.name_label": "Name",
        "modal.name_error": "A name is required.",
        "modal.phone_label": "Phone number",
        "modal.phone_error": "A phone number is required.",
        "modal.email_label": "Email address (optional)",
        "modal.message_label": "Message",
        "modal.message_error": "A message is required.",
        "modal.submit": "Submit"
    },
    zh: {
        // --- Navigation ---
        "nav.brand_alt": "Alvision 视光师",
        "nav.menu": "菜单",
        "nav.home": "首页",
        "nav.about": "关于我们",
        "nav.eyecare": "眼睛护理",
        "nav.brands": "品牌",
        "nav.eyehealthtips": "眼睛健康贴士",
        "nav.contact": "联系我们",
        "nav.contact_btn": "联系我们",

        // --- Hero Section ---
        "hero.title": "您社区的专业眼睛护理光学店",
        "hero.description": "Alvision 视光师是位于吉隆坡蕉赖 Taman Cheras 的一家光学店，自2003年以来自豪地为社区服务。我们的执业视光师提供全面的眼睛检查、眼睛健康筛查、处方眼镜以及根据您需求量身定制的隐形眼镜验配。",

        // --- Section 2: Family Eye Care ---
        "family.title": "全家人的眼睛护理 – 每个年龄，每个阶段",
        "family.subtitle": "生命的每个阶段都会带来不同的视觉需求。从儿童发育中的视力到成年人和老年人不断变化的需求，我们为您全家人提供专业、个性化的眼睛护理。",
        "services.paediatric.title": "儿童护理与近视控制",
        "services.paediatric.desc": "温和的眼睛评估和近视控制方案，支持儿童健康视力发展。",
        "services.vision.title": "工作与日常生活的视力",
        "services.vision.desc": "缓解数码眼睛疲劳、渐进镜片验配以及为工作、运动和日常活动量身定制的解决方案。",
        "services.screening.title": "全面的眼睛健康筛查",
        "services.screening.desc": "青光眼、白内障和视网膜疾病的筛查对于维持长期眼睛健康至关重要。",

        // --- Section 3: Services Grid ---
        "services.section.title": "我们的眼睛护理服务",
        "services.section.subtitle": "从常规眼睛检查到处方眼镜、隐形眼镜和眼睛健康筛查 - 为您的视觉需求量身定制的专业眼睛护理。",
        "services.1.title": "全面眼睛检查",
        "services.1.desc": "对您的视力和眼睛健康进行全面评估，包括双眼视觉、色觉和眼睛疾病的早期迹象 - 帮助您清晰舒适地看东西。",
        "services.2.title": "处方眼镜",
        "services.2.desc": "根据您的生活方式量身定制的眼镜，镜片选项包括单光、双光、渐进和特殊镜片。",
        "services.3.title": "隐形眼镜验配",
        "services.3.desc": "为所有视觉需求提供专业验配 - 从初次佩戴者到散光、老花和特殊需求 - 包括评估、指导和后续护理。",
        "services.4.title": "儿童视力护理",
        "services.4.desc": "适合儿童的眼睛评估，以评估视力和视觉发育，包括双眼视觉评估和近视管理，以促进健康视力成长。",
        "services.5.title": "白内障筛查",
        "services.5.desc": "白内障筛查以评估白内障迹象和视力变化，并清楚解释发现结果和适当的后续步骤建议。",
        "services.6.title": "视网膜筛查",
        "services.6.desc": "先进的视网膜成像，用于筛查糖尿病视网膜病变、黄斑变性和青光眼 - 通常在症状出现之前。",

        // --- Section 4: More Than Just Eyewear ---
        "choose.title": "不仅仅是眼镜",
        "choose.subtitle": "眼睛护理不仅仅是检查您的度数。我们花时间了解您的视力、生活方式和日常活动 - 推荐适合您需求的解决方案。",
        "choose.1.title": "超越处方",
        "choose.1.desc": "我们提供全面的视力和眼睛健康评估，以了解您的视觉需求并及早发现变化。",
        "choose.2.title": "为您量身定制的解决方案",
        "choose.2.desc": "每个人都有不同的视觉需求。在推荐眼镜、隐形眼镜或特殊镜片时，我们会考虑您的工作、生活方式和日常习惯。",
        "choose.3.title": "持续的售后护理",
        "choose.3.desc": "在您收到眼镜很久之后，我们的护理仍在继续 - 包括验配调整、常规维护和后续支持，以保持您的眼镜舒适。",

        // --- Section 5: History ---
        "history.title": "从 Alvision Optical 到 Alvision Optometrist",
        "history.subtitle": "自2003年以来服务于蕉赖社区，Alvision 最初是一家小型社区光学店。2024年，我们转型为 Alvision Optometrist，通过先进的诊断仪器扩展了我们的实践，进行全面的眼睛检查和眼睛健康评估。今天，我们继续提供个性化的眼睛护理，同时忠于我们的社区根源。",
        "history.1.title": "Alvision Optical",
        "history.1.desc": "我们作为 Taman Cheras 值得信赖的社区光学店的起点。",
        "history.1.alt": "Alvision Optical 2003年",
        "history.2.title": "Alvision Optometrist",
        "history.2.desc": "我们的临床演变——为蕉赖家庭带来初级眼睛护理和先进的诊断筛查。",
        "history.2.alt": "Alvision Optometrist 2024年",
        "basic.title": "Alvision 背后的团队",
        "basic.desc": "Alvision 是一家家族经营的企业，结合了数十年的光学工艺和专注的临床眼睛护理。",
        "history.img1.title": "视光师",
        "history.img1.desc": "全面眼睛检查 · 眼睛健康评估 · 个性化视力护理",
        "history.img2.title": "配镜师",
        "history.img2.desc": "视力评估 · 光学配镜 · 眼镜验配与调整 · 光学工艺",

        // --- Section 6: Eye Health Tips ---
        "tips.title": "眼睛健康贴士与见解",
        "tips.subtitle": "探索有关眼睛健康、视力和日常眼睛护理的有用信息 - 来自 Alvision Optometrist。",
        "tips.1.title": "白内障：早期迹象及其如何影响您的视力",
        "tips.1.desc": "了解白内障的常见迹象、它们如何影响您的视力以及何时应该检查眼睛。",
        "tips.2.title": "数码眼睛疲劳：为什么使用屏幕后眼睛会感到疲倦？",
        "tips.2.desc": "发现数码眼睛疲劳的常见原因以及让屏幕时间更舒适的实用方法。",
        "tips.3.title": "儿童视力：您的孩子看得清楚吗？",
        "tips.3.desc": "儿童视力在学习和发育中起着重要作用。学会识别视力模糊的迹象以及您的孩子何时可能需要眼睛检查。",
        "tips.readmore": "阅读更多",

        // --- Section 7: Visit Our Clinic ---
        "contact.title": "来访 Alvision Optometrist（蕉赖 Taman Cheras）",
        "contact.subtitle": "正在寻找吉隆坡蕉赖 Taman Cheras 的专业光学店和视光中心？来访 Alvision Optometrist，享受全面的眼睛检查、处方眼镜、隐形眼镜验配以及个性化的眼睛护理。欢迎直接到访。",
        "contact.address_title": "地址",
        "contact.address_text": "Alvision Optometrist\n6, Jalan 1/95\nTaman Cheras, 56100 Cheras\nKuala Lumpur",
        "contact.contact_title": "联系方式",
        "contact.phone_label": "电话号码:",
        "contact.whatsapp_label": "WhatsApp:",         
        "contact.hours_title": "营业时间",
        "contact.mon_sat": "星期一至星期六",
        "contact.time_mon_sat": "上午 9:00 – 晚上 7:00",
        "contact.sunday": "星期日",
        "contact.time_sun": "上午 9:00 – 下午 2:00",
        "contact.book_btn": "预约眼睛检查",

        // --- Modal / Contact Form ---
        "modal.title": "对您的视力或眼睛健康有疑问吗？",
        "modal.name_label": "姓名",
        "modal.name_error": "需要填写姓名。",
        "modal.phone_label": "电话号码",
        "modal.phone_error": "需要填写电话号码。",
        "modal.email_label": "电子邮件地址（可选）",
        "modal.message_label": "信息",
        "modal.message_error": "需要填写信息。",
        "modal.submit": "提交"
    }
};

// 2. The function that applies the translations
function setLanguage(lang) {
    // Save the user's choice in the browser
    localStorage.setItem('preferredLanguage', lang);
    
    // Find all elements with a data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update alt text for images
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('alt', translations[lang][key]);
        }
    });

    // Update placeholders for inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update the HTML lang attribute for SEO and screen readers
    document.documentElement.lang = lang;
}

// 3. Load the saved language (or default to English) when the page opens
document.addEventListener('DOMContentLoaded', () => {
    // TEMPORARILY FORCED TO ENGLISH UNTIL CHINESE IS READY
    // const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    // setLanguage(savedLang);
    
    setLanguage('en'); // Always load English
});