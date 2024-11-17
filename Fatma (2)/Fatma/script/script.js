// Services section:

const _servicesMap = new Map();

function addService(serviceKey, icon, name, description) {
   if (!_servicesMap.has(serviceKey)) {
    _servicesMap.set(serviceKey, {  icon, name, description });
   } else {
       console.log(`Project ${serviceKey} already exists in the map.`);
   }

   displayServices();
}






function displayServices() {
    var servicesContainer = document.getElementById('serviceContainer');
    let servicesContent = ''; // Initialize an empty string to hold HTML content

        for (const [service, { icon, name, description }] of _servicesMap) {
    
                // Create HTML string using template literals
                servicesContent += `
                      <div class="col-md-3 services-box" >
                <i class="${icon}"></i>
                <h4 class="service-address">${name}</h4>
                <p>${description}</p>
            </div>
                `;
            
        }
    

    // Insert the generated HTML into the main container
    servicesContainer.innerHTML = servicesContent;
   
}



function servicesDescribtion(content) {
    document.getElementById('services-describtion').innerHTML = content;
}











// About section:

const _aboutMap = new Map();

function addAbout(aboutkey, name, percentage) {
   if (!_aboutMap.has(aboutkey)) {
    _aboutMap.set(aboutkey, {  name, percentage });
   } else {
       console.log(`Project ${aboutkey} already exists in the map.`);
   }

   displayAboutBars();
}






function displayAboutBars() {
    var aboutContainer = document.getElementById('about-progress-container');
    let aboutContent = ''; // Initialize an empty string to hold HTML content

        for (const [about, { name, percentage }] of _aboutMap) {
    
                // Create HTML string using template literals
                aboutContent += `
                     <h3 class="progress-title">${name}</h3>
            <div class="progress">
                <div class="progress-barS" style="width:${percentage}%; background:#FD6F00;"></div>
            </div>
                `;
            
        }
    

    // Insert the generated HTML into the main container
    aboutContainer.innerHTML = aboutContent;
   
}



function aboutDescribtion(content) {
    document.getElementById('about-describtion').innerHTML = content;
}






// ------------------------






// Home section:


function _IntroductionText(content) {
 document.getElementById('_IntroductionText').innerHTML = content;   
}



function _NameText(content) {
 document.getElementById('DesignerName').innerHTML = content;   
}



function _JobText(job1 , job2) {
 document.getElementById('designerJob1').innerHTML = job1;   
 document.getElementById('designerJob2').innerHTML = job2;   
    
}



function _HomeDescribtion(content) {
 document.getElementById('HomeDescribtion').innerHTML = content;   
    
}


// ------------------------------------------------------------





function projectsDescription(content) {
    document.getElementById('projects-describtion-paragraph').innerHTML = content;   
    
}





// --------------------------------------------------------------



function testimonialsDescription(content) {
    document.getElementById('testimonials-describtion-paragraph').innerHTML = content;   

}






// --------------------------------------------------------------



function contactDescription(content) {
    document.getElementById('contact-describtion-paragraph').innerHTML = content;   

}


// --------------------------------------------------------------



function socialMedia_Links(link,type) {
    
    var allLinks = document.querySelectorAll('.'+type+'-socialMedia')

    for(var i =0  ;i<allLinks.length ; i++){
        allLinks[i].href = link;
    }


}

