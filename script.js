function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    const skills = [
        {
            title: "ServiceNow ITSM Implementation",
            description: "Expert implementation of ITSM modules with focus on Incident, Problem, and Change Management to reduce resolution times and improve service delivery.",
            level: 95
        },
        {
            title: "ServiceNow Platform Administration",
            description: "Comprehensive platform administration managing update sets across Dev, Test, and Production environments with system stability focus.",
            level: 92
        },
        {
            title: "Test Management & QA",
            description: "Test Management 2.0 expertise for developing test plans, functional/regression testing, and UAT validation.",
            level: 88
        },
        {
            title: "Workflow Automation & Flow Designer",
            description: "Design and implement automated workflows using Flow Designer to streamline fulfillment and reduce manual intervention.",
            level: 90
        },
        {
            title: "CMDB & Asset Management",
            description: "Ensure data accuracy through discovery validation and normalization rules for effective infrastructure oversight.",
            level: 93
        },
        {
            title: "ServiceNow Reporting & Analytics",
            description: "Create executive dashboards and scheduled reports providing actionable insights for data-driven decisions.",
            level: 85
        },
        {
            title: "System Integration & APIs",
            description: "Implement integrations using REST APIs, Integration Hub, and custom scripting for seamless enterprise data flows.",
            level: 87
        },
        {
            title: "ServiceNow Development",
            description: "Develop custom applications through client/server scripts, business rules, and UI policies.",
            level: 82
        }
    ];

    skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item', 'reveal-section');
        skillItem.style.animationDelay = `${index * 0.1}s`;

        skillItem.innerHTML = `
            <h3>${skill.title}</h3>
            <p class="skill-blurb">${skill.description}</p>
            <div class="skill-progress">
                <div class="skill-progress-bar" data-level="${skill.level}"></div>
            </div>
        `;

        skillsContainer.appendChild(skillItem);
    });
}

function enhanceSkillCards() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress-bar');
                if (progressBar) {
                    const level = progressBar.getAttribute('data-level') || 85;
                    setTimeout(() => {
                        progressBar.style.width = level + '%';
                    }, 200);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillItems.forEach(item => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('skills-container')) {
        loadSkills();
        setTimeout(() => enhanceSkillCards(), 300);
    }
    
    initScrollAnimations();
    initTypingEffect();
    initScrollProgress();
    initScrollToTop();
    initSmoothScroll();
    initHeaderScroll();
    setActiveNavLink();
    
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < 400) {
                hero.style.transform = `translateY(${scrolled * 0.15}px)`;
                hero.style.opacity = Math.max(0.3, 1 - (scrolled / 600));
            }
        });
    }
});

function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal-section');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

function initTypingEffect() {
    const heroHeading = document.querySelector('.hero h2');
    if (!heroHeading) return;
    
    const text = heroHeading.textContent;
    heroHeading.textContent = '';
    heroHeading.style.opacity = '1';
    
    let index = 0;
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    heroHeading.appendChild(cursor);
    
    function type() {
        if (index < text.length) {
            heroHeading.insertBefore(document.createTextNode(text.charAt(index)), cursor);
            index++;
            setTimeout(type, 50);
        } else {
            setTimeout(() => cursor.remove(), 1000);
        }
    }
    
    setTimeout(type, 500);
}

function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initHeaderScroll() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
        }
    });
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}