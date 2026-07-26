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
// ==========================================
// 5 STAR REVIEW DATABASE
// ==========================================

const reviewDatabase = {

5:{

buy:[

`Absolutely loved shopping at HEER BOUTIQUE! The collection was elegant, premium, and perfect for my occasion. The staff was extremely helpful and professional. Highly recommended! ❤️`,

`One of the best boutiques for ethnic wear. Beautiful collection, excellent quality, and amazing customer service. Thank you HEER BOUTIQUE!`,

`Fantastic shopping experience! The outfit quality exceeded my expectations. Everything from selection to fitting was perfect.`,

`HEER BOUTIQUE has an amazing collection for weddings and traditional events. The staff guided me very well. Highly satisfied.`,

`Premium quality, affordable pricing, and outstanding customer support. I will definitely visit again.`

],

rent:[

`Amazing rental experience! The outfit looked brand new and perfectly fitted. Highly recommended for wedding functions.`,

`Excellent rental collection with premium quality outfits. Very professional service and reasonable pricing.`,

`I rented my outfit from HEER BOUTIQUE and everyone loved it. Thank you for making my special day memorable.`,

`Wonderful rental experience. The outfit was clean, elegant, and delivered exactly as promised.`,

`Luxury outfits at affordable rental prices. Highly satisfied with the overall experience.`

],

buyback:[

`Very smooth and transparent Buy Back process. Staff explained everything clearly. Great experience.`,

`Professional Buy Back service with honest pricing. Highly recommended.`,

`Excellent Buy Back policy and quick processing. Thank you HEER BOUTIQUE.`,

`Very trustworthy boutique. Everything was handled professionally and fairly.`,

`Completely satisfied with the Buy Back experience. Will definitely recommend to friends.`

]

}
    

};
4:{

buy:[

"I had a very good shopping experience at HEER BOUTIQUE. The collection was stylish, the quality was impressive, and the staff was very helpful.",

"Beautiful ethnic wear collection with reasonable pricing. The staff guided me well throughout my shopping experience.",

"I found exactly what I was looking for. Good collection and a pleasant shopping experience.",

"The outfit quality was very good and the fitting was perfect. I would definitely recommend HEER BOUTIQUE.",

"Very satisfied with my purchase. Great collection and friendly customer service."

],

rent:[

"I had a very good rental experience. The outfit was clean, comfortable, and looked premium.",

"Excellent rental collection with affordable pricing. The overall service was very good.",

"The rental process was smooth and hassle-free. I would happily rent from HEER BOUTIQUE again.",

"The outfit was delivered in excellent condition and fitted perfectly.",

"Very good experience renting ethnic wear. Thank you HEER BOUTIQUE."

],

buyback:[

"The Buy Back process was simple and transparent. Overall, I had a very good experience.",

"The staff explained everything clearly and the process was completed quickly.",

"I appreciate the honest pricing and smooth Buy Back service.",

"Very professional Buy Back service. Highly satisfied with the overall experience.",

"Good customer support and a fair Buy Back policy."

]

},

generateBtn.addEventListener("click",()=>{

    if(selectedRating===0){

        alert("Please select your rating.");

        return;

    }

    if(selectedService===""){

        alert("Please select your service.");

        return;

    }

    const reviews = reviewDatabase[selectedRating][selectedService];

    const random = Math.floor(Math.random()*reviews.length);

    let review = reviews[random];

    if(customerName.value.trim()!=""){

        review =
        "I, " +
        customerName.value +
        ", would like to share my experience.\n\n" +
        review;

    }

    if(occasion.value!=""){

        review +=
        "\n\nOccasion : " +
        occasion.value;

    }

    reviewBox.value = review;

});
