// ==========================================
// HEER BOUTIQUE V3
// PART 3A
// ==========================================

let selectedRating = 0;
let selectedService = "";

const stars = document.querySelectorAll(".star");
const serviceButtons = document.querySelectorAll(".option-btn");

const customerName = document.getElementById("customerName");
const occasion = document.getElementById("occasion");

const reviewBox = document.getElementById("reviewText");


// ----------------------------
// STAR RATING
// ----------------------------

stars.forEach((star)=>{

    star.addEventListener("click",()=>{

        selectedRating = Number(star.dataset.rating);

        stars.forEach((s,index)=>{

            if(index < selectedRating){

                s.classList.add("active");

            }else{

                s.classList.remove("active");

            }

        });

    });

});


// ----------------------------
// SERVICE
// ----------------------------

serviceButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        serviceButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        selectedService = button.dataset.service;

    });

});


// ----------------------------
// TEST BUTTON
// ----------------------------

const generateBtn = document.getElementById("generateReview");

generateBtn.addEventListener("click",()=>{

    reviewBox.value=

`Rating : ${selectedRating} Star

Service : ${selectedService}

Name : ${customerName.value}

Occasion : ${occasion.value}

✅ Part 3A Working Successfully`;

});
