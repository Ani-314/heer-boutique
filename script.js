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

"Overall, I had a good rental experience.",
    `I rented my outfit from HEER BOUTIQUE and the quality was beyond my expectations. Everything looked fresh and premium.`,

`The rental collection was outstanding and I found exactly what I wanted for my special day.`,

`The outfit fitting was perfect and everyone appreciated my overall look.`,

`HEER BOUTIQUE made the rental process extremely easy and hassle-free.`,

`I was surprised by the quality of the rental outfit. It looked completely new.`,

`The staff helped me choose the perfect outfit according to my occasion.`,

`Very professional rental service with excellent customer support.`,

`The collection was trendy, elegant and available at reasonable rental prices.`,

`Everything from trial to final delivery was managed professionally.`,

`The outfit was clean, perfectly ironed and beautifully packed.`,

`I genuinely enjoyed my rental experience at HEER BOUTIQUE.`,

`I received many compliments because of the beautiful outfit I rented here.`,

`The rental quality was exactly like purchasing a brand new outfit.`,

`HEER BOUTIQUE offers one of the finest rental collections in the city.`,

`The fitting adjustments were done perfectly before delivery.`,

`Very friendly staff who guided me throughout the selection process.`,

`The outfit photographs looked beautiful because of the premium finishing.`,

`I never expected rental outfits to be maintained this well.`,

`The entire process was transparent, quick and convenient.`,

`I would definitely rent from HEER BOUTIQUE again for my next function.`,

`Excellent fabric quality and beautiful designer collection.`,

`Every detail of the outfit looked luxurious.`,

`I loved the premium finishing and elegant styling.`,

`The outfit exceeded all my expectations.`,

`Amazing service with affordable rental pricing.`,

`The staff made the entire experience comfortable and enjoyable.`,

`Perfect destination for premium ethnic wear rentals.`,

`I found unique designs that were difficult to find elsewhere.`,

`The outfit looked exactly as shown during selection.`,

`The rental service was punctual and highly professional.`,

`Everything was delivered exactly as promised.`,

`The collection had plenty of options for every occasion.`,

`HEER BOUTIQUE made my special day even more memorable.`,

`I was impressed by the cleanliness and maintenance of every outfit.`,

`The rental experience was smooth from beginning to end.`,

`Very satisfied with the quality, fitting and customer service.`,

`Excellent experience with premium designer rentals.`,

`The staff understood my requirements and suggested the perfect outfit.`,

`The overall rental experience was fantastic.`,

`Highly satisfied with both the outfit and the service.`,

`The outfit looked elegant, luxurious and perfectly fitted.`,

`I would happily recommend HEER BOUTIQUE to my friends and family.`,

`The rental collection is worth exploring for every special occasion.`,

`The outfit quality and finishing were truly impressive.`,

`Everything was managed professionally from booking to return.`,

`A wonderful place to rent premium ethnic wear.`,

`I couldn't have asked for a better rental experience.`,

`The rental process was simple, fast and stress-free.`,

`Outstanding customer service and beautiful designer outfits.`,

`My experience with HEER BOUTIQUE was memorable and completely satisfying.`

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

function getSmartReview(service, reviews){

    let history = getHistory();

    let usedReviews = history[service] || [];

    let available = reviews.filter(r => !usedReviews.includes(r));

    if(available.length === 0){

        usedReviews = [];

        available = [...reviews];

    }

    const randomReview =
    available[Math.floor(Math.random()*available.length)];

    usedReviews.push(randomReview);

    if(usedReviews.length > 25){

        usedReviews.shift();

    }

    history[service] = usedReviews;

    saveHistory(history);

    return randomReview;

}

    const introTemplates = [

(name) => `Hi, I'm ${name}.`,

(name) => `Hello, I'm ${name}.`,

(name) => `My name is ${name}.`,

(name) => `I'm ${name}.`,

(name) => `${name} here.`,

(name) => `This is ${name}.`,

(name) => `I'm happy to share my experience. My name is ${name}.`,

(name) => `I'd like to share my experience. I'm ${name}.`,

(name) => `I recently visited HEER BOUTIQUE. I'm ${name}.`,

(name) => `I'm ${name}, and here's my experience.`,

(name) => `Myself ${name}.`,

(name) => `I'm delighted to share my experience. I'm ${name}.`,

(name) => `Greetings! I'm ${name}.`,

(name) => `Hey, I'm ${name}.`,

(name) => `It's ${name}.`,

(name) => `Allow me to introduce myself. I'm ${name}.`

];
    
// ===============================
// NAME PREFIXES
// ===============================
const nameIntroductions = [

"I am",

"I'm",

"My name is",

"This is",

"Hello, I'm",

"Hi, I'm",

"Greetings! I'm",

"Hey, I'm",

"I recently visited as",

"Proud customer",

"I'm happy to introduce myself as",

"Myself",

"Allow me to introduce myself, I'm",

"My name's",

"It's",

"I'd like to introduce myself. I'm",

"I'm pleased to say I'm",

"I'm delighted to share my experience. I'm",

"I'm excited to share my experience. I'm",

"My friends call me"

];

const visitLines = [

"I recently visited HEER BOUTIQUE.",

"I had a wonderful experience at HEER BOUTIQUE.",

"I chose HEER BOUTIQUE for my special occasion.",

"I was searching for premium ethnic wear.",

"I wanted something unique and elegant.",

"I found exactly what I was looking for.",

"I heard great things about HEER BOUTIQUE.",

"I decided to visit after hearing positive reviews.",

"I was impressed from the moment I entered.",

"My experience was truly memorable."

];
    
const occasionVisitLines = {

Wedding: [

"I visited HEER BOUTIQUE for my wedding.",

"I was looking for the perfect wedding outfit.",

"My wedding shopping experience was amazing.",

"I found my dream wedding outfit here.",

"I wanted something premium for my wedding."

],

Reception: [

"I rented my outfit for my reception.",

"My reception look became perfect because of HEER BOUTIQUE.",

"I chose HEER BOUTIQUE for my reception.",

"I loved the reception collection.",

"The reception outfit was exactly what I wanted."

],

Engagement: [

"I selected my engagement outfit from HEER BOUTIQUE.",

"My engagement look turned out amazing.",

"I wanted something elegant for my engagement.",

"The engagement collection was beautiful.",

"I loved every minute of my shopping experience."

],

Haldi: [

"I wanted a unique Haldi outfit.",

"My Haldi look became memorable.",

"I found the perfect Haldi outfit here.",

"The Haldi collection was amazing.",

"I really enjoyed shopping for my Haldi."

],

Sangeet: [

"I rented my Sangeet outfit from HEER BOUTIQUE.",

"My Sangeet look received many compliments.",

"I loved the Sangeet collection.",

"The outfit fitting was absolutely perfect.",

"My Sangeet shopping experience was wonderful."

],

Festival: [

"I wanted something special for the festival.",

"I found a beautiful festive outfit.",

"The festive collection was amazing.",

"I absolutely loved their festival collection.",

"My shopping experience was fantastic."

],

Party: [

"I needed a stylish outfit for a party.",

"I found exactly what I wanted.",

"The party wear collection was impressive.",

"My party look became memorable.",

"I loved the overall experience."

]

};
    
const endingLines = [

"Highly recommended!",

"Definitely worth visiting.",

"I'll surely visit again.",

"Thank you HEER BOUTIQUE.",

"Five stars from me.",

"A wonderful experience overall.",

"Keep up the great work.",

"Best wishes to the entire team.",

"I'll recommend it to my family and friends.",

"Looking forward to my next visit."

];


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


 let review = getSmartReview(
    selectedService,
    serviceReviews
);
    // ==========================================
// OCCASION BASED SMART REVIEW
// ==========================================

if(selectedService === "rent"){

    const occasionName = occasion.value;

    if(occasionName){

        review = review.replace(
            "special day",
            occasionName.toLowerCase()
        );

        review = review.replace(
            "special occasion",
            occasionName.toLowerCase()
        );

        review = review.replace(
            "my event",
            "my " + occasionName.toLowerCase()
        );

    }

}
    
   const openings = [

    "I'd like to share my wonderful experience at HEER BOUTIQUE.",

    "I recently visited HEER BOUTIQUE and had a fantastic experience.",

    "I'm delighted to share my experience with HEER BOUTIQUE.",

    "Choosing HEER BOUTIQUE was one of my best decisions.",

    "I truly enjoyed my visit to HEER BOUTIQUE."

];

const intro =
nameIntroductions[Math.floor(Math.random() * nameIntroductions.length)];

const selectedVisitLines =
occasionVisitLines[occasion.value] || visitLines;

const visit =
selectedVisitLines[
Math.floor(Math.random() * selectedVisitLines.length)
];
    

const ending =
endingLines[Math.floor(Math.random() * endingLines.length)];

    if(customerName.value.trim() !== ""){

  const introText =
introTemplates[
Math.floor(Math.random()*introTemplates.length)
](customerName.value.trim());

review =
introText +
"\n\n" +
visit +
"\n\n" +
review +
"\n\n" +
ending;

}else{

    review =
        visit +
        "\n\n" +
        review +
        "\n\n" +
        ending;

}

reviewBox.value = review;

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
