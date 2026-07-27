// ==========================================
// HEER BOUTIQUE V4
// Professional Review Engine
// ==========================================

"use strict";

// ==========================================
// GLOBAL VARIABLES
// ==========================================

let selectedRating = 0;
let selectedService = "";
let selectedOccasion = "";

// ==========================================
// DOM ELEMENTS
// ==========================================

const stars = document.querySelectorAll(".star");
const serviceButtons = document.querySelectorAll(".option-btn");

const customerName = document.getElementById("customerName");
const occasion = document.getElementById("occasion");

const reviewBox = document.getElementById("reviewText");

const generateBtn = document.getElementById("generateReview");
const copyBtn = document.getElementById("copyReview");
const anotherBtn = document.getElementById("anotherReview");
const googleBtn = document.getElementById("googleReview");



// ----------------------------
// STAR RATING
// ----------------------------

stars.forEach((star) => {

    star.addEventListener("click", () => {

        selectedRating = Number(star.dataset.rating);

        stars.forEach((s, index) => {

            s.classList.toggle("active", index < selectedRating);

        });

    });

});


// ----------------------------
// SERVICE
// ----------------------------

serviceButtons.forEach((button) => {

    button.addEventListener("click", () => {

        serviceButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        selectedService = button.dataset.service;

    });

});

occasion.addEventListener("change", () => {

    selectedOccasion = occasion.value;

});



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

},
    
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
3:{

buy:[

"My shopping experience at HEER BOUTIQUE was good. The collection was nice and the staff was supportive.",

"I found some beautiful outfits here. Overall, it was a pleasant experience.",

"The boutique has a decent collection and helpful staff. Thank you for your service.",

"I was satisfied with my purchase. The quality was good and the service was polite.",

"A good place for ethnic wear shopping. I would visit again."

],

rent:[

"My rental experience was good. The outfit was comfortable and the process was simple.",

"The rental collection was nice and reasonably priced.",

"I received the outfit on time and it looked good for my event.",

"The staff was cooperative and the rental process was smooth.",

"Overall, I had a good rental experience."

],

buyback:[

"The Buy Back process was easy and transparent.",

"I appreciate the professional behaviour of the staff.",

"The process was completed without any issues.",

"Good customer service during the Buy Back process.",

"Overall, I had a satisfactory experience."

]

},

2:{

buy:[

"The collection was decent, but I hope to see more variety in the future.",

"The staff was polite. A few improvements in service could make the experience even better.",

"My experience was average. I found a suitable outfit after some time.",

"The boutique has potential and I hope to see an even larger collection next time.",

"The overall experience was okay. Thank you."

],

rent:[

"The rental process was simple, though I think more size options would be helpful.",

"The outfit was good, but I hope to see more new designs in the future.",

"The experience was average. Staff was polite and supportive.",

"I had an okay rental experience. Some improvements could make it even better.",

"Overall, a satisfactory rental experience."

],

buyback:[

"The Buy Back process was completed successfully, though it took a little longer than expected.",

"The staff was helpful and explained everything clearly.",

"My experience was average, but overall satisfactory.",

"I hope the Buy Back process becomes even faster in the future.",

"Thank you for your assistance."

]

},

1:{

buy:[

"My visit was not exactly what I expected, but the staff remained polite throughout.",

"I hope to see more variety and a faster shopping experience next time.",

"There is room for improvement in both collection and service.",

"I appreciate the staff's efforts and hope my next visit is even better.",

"I am sharing this feedback to help improve the customer experience."

],

rent:[

"My rental experience could have been smoother, but the staff tried their best to help.",

"I hope to see even more outfit choices in the future.",

"There is room to improve the rental process.",

"I appreciate the polite behaviour of the team.",

"I hope my next experience will be better."

],

buyback:[

"The Buy Back process could be improved to make it faster.",

"I appreciate the team's support during the process.",

"I hope the Buy Back experience becomes even more convenient.",

"The staff was polite and respectful throughout.",

"This feedback is shared with the hope of helping improve the service."

]

},
};

// ==========================================
// REVIEW MEMORY (ANTI-REPEAT)
// ==========================================

const STORAGE_KEY = "heer_review_history_v4";

function getHistory() {

    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : {

        buy: [],
        rent: [],
        buyback: []

    };

}

function saveHistory(history) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(history)
    );

}


// ==========================================
// LAST REVIEW MEMORY
// ==========================================

let lastReview = {
    buy: "",
    rent: "",
    buyback: ""
};

generateBtn.addEventListener("click",()=>{

    if(selectedRating===0){

        alert("Please select your rating.");

        return;

    }

    if(selectedService===""){

        alert("Please select your service.");

        return;

    }

  const serviceReviews = reviewDatabase[selectedRating]?.[selectedService];

if (!serviceReviews || serviceReviews.length === 0) {

    reviewBox.value =
    "We're preparing more review suggestions for this rating. Please try another option.";

    return;
}

const storageKey =
selectedRating + "_" + selectedService + "_" + occasion.value;

let lastIndex =
parseInt(localStorage.getItem(storageKey));

if (isNaN(lastIndex)) {

    lastIndex = -1;

}

let randomIndex;

do {

    randomIndex = Math.floor(Math.random() * serviceReviews.length);

} while (

    serviceReviews.length > 1 &&
    randomIndex === lastIndex

);

localStorage.setItem(storageKey, randomIndex);

let review = serviceReviews[randomIndex];

   const openings = [

    "I'd like to share my wonderful experience at HEER BOUTIQUE.",

    "I recently visited HEER BOUTIQUE and had a fantastic experience.",

    "I'm delighted to share my experience with HEER BOUTIQUE.",

    "Choosing HEER BOUTIQUE was one of my best decisions.",

    "I truly enjoyed my visit to HEER BOUTIQUE."

];

let opening = openings[Math.floor(Math.random() * openings.length)];
let prefix = namePrefixes[Math.floor(Math.random() * namePrefixes.length)];

    if(customerName.value.trim() !== ""){

    opening =
    customerName.value.trim() +
    " " +
    prefix +
    "\n\n" +
    opening;

}


review =
opening +
"\n\n" +
review;

    reviewBox.value = review;

});
// ===============================
// NAME PREFIXES
// ===============================

const namePrefixes = [

    "shared this review:",

    "had this to say:",

    "recommends HEER BOUTIQUE.",

    "shared this experience:",

    "had an amazing experience.",

    "recently visited HEER BOUTIQUE.",

    "loved the overall service.",

    "is happy to share this review.",

    "was delighted with the experience.",

    "highly recommends HEER BOUTIQUE.",

    "was impressed by the collection.",

    "had a memorable shopping experience.",

    "enjoyed every moment at HEER BOUTIQUE.",

    "thanks the HEER BOUTIQUE team.",

    "is pleased to recommend HEER BOUTIQUE."

];
// ===============================
// COPY REVIEW
// ===============================


copyBtn.addEventListener("click",()=>{

    if(reviewBox.value==""){

        alert("Please generate a review first.");

        return;

    }

    navigator.clipboard.writeText(reviewBox.value);

    copyBtn.innerHTML="✅ Copied";

    setTimeout(()=>{

        copyBtn.innerHTML="📋 Copy Review";

    },2000);

});
// ===============================
// ANOTHER REVIEW
// ===============================



anotherBtn.addEventListener("click",()=>{

    generateBtn.click();

});
// ===============================
// GOOGLE REVIEW
// ===============================



googleBtn.addEventListener("click",()=>{

    if(reviewBox.value==""){

        alert("Please generate your review first.");

        return;

    }

    navigator.clipboard.writeText(reviewBox.value);

    setTimeout(()=>{

        window.open(
        "https://g.page/r/Ca4co73CZeqKEBM/review",
        "_blank");

    },300);

});
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});
