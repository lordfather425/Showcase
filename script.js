function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;

    const skills = [
        {
            title: "ServiceNow ITSM Implementation",
            description: "Expert implementation of ServiceNow ITSM modules with a focus on Incident, Problem, and Change Management processes that reduce resolution times and improve service delivery at enterprise scale."
        },
        {
            title: "ServiceNow Platform Administration",
            description: "Comprehensive administration of the ServiceNow platform including managing update sets across Development, Test, and Production environments while ensuring system stability and continuous improvement."
        },
        {
            title: "Test Management & Quality Assurance",
            description: "Utilize Test Management 2.0 to develop and execute test plans aligned with user stories, conducting functional, regression, and UAT testing to ensure seamless platform performance."
        },
        {
            title: "Workflow Automation & Process Design",
            description: "Design and implement automated workflows using Flow Designer and legacy workflow tools that streamline request fulfillment and reduce manual intervention in critical business processes."
        },
        {
            title: "CMDB & Asset Management",
            description: "Ensure data accuracy in CMDB and asset management tables through validation of discovery inputs and application of normalization rules, supporting effective infrastructure oversight."
        },
        {
            title: "ServiceNow Reporting & Analytics",
            description: "Create scheduled reports and executive dashboards that provide actionable insights into operational metrics, supporting data-driven decision making and continuous improvement."
        },
        {
            title: "System Integration & API Management",
            description: "Implement and manage integrations between ServiceNow and external systems using REST APIs, Integration Hub, and custom scripting to create seamless data flows across the enterprise."
        },
        {
            title: "ServiceNow Customization & Development",
            description: "Develop custom applications and functionality through client/server scripts, business rules, and UI policies that extend ServiceNow capabilities to meet specific business requirements."
        },
        {
            title: "Agile Project Methodology",
            description: "Collaborate effectively with cross-functional teams during Agile sprints for planning, backlog grooming, and defect resolution using Jira and ServiceNow Agile Development."
        },
        {
            title: "Knowledge Management & Documentation",
            description: "Document platform configurations, test procedures, and technical solutions in shared repositories to support knowledge retention and accelerate issue resolution across the organization."
        }
    ];

    if (skillsContainer) {
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
}

function showSkillBlurb(skillItem) {
    const skillBlurb = skillItem.querySelector('.skill-blurb');
    if (skillBlurb) {
        skillBlurb.style.display = 'block';
    }
}

function hideSkillBlurb(skillItem) {
    const skillBlurb = skillItem.querySelector('.skill-blurb');
    if (skillBlurb) {
        skillBlurb.style.display = 'none';
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function addServiceNowActivityFeed() {
    const btcIframe = document.querySelector('iframe[src*="bitcoin-etf"]');
    if (!btcIframe) return;
    
    const feedContainer = document.createElement('div');
    feedContainer.className = 'container2 servicenow-feed reveal-section';
    feedContainer.id = 'servicenow-feed';
    
    const heading = document.createElement('h3');
    heading.textContent = 'ServiceNow Developer Community';
    feedContainer.appendChild(heading);
    
    const feed = document.createElement('div');
    feed.className = 'feed-items';
    feedContainer.appendChild(feed);
    
    const mainContainer = document.querySelector('.container');
    if (mainContainer) {
        mainContainer.appendChild(feedContainer);
    }
    
    updateServiceNowFeed();
    
    setInterval(updateServiceNowFeed, 60000);
}

function updateServiceNowFeed() {
    const feedItems = [
        {
            title: "CreatorCon at Knowledge 2025",
            date: "May 6-8, 2025",
            description: "Join ServiceNow developers, architects, and practitioners to learn, build, and connect at Knowledge 2025.",
            category: "event",
            link: "https://www.servicenow.com/knowledge-conference.html"
        },
        {
            title: "Yokohama Release Now Available",
            date: "March 28, 2025",
            description: "The ServiceNow Yokohama release brings new developer features including enhanced Flow Designer capabilities and AI integrations.",
            category: "release",
            link: "https://www.servicenow.com/community/"
        },
        {
            title: "Now Platform App Engine Studio Updates",
            date: "April 15, 2025",
            description: "Learn about the latest improvements to App Engine Studio for low-code development in ServiceNow.",
            category: "update",
            link: "https://www.servicenow.com/products/now-platform-app-engine.html"
        },
        {
            title: "ServiceNow Developer Meetup - Virtual",
            date: "May 1, 2025",
            description: "Connect with ServiceNow developers worldwide in this virtual meetup focusing on platform integration strategies.",
            category: "event",
            link: "https://www.servicenow.com/community/"
        },
        {
            title: "New Integration Hub Connectors Released",
            date: "April 10, 2025",
            description: "ServiceNow has released new Integration Hub connectors for popular enterprise applications.",
            category: "update",
            link: "https://www.servicenow.com/products/api-integrations.html"
        }
    ];
    
    const selectedItems = [];
    const itemCount = Math.min(3, feedItems.length);
    
    const availableItems = [...feedItems];
    
    for (let i = 0; i < itemCount; i++) {
        const randomIndex = Math.floor(Math.random() * availableItems.length);
        selectedItems.push(availableItems[randomIndex]);
        availableItems.splice(randomIndex, 1);
    }
    
    selectedItems.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const feedContainer = document.querySelector('.feed-items');
    if (feedContainer) {
        feedContainer.innerHTML = '';
        
        selectedItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = `feed-item ${item.category}`;
            
            const categoryBadge = document.createElement('span');
            categoryBadge.className = 'category-badge';
            categoryBadge.textContent = item.category.toUpperCase();
            
            const itemTitle = document.createElement('h4');
            itemTitle.textContent = item.title;
            
            const itemDate = document.createElement('div');
            itemDate.className = 'item-date';
            itemDate.textContent = item.date;
            
            const itemDesc = document.createElement('p');
            itemDesc.textContent = item.description;
            
            const itemLink = document.createElement('a');
            itemLink.href = item.link;
            itemLink.textContent = "Learn more";
            itemLink.target = "_blank";
            itemLink.rel = "noopener noreferrer";
            itemLink.setAttribute('aria-label', `Learn more about ${item.title}`);
            
            itemElement.appendChild(categoryBadge);
            itemElement.appendChild(itemTitle);
            itemElement.appendChild(itemDate);
            itemElement.appendChild(itemDesc);
            itemElement.appendChild(itemLink);
            
            feedContainer.appendChild(itemElement);
        });
    }
}

function addApiIntegrationDemo() {
    const aboutContainer = document.querySelector('.container');
    const skillsContainer = document.getElementById('skills-container');
    
    if (!aboutContainer || skillsContainer) return;
    
    const apiDemoContainer = document.createElement('div');
    apiDemoContainer.className = 'container2 api-integration-demo reveal-section';
    apiDemoContainer.id = 'api-integration-demo';
    
    const heading = document.createElement('h3');
    heading.textContent = 'ServiceNow API Integration Showcase';
    apiDemoContainer.appendChild(heading);
    
    const diagramContainer = document.createElement('div');
    diagramContainer.className = 'api-diagram';
    
    diagramContainer.innerHTML = `
        <div class="integration-flow">
            <div class="system-node servicenow-node">
                <div class="node-icon">SN</div>
                <div class="node-label">ServiceNow</div>
            </div>
            
            <div class="connection-line">
                <div class="arrow right"></div>
                <div class="method-label">REST API</div>
                <div class="payload-bubble">JSON</div>
            </div>
            
            <div class="system-node external-system">
                <div class="node-icon">EX</div>
                <div class="node-label">External System</div>
            </div>
        </div>
        
        <div class="code-sample">
            <div class="code-header">
                <span class="code-title">REST API Example</span>
                <span class="code-method">GET</span>
            </div>
            <pre class="code-content">GET /api/now/table/incident?sysparm_limit=10
Accept: application/json
Authorization: Basic [credentials]</pre>
        </div>
        
        <div class="integration-controls">
            <button class="api-demo-btn" data-method="GET">Get Incidents</button>
            <button class="api-demo-btn" data-method="POST">Create Incident</button>
            <button class="api-demo-btn" data-method="PUT">Update Incident</button>
        </div>
    `;
    
    apiDemoContainer.appendChild(diagramContainer);
    
    const integrationSelector = document.createElement('div');
    integrationSelector.className = 'integration-selector';
    
    integrationSelector.innerHTML = `
        <div class="selector-label">Choose Integration Type:</div>
        <div class="selector-options">
            <button class="selector-btn active" data-type="rest">REST API</button>
            <button class="selector-btn" data-type="soap">SOAP Web Service</button>
        </div>
    `;
    
    apiDemoContainer.appendChild(integrationSelector);
    
    aboutContainer.appendChild(apiDemoContainer);
    
    setupApiDemoInteractions();
}

function setupApiDemoInteractions() {
    const demoButtons = document.querySelectorAll('.api-demo-btn');
    demoButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const method = this.getAttribute('data-method');
            simulateApiCall(method);
        });
    });
    
    const selectorButtons = document.querySelectorAll('.selector-btn');
    selectorButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            selectorButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const type = this.getAttribute('data-type');
            updateIntegrationType(type);
        });
    });
}

function simulateApiCall(method) {
    const connectionLine = document.querySelector('.connection-line');
    const payloadBubble = document.querySelector('.payload-bubble');
    
    connectionLine.classList.add('active');
    payloadBubble.classList.add('sending');
    
    const codeMethod = document.querySelector('.code-method');
    const codeContent = document.querySelector('.code-content');
    codeMethod.textContent = method;
    
    let sampleCode = '';
    
    switch(method) {
        case 'GET':
            sampleCode = `GET /api/now/table/incident?sysparm_limit=10
Accept: application/json
Authorization: Basic [credentials]`;
            break;
        case 'POST':
            sampleCode = `POST /api/now/table/incident
Content-Type: application/json
Accept: application/json
Authorization: Basic [credentials]

{
  "short_description": "Server down",
  "priority": "1"
}`;
            break;
        case 'PUT':
            sampleCode = `PUT /api/now/table/incident/[sys_id]
Content-Type: application/json
Accept: application/json
Authorization: Basic [credentials]

{
  "state": "2",
  "work_notes": "Working on resolution"
}`;
            break;
    }
    
    codeContent.textContent = sampleCode;
    
    setTimeout(() => {
        connectionLine.classList.remove('active');
        payloadBubble.classList.remove('sending');
    }, 2000);
}

function updateIntegrationType(type) {
    const methodLabel = document.querySelector('.method-label');
    const payloadBubble = document.querySelector('.payload-bubble');
    const codeTitle = document.querySelector('.code-title');
    
    if (type === 'rest') {
        methodLabel.textContent = 'REST API';
        payloadBubble.textContent = 'JSON';
        codeTitle.textContent = 'REST API Example';
    } else {
        methodLabel.textContent = 'SOAP API';
        payloadBubble.textContent = 'XML';
        codeTitle.textContent = 'SOAP API Example';
        
        const codeMethod = document.querySelector('.code-method');
        const codeContent = document.querySelector('.code-content');
        codeMethod.textContent = 'POST';
        codeContent.textContent = `POST /api/now/soap/incident
Content-Type: text/xml
SOAPAction: "http://www.service-now.com/incident"

<soapenv:Envelope xmlns:soapenv="...">
  <soapenv:Header>
    <wsse:Security>...</wsse:Security>
  </soapenv:Header>
  <soapenv:Body>
    <getRecords>...</getRecords>
  </soapenv:Body>
</soapenv:Envelope>`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
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
    
    if (document.getElementById('skills-container')) {
        loadSkills();
        
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(skillItem => {
            hideSkillBlurb(skillItem);
        });
    }
    
    const btcIframe = document.querySelector('iframe[src*="bitcoin-etf"]');
    if (btcIframe) {
        addServiceNowActivityFeed();
        addApiIntegrationDemo();
    }
});