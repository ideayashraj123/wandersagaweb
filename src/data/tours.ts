import spitiImage from "@/assets/Spitivalley.jpg";
import ladakhImage from "@/assets/Ladakh.jpg";
import meghalayaImage from "@/assets/Meghalaya.JPG";
import kashmirImage from "@/assets/Kashmir.jpg";
import uttarakhandImage from "@/assets/Uttarakhand.jpg";
import himachalImage from "@/assets/Himachal.jpg";
import rajasthanImage from "@/assets/Rajasthan.jpg";
import spitiBike from "@/assets/images/spitibike.jpg";
import spitiShortCircuit from "@/assets/images/spitishortcircuit.jpg";
import winterSpiti from "@/assets/images/winterspiti.jpg";
import spitiLakeWithChandrataal from "@/assets/images/spitiliake with chandratal.jpg";
import choptatrekImage from "@/assets/images/choptatrek.jpg";
import naagtibbaImage from "@/assets/images/naagtibba.jpg";
import chakrataImage from "@/assets/images/chakrata (2).jpg";
import jibhiImage from "@/assets/images/jibhi.jpg";
import kasolImage from "@/assets/images/kasol.jpg";
import mclordgangImage from "@/assets/images/mclordgang.jpg";
import kalpaImage from "@/assets/images/kalpa.jpg";
import manalisissuImage from "@/assets/images/manalisissu.jpg";
import yullakundaImage from "@/assets/images/yullakunda.jpg";

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
  {
    slug: "chopta-tungnath",
    name: "Chopta Tungnath Chandrashila Trek",
    tagline: "Mini Switzerland of Uttarakhand",
    description:
      "Chopta to Tungnath is a breathtaking trek in the Garhwal region of Uttarakhand, India. Chopta, often referred to as the 'Mini Switzerland of India,' serves as the base for this enchanting journey. The trek leads to Tungnath, the highest Shiva temple in the world at an elevation of about 12,073 feet. The trail winds through lush meadows, dense forests, and alpine landscapes, offering spectacular views of the snow-capped Himalayan peaks. Tungnath's ancient temple dedicated to Lord Shiva is a spiritual haven amid the mountains. The trek is a harmonious blend of natural beauty, spiritual exploration, and a sense of accomplishment as you reach the sacred Tungnath temple.",
    heroImage: choptatrekImage,
    galleryImages: [choptatrekImage, himachalImage, kashmirImage],
    durationDays: 4,
    durationNights: 3,
    price: 8999,
    oldPrice: 12999,
    rating: 4.9,
    bestTime: "April to June, September to November",
    startingPoint: "Delhi/Haridwar",
    highlights: [
      "Tungnath Temple - Highest Shiva Temple in the world at 12,073 feet",
      "Chandrashila Summit with 360° Himalayan views",
      "Deoria Tal - Crystal clear lake reflecting Chaukhamba peaks",
      "Swiss camp accommodation in Chopta meadows",
      "Spectacular sunrise and sunset views",
      "Mini Switzerland of India - Chopta meadows",
      "Bonfire nights under starlit sky"
    ],
    inclusions: [
      "Swiss tents Accommodation (2-night stay in Chopta)",
      "4 Meals (2 breakfast + 2 dinner)",
      "Transfer to/from in traveler",
      "Trekking to Tungnath Chandrashila",
      "Bonfire",
      "Tour curator"
    ],
    exclusions: [
      "Entrance fees of any monument or activity during sightseeing",
      "Anything not mentioned in the itinerary",
      "Any personal expenses",
      "Lunch meals during travel",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 0,
        title: "Departure to Chopta",
        description: "Departure in the evening to Chopta. The group will assemble at the pickup point. Afterward, you'll be introduced to the team captains and the whole group. Halt for dinner in between (not included).",
        activities: ["Group assembly at pickup point", "Team introduction", "Evening departure to Chopta", "Dinner halt during journey"]
      },
      {
        day: 1,
        title: "Arrival at Chopta",
        description: "Reach Chopta, Swiss camp Check-in. Freshen up & rest for some time. Enjoy the views in the lap of nature. Followed by dinner and overnight stay.",
        activities: ["Arrival at Chopta", "Swiss camp check-in", "Rest and acclimatization", "Nature exploration", "Dinner and overnight stay"]
      },
      {
        day: 2,
        title: "Tungnath and Chandrashila Trek",
        description: "Wake up early and witness the beautiful sunrise. Have breakfast and leave for Tungnath. Start your trek to Tungnath (World's highest Shiva temple). Start your journey to Chandrashila Peak (if weather permits). Come back by the evening. Enjoy bonfire followed by dinner and overnight stay.",
        activities: ["Early morning sunrise", "Trek to Tungnath Temple", "Summit Chandrashila Peak (weather permitting)", "Evening return", "Bonfire night", "Dinner and rest"]
      },
      {
        day: 3,
        title: "Deoria Tal Trek and Departure",
        description: "Wake up and have your breakfast. Check-out and leave for Sari Village (Base point for Deoria Tal trek). Reach Deoria Tal and enjoy the picturesque views. Trek back to Sari Village. Departure from Deoria Tal in the evening.",
        activities: ["Breakfast and check-out", "Drive to Sari Village", "Deoria Tal trek", "Photography and sightseeing", "Return trek", "Evening departure"]
      }
    ],
    faqs: [
      { question: "What is the difficulty level of this trek?", answer: "This is a moderate trek suitable for beginners with basic fitness. The trail to Tungnath is well-marked and the total distance is manageable for most people." },
      { question: "What is included in accommodation?", answer: "You'll stay in Swiss tents at Chopta base camp for 2 nights. The accommodation includes sleeping arrangements and basic amenities." },
      { question: "Is the Chandrashila summit always accessible?", answer: "The Chandrashila summit trek depends on weather conditions. During extreme weather or heavy snow, it may not be accessible for safety reasons." },
      { question: "What should I pack for this trek?", answer: "Pack warm clothing, trekking shoes, water bottle, sunglasses, personal medications, and toiletries. A detailed packing list will be shared after booking." }
    ]
  },
  {
    slug: "naagtibba-trek",
    name: "Naagtibba Weekend Trek",
    tagline: "Serpent's Peak Adventure",
    description:
      "Nag Tibba, which means 'Serpent's Peak,' is a stunning and accessible trekking destination in the Garhwal Himalayas of Uttarakhand, India. Rising to an elevation of approximately 9,915 feet, it offers breathtaking, panoramic views of prominent snow-capped peaks like Bandarpoonch, Swargarohini, and Gangotri. The journey typically begins from Pantwari village, winding through enchanting oak and deodar forests that are a treat for nature lovers. As you ascend, the dense woods give way to sprawling green meadows. At the summit, a small temple dedicated to the Nag Devta (Snake God) stands, which is where the peak gets its name.",
    heroImage: naagtibbaImage,
    galleryImages: [naagtibbaImage, himachalImage, ladakhImage],
    durationDays: 2,
    durationNights: 1,
    price: 4999,
    oldPrice: 6999,
    rating: 4.7,
    bestTime: "March to June, September to December",
    startingPoint: "Delhi",
    highlights: [
      "Nag Devta Temple at 9,915 feet summit",
      "Panoramic views of Bandarpoonch, Swargarohini, and Gangotri peaks",
      "Trek through enchanting oak and deodar forests",
      "Sprawling green meadows at higher altitudes",
      "Camping under starlit sky at base camp",
      "Perfect weekend trek for beginners",
      "Early morning summit experience at 3:00 AM"
    ],
    inclusions: [
      "Delhi to Dehradun and Dehradun to Delhi Bus Tickets",
      "Dehradun to Pantwari and back in private cab",
      "Accommodation (1-night camp stay in Nag Tibba base camp)",
      "4 meals (1 Breakfast, 2 Lunch, 1 Dinner)",
      "Guided trek to Nag Tibba Summit",
      "First Aid Kits",
      "All Required Permits",
      "Evening snacks (Tea and Pakora)"
    ],
    exclusions: [
      "Any additional expenses such as of personal nature",
      "Additional accommodation/food costs incurred due to any delayed travel",
      "Any lunch and other meals not mentioned in Package Inclusions",
      "Any Airfare/Rail fare other than what is mentioned in Inclusions",
      "Any type of transportation outside the itinerary",
      "Parking and monument entry fees during sightseeing",
      "Personal trekking gear and equipment"
    ],
    itinerary: [
      {
        day: 1,
        title: "Pantwari Village to Base Camp",
        description: "Reach Pantwari by noon. Freshen up and lunch will be provided at Pantwari. Start trekking from Pantwari village to Nag Tibba Base camp. Reach the base camp, upon arrival at Nag Tibba Base Camp we serve Evening snacks (Tea and Pakora) followed by Dinner and overnight stay at camps.",
        activities: ["Arrival at Pantwari village by noon", "Freshen up and lunch", "Trek from Pantwari to Nag Tibba Base camp", "Evening snacks (Tea and Pakora)", "Dinner and overnight camping"]
      },
      {
        day: 2,
        title: "Nag Tibba Summit and Return to Delhi",
        description: "Early morning, wake up around 2:30 AM to mesmerizing beauty and fill yourself with breakfast. Start your trek at 3:00 AM to Nag Tibba summit at 3084 mt. Reach Nag Tibba top and witness the stunning view of Himalayan Peaks. Start descending and walk all the way down to base camp. Get served with mouth watering lunch at base camp. Then start the descend to Pantwari village. Reach Pantwari and start your journey towards Dehradun. Reach Dehradun by 7-8pm then depart for Delhi via private bus. Reach Delhi by early morning.",
        activities: ["2:30 AM wake up and breakfast", "3:00 AM summit trek to 3084m", "Reach Nag Tibba summit", "Witness stunning Himalayan peaks view", "Descend to base camp", "Lunch at base camp", "Trek back to Pantwari", "Journey to Dehradun by 7-8 PM", "Night bus to Delhi"]
      }
    ],
    faqs: [
      { question: "What time do we start the summit trek?", answer: "The summit trek starts at 3:00 AM to catch the sunrise and avoid afternoon clouds. Wake up is at 2:30 AM followed by breakfast." },
      { question: "Is this suitable for beginners?", answer: "Yes, Naagtibba is perfect for beginners. It's an easy to moderate trek with well-defined trails and achievable in a weekend." },
      { question: "What is the total elevation of Nag Tibba?", answer: "Nag Tibba summit is at 9,915 feet (3084 meters) offering spectacular views of major Himalayan peaks." },
      { question: "What meals are provided during the trek?", answer: "Total 4 meals are included: 1 Breakfast, 2 Lunch, 1 Dinner, plus evening snacks (Tea and Pakora) at base camp." }
    ]
  },
  {
    slug: "chakrata-adventure",
    name: "Chakrata Hill Station Getaway",
    tagline: "Hidden Hill Station Gem",
    description:
      "Chakrata, nestled in the Dehradun district of Uttarakhand, India, is a charming hill station surrounded by the picturesque Shivalik Range. Perched at an altitude of approximately 7,000 feet, Chakrata offers a serene escape with its tranquil ambiance and pristine landscapes. The town is known for its dense forests, lush greenery, and pleasant weather throughout the year. Tiger Falls, cascading from a height of 312 feet, is a natural marvel and a popular attraction. Chilmiri Neck, a vantage point, provides panoramic views of the surrounding hills. Chakrata is a haven for nature enthusiasts, offering opportunities for trekking, birdwatching, and exploring the untouched beauty of the Himalayan foothills. It's an ideal retreat for those seeking tranquility and natural splendor.",
    heroImage: chakrataImage,
    galleryImages: [chakrataImage, himachalImage, meghalayaImage],
    durationDays: 3,
    durationNights: 2,
    price: 7999,
    oldPrice: 10999,
    rating: 4.6,
    bestTime: "March to June, September to November",
    startingPoint: "Delhi (Akshardham Metro Station)",
    highlights: [
      "Tiger Falls - Highest waterfall in Uttarakhand (312 feet)",
      "Chilmiri Neck - Spectacular 360-degree Himalayan views",
      "Budher Caves exploration and easy trek",
      "Moila Top trek from Lokhandi snow view point",
      "Chakrata market and local culture experience",
      "Peaceful environment away from tourist crowds",
      "Bonfire nights under starlit sky"
    ],
    inclusions: [
      "Travel by Volvo bus",
      "Accommodation in Chakrata resort",
      "Local sightseeing as per itinerary",
      "2 Meals – Day 1 (Dinner) + Day 2 (Breakfast)",
      "All permits and entry fees",
      "Bonfire arrangement (weather permitting)"
    ],
    exclusions: [
      "Any meals/services not mentioned in the inclusions",
      "Transport from and back to destination (extra charges if required)",
      "Porter/mule charges to carry personal bag (Rs. 1800)",
      "Any charges for video cameras, still cameras, etc.",
      "Alcohol, soft drinks, beverages, etc.",
      "Personal expenses like tips, telephone calls, laundry, etc.",
      "Any costs arising out of unforeseen circumstances like landslides, road blocks, bad weather, etc.",
      "Insurance coverage"
    ],
    itinerary: [
      {
        day: 0,
        title: "Departure from Delhi",
        description: "The group will assemble at the Akshardham Metro Station. The group will start for an overnight journey towards Chakrata around 09:00 PM. On the way, some stops will be made for refreshments (own expense).",
        activities: ["Group assembly at Akshardham Metro Station", "9:00 PM departure to Chakrata", "Overnight bus journey", "Refreshment stops during travel"]
      },
      {
        day: 1,
        title: "Chakrata Sightseeing Day",
        description: "Reach Chakrata early morning, freshen up then have breakfast (cost not included) and enjoy the beautiful view from the resort. After a little rest get ready to visit Budher caves & Moila Top which is an easy trek from Lokhandi snow view Point. Visit Chirmiri Sunset point in the evening & enjoy the breathtaking 360-degree landscapes of Himalayas. Afterward, we will get back to the hotel/campsite for dinner followed by a bonfire (if weather permits).",
        activities: ["Early morning arrival and freshen up", "Resort check-in and breakfast", "Budher Caves exploration", "Moila Top trek from Lokhandi", "Chirmiri Sunset point visit", "360-degree Himalayan views", "Dinner and bonfire night"]
      },
      {
        day: 2,
        title: "Tiger Falls & Chakrata Market",
        description: "Enjoy a beautiful morning from the resort & have breakfast. After breakfast, we will check out from the resort & visit Tiger falls which is around 20 kms drive and a further 1 km trek. Tiger Falls is highest and most beautiful waterfall of Uttarakhand. Visit Chakrata market in the evening and depart back to Delhi.",
        activities: ["Morning breakfast and check-out", "20 km drive to Tiger Falls", "1 km trek to the waterfall", "Photography at highest waterfall in Uttarakhand", "Chakrata market visit", "Evening departure to Delhi"]
      }
    ],
    faqs: [
      { question: "What makes Chakrata special?", answer: "Chakrata is one of the few untouched hill stations at 7,000 feet altitude, offering pristine natural beauty, 360-degree Himalayan views, and peaceful environment away from commercial crowds." },
      { question: "How difficult is the Tiger Falls trek?", answer: "The Tiger Falls trek is relatively easy - just 1 km from the parking area. However, it involves some rocky terrain, so wear proper trekking shoes." },
      { question: "What should I carry for this trip?", answer: "Carry warm clothing for evenings, comfortable trekking shoes, camera, personal medications, and some cash for meals not included in the package." },
      { question: "Is the bonfire guaranteed?", answer: "Bonfire is arranged based on weather conditions. In case of rain or strong winds, it may be cancelled for safety reasons." }
    ]
  },
  // Himachal Pradesh Tours
  {
    slug: "tirthan-jibhi-adventure",
    name: "Tirthan Jibhi Valley",
    tagline: "Serene Valley Escape",
    description: "Nestled in the heart of Himachal Pradesh, the Jibhi-Jalori-Tirthan circuit offers a mesmerizing blend of natural beauty and tranquility. Begin in Jibhi, where the quaint village charm welcomes you. Venture to Jalori Pass, surrounded by majestic peaks, and discover the serene Jalori Lake and the ancient Mahakali Temple. Transition to Tirthan Valley, a haven for nature enthusiasts, where the pristine Tirthan River flows amidst lush landscapes. Engage in riverside activities and explore the Great Himalayan National Park, showcasing the region's rich biodiversity. Immerse yourself in this 3-in-1 escape, where every moment is a symphony of mountains, rivers, and timeless serenity.",
    heroImage: jibhiImage,
    galleryImages: [jibhiImage],
    durationDays: 3,
    durationNights: 2,
    price: 12999,
    oldPrice: 16999,
    rating: 4.8,
    bestTime: "March to June, September to November",
    startingPoint: "Delhi/Chandigarh",
    highlights: [
      "Jibhi Waterfall exploration",
      "Mini Thailand scenic beauty",
      "Serolsar Lake trek from Jalori Pass",
      "360 Degree View Point experience",
      "Choiee Waterfall in Tirthan Valley",
      "Bonfire & Music sessions",
      "Cultural Food experiences",
      "Great Himalayan National Park"
    ],
    inclusions: [
      "Accommodation (2-night stay in Jibhi)",
      "4 Meals (2 Breakfast, 2 Dinner)",
      "Transfer to/from in AC deluxe vehicle",
      "All sightseeing mentioned in the itinerary",
      "Bonfire and music party",
      "Tour curator services",
      "All permits and entry fees"
    ],
    exclusions: [
      "Any other Food and Beverage charge not included in the package",
      "Early check-in at stay",
      "Any other expense not included in the inclusion column",
      "Any other costing due to natural calamity or forced circumstances",
      "Any entry tickets to the viewpoints",
      "Personal expenses and shopping"
    ],
    itinerary: [
      {
        day: 0,
        title: "Departure to Jibhi",
        description: "Departure in the evening. The group will assemble at the pickup point. Afterward, you'll get a small briefing from the Trip Leader(s). Halt for dinner in between (not included).",
        activities: ["Evening departure from pickup point", "Group assembly and trip briefing", "Overnight journey to Jibhi", "Dinner halt during travel (own expense)"]
      },
      {
        day: 1,
        title: "Jibhi Exploration",
        description: "Reach in the morning. Check-in at the stay. Relax for some time as you must be tired after a long journey. By noon leave for Jibhi Waterfall & Mini Thailand. Spend some memorable time there. Enjoy the mesmerizing view of the valley and go for a riverside walk. Enjoy a bonfire with light music. Dinner and overnight stay.",
        activities: ["Morning arrival and check-in", "Rest and relaxation", "Jibhi Waterfall visit", "Mini Thailand exploration", "Valley views and riverside walk", "Evening bonfire with light music", "Dinner and overnight stay"]
      },
      {
        day: 2,
        title: "Jalori Pass - Serolsar Lake",
        description: "Wake up early and enjoy the beautiful sunrise. Have your breakfast and leave for Jalori Pass. Start your trek from Jalori pass to Serolsar lake (4KM trek) via 360deg viewpoint (trek depends upon weather conditions). Reach back, and enjoy bonfire with light music. Dinner and overnight stay.",
        activities: ["Early sunrise viewing", "Breakfast and departure to Jalori Pass", "4KM trek to Serolsar Lake", "360-degree viewpoint experience", "Weather-dependent trekking", "Evening bonfire with music", "Dinner and overnight stay"]
      },
      {
        day: 3,
        title: "Departure from Tirthan",
        description: "Wake up and have your breakfast. Check out and leave for the Tirthan Valley Choiee waterfall trek. Later depart with lots of breathtaking views and everlasting memories of Tirthan Valley. Drive towards Kullu and enjoy river rafting (if time allows). Reach Delhi/Chandigarh the next day in the morning.",
        activities: ["Breakfast and checkout", "Tirthan Valley visit", "Choiee waterfall trek", "Valley exploration", "Drive towards Kullu", "River rafting (time permitting)", "Overnight journey back"]
      }
    ],
    faqs: [
      { question: "What makes this circuit special?", answer: "The Jibhi-Jalori-Tirthan circuit offers a unique 3-in-1 experience combining village charm, mountain passes, and pristine valleys in one trip." },
      { question: "Is the Serolsar Lake trek suitable for beginners?", answer: "Yes, it's a moderate 4KM trek from Jalori Pass, but weather conditions may affect accessibility." },
      { question: "What is Mini Thailand in Jibhi?", answer: "Mini Thailand is a scenic spot in Jibhi known for its resemblance to Thai landscapes with lush greenery and serene beauty." },
      { question: "Can this trip be customized?", answer: "Yes, 2 Nights 3 Days packages are available on request with flexible itineraries based on your preferences." }
    ]
  },
  {
    slug: "kasol-kheerganga-trek",
    name: "Kasol Kheerganga Trek",
    tagline: "Parvati Valley Magic",
    description: "Kasol to Kheerganga offers a mystical journey through the lush Parvati Valley in Himachal Pradesh. Begin in Kasol, a charming village along the Parvati River known for its laid-back atmosphere and vibrant Israeli cafes. Traverse through pine forests and scenic landscapes as you embark on the trek to Kheerganga. Kheerganga, perched at an altitude of about 9,700 feet, captivates with its natural hot springs and panoramic mountain views. Relax in the soothing thermal waters, surrounded by snow-capped peaks. The trek provides not just a physical adventure but a spiritual one, with the mystical ambiance of Kheerganga creating an unforgettable experience in the lap of the Himalayas.",
    heroImage: kasolImage,
    galleryImages: [kasolImage],
    durationDays: 3,
    durationNights: 2,
    price: 8999,
    oldPrice: 11999,
    rating: 4.7,
    bestTime: "March to June, September to November",
    startingPoint: "Delhi",
    highlights: [
      "Kasol Sightseeing and flea market exploration",
      "Cafe Hopping in mini Israel of India",
      "Chalal Village - Known as Hippies Den",
      "Kheerganga Trek to 9,700 feet altitude",
      "Natural hot springs at Kheerganga",
      "Manikaran Sahib Gurudwara visit",
      "Cultural Food experiences",
      "Bonfire & Light music sessions"
    ],
    inclusions: [
      "Accommodation (1-night stay in Kasol + 1-night camp stay in Kheerganga)",
      "4 Meals (2 breakfast + 2 dinners)",
      "Transfer to/from in AC push-back Traveler",
      "All sightseeing mentioned in the itinerary",
      "Kheerganga trek with guide",
      "Bonfire and Light music",
      "Tour curator services",
      "All permits and entry fees"
    ],
    exclusions: [
      "Any other Food and Beverage charge not included in the package",
      "Adventure activities cost",
      "Any other expense not included in the inclusion column",
      "Any other costing due to natural calamity or forced circumstances",
      "Any entry tickets to specific viewpoints",
      "Personal expenses and shopping",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kasol",
        description: "Reach Kasol in the morning. Freshen up and relax for some time as you must be tired from the overnight journey. Post this, we will proceed for Kasol sightseeing and visit the Kasol flea market, and nearby cafes. You can also explore Chalal village known as Hippies Den (A small riverside trail of 3 km both ways). Reach back to stay. A bonfire with light music will be set up. Dinner will be served. Overnight stay in Kasol.",
        activities: ["Morning arrival in Kasol", "Freshen up and rest", "Kasol sightseeing and flea market", "Cafe hopping experience", "Chalal village exploration (3km trail)", "Evening bonfire with light music", "Dinner and overnight stay"]
      },
      {
        day: 2,
        title: "Kheerganga Trek",
        description: "Wake up early in the morning and have your breakfast. Check out. Then we will leave for Barsheni (the base point for the Kheerganga trek). Reach Kheerganga top (5-6 hours trek from Barsheni) in the evening. Hot dinner will be served. Overnight stay at the campsite.",
        activities: ["Early morning breakfast", "Check out from Kasol", "Transfer to Barsheni base point", "5-6 hours trek to Kheerganga (9,700 feet)", "Evening arrival at Kheerganga", "Hot dinner at campsite", "Overnight camping under stars"]
      },
      {
        day: 3,
        title: "Kheerganga to Manikaran and Departure",
        description: "Wake up early in the morning and go for a hot water spring bath. Have your breakfast. Then start trekking down to Barsheni. Reach Barsheni in the evening. Transfer to Manikaran. In Manikaran, visit the famous Manikaran Sahib Gurudwara. Departure in the evening. Reach the next day.",
        activities: ["Early morning hot spring bath", "Breakfast at Kheerganga", "Trek down to Barsheni", "Evening arrival at Barsheni", "Transfer to Manikaran", "Visit Manikaran Sahib Gurudwara", "Evening departure", "Overnight journey back"]
      }
    ],
    faqs: [
      { question: "How difficult is the Kheerganga trek?", answer: "It's a moderate 5-6 hours trek from Barsheni to Kheerganga at 9,700 feet. Suitable for beginners with basic fitness levels." },
      { question: "Are the hot springs natural and safe?", answer: "Yes, Kheerganga has natural hot water springs believed to have medicinal properties. They are safe for bathing and very relaxing." },
      { question: "What is special about Chalal village?", answer: "Chalal village is known as 'Hippies Den' - a peaceful riverside village just 3km from Kasol, perfect for nature walks and tranquility." },
      { question: "What type of food is available in Kasol?", answer: "Kasol offers excellent Israeli and continental cuisine along with local Himachali food. The café culture is vibrant with many international options." }
    ]
  },
  {
    slug: "mcleodganj-triund-bir",
    name: "McLeodganj Triund Bir",
    tagline: "Spiritual & Adventure Hub",
    description: "Explore the spiritual heart of Himachal with Dalai Lama's residence, Triund trek, and paragliding in Bir.",
    heroImage: mclordgangImage,
    galleryImages: [mclordgangImage],
    durationDays: 6,
    durationNights: 5,
    price: 11999,
    oldPrice: 15999,
    rating: 4.9,
    bestTime: "March to June, September to November",
    startingPoint: "Delhi",
    highlights: [
      "Dalai Lama Temple",
      "Triund Trek",
      "Bir Paragliding",
      "Tibetan Culture",
      "Mountain Monasteries"
    ],
    inclusions: [
      "Accommodation for 5 nights",
      "All meals",
      "Transportation",
      "Paragliding (weather permitting)",
      "Local sightseeing",
      "Guide services"
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Extra paragliding sessions"
    ],
    itinerary: [
      { day: 1, title: "Delhi to McLeodganj", description: "Journey to Little Lhasa", activities: ["Travel to Dharamshala", "Check-in McLeodganj", "Evening exploration"] },
      { day: 2, title: "McLeodganj Sightseeing", description: "Explore Tibetan culture", activities: ["Dalai Lama Temple", "Bhagsu Waterfall", "Tibetan markets"] },
      { day: 3, title: "Triund Trek", description: "Trek to Triund Hill", activities: ["Early morning trek", "Triund camping", "Mountain views"] },
      { day: 4, title: "Triund to Bir", description: "Return and travel to Bir", activities: ["Descent from Triund", "Travel to Bir", "Paragliding site visit"] },
      { day: 5, title: "Bir Paragliding", description: "Adventure day in Bir", activities: ["Paragliding session", "Billing exploration", "Tibetan colony visit"] },
      { day: 6, title: "Return to Delhi", description: "Departure day", activities: ["Check out", "Return journey"] }
    ],
    faqs: [
      { question: "Can beginners do paragliding?", answer: "Yes, tandem flights are available for beginners with certified pilots." },
      { question: "Is Triund trek difficult?", answer: "It's a moderate trek, suitable for people with basic fitness levels." },
      { question: "Can we meet Dalai Lama?", answer: "While public audiences are rare, you can visit his residence and temple complex." }
    ]
  },
  {
    slug: "yulla-kanda-trek",
    name: "Yulla Kanda Trek",
    tagline: "World's Highest Krishna Temple",
    description: "Yulla Kanda is a high-altitude destination in Himachal Pradesh, known for being home to the world's highest Krishna temple, situated at around 4,000 meters above sea level. It's a rare mix of spiritual significance and raw Himalayan beauty. The main attraction is the temple dedicated to Lord Krishna, located beside a glacial lake, surrounded by panoramic views of snow-covered peaks. The site remains untouched by mass tourism, making it ideal for travelers seeking solitude, spiritual depth, or an offbeat trekking experience. The trek to Yulla Kanda passes through remote villages, dense forests, and high-altitude meadows. With minimal infrastructure on the trail, it offers a rugged and authentic Himalayan experience. Expect limited connectivity, no commercial stays, and a challenging route—this is a destination for serious trekkers and spiritual explorers.",
    heroImage: yullakundaImage,
    galleryImages: [yullakundaImage],
    durationDays: 4,
    durationNights: 3,
    price: 18999,
    oldPrice: 23999,
    rating: 4.6,
    bestTime: "June to September",
    startingPoint: "Delhi/Chandigarh",
    highlights: [
      "World's highest Krishna temple at 4,000 meters",
      "Glacial lake beside the temple",
      "Panoramic views of snow-covered peaks",
      "Trek through remote villages and dense forests",
      "High-altitude meadows experience",
      "Untouched by mass tourism",
      "Authentic rugged Himalayan experience",
      "Spiritual exploration destination"
    ],
    inclusions: [
      "Transportation: All transfers from Delhi to Delhi via Bus/Tempo Traveller",
      "Meals: 2 breakfasts, 2 lunch, and 2 dinner",
      "1 Night Stay in Home stay at Tapri",
      "1 Night Stay in Camping at Yulla Kanda Base Camp",
      "Guidance: A Cool Trip Captain to lead and assist throughout the trip",
      "Trek permits and entry fees",
      "Professional trekking guide"
    ],
    exclusions: [
      "Any other Food and Beverage charge not included in the package",
      "Any other expense not included in the inclusion column",
      "Any other costing due to natural calamity or forced circumstances",
      "Any entry tickets to specific viewpoints",
      "5% GST extra on mentioned prices",
      "Personal trekking equipment",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 0,
        title: "Departure from Delhi/Chandigarh",
        description: "Departure in the night. The group will assemble at the pickup point. Overnight journey to Tapri in the Kinnaur district. Halt for dinner in between (not included).",
        activities: ["Night departure from pickup point", "Group assembly and introduction", "Overnight bus journey to Kinnaur", "Dinner halt during travel (own expense)"]
      },
      {
        day: 1,
        title: "Arrival and Stay in Tapri",
        description: "Morning: Arrive in Tapri by afternoon. Afternoon: Check into your hotel, rest and prepare for the trek the following day. Evening: Free time to explore nearby areas or relax at the hotel. Dinner and overnight stay at the hotel.",
        activities: ["Afternoon arrival in Tapri", "Check into homestay accommodation", "Rest and trek preparation", "Explore nearby areas", "Dinner and overnight stay"]
      },
      {
        day: 2,
        title: "Trek from Yulla Village to Yulla Base Camp",
        description: "Wake up early in the morning. Check out from the hotel and drive to Yulla Village (30 minutes). A small briefing session will be conducted. Begin the trek covering approximately 10 kilometers, which will take about 4-6 hours. Packed lunch will be served. Reach base camp, rest for some time. Dinner and overnight stay in camps.",
        activities: ["Early morning checkout", "30-minute drive to Yulla Village", "Trek briefing session", "10km trek to base camp (4-6 hours)", "Packed lunch during trek", "Base camp arrival and setup", "Dinner and camping overnight"]
      },
      {
        day: 3,
        title: "Trek to Krishna Temple and Return to Delhi/Chandigarh",
        description: "Morning: After breakfast, trek to Yulla Kanda, home to the highest Krishna temple in the world. Spend time exploring the temple. Afternoon: Trek back to Yulla Village. Have lunch on the way and then travel back to Tapri to freshen up at the hotel. Evening: Depart for Delhi/Chandigarh in the evening. Reach back to Chandigarh next day by morning and Delhi by noon.",
        activities: ["Breakfast at base camp", "Trek to world's highest Krishna temple", "Temple exploration and spiritual time", "Trek back to Yulla Village", "Lunch during return trek", "Freshen up at Tapri", "Evening departure", "Overnight journey back"]
      }
    ],
    faqs: [
      { question: "What makes Yulla Kanda special?", answer: "Yulla Kanda is home to the world's highest Krishna temple at 4,000 meters, offering a unique blend of spiritual significance and raw Himalayan beauty." },
      { question: "How challenging is this trek?", answer: "This is a challenging high-altitude trek with minimal infrastructure, suitable for serious trekkers with good physical fitness and trekking experience." },
      { question: "What about connectivity and facilities?", answer: "Expect limited connectivity, no commercial stays, and minimal infrastructure. This is an authentic, rugged Himalayan experience." },
      { question: "Is this suitable for beginners?", answer: "No, this trek is recommended for experienced trekkers and spiritual explorers due to its challenging route and high altitude." }
    ]
  },
  {
    slug: "manali-sissu-kasol",
    name: "Manali Sissu Kasol",
    tagline: "Complete Himachal Experience",
    description: "Manali, Sissu, and Kasol are popular tourist destinations in the Indian state of Himachal Pradesh, each offering its own unique charm and attractions. Manali: Nestled in the Himalayas, Manali is renowned for its scenic beauty, adventure sports, and vibrant culture. Visitors can explore attractions such as Hadimba Temple, Solang Valley for adventure sports like skiing and paragliding, Rohtang Pass for breathtaking views, and Old Manali for its quaint streets and cafes. Sissu: Sissu is a small village located in Lahaul Valley, known for its stunning landscapes, lush greenery, and peaceful ambiance. It's an ideal destination for those seeking solitude amidst nature. The village offers opportunities for trekking, camping, and experiencing the local culture and traditions. Kasol: Situated along the banks of the Parvati River, Kasol is a haven for backpackers and nature enthusiasts. It's famous for its hippie culture, picturesque surroundings, and trekking trails. Travelers can explore places like Chalal Village, Manikaran Sahib Gurudwara, and Kheerganga Trek for a serene retreat amidst the Himalayas.",
    heroImage: manalisissuImage,
    galleryImages: [manalisissuImage],
    durationDays: 3,
    durationNights: 2,
    price: 14999,
    oldPrice: 19999,
    rating: 4.8,
    bestTime: "March to June, September to November",
    startingPoint: "Delhi",
    highlights: [
      "Manali Mall Road exploration",
      "Cafe Hopping in Old Manali",
      "Atal Tunnel Sissu experience",
      "Adventure Activities in Solang Valley",
      "Kasol hippie culture and riverside beauty",
      "Manikaran Sahib Gurudwara visit",
      "Cultural Food experiences",
      "Bonfire & Music sessions"
    ],
    inclusions: [
      "Accommodation (2 nights stay in hotel)",
      "4 Meals (2 breakfast + 2 dinners)",
      "Transfer to/from in deluxe vehicle",
      "All sightseeing mentioned in the itinerary",
      "Bonfire with music party",
      "Tour curator services",
      "All permits and entry fees"
    ],
    exclusions: [
      "Any other Food and Beverage charge not included in the package",
      "Adventure activities cost",
      "Any other expense not included in the inclusion column",
      "Any other costing due to natural calamity or forced circumstances",
      "Any entry tickets to the viewpoints",
      "Personal expenses and shopping"
    ],
    itinerary: [
      {
        day: 0,
        title: "Departure to Manali",
        description: "Departure in the evening. The group will assemble at the pickup point. Afterward, you'll get a small briefing from the Trip Leader(s). Halt for dinner in between (not included).",
        activities: ["Evening departure from pickup point", "Group assembly and trip briefing", "Overnight journey to Manali", "Dinner halt during travel (own expense)"]
      },
      {
        day: 1,
        title: "Manali Local Sightseeing",
        description: "Reach Manali in the morning. Check-in at the hotel, and freshen up. Leave for Manali for local sightseeing of Hadimba temple, Old Manali, and Mall Road. Reach back to the hotel. Dinner will be served alongside a bonfire and light music. Overnight stay at the hotel.",
        activities: ["Morning arrival and hotel check-in", "Hadimba Temple visit", "Old Manali exploration", "Mall Road shopping and café hopping", "Evening bonfire with light music", "Dinner and overnight stay"]
      },
      {
        day: 2,
        title: "Solang Valley | Sissu | Atal Tunnel",
        description: "After breakfast, leave for Solang Valley, Sissu, and Atal Tunnel sightseeing. En route, we will cover Solang Valley. Enjoy the mesmerizing views from Sissu Valley. Upon our arrival in Solang Valley, travelers can indulge in activities like Zorbing, Skiing, ATV rides, Paragliding, Zipline, and more (at personal expense). Once we've had our fair share of adrenaline, we will head back to Manali. Reach back to the hotel in the evening. Dinner, and overnight stay at the hotel.",
        activities: ["Post-breakfast departure", "Solang Valley adventure activities", "Atal Tunnel crossing experience", "Sissu Valley mesmerizing views", "Adventure sports (Zorbing, Skiing, ATV, Paragliding)", "Evening return to hotel", "Dinner and overnight stay"]
      },
      {
        day: 3,
        title: "Kasol Manikaran Exploration and Departure",
        description: "Wake up early and have your breakfast & check out. Leave for Kasol/Manikaran sightseeing. Reach Manikaran where you will experience peace. Famous all over for Manikaran Sahib (Gurudwara) and its hot sulphur springs, Manikaran is a retreat to feel peaceful and spiritually rejuvenated. Post this explore Kasol market, departure late in the evening.",
        activities: ["Early breakfast and checkout", "Drive to Manikaran", "Manikaran Sahib Gurudwara visit", "Hot sulphur springs experience", "Spiritual and peaceful retreat", "Kasol market exploration", "Late evening departure back"]
      }
    ],
    faqs: [
      { question: "What adventure activities are available in Solang Valley?", answer: "Zorbing, Skiing, ATV rides, Paragliding, Zipline and more activities are available at personal expense based on weather conditions." },
      { question: "Is the Atal Tunnel experience included?", answer: "Yes, crossing the Atal Tunnel and experiencing Sissu Valley views are included in the sightseeing itinerary." },
      { question: "What is special about Manikaran?", answer: "Manikaran is famous for Manikaran Sahib Gurudwara and natural hot sulphur springs, offering a peaceful and spiritually rejuvenating experience." },
      { question: "Can this trip be customized for different durations?", answer: "Yes, 2 nights 3 days packages are available on request with customized itineraries." }
    ]
  },
  {
    slug: "shimla-kalpa-chitkul",
    name: "Shimla Kalpa Chitkul",
    tagline: "Queen of Hills to Last Village",
    description: "Shimla, Kalpa, and Chitkul are three distinct places in the state of Himachal Pradesh, India. Shimla, the capital of Himachal Pradesh, is a popular hill station known for its colonial architecture, scenic beauty, and pleasant climate. It has historical sites, vibrant markets, and serves as a hub for tourists exploring the Himalayan region. Kalpa is a serene town in the Kinnaur district, offering breathtaking views of the Kinnaur Kailash mountain range. Known for its apple orchards and traditional architecture, Kalpa provides a peaceful retreat amidst the Himalayan landscapes. Chitkul, located near the Indo-Tibetan border, is a picturesque village and the last inhabited settlement on the border. It is renowned for its stunning landscapes, including snow-capped peaks and green meadows, making it a sought-after destination for nature lovers and trekkers. Traveling from Shimla to Kalpa and then to Chitkul provides a diverse experience, from the bustling hill station of Shimla to the tranquil beauty of Kalpa and the remote charm of Chitkul, showcasing the varied landscapes and cultural richness of Himachal Pradesh.",
    heroImage: kalpaImage,
    galleryImages: [kalpaImage],
    durationDays: 4,
    durationNights: 3,
    price: 16999,
    oldPrice: 21999,
    rating: 4.7,
    bestTime: "March to June, September to November",
    startingPoint: "Delhi",
    highlights: [
      "Visit Shri Bhima Kaali Temple in Sarahan",
      "Chitkul Sightseeing - Last Village of India",
      "Baspa River exploration and day hike",
      "Kalpa village and traditional architecture",
      "Kinner Kailash Peaks spectacular views",
      "Cultural Food experiences",
      "Bonfire & Music sessions",
      "Apple orchards of Kinnaur"
    ],
    inclusions: [
      "Transfer to/from in AC tempo traveller/Toyota Innova/AC deluxe bus as per group size",
      "Accommodation on Twin/Triple sharing basis in camps/Hotels",
      "2 nights at Chitkul and 1 night at Kalpa",
      "Experienced and friendly trip leader/captain",
      "Meals: Dinner (3) and Breakfast (3)",
      "Bonfire and Music sessions",
      "Local Sightseeing as mentioned",
      "Driver allowances, toll taxes, parking, state taxes"
    ],
    exclusions: [
      "Your Personal & Medical Expenses",
      "Anything that is not mentioned above in the inclusions",
      "Any expenses caused due to conditions beyond control such as road blockage, accidents, landslides",
      "Any medical expenses",
      "Cost incurred due to change in itinerary due to landslides, roadblocks or factors beyond human control",
      "Camera fees at monuments"
    ],
    itinerary: [
      {
        day: 0,
        title: "Departure for Chitkul - Last Village of India",
        description: "The group assembles at the pick-up point by 08:00 PM. We'll meet the team captains and a small tour briefing will also be provided. After which, we'll head out on an overnight journey to Shimla. With its breathtaking scenery and pleasant temperature Shimla is most regal of all hill resorts.",
        activities: ["8:00 PM group assembly at pickup point", "Meet team captains and tour briefing", "Overnight journey to Shimla", "Travel through scenic mountain routes"]
      },
      {
        day: 1,
        title: "Reach Sarahan & Visit Shri Bhima Kali Temple",
        description: "Reach Sarahan in the Morning. Freshen up & have Breakfast then Visit Shri Bhima Kaali temple. Reach Chitkul late at noon & then relax for some time. You may go out for a nature walk to enjoy sunset & snow-clad mountain views. Reach the Hotel/Homestay in the evening & enjoy a Bonfire & Dinner Later on.",
        activities: ["Morning arrival in Sarahan", "Breakfast and freshen up", "Visit Shri Bhima Kaali Temple", "Drive to Chitkul - Last Village of India", "Nature walk and sunset views", "Evening bonfire and dinner"]
      },
      {
        day: 2,
        title: "Chitkul Local Explore & Day Hike",
        description: "Sit and enjoy the beautiful view of the Baspa Valley from around the camp and a majestic view of the snow-clad mountains. We'll return from the camp to have our lunch and move towards the other side of the Baspa River for a short-day hike while enjoying the forest area along the Baspa River. Sit beside the river to enjoy the view from the other side of the ITBP camp. Return to the hotel/homestay for a gorgeous sunset and dinner around the bonfire.",
        activities: ["Beautiful Baspa Valley views", "Snow-clad mountain vistas", "Lunch at camp", "Day hike across Baspa River", "Forest area exploration", "ITBP camp views", "Sunset and bonfire dinner"]
      },
      {
        day: 3,
        title: "Chitkul to Kalpa",
        description: "Post Breakfast, we will leave from Chitkul to Kalpa. On the way, we will stop at Roghi Suicide Point and Reckong Peo Market. From Roghi suicide point, we will move to Kalpa. Explore Kalpa village and the temple. Dinner will be served in the evening followed by an overnight stay in Kalpa.",
        activities: ["Post-breakfast departure from Chitkul", "Stop at Roghi Suicide Point", "Reckong Peo Market visit", "Drive to Kalpa village", "Kalpa village and temple exploration", "Evening dinner and overnight stay"]
      },
      {
        day: 4,
        title: "Kalpa to Shimla & Departure to Delhi",
        description: "After breakfast, we will leave from Kalpa to Shimla. On the way, we will have a look at Kinner Kailash peaks. In the evening we will board a bus to Delhi. Overnight bus journey from Shimla to Delhi. End of Tour.",
        activities: ["Breakfast and departure from Kalpa", "Drive to Shimla via scenic route", "Kinner Kailash peaks viewing", "Evening departure to Delhi", "Overnight bus journey", "Tour completion"]
      }
    ],
    faqs: [
      { question: "What makes Chitkul special?", answer: "Chitkul is the last inhabited village near Indo-Tibetan border, offering unique culture, stunning landscapes, and the experience of being at India's edge." },
      { question: "Do we need permits for Chitkul?", answer: "Yes, inner line permits are required for Chitkul which are arranged as part of our services." },
      { question: "What is the significance of Shri Bhima Kali Temple?", answer: "It's an ancient temple in Sarahan dedicated to Goddess Bhima Kali, known for its traditional architecture and spiritual significance." },
      { question: "Can this trip be customized?", answer: "Yes, 3 Nights 4 Days packages are available on request with flexible itineraries based on your preferences." }
    ]
  },
  {
    slug: "winter-spiti-expedition",
    name: "Winter Spiti Expedition",
    tagline: "The Middle Land Winter Adventure",
    description: "Spiti Valley is a cold desert mountain valley located high in the Himalayas in the north-eastern part of the northern Indian state of Himachal Pradesh. The name 'Spiti' means 'The middle land', i.e. the land between Tibet and India. The local population follows Vajrayana Buddhism similar to that found in the nearby Tibet and Ladakh regions. The valley and surrounding region is one of the least populated regions in India and is the gateway to the northernmost reaches of the nation. Along the northern route from Manali, Himachal Pradesh or Keylong via the Rohtang Pass or Kunzum Pass respectively, the valley lies in the North-Eastern section of the Indian state Himachal Pradesh and forms part of the Lahaul and Spiti district. The sub-divisional headquarters (capital) is Kaza, Himachal Pradesh which is situated along the Spiti River at an elevation of about 12,500 feet (3,800 m) above mean sea level.",
    heroImage: winterSpiti,
    galleryImages: [winterSpiti, himachalImage, ladakhImage],
    durationDays: 7,
    durationNights: 6,
    price: 16500,
    oldPrice: 25999,
    rating: 4.8,
    bestTime: "December to March",
    startingPoint: "Delhi",
    highlights: [
      "Chitkul - Last Indian village near China border",
      "Tabo Monastery - Ancient Buddhist monastery",
      "Kaza - Administrative hub of Spiti Valley at 12,500 feet",
      "Langza - Buddha statue and fossil-rich landscapes",
      "Hikkim - World's highest post office",
      "Komic - Highest motorable village in the world",
      "Key Monastery - Largest monastery in Spiti",
      "Chicham Bridge - Asia's highest suspension bridge",
      "Gui Monastery - 500-year-old mummy of Buddhist monk",
      "Kinner Kailash views from Kalpa"
    ],
    inclusions: [
      "Volvo/Bus Transfers from Delhi to Shimla and Shimla to Delhi",
      "Sightseeing by Tempo Traveler/Innova/Ertiga/Scorpio",
      "Accommodation: 6 Nights (Hotels/Camps/Homestays)",
      "Meals (6 Breakfasts and 6 Dinner) only in Stays",
      "Team Leader throughout the trip",
      "Availability of oxygen 24x7 in case of any emergency",
      "All applicable toll, parking, and driver charges",
      "All inner line permits",
      "5% GST if applicable"
    ],
    exclusions: [
      "The package doesn't include the cost of any form of insurance, rescue, evacuation, hospitalization, and entry ticket",
      "Other expenses such as drinks and tips are not included",
      "Any additional expenses such as of personal nature",
      "Additional accommodation/food costs incurred due to any delayed travel",
      "Parking and monument entry fees during sightseeing",
      "Additional Costs due to Flight Cancellations, Landslides, Roadblocks, and other natural calamities",
      "Any other services not specified above in inclusions"
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi To Shimla",
        description: "Get ready to be departed from Delhi by Evening. Reach Shimla next morning by an overnight Volvo.",
        activities: ["Evening departure from Delhi", "Overnight Volvo bus journey", "Scenic route to Shimla"]
      },
      {
        day: 1,
        title: "Shimla To Sangla",
        description: "We will reach Shimla in morning around 7:30 AM. The Spiti Expedition journey starts from here. Long drive through the scenic beauty of Kinnaur via Narkanda and Rampur. Stop at the iconic Kinnaur Gate for group photography and continue the journey via the impressive Karcham Dam. Arrive in Sangla and check in to your accommodation. Overnight Stay and Dinner in Sangla.",
        activities: ["7:30 AM arrival in Shimla", "Drive through Kinnaur via Narkanda and Rampur", "Stop at Kinnaur Gate for photography", "Visit Karcham Dam", "Check-in at Sangla", "Dinner and overnight stay"]
      },
      {
        day: 2,
        title: "Sangla - Chitkul - Tabo",
        description: "After breakfast, relax for a while and check out. Drive to Chitkul, the last Indian village near the China border. Explore the village and enjoy the scenic views. Then head to Tabo via Khab Sangam, the beautiful confluence of the Spiti and Sutlej Rivers. On the way, visit Nako Lake, a peaceful high-altitude lake surrounded by mountains. Reach Tabo by evening. Check in, have dinner, and stay overnight.",
        activities: ["Breakfast and checkout", "Drive to Chitkul - last Indian village", "Village exploration", "Journey to Tabo via Khab Sangam", "Visit Nako Lake", "Evening arrival in Tabo"]
      },
      {
        day: 3,
        title: "Tabo to Kaza",
        description: "After breakfast, spend some peaceful time at the beautiful Tabo Monastery and listen to stories shared by the monks. Then, begin your journey towards the administrative hub of Spiti Valley – Kaza. En route, explore the ancient Dhankar Monastery, one of the oldest in the valley, offering breathtaking views. Reach Kaza and spend the evening exploring the local market and visiting some cozy cafés. Overnight stay in Kaza.",
        activities: ["Breakfast at Tabo", "Visit Tabo Monastery", "Stories with monks", "Journey to Kaza", "Explore Dhankar Monastery", "Evening market exploration in Kaza"]
      },
      {
        day: 4,
        title: "Kaza - Langza - Hikkim - Komic - Kaza",
        description: "After breakfast, get ready for a day of local sightseeing around Kaza. Start by visiting Langza, a picturesque village known for its giant Buddha statue and fossil-rich landscapes. Next, head to Hikkim, home to one of the world's highest post offices—don't forget to send a postcard! Continue to Komic, the highest motorable village in the world, offering incredible views and a peaceful vibe. Return to Kaza by evening. Enjoy dinner and an overnight stay in Kaza.",
        activities: ["Full day local sightseeing", "Visit Langza - Buddha statue and fossils", "Hikkim - world's highest post office", "Send postcards", "Komic - highest motorable village", "Return to Kaza for dinner"]
      },
      {
        day: 5,
        title: "Kaza - Chicham Bridge - Key Monastery - Kaza",
        description: "After breakfast, head out for a day of sightseeing around Kaza. Start with a visit to the iconic Key Monastery, the largest and most famous monastery in Spiti, known for its stunning hilltop location and peaceful atmosphere. Then, drive to the spectacular Chicham Bridge, one of Asia's highest suspension bridges, offering thrilling views of the deep gorge below. Return to Kaza by evening. Dinner and overnight stay in Kaza.",
        activities: ["Breakfast in Kaza", "Visit Key Monastery - largest in Spiti", "Peaceful monastery atmosphere", "Chicham Bridge - Asia's highest suspension bridge", "Thrilling gorge views", "Evening return to Kaza"]
      },
      {
        day: 6,
        title: "Kaza - Gui Monastery - Kalpa",
        description: "After breakfast, depart from Kaza and head towards Kalpa, traveling via Tabo. En route, visit the peaceful Gui Monastery, famous for its ancient murals, serene location, and the 500-550-year-old mummy of a Buddhist monk, which has been remarkably preserved due to the dry, cold climate. Continue your scenic journey through the Spiti Valley and reach Kalpa by evening. Check in, enjoy dinner, and have an overnight stay.",
        activities: ["Breakfast and departure from Kaza", "Journey to Kalpa via Tabo", "Visit Gui Monastery", "See 500-year-old mummy", "Ancient murals viewing", "Evening arrival in Kalpa"]
      },
      {
        day: 7,
        title: "Kalpa to Shimla to Delhi",
        description: "Wake up to the Kinner Kailash view. Visit the popular Suicide point and start your excursion back to Shimla. Reach Shimla by evening. Depart for Delhi. Arrive in Delhi next morning i.e., 8th Day.",
        activities: ["Wake up to Kinner Kailash views", "Visit Suicide Point", "Journey back to Shimla", "Evening departure to Delhi", "Overnight bus journey", "Next morning arrival in Delhi"]
      }
    ],
    faqs: [
      { question: "Why is it called Winter Spiti Expedition?", answer: "This expedition is specially designed for winter months (December-March) when Spiti Valley is covered in snow, offering a unique cold desert experience." },
      { question: "Is oxygen support really provided?", answer: "Yes, we provide 24x7 oxygen availability throughout the trip for any emergency situations due to high altitude." },
      { question: "What makes Hikkim post office special?", answer: "Hikkim houses one of the world's highest post offices where you can send postcards to your loved ones from this remote location." },
      { question: "Are inner line permits included?", answer: "Yes, all required inner line permits for restricted areas like Chitkul are included in the package and arranged by our team." }
    ]
  },
  {
    slug: "summer-spiti-circuit-chandrataal",
    name: "Full Circuit Summer Spiti Expedition",
    tagline: "Complete Spiti Valley Experience",
    description: "Explore the complete Spiti Valley circuit in summer with pristine Chandrataal Lake, ancient monasteries, and breathtaking high-altitude landscapes. This comprehensive expedition covers all major attractions of Spiti Valley including the world's highest post office, fossil-rich villages, and the mesmerizing moon lake - Chandrataal.",
    heroImage: spitiLakeWithChandrataal,
    galleryImages: [spitiLakeWithChandrataal, ladakhImage, himachalImage],
    durationDays: 7,
    durationNights: 6,
    price: 19499,
    oldPrice: 24999,
    rating: 4.9,
    bestTime: "May to September",
    startingPoint: "Delhi",
    highlights: [
      "Monasteries of Spiti Valley",
      "Beautiful high-altitude lakes",
      "Fossil Park at Langza village",
      "Mesmerizing high mountains",
      "Capture beautiful landscapes of Spiti Valley",
      "Quaint villages of Spiti",
      "500 years old Giu Mummy",
      "Pin Valley National Park",
      "Chandra Taal Lake - Moon Lake",
      "World's Highest Post Office - Hikkim",
      "World's Highest Village - Komic"
    ],
    inclusions: [
      "Volvo Transfers from Delhi to Shimla and Manali to Delhi",
      "Sightseeing by Tempo Traveler/Innova/Ertiga/Scorpio",
      "Accommodation: 6 Nights (Hotels/Camps/Homestays)",
      "Meals (6 Breakfasts and 6 Dinner) only in Stays",
      "Team Leader throughout the trip",
      "Availability of oxygen 24x7 in case of any emergency",
      "All applicable toll, parking, and driver charges",
      "All inner line permits"
    ],
    exclusions: [
      "The package doesn't include the cost of any form of insurance, rescue, evacuation, hospitalization, and entry tickets",
      "Other expenses such as drinks and tips are not included",
      "Any additional expenses such as of personal nature",
      "Additional accommodation/food costs incurred due to any delayed travel",
      "5% GST (If applicable)",
      "Any lunch and other meals not mentioned in Package Inclusions",
      "Any Airfare/Rail fare other than what is mentioned in Inclusions",
      "Parking and monument entry fees during sightseeing",
      "Additional Costs due to Flight Cancellations, Landslides, Roadblocks, and other natural calamities",
      "Any other services not specified above in inclusions"
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi to Shimla",
        description: "Evening departure from Delhi. Overnight journey to Shimla in comfortable Volvo bus. Reach Shimla next morning to begin the Spiti expedition.",
        activities: ["Evening departure from Delhi", "Overnight Volvo journey", "Scenic route through hills", "Early morning arrival in Shimla"]
      },
      {
        day: 1,
        title: "Shimla to Sangla",
        description: "Begin the Spiti expedition journey from Shimla. Long drive through the scenic beauty of Kinnaur via Narkanda and Rampur. Stop at iconic locations and reach Sangla by evening.",
        activities: ["Drive through Kinnaur valley", "Stop at Narkanda", "Visit Rampur town", "Photography stops", "Evening arrival in Sangla"]
      },
      {
        day: 2,
        title: "Sangla to Kalpa",
        description: "Explore Sangla valley and drive to Kalpa. Visit the beautiful landscapes and experience the apple orchards of Kinnaur. Enjoy views of Kinner Kailash peaks.",
        activities: ["Sangla valley exploration", "Drive to Kalpa", "Apple orchards visit", "Kinner Kailash views", "Local market exploration"]
      },
      {
        day: 3,
        title: "Kalpa to Tabo",
        description: "Journey towards Spiti Valley proper. Cross into the cold desert region and reach Tabo, known for its ancient monastery. Experience the change in landscape and culture.",
        activities: ["Drive into Spiti Valley", "Landscape transition views", "Reach Tabo monastery town", "Ancient Tabo monastery visit", "Cultural exploration"]
      },
      {
        day: 4,
        title: "Tabo to Kaza",
        description: "Continue to Kaza, the administrative headquarters of Spiti. Visit Dhankar monastery en route. Explore Kaza town and acclimatize to the high altitude.",
        activities: ["Drive to Kaza", "Dhankar monastery visit", "Kaza town exploration", "Local cafes and markets", "Altitude acclimatization"]
      },
      {
        day: 5,
        title: "Kaza Sightseeing",
        description: "Full day sightseeing around Kaza. Visit Langza fossil village, Hikkim post office, and Komic village. Experience the unique culture and landscapes of high Spiti.",
        activities: ["Langza village and fossil hunting", "World's highest post office at Hikkim", "Komic - world's highest village", "Key monastery visit", "Local village interactions"]
      },
      {
        day: 6,
        title: "Kaza to Chandrataal",
        description: "Drive to the pristine Chandrataal Lake, also known as Moon Lake. Experience camping beside this high-altitude lake surrounded by mountains.",
        activities: ["Drive to Chandrataal Lake", "High-altitude lake experience", "Photography sessions", "Camping beside the lake", "Stargazing opportunities"]
      },
      {
        day: 7,
        title: "Chandrataal - Manali - Delhi",
        description: "Early morning at Chandrataal, then drive to Manali. Board evening Volvo for Delhi. Reach Delhi next morning with unforgettable memories of Spiti.",
        activities: ["Morning at Chandrataal", "Drive to Manali", "Evening Volvo departure", "Overnight journey to Delhi", "Trip completion"]
      }
    ],
    faqs: [
      { question: "What makes this Summer Spiti Circuit special?", answer: "This complete circuit covers all major Spiti attractions including Chandrataal Lake, highest villages, ancient monasteries, and the complete cultural experience of the valley." },
      { question: "Is Chandrataal accessible in summer?", answer: "Yes, Chandrataal is accessible from May to September. Summer is the best time to visit this pristine high-altitude lake." },
      { question: "What is special about Langza village?", answer: "Langza is famous for its fossil park where you can find marine fossils, and it has a giant Buddha statue overlooking the village." },
      { question: "Can we visit the world's highest post office?", answer: "Yes, Hikkim village has the world's highest post office at 15,500 feet where you can send postcards to your loved ones." }
    ]
  },
  {
    slug: "spiti-valley-bike-expedition",
    name: "Spiti Valley Bike Expedition",
    tagline: "Ultimate Himalayan Biking Adventure",
    description: "Challenging terrains, high passes, exhilarating views, and one hell of a machine are what all bikers dream of. If you too are one of those who have a passion to ride on seemingly endless roads, then perhaps a bike trip to Spiti Valley is all that you need. Spiti Valley is a high-altitude desert whose beauty unveils after a tough and tricky ride through the most challenging roads of the Himalayas. If you feel the need for adrenaline, you got your share of the dose right throughout your trip to Spiti. A bike expedition to Spiti can give you the feel of riding through the passes of Leh Ladakh, as this place is popularly called the mini version of it! As you begin your journey to Spiti from Manali, you travel through the popular Rohtang Pass located in the Pir Panjal Range of the Himalayas. This ride will feed your appetite for thrill and vast soul-satiating panoramas. As you leave behind the chaos of cities, Spiti Valley will happily embrace you into a zone of peace and love. Soak in the holy vibes at Key Monastery, which is an important place of pilgrimage for the Buddhist population residing in Spiti. Explore the long-lost stories in the fossils of Langza Village and witness the grandeur of the golden statue of Buddha. Ride up to the highest post office in the world at Hikkim and send a postcard to your loved ones and also to yourself! In short, just forget about the metropolis life for a few days and spend some time in a natural retreat in this high-altitude desert!",
    heroImage: spitiBike,
    galleryImages: [spitiBike, ladakhImage, himachalImage],
    durationDays: 7,
    durationNights: 6,
    price: 29999,
    oldPrice: 35999,
    rating: 4.8,
    bestTime: "May to September",
    startingPoint: "Delhi",
    highlights: [
      "Ultimate Himalayan biking experience through challenging terrains",
      "Ride through Rohtang Pass in Pir Panjal Range",
      "Mini Leh Ladakh experience in Spiti Valley",
      "Key Monastery - Important Buddhist pilgrimage site",
      "Langza Village fossil exploration and Buddha statue",
      "World's highest post office at Hikkim",
      "Chicham Bridge - One of Asia's highest suspension bridges",
      "Chandrataal Lake - High-altitude pristine lake",
      "Complete mechanical backup and riding gear provided"
    ],
    inclusions: [
      "Volvo/Bus Transfers from Delhi to Jibhi and Manali to Delhi",
      "Bike Rent for 7 Days (Bike Option)",
      "Fuel Expenses for the bike from Manali to Manali",
      "Entire travel from Aut to Manali by Tempo Traveler/cab (For Tempo Traveler Option)",
      "Accommodation: 7 Nights (Hotels/Camps/Homestays)",
      "Meals (7 Breakfasts and 7 Dinner) only in stays",
      "Mechanical Backup throughout the expedition",
      "Riding Gears – Helmet, Riding Gloves (only for riders), Elbow Guards, Knee Pads",
      "Team Leader throughout the trip",
      "All applicable toll, parking and driver charges",
      "All inner line permits"
    ],
    exclusions: [
      "5% GST, if applicable",
      "Insurance, rescue, evacuation, hospitalization and entry tickets cost",
      "Other expenses such as drinks and tips",
      "Any additional expenses of personal nature",
      "Additional accommodation/food costs due to delayed travel",
      "Any lunch and other meals not mentioned in Package Inclusions",
      "Any Airfare/Rail fare other than mentioned in Inclusions",
      "Parking and monument entry fees during sightseeing",
      "Additional costs due to flight cancellations, landslides, roadblocks, natural calamities",
      "Any other services not specified in inclusions",
      "Any cost arising due to natural calamities (to be borne directly by customer)",
      "Any damage to the bike except engine damage (to be borne by client)",
      "INR 10,000/- security deposit for bike (refundable)",
      "Rs 2000/- extra per person for Double Sharing"
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi to Manali",
        description: "Departure from Delhi in the evening. Overnight journey to Manali via comfortable Volvo bus. Get ready for an epic biking adventure in the Himalayas.",
        activities: ["Evening departure from Delhi", "Overnight Volvo journey", "Scenic route through Himachal Pradesh", "Arrival preparation for biking expedition"]
      },
      {
        day: 1,
        title: "Manali to Jibhi",
        description: "Begin your biking expedition from Manali. First day of riding through scenic mountain roads to reach the beautiful village of Jibhi. Get acquainted with your bike and the mountain terrain.",
        activities: ["Bike handover and briefing", "First day of mountain biking", "Scenic ride through Himachal valleys", "Arrival and check-in at Jibhi", "Evening relaxation"]
      },
      {
        day: 2,
        title: "Jibhi to Sangla",
        description: "Continue your biking journey towards Sangla. Ride through challenging mountain roads with spectacular views of the Kinnaur region. Experience the thrill of high-altitude biking.",
        activities: ["Morning departure from Jibhi", "Challenging mountain terrain riding", "Kinnaur region exploration", "Sangla village arrival", "Local sightseeing"]
      },
      {
        day: 3,
        title: "Sangla to Nako/Tabo",
        description: "Ride towards Nako or Tabo depending on road conditions. This stretch offers some of the most challenging and rewarding biking experiences with stunning high-altitude desert landscapes.",
        activities: ["High-altitude desert biking", "Challenging terrain navigation", "Spectacular landscape photography", "Arrival at Nako/Tabo", "Acclimatization"]
      },
      {
        day: 4,
        title: "Nako/Tabo to Kaza",
        description: "Ride to Kaza, the administrative headquarters of Spiti Valley. Experience the true essence of high-altitude desert biking with breathtaking views of the Spiti landscape.",
        activities: ["Ride to Spiti Valley headquarters", "High-altitude biking experience", "Spiti landscape exploration", "Kaza town arrival", "Local market exploration"]
      },
      {
        day: 5,
        title: "Langza | Hikkim | Komic & Key Monastery",
        description: "Day trip on bikes to explore the highest villages in the world. Visit Langza fossil village, Hikkim world's highest post office, Komic highest motorable village, and the sacred Key Monastery.",
        activities: ["Langza fossil village exploration", "World's highest post office at Hikkim", "Komic - highest motorable village", "Key Monastery spiritual experience", "Return to Kaza"]
      },
      {
        day: 6,
        title: "Kaza | Chicham Bridge | Chandrataal Lake",
        description: "Ride to the spectacular Chicham Bridge and then to the pristine Chandrataal Lake. Experience one of the most thrilling biking routes in the Himalayas with stunning high-altitude lake views.",
        activities: ["Chicham Bridge - Asia's highest suspension bridge", "Challenging ride to Chandrataal", "High-altitude lake exploration", "Photography at pristine lake", "Camping near Chandrataal"]
      },
      {
        day: 7,
        title: "Chandrataal - Manali - Delhi",
        description: "Final day of biking from Chandrataal back to Manali. Complete your epic Spiti biking expedition and depart for Delhi with unforgettable memories of the ultimate Himalayan adventure.",
        activities: ["Final biking stretch to Manali", "Bike return and expedition completion", "Celebration of successful expedition", "Departure to Delhi", "Overnight journey back"]
      }
    ],
    faqs: [
      { question: "What type of bikes are provided?", answer: "We provide well-maintained Royal Enfield bikes suitable for high-altitude terrain with complete mechanical backup support." },
      { question: "Do I need biking experience for this expedition?", answer: "Yes, this expedition requires good biking skills and experience riding in challenging mountain terrain. Basic fitness and stamina are essential." },
      { question: "What safety measures are included?", answer: "Complete riding gear (helmet, gloves, elbow & knee guards), mechanical backup, experienced team leader, and 24x7 support throughout the expedition." },
      { question: "What about bike security and damage?", answer: "INR 10,000 security deposit is required. Any damage to the bike (except engine damage) will be borne by the client. The deposit is refundable if no damage occurs." },
      { question: "Can we choose tempo traveler instead of biking?", answer: "Yes, we offer a tempo traveler option for the entire journey from Aut to Manali for those who prefer not to bike." }
    ]
  },
  {
    slug: "short-circuit-summer-spiti",
    name: "Short Circuit Summer Spiti Expedition",
    tagline: "Compact Spiti Adventure",
    description: "Journey from the lush green valleys of Manali to the surreal, high-altitude desert of Spiti. Cross the dramatic Rohtang Pass, witness the shifting landscapes, and reach the stunning Chandratal Lake, where turquoise waters mirror snow-capped peaks. Camp under starlit skies before heading toward Kaza, the cultural heart of Spiti Valley. Explore ancient monasteries, remote villages like Hikkim, Komic, and Langza, and soak in the raw, spiritual beauty of the Himalayas. This is not just a road trip—it's an adventure through time and terrain.",
    heroImage: spitiShortCircuit,
    galleryImages: [spitiShortCircuit, ladakhImage, himachalImage],
    durationDays: 5,
    durationNights: 4,
    price: 13999,
    oldPrice: 18999,
    rating: 4.9,
    bestTime: "May to September",
    startingPoint: "Delhi",
    highlights: [
      "Journey from lush valleys to high-altitude desert",
      "Cross dramatic Rohtang Pass",
      "Stunning Chandratal Lake camping experience",
      "Kaza - Cultural heart of Spiti Valley",
      "Ancient monasteries exploration",
      "Remote villages: Hikkim, Komic, and Langza",
      "Spiritual beauty of the Himalayas",
      "Adventure through time and terrain"
    ],
    inclusions: [
      "Volvo/Bus Transfers from Delhi to Manali to Delhi",
      "Sightseeing by Tempo Traveler",
      "Accommodation: 4 Nights (Hotel/Camp/Homestay)",
      "1 Night at Manali (Hotel)",
      "2 Nights in Kaza (Hotel/Homestay)",
      "1 Night at Chandrataal (Swiss Camps in Quad/Penta Sharing)",
      "Meals (4 Breakfasts and 4 Dinner) only in stays",
      "Team Leader throughout the trip",
      "All applicable toll, parking and driver charges",
      "All inner line permits"
    ],
    exclusions: [
      "5% GST, if applicable",
      "Insurance, rescue, evacuation, hospitalization and entry tickets cost",
      "Other expenses such as drinks and tips",
      "Any additional expenses of personal nature",
      "Additional accommodation/food costs due to delayed travel",
      "Any lunch and other meals not mentioned in Package Inclusions",
      "Any Airfare/Rail fare other than mentioned in Inclusions",
      "Parking and monument entry fees during sightseeing",
      "Additional costs due to flight cancellations, landslides, roadblocks, natural calamities",
      "Any other services not specified in inclusions"
    ],
    itinerary: [
      {
        day: 0,
        title: "Delhi to Manali",
        description: "Departure from Delhi in the evening. Overnight comfortable Volvo journey to Manali, the gateway to Spiti Valley. Prepare for an incredible adventure through diverse landscapes.",
        activities: ["Evening departure from Delhi", "Overnight Volvo journey", "Scenic route through Himachal Pradesh", "Arrival preparation in Manali"]
      },
      {
        day: 1,
        title: "Manali Sightseeing",
        description: "Explore the beautiful hill station of Manali. Visit local attractions, acclimatize to the mountain environment, and prepare for the high-altitude journey ahead.",
        activities: ["Manali local sightseeing", "Visit Hadimba Temple", "Explore Old Manali", "Mall Road shopping", "Acclimatization", "Evening leisure"]
      },
      {
        day: 2,
        title: "Manali to Kaza",
        description: "Begin the epic journey to Spiti Valley. Cross the dramatic Rohtang Pass and witness the landscape transformation from lush green valleys to high-altitude desert. Arrive in Kaza, the administrative headquarters of Spiti.",
        activities: ["Early morning departure", "Cross Rohtang Pass", "Landscape transformation experience", "High-altitude desert entry", "Arrival in Kaza", "Local exploration"]
      },
      {
        day: 3,
        title: "Kaza Sightseeing",
        description: "Full day exploration of Kaza and surrounding areas. Visit ancient monasteries, explore remote villages like Hikkim (world's highest post office), Komic (highest motorable village), and Langza (fossil village with Buddha statue).",
        activities: ["Hikkim - World's highest post office", "Komic - Highest motorable village", "Langza - Fossil village exploration", "Buddha statue visit", "Ancient monasteries", "Local culture experience"]
      },
      {
        day: 4,
        title: "Kaza to Chandrataal",
        description: "Journey to the stunning Chandrataal Lake, where turquoise waters mirror snow-capped peaks. Experience camping under starlit skies in Swiss camps at this pristine high-altitude lake.",
        activities: ["Scenic drive to Chandrataal", "High-altitude lake arrival", "Turquoise waters and snow-capped peaks", "Swiss camp setup", "Starlit sky camping", "Photography session"]
      },
      {
        day: 5,
        title: "Departure via Manali",
        description: "Final day of the expedition. Depart from Chandrataal back to Manali and then continue the journey to Delhi with unforgettable memories of the Spiti adventure.",
        activities: ["Morning departure from Chandrataal", "Return journey to Manali", "Scenic route back", "Evening departure to Delhi", "Overnight journey", "Trip completion"]
      }
    ],
    faqs: [
      { question: "What makes this Short Circuit different from full Spiti tours?", answer: "This compact 5-day tour covers the essential highlights of Spiti including Chandrataal, Kaza, and remote villages, perfect for those with limited time but wanting the complete Spiti experience." },
      { question: "What type of accommodation is provided at Chandrataal?", answer: "Swiss camps in Quad/Penta sharing basis. These are comfortable tented accommodations designed for high-altitude camping." },
      { question: "Is this tour suitable for first-time Spiti visitors?", answer: "Yes, this tour is perfect for first-time visitors as it covers all major attractions of Spiti Valley in a well-planned short circuit." },
      { question: "What is the best time for this expedition?", answer: "May to September is the best time when roads are accessible, weather is favorable, and Chandrataal Lake is accessible." },
      { question: "Are meals included throughout the trip?", answer: "4 breakfasts and 4 dinners are included only at the stays. Lunch and other meals need to be arranged separately." }
    ]
  }
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


