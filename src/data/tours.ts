import spitiImage from "@/assets/Spitivalley.jpg";
import ladakhImage from "@/assets/Ladakh.jpg";
import meghalayaImage from "@/assets/Meghalaya.JPG";
import kashmirImage from "@/assets/Kashmir.jpg";
import uttarakhandImage from "@/assets/Uttarakhand.jpg";
import himachalImage from "@/assets/Himachal.jpg";
import rajasthanImage from "@/assets/Rajasthan.jpg";

export type TourFAQ = {
  question: string;
  answer: string;
};

export type TourItineraryItem = {
  day: number;
  title: string;
  description: string;
  activities?: string[];
};

export type Tour = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  durationDays: number;
  durationNights: number;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  bestTime: string;
  startingPoint: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: TourItineraryItem[];
  faqs: TourFAQ[];
};

export const tours: Tour[] = [
  {
    slug: "spiti-valley",
    name: "Spiti Valley Explorer",
    tagline: "The Middle Land Adventure",
    description:
      "Traverse the dramatic gorges, ancient monasteries, and high-altitude villages of Himachal's Spiti Valley. A curated journey balancing adventure with comfort.",
    heroImage: spitiImage,
    galleryImages: [spitiImage, himachalImage, ladakhImage],
    durationDays: 7,
    durationNights: 6,
    price: 24999,
    oldPrice: 29999,
    rating: 4.8,
    reviewsCount: 137,
    bestTime: "May to September",
    startingPoint: "Manali",
    highlights: [
      "Key Monastery sunrise",
      "Chandratal Lake stargazing",
      "World's highest post office - Hikkim",
      "Komic & Langza fossil hunt",
    ],
    inclusions: [
      "Accommodation (3-star boutique stays)",
      "Breakfast & Dinner",
      "Tempo Traveler for all transfers",
      "Local guide in Kaza",
      "Permit assistance",
    ],
    exclusions: [
      "Lunches",
      "Personal expenses",
      "Any entry fees",
      "5% GST",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Manali • Acclimatize",
        description:
          "Leisure check-in and short walks by the Beas. Evening briefing and equipment check.",
        activities: ["Old Manali cafe trail", "Hadimba Temple"],
      },
      {
        day: 2,
        title: "Manali to Kaza via Atal Tunnel",
        description:
          "Scenic drive through Kunzum. Photo stops at Chhatru and Losar. Overnight in Kaza.",
        activities: ["Kunzum Pass", "Chandrabhaga views"],
      },
      {
        day: 3,
        title: "Key • Kibber • Hikkim • Komic",
        description:
          "Monastery hopping and village immersion across Spiti's high hamlets.",
        activities: ["Key Monastery", "Hikkim Post", "Komic Buddha"],
      },
      {
        day: 4,
        title: "Langza Fossils & Local Crafts",
        description:
          "Slow morning with local artisans. Optional short hike to the Buddha statue ridge.",
      },
      {
        day: 5,
        title: "Chandratal Lake Night Sky",
        description:
          "Glamping near Chandratal with astrophotography session (weather permitting).",
      },
      {
        day: 6,
        title: "Return to Manali",
        description:
          "Leisurely drive back with curated photo stops. Evening at leisure.",
      },
      {
        day: 7,
        title: "Departure",
        description: "Checkout and onward journey.",
      },
    ],
    faqs: [
      {
        question: "Is Spiti suitable for first-time high-altitude travelers?",
        answer:
          "Yes, our itinerary is paced to allow acclimatization with a gradual gain in altitude and adequate rest.",
      },
      {
        question: "What type of stays are included?",
        answer:
          "Handpicked boutique hotels and premium homestays with attached washrooms in Kaza and Manali.",
      },
    ],
  },
  {
    slug: "ladakh",
    name: "Ladakh Highlights",
    tagline: "Moonland of High Passes",
    description:
      "Experience Ladakh's iconic monasteries, crystal lakes, and stark valleys with a comfort-first, safety-led itinerary.",
    heroImage: ladakhImage,
    galleryImages: [ladakhImage, kashmirImage, himachalImage],
    durationDays: 6,
    durationNights: 5,
    price: 32999,
    oldPrice: 37999,
    rating: 4.9,
    reviewsCount: 221,
    bestTime: "June to September",
    startingPoint: "Leh",
    highlights: [
      "Shanti Stupa sunset",
      "Pangong Tso color shifts",
      "Nubra Valley dunes",
    ],
    inclusions: [
      "Airport transfers",
      "Breakfast & Dinner",
      "Inner line permits",
      "Oxygen cylinder on board",
    ],
    exclusions: ["Lunches", "Camel ride", "Any flight/train"],
    itinerary: [
      { day: 1, title: "Arrive Leh • Rest Day", description: "Acclimatize with light walks and market visit in the evening." },
      { day: 2, title: "Leh Monasteries", description: "Thiksey, Hemis and Shey Palace guided exploration." },
      { day: 3, title: "Leh to Nubra", description: "Drive via Khardung La to Nubra Valley, dunes and double-humped camels." },
      { day: 4, title: "Nubra to Pangong", description: "Scenic transfer, evening by the lake under a billion stars." },
      { day: 5, title: "Pangong to Leh", description: "Return to Leh with photostops, free evening." },
      { day: 6, title: "Departure", description: "Airport drop with memories." },
    ],
    faqs: [
      { question: "Network availability?", answer: "Postpaid SIMs work best; Jio and BSNL have wider coverage." },
    ],
  },
  {
    slug: "meghalaya",
    name: "Meghalaya Monsoon Magic",
    tagline: "Abode of Clouds",
    description:
      "Witness living root bridges, emerald pools, and misty cliffs with an immersive Meghalaya itinerary.",
    heroImage: meghalayaImage,
    galleryImages: [meghalayaImage, uttarakhandImage, kashmirImage],
    durationDays: 5,
    durationNights: 4,
    price: 21999,
    rating: 4.7,
    reviewsCount: 89,
    bestTime: "October to April",
    startingPoint: "Guwahati",
    highlights: ["Double-decker root bridge", "Dawki boat ride", "Mawsmai Caves"],
    inclusions: ["Breakfast", "All transfers", "Local guide at Cherrapunjee"],
    exclusions: ["Lunch & Dinner", "Adventure activities"],
    itinerary: [
      { day: 1, title: "Arrive Shillong", description: "Ward's Lake and cafe hopping." },
      { day: 2, title: "Cherrapunjee Day Tour", description: "Nohkalikai Falls, Arwah Caves, and viewpoints." },
      { day: 3, title: "Trek to Root Bridges", description: "Nongriat double-decker and natural pools." },
      { day: 4, title: "Dawki & Mawlynnong", description: "Crystal river boat ride and the cleanest village visit." },
      { day: 5, title: "Departure", description: "Drive back to Guwahati." },
    ],
    faqs: [
      { question: "Is the root bridge trek difficult?", answer: "It involves many steps; we pace it and provide trekking poles on request." },
    ],
  },
  {
    slug: "kashmir",
    name: "Kashmir Royale",
    tagline: "Paradise on Earth",
    description:
      "Srinagar's shikaras, Gulmarg meadows, and Pahalgam valleys—curated with handpicked stays and warm Kashmiri hospitality.",
    heroImage: kashmirImage,
    galleryImages: [kashmirImage, ladakhImage, himachalImage],
    durationDays: 6,
    durationNights: 5,
    price: 27999,
    oldPrice: 31999,
    rating: 4.8,
    reviewsCount: 164,
    bestTime: "March to October",
    startingPoint: "Srinagar",
    highlights: ["Dal Lake shikara", "Gulmarg gondola", "Betaab Valley"],
    inclusions: ["Breakfast & Dinner", "Houseboat stay", "Private cab"],
    exclusions: ["Lunches", "Gondola tickets"],
    itinerary: [
      { day: 1, title: "Arrive Srinagar", description: "Houseboat check-in and sunset shikara ride." },
      { day: 2, title: "Gulmarg", description: "Meadow walks and optional gondola ride." },
      { day: 3, title: "Pahalgam", description: "Visit Aru and Betaab Valley." },
      { day: 4, title: "Srinagar Gardens", description: "Shalimar, Nishat and local markets." },
      { day: 5, title: "Sonamarg", description: "Thajiwas glacier photo ops." },
      { day: 6, title: "Departure", description: "Airport drop." },
    ],
    faqs: [
      { question: "Snow season?", answer: "For snow, prefer December–February in Gulmarg." },
    ],
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand Himalayan Circuit",
    tagline: "Devbhoomi Trails",
    description:
      "A balanced mix of temples, forests, and mountain villages across Garhwal & Kumaon.",
    heroImage: uttarakhandImage,
    galleryImages: [uttarakhandImage, himachalImage, spitiImage],
    durationDays: 6,
    durationNights: 5,
    price: 23999,
    rating: 4.6,
    reviewsCount: 74,
    bestTime: "All year (avoid peak monsoon)",
    startingPoint: "Dehradun",
    highlights: ["Rishikesh Ganga Aarti", "Auli views", "Jim Corbett safari"],
    inclusions: ["Breakfast", "Private transfers"],
    exclusions: ["Safari permits", "Lunch & Dinner"],
    itinerary: [
      { day: 1, title: "Arrive Rishikesh", description: "Ghat walk and evening Aarti." },
      { day: 2, title: "Rishikesh Adventures", description: "Optional rafting and cafe crawl." },
      { day: 3, title: "Auli Transfer", description: "Cable car (weather permitting)." },
      { day: 4, title: "Joshimath & Around", description: "Local exploration and short hikes." },
      { day: 5, title: "Drive to Corbett", description: "Evening at leisure." },
      { day: 6, title: "Safari & Departure", description: "Morning safari and onward journey." },
    ],
    faqs: [
      { question: "Is rafting safe for beginners?", answer: "Yes, Grade II–III sections with certified guides." },
    ],
  },
  {
    slug: "himachal-pradesh",
    name: "Himachal Comfort Circuit",
    tagline: "Land of Gods",
    description:
      "Shimla to Manali via hidden gems with curated cafes, apple orchards, and scenic walks.",
    heroImage: himachalImage,
    galleryImages: [himachalImage, spitiImage, uttarakhandImage],
    durationDays: 5,
    durationNights: 4,
    price: 19999,
    rating: 4.5,
    reviewsCount: 58,
    bestTime: "March to June, Sept to Dec",
    startingPoint: "Chandigarh",
    highlights: ["Mall Road heritage walk", "Kufri views", "Old Manali cafes"],
    inclusions: ["Breakfast", "Transfers", "Sightseeing"],
    exclusions: ["Lunch & Dinner"],
    itinerary: [
      { day: 1, title: "Chandigarh to Shimla", description: "Evening stroll at Ridge." },
      { day: 2, title: "Shimla & Kufri", description: "Toy train photo ops and viewpoints." },
      { day: 3, title: "Shimla to Manali", description: "Stop at Kullu shawl factory." },
      { day: 4, title: "Manali Local", description: "Hadimba, Vashisht, and cafes." },
      { day: 5, title: "Departure", description: "Drive back to Chandigarh." },
    ],
    faqs: [
      { question: "Snow chance?", answer: "Visit in Dec–Feb for snow in Kufri/Solang." },
    ],
  },
  {
    slug: "rajasthan",
    name: "Royal Rajasthan Sampler",
    tagline: "Land of Kings",
    description:
      "Palaces, forts, and desert sunsets across Jaipur, Jodhpur, and Jaisalmer with boutique heritage stays.",
    heroImage: rajasthanImage,
    galleryImages: [rajasthanImage, kashmirImage, meghalayaImage],
    durationDays: 7,
    durationNights: 6,
    price: 30999,
    rating: 4.7,
    reviewsCount: 142,
    bestTime: "October to March",
    startingPoint: "Jaipur",
    highlights: ["Amber Fort", "Blue City walk", "Sam sand dunes"],
    inclusions: ["Breakfast", "Desert camp with dinner", "Transfers"],
    exclusions: ["Monument tickets", "Lunches"],
    itinerary: [
      { day: 1, title: "Arrive Jaipur", description: "Pink City orientation and markets." },
      { day: 2, title: "Jaipur Forts", description: "Amber, Jaigarh, and Nahargarh." },
      { day: 3, title: "Drive to Jodhpur", description: "Evening stepwell cafe." },
      { day: 4, title: "Mehrangarh & Old City", description: "Blue lanes photo walk." },
      { day: 5, title: "Jaisalmer Transfer", description: "Sunset over the dunes." },
      { day: 6, title: "Jaisalmer Fort", description: "Havelis and local artisans." },
      { day: 7, title: "Departure", description: "Onward journey." },
    ],
    faqs: [
      { question: "Camel safari included?", answer: "A short sunset camel ride is optional and payable directly." },
    ],
  },
];

export const slugFromLocationName = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

export const getTourBySlug = (slug: string): Tour | undefined => {
  return tours.find((t) => t.slug === slug);
};


