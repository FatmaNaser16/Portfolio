document.addEventListener('DOMContentLoaded', () => {
    // Your existing code here...



// Create a Map to hold project details (image and texts)
const commentsMap = new Map();

// Function to add project details to the map
function addCommentToMap(projectKey, imageName, comment) {
    if (!commentsMap.has(projectKey)) {
        commentsMap.set(projectKey, { image: imageName, comment});
    } else {
        console.log(`Project ${projectKey} already exists in the map.`);
    }

    displayComments();
  
}

// Function to generate HTML from the Map for a specific department
function displayComments() {
    var commentsContainer = document.getElementById('customers-testimonials');
    const commentFolder = 'testimonials/';
    let commentsContent = ''; // Initialize an empty string to hold HTML content

        for (const [project, { image, comment }] of commentsMap) {
                const commentimageSrc = `${commentFolder}${image}`; // Create the image source
    
                // Create HTML string using template literals
                commentsContent += `

                     <div class="item">
                    <div class="shadow-effect" >
                        <img style="" class="img-circle" src="${commentimageSrc}"   onerror="this.onerror=null; this.src='images/no user/review.avif';">
                      <div class="paragrap-comment" >
                        <p>
                        <span class="leftSpan" >“</span>    
                        
                        ${comment}
                            <span class="rightSpan" >“</span>
                        
                        </p>

                      </div>
                    </div>
                </div>
                `;
            
        }
    


    // Insert the generated HTML into the main container
    commentsContainer.innerHTML = commentsContent;
   
}




// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------




//                                     ADD reviews


//                                    (      key    ,    image    ,    review text     )

addCommentToMap('1','ds', 'ui');
addCommentToMap('2','image1.png', 'h k lk wqldq');




// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------





















       $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 2, // Reduced from 3 to 2 for a larger item display
    margin: 80,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    dotsEach: 1,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2 // Keep this to 2 for larger displays
        },
        1170: {
            items: 2 // Keep this to 2 for larger displays
        }
    },
    onInitialized: setDots,
    onTranslated: setDots,
});

						
							// Function to limit dots to 3
							function setDots(event) {
								var $dots = $('#customers-testimonials .owl-dots .owl-dot');
								// Remove extra dots
								if ($dots.length > 3) {
									$dots.slice(3).remove();  // Ensure only 3 dots are visible
								}
							}
						

});
