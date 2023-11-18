
function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');

    const skills = [
        {
            title: "ServiceNow Development Expertise",
            description: "Streamline IT operations with proficiency in ServiceNow development, encompassing scripting, workflow automation, and effective business rule implementation."
        },
        {
            title: "ServiceNow API and Scripting Mastery",
            description: "Harness the power of ServiceNow APIs and scripting to seamlessly integrate applications and automate processes, ensuring operational efficiency."
        },
        {
            title: "Client-Side Scripting for Enhanced User Experience",
            description: "Empower users with optimized interactions and streamlined form behavior through the implementation of client-side scripts, enhancing the overall user experience."
        },
        {
            title: "Custom Script Development and Task Automation",
            description: "Develop custom scripts and automate tasks to tailor ServiceNow to specific business needs, boosting productivity and streamlining operations."
        },
        {
            title: "ServiceNow Workflow Automation for Operational Efficiency",
            description: "Leverage ServiceNow workflows to automate task routing, approvals, and notifications, achieving significant improvements in operational efficiency."
        },
        {
            title: "ServiceNow Architecture and Configuration Expertise",
            description: "Possess in-depth knowledge of ServiceNow architecture and configurations, ensuring adherence to industry best practices for scalable and efficient solutions."
        },
        {
            title: "PowerShell Scripting for Data Management and System Reliability",
            description: "Maintain data integrity and system reliability by utilizing PowerShell scripts to automate data backup and migration processes."
        },
        {
            title: "Effective Collaboration and Teamwork",
            description: "Contribute to seamless project implementation through collaboration with cross-functional teams and stakeholders, emphasizing effective communication and teamwork."
        },
        {
            title: "SQL and HTML Proficiency",
            description: "Effectively manage data and develop web-based applications within the ServiceNow platform by leveraging SQL and HTML skills."
        },
        {
            title: "ITIL Framework and ServiceNow Application",
            description: "Possess a comprehensive understanding of the ITIL framework and its application in managing processes such as Incident, Problem, Change, and Configuration Management within the ServiceNow environment."
        }
    ];

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.onmouseover = function () { showSkillBlurb(this); };
        skillItem.onmouseout = function () { hideSkillBlurb(this); };

        const skillTitle = document.createElement('h3');
        skillTitle.classList.add('skill-title');
        skillTitle.textContent = skill.title;

        const skillBlurb = document.createElement('p');
        skillBlurb.classList.add('skill-blurb');
        skillBlurb.textContent = skill.description;

        skillItem.appendChild(skillTitle);
        skillItem.appendChild(skillBlurb);
        skillsContainer.appendChild(skillItem);
    });
}

function showSkillBlurb(skillItem) {
    const skillBlurb = skillItem.querySelector('.skill-blurb');
    skillBlurb.style.display = 'block';
}

function hideSkillBlurb(skillItem) {
    const skillBlurb = skillItem.querySelector('.skill-blurb');
    skillBlurb.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    loadSkills();

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(skillItem => {
        hideSkillBlurb(skillItem);
    });
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

document.addEventListener('DOMContentLoaded', function () {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('nav a').forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                
                const targetPage = link.getAttribute('href');

                document.body.classList.add('page-transition-out');

                setTimeout(function () {
                    window.location.href = targetPage;
                }, 500);
            });
        });

        document.body.addEventListener('transitionend', function (event) {
            if (event.propertyName === 'background-color' || event.propertyName === 'color') {
                document.body.classList.remove('page-transition-out');
            }
        });
    });



