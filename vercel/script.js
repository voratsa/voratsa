document.addEventListener('DOMContentLoaded', function() {
    function initializePortfolio() {
        const FLAG_URLS = {
            en: 'https://www.worldometers.info/img/flags/small/tn_us-flag.gif',
            ru: 'https://www.worldometers.info/img/flags/small/tn_rs-flag.gif'
        };
        const LANGUAGE_NAMES = {
            en: 'English',
            ru: 'Русский'
        };

        const EN_TITLE_SEQUENCE = ["voratsa_", "vorats_", "vorat_", "vora_", "vor_", "vo_", "v_", "vo_", "vor_", "vora_", "vorat_", "vorats_", "voratsa_"];
        const RU_TITLE_SEQUENCE = ["вораца_", "ворац_", "вора_", "вор_", "во_", "в_", "во_", "вор_", "вора_", "ворац_", "вораца_"];
        let titleSequenceIndex = 0;
        let titleIntervalId = null;

        const translations = {
            en: {
                'brand_name': "voratsa",
                'greeting_main': "Hello, I'm <span class='accent-text'>voratsa</span>.",
                'greeting_secondary': "A developer specializing in building modern and robust <b>Web Applications</b>.",
                'dive_in': "Dive In",
                'nav_about': "About Me",
                'nav_donations': "Support",
                'nav_contact': "Contact",
                'about_title': "About Me",
                'skills_title': "What voratsa knows",
                'donations_title': "Support My Work",
                'contact_title': "Contact",
                'open_source_text': "This site is Open Source!",
                'license_mit': "Licensed under MIT.",
                'key_details_header': "Key Details",
                'detail_name': "Name:",
                'detail_age': "Age:",
                'detail_country': "Country:",
                'country_value': "Russia",
                'web_dev_header': "Web Dev",
                'web_dev_desc': "HOVER ME!",
                'discord_dev_header': "Discord Bot Dev",
                'discord_dev_desc': "HOVER ME!",
                'languages_header': "Languages",
                'languages_desc': "HOVER ME!",
                'donations_desc_crypto': "Crypto donations are a highly appreciated way to support my open-source development.",
                'copy_address': "Copy Address",
                'copied_text': "Copied!",
                'coin_btc': "Bitcoin (BTC)",
                'coin_eth': "Ethereum (ETH)",
                'coin_ltc': "Litecoin (LTC)",
                'coin_xmr': "Monero (XMR)",
                'contact_desc': "I'm always open to connecting and discussing new projects or ideas. You can find me on these platforms:",
                'age_units': "years old",
            },
            ru: {
                'brand_name': "вораца",
                'greeting_main': "Привет, я <span class='accent-text'>вораца</span>.",
                'greeting_secondary': "Разработчик, специализирующийся на создании современных и надежных <b>Веб-приложений</b>.",
                'dive_in': "Начать",
                'nav_about': "Обо мне",
                'nav_donations': "Поддержка",
                'nav_contact': "Контакты",
                'about_title': "Обо мне",
                'skills_title': "Что знает вораца",
                'donations_title': "Поддержите мою работу",
                'contact_title': "Контакты",
                'open_source_text': "Этот сайт с открытым исходным кодом!",
                'license_mit': "Лицензировано под MIT.",
                'key_details_header': "Основные данные",
                'detail_name': "Имя:",
                'detail_age': "Возраст:",
                'detail_country': "Страна:",
                'country_value': "Россия",
                'web_dev_header': "Веб-разработка",
                'web_dev_desc': "НАВЕДИ!",
                'discord_dev_header': "Разработка Discord-ботов",
                'discord_dev_desc': "НАВЕДИ!",
                'languages_header': "Языки",
                'languages_desc': "НАВЕДИ!",
                'donations_desc_crypto': "Криптовалютные пожертвования — это очень ценный способ поддержать мою разработку с открытым исходным кодом.",
                'copy_address': "Копировать адрес",
                'copied_text': "Скопировано!",
                'coin_btc': "Биткойн (BTC)",
                'coin_eth': "Эфириум (ETH)",
                'coin_ltc': "Лайткойн (LTC)",
                'coin_xmr': "Монеро (XMR)",
                'contact_desc': "Я всегда готов к общению и обсуждению новых проектов или идей. Меня можно найти на этих платформах:",
                'age_units': "лет",
            }
        };

        let currentLanguage = 'en';
        const birthDate = new Date('2011-10-11T00:00:00');
        let ageDisplay; 
        let ageIntervalId; 

        function runTitleAnimation() {
            const sequence = currentLanguage === 'ru' ? RU_TITLE_SEQUENCE : EN_TITLE_SEQUENCE;

            function animateTitle() {
                const brandName = translations[currentLanguage]['brand_name'];
                const currentTitle = brandName.substring(0, brandName.length - titleSequenceIndex) + '_';
                
                document.title = sequence[titleSequenceIndex];
                
                titleSequenceIndex = (titleSequenceIndex + 1) % sequence.length;
            }

            if (titleIntervalId) clearInterval(titleIntervalId);

            titleSequenceIndex = 0; 
            
            animateTitle(); 
            titleIntervalId = setInterval(animateTitle, 300); 
        }

        function toggleDropdown() {
            const menu = document.getElementById('lang-dropdown-menu');
            const button = document.getElementById('lang-dropdown-button');
            const isHidden = menu.classList.contains('hidden');
            
            if (isHidden) {
                menu.classList.remove('hidden');
                button.setAttribute('aria-expanded', 'true');
            } else {
                menu.classList.add('hidden');
                button.setAttribute('aria-expanded', 'false');
            }
        }

        function closeDropdown() {
            const menu = document.getElementById('lang-dropdown-menu');
            menu.classList.add('hidden');
            document.getElementById('lang-dropdown-button').setAttribute('aria-expanded', 'false');
        }
        
        function setCookie(name, value, days) {
            let expires = "";
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "")  + expires + "; path=/; SameSite=Lax";
        }

        function getCookie(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for(let i=0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        window.selectLanguage = selectLanguage;
        window.toggleDropdown = toggleDropdown;
        window.copyAddress = copyAddress; 

        function selectLanguage(lang, shouldCloseDropdown = false) {
            currentLanguage = lang;
            
            setCookie('user_language', lang, 365); 

            const overlay = document.getElementById('language-overlay');
            if (overlay && overlay.style.display !== 'none') {
                overlay.style.display = 'none';
            }
            document.getElementById('app-container').classList.remove('opacity-0');
            
            applyLanguage();
            
            runTitleAnimation();

            if (!ageDisplay) {
                ageDisplay = document.getElementById('age-display');
                if (ageIntervalId) clearInterval(ageIntervalId); 
                updateAge();
                ageIntervalId = setInterval(updateAge, 50); 
            }

            if (shouldCloseDropdown) {
                closeDropdown();
            }
        }

        function applyLanguage() {
            const langDict = translations[currentLanguage];

            document.documentElement.lang = currentLanguage;

            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (langDict[key]) {
                    element.innerHTML = langDict[key];
                }
            });
            
            const currentLangFlag = document.getElementById('current-lang-flag');
            currentLangFlag.src = FLAG_URLS[currentLanguage];
            currentLangFlag.alt = `Flag of ${LANGUAGE_NAMES[currentLanguage]}`;

            updateAge(true); 

            document.getElementById('lang-en-option').disabled = currentLanguage === 'en';
            document.getElementById('lang-ru-option').disabled = currentLanguage === 'ru';
            
            runTitleAnimation();
        }

        function updateAge(forceUpdate = false) {
            if (!ageDisplay) return;

            const now = new Date();
            const diffMs = now.getTime() - birthDate.getTime();
            
            const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
            
            const age = diffMs / msPerYear;
            
            const formattedAge = age.toFixed(10);
            
            const ageUnit = translations[currentLanguage]['age_units'];

            ageDisplay.textContent = `${formattedAge} ${ageUnit}`;
        }

        const originalButtonTexts = {};

        function copyAddress(coinId) {
            const addressElement = document.getElementById(`addr-${coinId}`);
            const address = addressElement ? addressElement.textContent.trim() : null;
            const button = document.getElementById(`btn-${coinId}`);

            if (!address || !button) {
                console.error(`Address or button not found for ${coinId}`);
                return;
            }

            const tempInput = document.createElement('textarea');
            tempInput.value = address;
            document.body.appendChild(tempInput);
            
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            if (!originalButtonTexts[coinId]) {
                originalButtonTexts[coinId] = button.innerHTML;
            }
            
            const copiedText = translations[currentLanguage]['copied_text'];
            
            button.innerHTML = `<i class="fas fa-check mr-2"></i> ${copiedText}`;
            
            setTimeout(() => {
                if (button.innerHTML.includes(copiedText)) {
                    button.innerHTML = originalButtonTexts[coinId];
                }
            }, 2000);
        }

        const savedLang = getCookie('user_language');
        const overlay = document.getElementById('language-overlay');
        const appContainer = document.getElementById('app-container');

        if (savedLang && translations[savedLang]) {
            overlay.style.display = 'none';
            appContainer.classList.remove('opacity-0');
            
            selectLanguage(savedLang); 

        } else {
            overlay.style.display = 'flex';
            appContainer.classList.add('opacity-0');
        }

        document.getElementById('current-year').textContent = new Date().getFullYear();

        document.addEventListener('click', (event) => {
            const dropdownButton = document.getElementById('lang-dropdown-button');
            const dropdownMenu = document.getElementById('lang-dropdown-menu');
            
            if (dropdownButton && dropdownMenu && !dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                closeDropdown();
            }
        });
        
        const navbar = document.querySelector('nav.fixed');
        const centeringOffset = 100; 

        function customScrollTo(targetId) {
            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;

            const navbarHeight = navbar.offsetHeight;
            
            let targetPosition;

            if (targetId === '#home') {
                targetPosition = 0;
            } else {
                targetPosition = targetSection.offsetTop - navbarHeight - centeringOffset;
                if (targetPosition < 0) targetPosition = 0; 
            }

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') {
                    e.preventDefault(); 
                    return;
                }
                
                e.preventDefault();
                customScrollTo(href);
            });
        });
        
        let currentSection = 'home'; 

        function updateActiveNav(currentSectionId) {
            document.querySelectorAll('.section-nav-link').forEach(link => {
                link.classList.remove('text-accent-color');
                
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('text-accent-color');
                }
            });
        }

        const navbarHeight = navbar ? navbar.offsetHeight : 64;
        const rootMarginValue = `-${navbarHeight + 5}px 0px 0px 0px`;

        const sectionObserver = new IntersectionObserver((entries) => {
            let newActiveSection = null;

            entries.forEach(entry => {
                const isFullyVisible = entry.intersectionRatio >= 0.2; 

                if (entry.isIntersecting && isFullyVisible) {
                    newActiveSection = entry.target.id;
                }
            });

            if (window.scrollY < 5) { 
                newActiveSection = 'home';
            }

            if (newActiveSection && currentSection !== newActiveSection) {
                currentSection = newActiveSection;
                updateActiveNav(currentSection);
            }

        }, {
            rootMargin: rootMarginValue,
            threshold: 0.1, 
        });

        document.querySelectorAll('section[id]').forEach(section => {
            sectionObserver.observe(section);
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card, section').forEach(el => {
            el.classList.add('transition', 'duration-700', 'opacity-0', 'transform', 'translate-y-10');
            observer.observe(el);
        });
        
        updateActiveNav('home');
    }

    initializePortfolio();
});
