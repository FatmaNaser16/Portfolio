

// function uiProjects() {
//     const imageContainer = document.getElementById('image-container');

// // Simulating loading images from a folder named 'images'
// const imageFolder = 'images/';
// let htmlContent = ''; // Initialize an empty string to hold HTML content

// for (let i = 1; i <= ui_projects; i++) {
//     const imageSrc = `${imageFolder}image${i}.png`; // Create the image source

//     // Create HTML string using template literals
//     htmlContent += `
//         <div class="image-box">
//             <img src="" alt="Image ${i}" onerror="this.onerror=null; this.src='images/default.jpg';">
//         </div>


         
//     `;
// }

// // Insert the generated HTML into the main container
// imageContainer.innerHTML = htmlContent;


// // -----------------------------------------









// // const contentDiv = document.getElementById('content');

// // // Fetch the text file
// // fetch('path/to/your/file.txt')
// //     .then(response => {
// //         if (!response.ok) {
// //             throw new Error('Network response was not ok ' + response.statusText);
// //         }
// //         return response.text(); // Read the file as text
// //     })
// //     .then(data => {
// //         // Create HTML using template literals
// //         const htmlContent = `
// //             <pre>${data}</pre>
// //         `;

// //         // Insert the content into the div
// //         contentDiv.innerHTML = htmlContent;
// //     })
// //     .catch(error => {
// //         console.error('Error fetching the text file:', error);
// //         contentDiv.innerHTML = '<p>Error loading content.</p>';
// //     });

// }

// uiProjects();