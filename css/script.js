const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
let counter = 0;

function slide() {
    counter++;
    if (counter === images.length) {
        counter = 0;
    }

    const offset = -counter * 400; // Adjust 400 based on your image width
    slider.style.transform = `translateX(${offset}px)`;
}

setInterval(slide, 2000); // Change image every 2 seconds



// <!DOCTYPE html>
// <html>
// <head>
//     <style>
//         .star {
//             color: #ffb700;
//             font-size: 20px;
//         }

//         .star:hover {
//             color: #ff9400;
//         }

//         .star:before {
//             content: "\2605";
//         }

//         .star:hover:before {
//             content: "\2606";
//         }

//         .checked {
//             color: #ffb700;
//         }

//         .checked:before {
//             content: "\2606";
//         }
//     </style>
// </head>
// <body>
//     <div class="star checked"></div>
//     <div class="star checked"></div>
//     <div class="star"></div>
//     <div class="star"></div>
//     <div class="star"></div>
// </body>
// </html>