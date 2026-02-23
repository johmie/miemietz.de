document.querySelectorAll('[data-p1]').forEach(el => {
    const p1 = el.dataset.p1;
    const p2 = el.dataset.p2;
    const data = p1 + String.fromCharCode(64) + p2;
    el.textContent = data;
    el.addEventListener('click', function (e) {
        e.preventDefault();
        const mt = 'mai' + 'lto';
        window.location.href = mt + ':' + data;
    });
});

// Glass Modal - Replace alert()
function configureModal() {
    const modal = document.getElementById('glass-modal');
    const modalMessage = document.getElementById('glass-modal-message');
    const modalOk = document.getElementById('glass-modal-ok');
    let alertResolve;

    function t(key) {
        return translations[currentLang]?.[key] || key;
    }

    function showGlassAlert(message) {
        return new Promise((resolve) => {
            modalMessage.textContent = t(message);
            modal.classList.add('active');
            alertResolve = resolve;
        });
    }

    modalOk.addEventListener('click', () => {
        modal.classList.remove('active');
        if (alertResolve) {
            alertResolve();
            alertResolve = null;
        }
    });

    document.querySelector('.glass-modal-overlay').addEventListener('click', () => {
        modal.classList.remove('active');
        if (alertResolve) {
            alertResolve();
            alertResolve = null;
        }
    });

    window.alert = showGlassAlert;
}

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.01 });

fadeElements.forEach(el => observer.observe(el));

// Active nav on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function setNavigationActive() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Translations
const translations = {
    de: {
        nav: { home: 'Start', about: 'Über mich', skills: 'Fähigkeiten', contact: 'Kontakt' },
        hero: { subtitle: 'Freelance Softwareentwickler', location: 'Berlin, Deutschland', contact: 'Kontakt aufnehmen' },
        about: { title: 'Über mich', p1: 'Ich bin ein freiberuflicher Softwareentwickler mit über 20 Jahren Erfahrung in der Entwicklung robuster, skalierbarer Anwendungen. Ich lebe in Berlin und spezialisiere mich auf elegante Lösungen für reale Probleme.', p2: 'Mein Ansatz kombiniert Clean-Code-Prinzipien mit modernen Entwicklungsmethoden, um wartbare und leistungsstarke Anwendungen zu erstellen. Ich setze komplexe Anforderungen in saubere, effiziente Softwarearchitektur um.', badge: '20+ Jahre Erfahrung' },
        skills: { title: 'Fähigkeiten & Technologien', backend: 'Backend', frontend: 'Frontend', databases: 'Datenbanken', practices: 'Praktiken' },
        contact: { title: 'Kontakt', name: 'Name', namePlaceholder: 'Ihr Name', email: 'E-Mail', emailPlaceholder: 'ihre@email.de', message: 'Nachricht', messagePlaceholder: 'Erzählen Sie mir von Ihrem Projekt...', submit: 'Nachricht senden', direct: 'Oder schreiben Sie mir direkt an' },
        footer: { copyright: ' Alle Rechte vorbehalten.', imprint: 'Impressum', home: 'Zurück zur Startseite' },
        formAlert: 'Vielen Dank für Ihre Nachricht. Ich melde mich bald bei Ihnen.',
        formError: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
        dot: '.', ok: 'OK',
        cookie: { title: 'Cookie-Einstellungen', message: 'Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern. Dabei wird Google Analytics eingesetzt, um Besucherstatistiken zu erheben. Ihre Daten werden anonymisiert und nicht an Dritte weitergegeben.', accept: 'Akzeptieren', decline: 'Ablehnen', settings: 'Mehr erfahren' },
        imprint: { title: 'Impressum', h2_1: 'Angaben gemäß § 5 TMG', germany: 'Deutschland', h2_2: 'Kontakt', email: 'E-Mail', phone: 'Telefon', h2_3: 'Berufsbezeichnung und berufsrechtliche Regelungen', p3_1: 'Berufsbezeichnung: Softwareentwickler', p3_2: 'Es gelten keine besonderen berufsrechtlichen Regelungen.', h2_4: 'Streitbeilegung', p4_1: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr</a>.', p4_2: 'Meine E-Mail-Adresse finden Sie oben im Impressum.', p4_3: 'Ich bin nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.', h2_5: 'Haftung für Inhalte', p5_1: 'Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.', h2_6: 'Haftung für Links', p6_1: 'Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.', h2_7: 'Urheberrecht', p7_1: 'Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.', h2_8: 'Datenschutz', p8_1: 'Die Nutzung meiner Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf meinen Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.', p8_2: 'Ich weise darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.', h2_9: 'Google Analytics', p9_1: 'Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Inc. ("Google"). Google Analytics verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.', p9_2: 'Im Rahmen der IP-Anonymisierung wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.', p9_3: 'Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">https://tools.google.com/dlpage/gaoptout</a>.', p9_4: 'Weitere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter <a href="https://www.google.com/analytics/terms/de.html" target="_blank" rel="noopener">https://www.google.com/analytics/terms/de.html</a> bzw. unter <a href="https://www.google.de/intl/de/policies" target="_blank" rel="noopener">https://www.google.de/intl/de/policies</a>.' }
    },
    en: {
        nav: { home: 'Home', about: 'About', skills: 'Skills', contact: 'Contact' },
        hero: { subtitle: 'Freelance Software Developer', location: 'Berlin, Germany', contact: 'Get In Touch' },
        about: { title: 'About Me', p1: "I'm a freelance software developer with over 20 years of experience building robust, scalable applications. Based in Berlin, I specialize in creating elegant solutions that solve real-world problems.", p2: "My approach combines clean code principles with modern development practices, ensuring maintainable and performant applications. I thrive on turning complex requirements into clean, efficient software architecture.", badge: '20+ Years Experience' },
        skills: { title: 'Skills & Technologies', backend: 'Backend', frontend: 'Frontend', databases: 'Databases', practices: 'Practices' },
        contact: { title: 'Get In Touch', name: 'Name', namePlaceholder: 'Your name', email: 'Email', emailPlaceholder: 'your@email.com', message: 'Message', messagePlaceholder: 'Tell me about your project...', submit: 'Send Message', direct: 'Or email me directly at' },
        footer: { copyright: ' All rights reserved.', imprint: 'Imprint', home: 'Back to Home' },
        formAlert: 'Thank you for your message. I will get back to you soon.',
        formError: 'Error sending message. Please try again.',
        dot: '.', ok: 'OK',
        cookie: { title: 'Cookie Settings', message: 'This website uses cookies to improve user experience. Google Analytics is used to collect visitor statistics. Your data is anonymized and will not be shared with third parties.', accept: 'Accept', decline: 'Decline', settings: 'Learn more' },
        imprint: { title: 'Imprint', h2_1: 'Information According to § 5 TMG', germany: 'Germany', h2_2: 'Contact', email: 'Email', phone: 'Phone', h2_3: 'Job Title and Professional Regulations', p3_1: 'Job title: Software developer', p3_2: 'No special professional regulations apply.', h2_4: 'Online Dispute Resolution', p4_1: 'The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr</a>.', p4_2: 'My email address can be found above in the imprint.', p4_3: 'I am not obligated to participate in dispute resolution proceedings before a consumer arbitration board.', h2_5: 'Liability for Content', p5_1: 'The contents of my pages were created with the greatest care. However, I cannot guarantee the correctness, completeness, or topicality of the contents. As a service provider, I am responsible for my own content on these pages in accordance with § 7 para.1 TMG under the general laws. According to §§ 8 to 10 TMG, I am not obligated to monitor transmitted or stored external information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of corresponding legal violations, I will remove this content immediately.', h2_6: 'Liability for Links', p6_1: 'My offer contains links to external websites of third parties, on whose contents I have no influence. Therefore, I cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, permanent monitoring of the contents of the linked pages is not reasonable without concrete evidence of a violation of law. Upon becoming aware of legal violations, I will remove such links immediately.', h2_7: 'Copyright', p7_1: 'The content and works created by me on these pages are subject to German copyright law. The reproduction, editing, distribution and any kind of utilization outside the limits of copyright law require my written consent. Downloads and copies of this page are only permitted for private, non-commercial use. Insofar as the contents on this page were not created by me, the copyrights of third parties are respected. In particular, third-party contents are marked as such. Should you nevertheless become aware of a copyright infringement, please inform me accordingly. Upon becoming aware of legal violations, I will remove such contents immediately.', h2_8: 'Privacy Policy', p8_1: 'The use of my website is generally possible without providing personal data. Insofar as personal data (for example name, address or email addresses) is collected on my pages, this is always done on a voluntary basis, as far as possible. This data will not be passed on to third parties without your express consent.', p8_2: 'I would like to point out that data transmission on the Internet (e.g. communication by e-mail) can have security gaps. A complete protection of data against access by third parties is not possible.', h2_9: 'Google Analytics', p9_1: 'This website uses Google Analytics, a web analytics service provided by Google Inc. ("Google"). Google Analytics uses so-called "cookies", text files that are stored on your computer and that allow an analysis of your use of the website. The information generated by the cookie about your use of this website is usually transferred to a Google server in the USA and stored there.', p9_2: 'As part of IP anonymization, your IP address will be truncated by Google within member states of the European Union or in other contracting states of the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be transferred to a Google server in the USA and truncated there. The IP address transmitted by your browser as part of Google Analytics will not be merged with other Google data.', p9_3: 'You can prevent the storage of cookies by setting your browser software accordingly; however, we would like to point out that in this case you may not be able to use all functions of this website to their full extent. You can also prevent the collection of data generated by the cookie and related to your use of the website (including your IP address) by Google and the processing of this data by Google by downloading and installing the browser plug-in available at the following link: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">https://tools.google.com/dlpage/gaoptout</a>.', p9_4: 'For more information on terms of use and privacy, please visit <a href="https://www.google.com/analytics/terms/us.html" target="_blank" rel="noopener">https://www.google.com/analytics/terms/us.html</a> or <a href="https://www.google.com/intl/en/policies" target="_blank" rel="noopener">https://www.google.com/intl/en/policies</a>.' }
    },
    zh: {
        nav: { home: '首页', about: '关于', skills: '技能', contact: '联系' },
        hero: { subtitle: '自由软件开发者', location: '德国柏林', contact: '联系我' },
        about: { title: '关于我', p1: '我是一名自由软件开发者，拥有超过20年构建健壮、可扩展应用的经验。居住在柏林，我专注于创造优雅的解决方案来解决现实世界的问题。', p2: '我的方法结合了Clean Code原则和现代开发实践，确保应用的可维护性和高性能。', badge: '20年以上经验' },
        skills: { title: '技能与技术', backend: '后端', frontend: '前端', databases: '数据库', practices: '实践' },
        contact: { title: '联系我', name: '姓名', namePlaceholder: '您的姓名', email: '邮箱', emailPlaceholder: 'your@email.com', message: '留言', messagePlaceholder: '请告诉我您的项目...', submit: '发送消息', direct: '或直接发邮件至' },
        footer: { copyright: '保留所有权利。', imprint: '法律信息', home: '返回首页' },
        formAlert: '感谢您的留言。我会尽快回复您。',
        formError: '发送消息时出错。请重试。',
        dot: '。', ok: '确定',
        cookie: { title: 'Cookie 设置', message: '本网站的 cookies 用于改善用户体验，并使用 Google Analytics 收集访客统计数据。您的数据将被匿名化，不会与第三方共享。', accept: '接受', decline: '拒绝', settings: '了解更多' },
        imprint: { title: '法律信息', h2_1: '根据 § 5 TMG 的信息', germany: '德国', h2_2: '联系方式', email: '电子邮箱', phone: '电话', h2_3: '职业名称及职业法规', p3_1: '职位名称：软件开发人员', p3_2: '不适用特殊的职业法规。', h2_4: '在线争议解决', p4_1: '欧盟委员会提供在线争议解决平台：<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr</a>。', p4_2: '我的电子邮箱地址见上文法律信息部分。', p4_3: '我没有义务参与消费者仲裁机构的争议解决程序。', h2_5: '内容责任', p5_1: '我已尽最大努力创建本页面的内容。但是，我无法保证内容的正确性、完整性或时效性。根据 § 7 第1款 TMG，作为服务提供商，我对我自己页面的内容负责。根据 § 8 至 § 10 TMG，我没有义务监控传输或存储的外部信息或调查表明非法活动的情况。根据一般法律移除或阻止使用信息的义务不受影响。但是，只有在知道具体法律违规行为时才能承担此责任。在知悉相应的法律违规后，我将立即删除这些内容。', h2_6: '链接责任', p6_1: '我的报价包含指向第三方外部网站的链接，我无法影响这些外部内容。因此，我无法对这些外部内容承担任何责任。链接页面的提供商或运营商始终对链接页面的内容负责。链接页面在链接时已检查是否存在法律违规。链接时未发现非法内容。但是，对链接页面内容的永久监控在没有具体违法证据的情况下是不合理的。在知悉法律违规后，我将立即删除此类链接。', h2_7: '版权', p7_1: '我在这些页面上创建的内容和作品受德国版权法保护。未经我的书面同意，禁止复制、编辑、分销和任何形式的利用。本页面的下载和复制仅允许用于私人、非商业用途。在我未创建的内容范围内，尊重第三方的版权。特别是，第三方内容会被标记。如果您发现侵犯版权的情况，请通知我。在知悉法律违规后，我将立即删除此类内容。', h2_8: '隐私政策', p8_1: '使用我的网站通常无需提供个人数据。在我的页面上收集个人数据（例如姓名、地址或电子邮件地址）时，始终在自愿的基础上进行。在您明确同意的情况下，这些数据不会传递给第三方。', p8_2: '我想指出的是，互联网上的数据传输（例如通过电子邮件通信）可能存在安全漏洞。无法完全保护数据免受第三方访问。', h2_9: 'Google Analytics', p9_1: '本网页使用 Google Inc. 的网页分析服务 Google Analytics。Google Analytics 使用"Cookies"，即存储在您电脑中的文本文件，用于分析您对网页的使用情况。由 Cookie 生成的有关您使用本网页的信息通常会被传输到美国的 Google 服务器并存储在那里。', p9_2: '在 IP 匿名化功能激活的情况下，您的 IP 地址在传输到美国之前，会在欧盟成员国或欧洲经济区协定的其他签署国内被截断。只有在特殊情况下，完整的 IP 地址才会被传输到美国的 Google 服务器并在那里被截断。您的浏览器作为 Google Analytics 一部分传输的 IP 地址不会与 Google 的其他数据合并。', p9_3: '您可以通过相应设置浏览器软件来阻止 Cookie 的存储；但请注意，在此情况下，您可能无法完整使用本网页的所有功能。您也可以通过下载并安装以下链接中的浏览器插件来阻止 Google 生成并与您对网页使用相关的数据（包括 IP 地址）的收集及 Google 对其的处理：<a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">https://tools.google.com/dlpage/gaoptout</a>。', p9_4: '有关使用条款和隐私的更多信息，请访问 <a href="https://www.google.com/analytics/terms/cn.html" target="_blank" rel="noopener">https://www.google.com/analytics/terms/cn.html</a> 或 <a href="https://www.google.com/intl/zh-CN/policies" target="_blank" rel="noopener">https://www.google.com/intl/zh-CN/policies</a>。' }
    }
};

const langNames = { en: 'EN', de: 'DE', zh: '中文' };

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            value = value?.[k];
        }
        if (value) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = value;
            } else {
                el.innerHTML = value;
            }
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            value = value?.[k];
        }
        if (value) el.placeholder = value;
    });
    document.getElementById('lang-current-text').textContent = langNames[lang];
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('lang', lang);
    currentLang = lang;
}

document.getElementById('lang-current').addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('.lang-switcher').classList.toggle('open');
});

document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
        document.querySelector('.lang-switcher').classList.remove('open');
    });
});

document.addEventListener('click', () => {
    document.querySelector('.lang-switcher').classList.remove('open');
});

const savedLang = localStorage.getItem('lang') || 'de';
let currentLang = savedLang;
setLanguage(currentLang);

// Formspree AJAX submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '...';
        submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                await alert('formAlert');
                form.reset();
            } else {
                await alert('formError');
            }
        } catch (error) {
            await alert('formError');
        }
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// Cookie Consent
let cookieConsentChecked = false;

function initCookieConsent() {
    if (cookieConsentChecked) return;
    cookieConsentChecked = true;
    checkCookieConsent();
}

function checkCookieConsent() {
    const consentBanner = document.getElementById('cookie-consent');
    if (!consentBanner) return;

    const consent = localStorage.getItem('cookie_consent');
    const fromCookie = sessionStorage.getItem('from_cookie_consent');

    if (consent === 'accepted') {
        enableGoogleAnalytics();
        consentBanner.classList.remove('active');
    } else if (fromCookie === 'true') {
        sessionStorage.removeItem('from_cookie_consent');
    } else if (!consent || consent === 'declined') {
        consentBanner.classList.add('active');
    }
}

function acceptCookies() {
    localStorage.setItem('cookie_consent', 'accepted');
    const banner = document.getElementById('cookie-consent');
    if (banner) banner.classList.remove('active');
    enableGoogleAnalytics();
}

function declineCookies() {
    localStorage.setItem('cookie_consent', 'declined');
    const banner = document.getElementById('cookie-consent');
    if (banner) banner.classList.remove('active');
}

function goToImprint(e) {
    e.preventDefault();
    sessionStorage.setItem('from_cookie_consent', 'true');
    window.location.href = 'imprint.html#google-analytics';
}

function enableGoogleAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-EKTWH577K1');

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-EKTWH577K1';
    document.head.appendChild(script);
}

function openCookieSettings() {
    const consentBanner = document.getElementById('cookie-consent');
    if (consentBanner) {
        consentBanner.classList.remove('active');
    }
    if (!window.location.pathname.includes('imprint.html')) {
        window.open('imprint.html', '_self');
    }
}

document.addEventListener('DOMContentLoaded', initCookieConsent);

// Only check cookie consent on pageshow for index page
window.addEventListener('pageshow', function(e) {
    if (!window.location.pathname.includes('imprint.html')) {
        checkCookieConsent();
    }
});