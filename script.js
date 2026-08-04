// ==========================================
// HEER THE DESIGNER STUDIO
// Women's Ethnic Wear Review Engine
// Services: Rent + Buyback
// ==========================================

"use strict";

const GOOGLE_REVIEW_LINK = "https://g.page/r/CalJoGBv_gXbEBM/review";
const INSTAGRAM_LINK = "https://www.instagram.com/heer_the_designer_studio";
const WHATSAPP_LINK = "https://wa.me/9265729351";
const BUSINESS_NAME = "HEER THE DESIGNER STUDIO";

let selectedRating = 0;
let selectedService = "";

const stars = document.querySelectorAll(".star");
const serviceButtons = document.querySelectorAll(".option-btn");
const customerName = document.getElementById("customerName");
const occasion = document.getElementById("occasion");
const reviewBox = document.getElementById("reviewText");
const generateBtn = document.getElementById("generateReview");
const copyBtn = document.getElementById("copyReview");
const anotherBtn = document.getElementById("anotherReview");
const googleBtn = document.getElementById("googleReview");

// ==========================================
// FEMALE ETHNIC WEAR REVIEW DATABASE
// ==========================================

const reviewDatabase = {
  5: {
    rent: [
      "I absolutely loved my rental experience at HEER THE DESIGNER STUDIO! The outfit was beautiful, elegant and perfectly maintained. I felt so confident wearing it for my special occasion. 💕",
      "Such a beautiful collection of women's ethnic wear for rent! I found the perfect lehenga for my wedding function and the entire experience was smooth and comfortable.",
      "I rented a gorgeous saree from HEER THE DESIGNER STUDIO and absolutely loved the quality, fitting and finishing. I received so many compliments! ✨",
      "The rental collection is stunning! I found exactly the kind of elegant outfit I wanted for my function. The team was so helpful and made the selection easy.",
      "My rental outfit was clean, beautifully maintained and looked premium. The fitting was comfortable and I felt amazing throughout my event.",
      "I rented my engagement outfit from HEER THE DESIGNER STUDIO and I was honestly in love with the look. It was elegant, feminine and perfect for the occasion.",
      "One of my best experiences with women's ethnic wear rental. The collection is beautiful and the team helped me choose something that suited me perfectly.",
      "The rental process was so easy and hassle-free. My outfit was ready on time and looked absolutely gorgeous when I wore it.",
      "I was searching for a beautiful outfit for a wedding and found the perfect one here. The collection is elegant and the service feels very personal.",
      "The outfit looked even more beautiful in person. The fabric, finishing and overall styling were lovely. I would happily rent from HEER THE DESIGNER STUDIO again.",
      "Loved the variety of designer ethnic wear available for rent. The team understood what I wanted and suggested a beautiful outfit for my occasion.",
      "My reception outfit was absolutely stunning! The fitting and overall look were perfect, and I received so many compliments. Thank you so much! 💗",
      "The rental outfit looked premium and was maintained beautifully. From selection to return, everything felt simple and well managed.",
      "I rented a beautiful sharara for my function and completely loved the look. The collection is elegant, feminine and very well maintained.",
      "Perfect place for anyone looking for premium women's ethnic wear on rent. Beautiful designs, good fitting and a lovely overall experience."
    ],
    buyback: [
      "I had such a smooth Buyback experience at HEER THE DESIGNER STUDIO. The process was explained clearly and the team was very polite and supportive.",
      "Really happy with the Buyback service. Everything was handled professionally and the process was simple and convenient.",
      "My Buyback experience was very smooth and transparent. I appreciated how clearly the team explained the process and guided me throughout.",
      "Excellent Buyback experience! The staff was friendly, respectful and helpful, and the entire process felt comfortable and straightforward.",
      "I really liked having a Buyback option. It made my ethnic wear experience much more flexible and convenient.",
      "The Buyback process was quick and hassle-free. The team was lovely to deal with and explained everything properly.",
      "Had a wonderful experience with the Buyback option. Everything was handled professionally and I felt completely comfortable with the process.",
      "Very impressed with the transparency of the Buyback process. The team was supportive and made everything easy to understand.",
      "The Buyback service made my ethnic wear experience even better. Smooth process, helpful staff and very good customer service.",
      "Very professional service and a convenient Buyback process. I would definitely recommend HEER THE DESIGNER STUDIO to my friends."
    ]
  },
  4: {
    rent: [
      "I had a very good rental experience at HEER THE DESIGNER STUDIO. The outfit was beautiful, clean and comfortable.",
      "Beautiful collection of women's ethnic wear for rent. I found a lovely outfit for my wedding function and the team was helpful.",
      "The rental process was smooth and the outfit was maintained very well. Overall, a lovely experience.",
      "I loved the collection of lehengas and sarees. The staff was friendly and helped me choose something that suited my occasion.",
      "The outfit looked elegant and the fitting was very good. I would definitely consider renting again.",
      "Good variety of women's ethnic wear with a smooth rental process. I was happy with the overall experience.",
      "The outfit was clean, nicely prepared and ready on time. The service was professional and convenient.",
      "I found a beautiful outfit for my reception. Good collection and helpful staff.",
      "The rental experience was convenient and the outfit quality was impressive. I would love to explore more designs next time.",
      "Very good collection for weddings and traditional functions. The rental process was simple and easy."
    ],
    buyback: [
      "The Buyback process was simple and transparent. The team explained everything properly and was very cooperative.",
      "Very good experience with the Buyback option. The staff was helpful and professional throughout the process.",
      "The process went smoothly overall and the team was supportive. I liked how convenient the Buyback option was.",
      "I liked the convenience of the Buyback option. Everything was explained clearly and respectfully.",
      "The staff was polite and supportive throughout the Buyback process. Overall, a very good experience.",
      "Overall, a very good Buyback experience. The process was easy to understand and well managed.",
      "The Buyback service was convenient and professionally handled. I was happy with the overall support.",
      "Good customer support and a transparent Buyback process. The team was easy to communicate with.",
      "I was satisfied with the overall Buyback experience and the way everything was managed.",
      "The process was straightforward and reasonably convenient. I appreciate the helpful service."
    ]
  },
  3: {
    rent: [
      "Overall, I had a good rental experience. The outfit was nice and the staff was cooperative.",
      "The collection was good and I found a suitable outfit for my function. The process was fairly simple.",
      "I had a decent experience renting ethnic wear. The team was polite and helpful.",
      "The outfit looked good and the staff helped me with the selection. Overall, a satisfactory experience.",
      "Overall, a satisfactory rental experience with a nice collection of women's ethnic wear.",
      "I found some beautiful ethnic outfits here. The rental process was reasonably smooth.",
      "The staff was helpful and the outfit was suitable for my occasion. I would explore the collection again.",
      "Good option for renting ethnic wear for special functions. The overall experience was okay.",
      "The overall experience was good and the outfit worked well for my event.",
      "A decent rental experience. I hope to explore more new designs next time."
    ],
    buyback: [
      "Overall, I had a good Buyback experience. The staff was cooperative and explained the process.",
      "The Buyback process was fairly simple and the team explained the basic details clearly.",
      "I had a satisfactory experience with the Buyback option. The process was completed properly.",
      "The process went smoothly overall and the staff was helpful.",
      "The Buyback option is convenient and the overall experience was good.",
      "I was satisfied with the way the Buyback process was handled.",
      "The staff was polite and supportive during the Buyback process.",
      "Overall, a decent experience with the Buyback service.",
      "The process was straightforward and reasonably convenient.",
      "Good overall experience. I hope the Buyback service continues to improve."
    ]
  },
  2: {
    rent: [
      "The rental experience was okay, although I would love to see more variety in sizes and designs.",
      "The outfit was decent, but I hope to see more new collections in the future.",
      "My rental experience was average. The staff was polite and tried to help me with the selection.",
      "The collection was good, but I feel there could be more options for different styles and fits.",
      "The overall rental experience was satisfactory, with some room for improvement.",
      "The outfit was suitable, although I would appreciate more fitting options.",
      "The rental process was okay. More variety in women's ethnic wear would make the experience even better.",
      "The staff was supportive, but I hope the collection gets updated more frequently.",
      "My experience was average overall. I found an outfit after some searching.",
      "The service was satisfactory, but there is room to improve the rental experience."
    ],
    buyback: [
      "The Buyback process was completed successfully, although it took a little longer than expected.",
      "The staff was helpful, but I think the Buyback process could be made faster.",
      "My overall Buyback experience was average but satisfactory.",
      "The process was completed properly, though some parts could be more convenient.",
      "The Buyback option is useful, but I hope the process becomes quicker in the future.",
      "I hope the Buyback terms and process can be explained even more clearly.",
      "Overall, the Buyback experience was okay with some room for improvement.",
      "The process was completed successfully, but it could be more streamlined.",
      "I appreciate the Buyback option and hope the service continues to improve.",
      "My experience was satisfactory overall, although the process could be faster."
    ]
  },
  1: {
    rent: [
      "My rental experience did not fully meet my expectations. I hope to see improvements in the future.",
      "I hope the rental collection offers more variety and size options in the future.",
      "There is room for improvement in the rental process and overall customer experience.",
      "My experience could have been smoother. I hope the service improves with time.",
      "I appreciate the team's efforts and hope my next rental experience is better.",
      "The collection did not fully match what I was looking for. More options would be helpful.",
      "I hope the fitting and rental process can be improved in the future.",
      "The experience was not as smooth as expected, but I appreciate the team's support.",
      "I would like to see more variety and better convenience in the rental service.",
      "Sharing this feedback so the rental experience can become better for future customers."
    ],
    buyback: [
      "The Buyback process could be improved to make it faster and more convenient.",
      "I hope the Buyback process becomes more transparent and streamlined in the future.",
      "My Buyback experience was not as smooth as I expected. I hope there are improvements.",
      "There is room for improvement in the Buyback process and communication.",
      "I appreciate the team's efforts and hope the Buyback experience becomes better.",
      "The process took longer than expected. I hope it can be made quicker.",
      "I hope the Buyback terms and process can be explained more clearly.",
      "The experience could have been smoother, but I appreciate the staff's support.",
      "I would like to see improvements in the overall Buyback process.",
      "Sharing this feedback with the hope that the Buyback service becomes more convenient."
    ]
  }
};

const occasionDetails = {
  Wedding: "my wedding",
  Reception: "my reception",
  Engagement: "my engagement",
  Festival: "the festival",
  Party: "my party",
  Haldi: "my Haldi ceremony",
  Sangeet: "my Sangeet"
};

const occasionLines = {
  Wedding: [
    "I was looking for the perfect wedding outfit.",
    "I wanted something elegant for my wedding.",
    "I found a beautiful outfit for my wedding celebration."
  ],
  Reception: [
    "I wanted a gorgeous look for my reception.",
    "My reception outfit turned out beautifully.",
    "I was looking for an elegant reception look."
  ],
  Engagement: [
    "I wanted something special for my engagement.",
    "I found a beautiful outfit for my engagement.",
    "My engagement look turned out exactly how I wanted."
  ],
  Festival: [
    "I wanted something beautiful for the festival.",
    "I found a lovely festive outfit.",
    "I was looking for an elegant traditional look."
  ],
  Party: [
    "I needed a stylish ethnic outfit for a party.",
    "I found a beautiful look for my party.",
    "I wanted something stylish and comfortable for the occasion."
  ],
  Haldi: [
    "I wanted a fresh and beautiful look for my Haldi ceremony.",
    "I found a lovely outfit for my Haldi.",
    "I was looking for something bright and elegant for my Haldi."
  ],
  Sangeet: [
    "I wanted a beautiful outfit for my Sangeet.",
    "I found the perfect Sangeet look.",
    "I was looking for something elegant and comfortable for my Sangeet."
  ]
};

const femaleOpenings = [
  "I absolutely loved my experience at HEER THE DESIGNER STUDIO.",
  "I am so happy with my experience at HEER THE DESIGNER STUDIO.",
  "I had such a lovely experience at HEER THE DESIGNER STUDIO.",
  "I am delighted to share my experience with HEER THE DESIGNER STUDIO.",
  "I truly enjoyed my experience with HEER THE DESIGNER STUDIO."
];

const femaleClosings = [
  "Highly recommended! 💕",
  "I would definitely recommend them.",
  "I would happily visit again.",
  "Thank you to the entire team! ✨",
  "A lovely experience overall.",
  "I will definitely recommend them to my friends and family."
];

// ==========================================
// ANTI-REPEAT MEMORY
// ==========================================

const STORAGE_KEY = "heer_designer_studio_review_history_v1";

function getHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && saved.rent && saved.buyback ? saved : { rent: [], buyback: [] };
  } catch (error) {
    return { rent: [], buyback: [] };
  }
}

function saveHistory(history) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function getSmartReview(service, reviews) {
  const history = getHistory();
  const used = history[service] || [];
  let available = reviews.filter(review => !used.includes(review));

  if (!available.length) {
    available = [...reviews];
    history[service] = [];
  }

  const review = available[Math.floor(Math.random() * available.length)];
  history[service].push(review);

  if (history[service].length > 30) history[service].shift();
  saveHistory(history);
  return review;
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function buildReview(baseReview) {
  const name = customerName.value.trim();
  const selectedOccasion = occasion.value;
  const opening = randomItem(femaleOpenings);
  const closing = randomItem(femaleClosings);

  const parts = [opening];

  if (name) parts.push(`I'm ${name}, and I'd love to share my experience.`);

  if (selectedOccasion && occasionLines[selectedOccasion]) {
    parts.push(randomItem(occasionLines[selectedOccasion]));
  }

  parts.push(baseReview);
  parts.push(closing);

  return parts.join(" ").replace(/\s+/g, " ").trim();
}

// ==========================================
// UI EVENTS
// ==========================================

stars.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = Number(star.dataset.rating);
    stars.forEach((item, index) => item.classList.toggle("active", index < selectedRating));
  });
});

serviceButtons.forEach(button => {
  button.addEventListener("click", () => {
    serviceButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedService = button.dataset.service;
  });
});

function generateReview() {
  if (!selectedRating) {
    alert("Please select your rating.");
    return;
  }

  if (!selectedService) {
    alert("Please select Rent or Buyback.");
    return;
  }

  const serviceReviews = reviewDatabase[selectedRating]?.[selectedService];

  if (!serviceReviews?.length) {
    reviewBox.value = "Please try another rating or service option.";
    return;
  }

  reviewBox.value = buildReview(getSmartReview(selectedService, serviceReviews));
}

generateBtn.addEventListener("click", generateReview);
anotherBtn.addEventListener("click", generateReview);

copyBtn.addEventListener("click", async () => {
  if (!reviewBox.value.trim()) {
    alert("Please generate your review first.");
    return;
  }

  try {
    await navigator.clipboard.writeText(reviewBox.value);
    alert("Review copied! You can edit it before posting.");
  } catch (error) {
    reviewBox.select();
    document.execCommand("copy");
    alert("Review copied! You can edit it before posting.");
  }
});

googleBtn.addEventListener("click", async () => {
  if (!reviewBox.value.trim()) {
    alert("Please generate your review first.");
    return;
  }

  try {
    await navigator.clipboard.writeText(reviewBox.value);
  } catch (error) {
    // Clipboard may be blocked by browser permissions; Google can still be opened.
  }

  window.open(GOOGLE_REVIEW_LINK, "_blank", "noopener,noreferrer");
});

// ==========================================
// BUSINESS LINKS
// ==========================================

document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
  link.href = INSTAGRAM_LINK;
});

document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  link.href = WHATSAPP_LINK;
});

// ==========================================
// LOADER
// ==========================================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => { loader.style.display = "none"; }, 500);
  }
});
