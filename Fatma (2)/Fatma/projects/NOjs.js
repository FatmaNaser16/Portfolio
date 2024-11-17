document.addEventListener('DOMContentLoaded', () => {
 


 const imageMap = new Map();

 function addProjectToMap(projectKey, imageName, text1, text2,link, depart) {
    if (!imageMap.has(projectKey)) {
        imageMap.set(projectKey, { image: imageName, text1, text2,link, depart });
    } else {
        console.log(`Project ${projectKey} already exists in the map.`);
    }

    displayUIProjects();
    displayWebProjects();
    displayGraphicProjects();
    displayAppProjects();
    displayAllProjects();
}

 function generateHtmlFromMap(department) {
    var imageContainer = document.getElementById(department+'-projects-container');
    const imageFolder = 'projects/';
    let htmlContent = ''; // Initialize an empty string to hold HTML content

    if(department == 'all'){
        for (const [project, { image, text1, text2, depart,link }] of imageMap) {
                const imageSrc = `${imageFolder}${image}`; // Create the image source
    
                // Create HTML string using template literals
                htmlContent += `
                    <div class="col-md-4 project-main-box">
                        <div class="project-box">
                            <img class="img-fluid" src="${imageSrc}" alt="${project} Image" onerror="this.onerror=null; this.src='images/no user/project.jpg';">
                        </div>
                        <div class="project-content">
                        <a href="${link}" target="_blank" ><h4>${text1}</h4></a>
                            <p>${text2}</p>
                        </div>
                    </div>
                `;
            
        }
    }
    // Iterate over the entries in the Map
  else{
    for (const [project, { image, text1, text2, depart,link }] of imageMap) {
        if (depart === department) {
            const imageSrc = `${imageFolder}${image}`; // Create the image source

            // Create HTML string using template literals
            htmlContent += `
                <div class="col-md-4 project-main-box">
                    <div class="project-box">
                        <img class="img-fluid" src="${imageSrc}" alt="${project} Image" onerror="this.onerror=null; this.src='images/no user/project.jpg';">
                    </div>
                    <div class="project-content">
                        <a href="${link}" target="_blank" ><h4>${text1}</h4></a>
                        <p>${text2}</p>
                    </div>
                </div>
            `;
        }
    }
  }

    // Insert the generated HTML into the main container
    imageContainer.innerHTML = htmlContent;
   
}



// Functions to display projects for each department
function displayUIProjects() {
    generateHtmlFromMap('ui');
}

function displayAppProjects() {
    generateHtmlFromMap('Front-End');
}

function displayWebProjects() {
    generateHtmlFromMap('Back-End');
}

function displayGraphicProjects() {
    generateHtmlFromMap('bi');
}

function displayAllProjects() {
    generateHtmlFromMap('all');
}












//                          ADD new project


//      allowed types:       ui           -          app           -          web           -              graphic


//                              ( key , iamge , name , describtion , link , type  )



addProjectToMap('1', 'UI Project1.png', 'UI Project 1', 'I designed three UI pages for an app called "Your Home" to make it easier to sell used items.','https://www.figma.com/design/8rxXYaKur1KYs1x3vwwhcz/Untitled?node-id=0-1&node-type=canvas&t=TU9SOK1qfxiCsCPZ-0', 'ui');
addProjectToMap('2', 'website 1.1.png', 'Website for a tourism company', "",'https://fatmanaser16.github.io/Egypto-Travel-Website/project/index.html', 'Front-End');
addProjectToMap('3', 'website 2.1.png', 'Restaurant website', "",'https://fatmanaser16.github.io/Restaurant-website/', 'Front-End');
addProjectToMap('4', 'image4.png', 'Graphic Project 1', 'Description for Graphic Project 1','#', 'bi');
addProjectToMap('5', 'image5.png', 'UI Project 2', 'Description for UI Project 2','#', 'ui');

 });
