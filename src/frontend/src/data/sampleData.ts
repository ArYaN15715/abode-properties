import type { LifestyleImage, Property, Testimonial } from "../types";

export const properties: Property[] = [
  {
    id: "p1",
    title: "Prestige Residency",
    location: "Vijay Nagar, Indore",
    category: "Residential",
    price: "\u20b91.85",
    priceUnit: "Cr",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    badge: "Featured",
    description:
      "A refined 3BHK apartment with expansive city views, Italian marble flooring, and a private terrace garden in the heart of Vijay Nagar.",
    bedrooms: 3,
    area: "1,850 sq.ft",
  },
  {
    id: "p2",
    title: "Serenity Villas",
    location: "Scheme 54, Indore",
    category: "Residential",
    price: "\u20b93.20",
    priceUnit: "Cr",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    badge: "New Launch",
    description:
      "Independently designed villas with private pools, double-height living rooms, and curated landscape in Scheme 54.",
    bedrooms: 4,
    area: "3,400 sq.ft",
  },
  {
    id: "p3",
    title: "Lakeview Apartments",
    location: "Old Palasia, Indore",
    category: "Residential",
    price: "\u20b91.20",
    priceUnit: "Cr",
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    description:
      "Modern 2BHK residences with uninterrupted views of Sirpur Lake, premium fittings and thoughtful spatial design.",
    bedrooms: 2,
    area: "1,250 sq.ft",
  },
  {
    id: "p4",
    title: "Business Square",
    location: "AB Road, Indore",
    category: "Commercial",
    price: "\u20b995",
    priceUnit: "L",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    badge: "Prime Location",
    description:
      "Grade-A commercial offices on Indore's most prestigious boulevard, with 24/7 security and valet parking.",
    area: "820 sq.ft",
  },
  {
    id: "p5",
    title: "Meridian Towers",
    location: "Sapna Sangeeta, Indore",
    category: "Commercial",
    price: "\u20b91.45",
    priceUnit: "Cr",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description:
      "Modern commercial spaces in Meridian Towers with LEED-certified infrastructure and panoramic views.",
    area: "1,600 sq.ft",
  },
  {
    id: "p6",
    title: "Palasia High Street",
    location: "Palasia, Indore",
    category: "Retail",
    price: "\u20b91.10",
    priceUnit: "Cr",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    badge: "High Footfall",
    description:
      "Premium retail frontage on Palasia's iconic high street with double-height ceilings and exceptional visibility.",
    area: "650 sq.ft",
  },
  {
    id: "p7",
    title: "MR-10 Growth Corridor",
    location: "MR-10, Indore",
    category: "Investment",
    price: "\u20b945",
    priceUnit: "L",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    badge: "High ROI",
    description:
      "Strategically located plots in the rapidly developing MR-10 growth corridor with 3-year appreciation potential.",
    area: "2,200 sq.ft",
  },
  {
    id: "p8",
    title: "Bicholi Township",
    location: "Bicholi, Indore",
    category: "Investment",
    price: "\u20b928",
    priceUnit: "L",
    imageUrl:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
    description:
      "Integrated township plots in the emerging Bicholi zone — ideal for long-term capital appreciation.",
    area: "1,500 sq.ft",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ankit Sharma",
    text: "Abode Properties transformed what I thought would be a stressful process into a genuinely enjoyable experience. Their team's professionalism and depth of market knowledge is unmatched in Indore.",
    rating: 5,
    location: "Vijay Nagar, Indore",
  },
  {
    id: "t2",
    name: "Priya Malhotra",
    text: "The transparency throughout our property purchase was remarkable. Every step was clearly explained, and they ensured we got the best value for our investment. Truly a new-age real estate advisory.",
    rating: 5,
    location: "Scheme 54, Indore",
  },
  {
    id: "t3",
    name: "Rajesh Agarwal",
    text: "I've worked with several brokers before, but Abode operates on a completely different level. They curated options that actually matched our lifestyle — not just our budget.",
    rating: 5,
    location: "Palasia, Indore",
  },
  {
    id: "t4",
    name: "Swati Joshi",
    text: "Our commercial space search ended with a perfect outcome thanks to Abode's market intelligence. They identified locations we hadn't even considered, and the deal closed smoothly.",
    rating: 5,
    location: "AB Road, Indore",
  },
  {
    id: "t5",
    name: "Vikram Singh",
    text: "Five stars isn't enough. From the first consultation to signing the papers, Abode was with us every step of the way. This is what modern real estate should feel like.",
    rating: 5,
    location: "MR-10, Indore",
  },
];

export const lifestyleImages: LifestyleImage[] = [
  {
    id: "l1",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    alt: "Elegant living room interior",
    caption: "Where design meets living",
  },
  {
    id: "l2",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Modern kitchen design",
    caption: "Thoughtfully designed spaces",
  },
  {
    id: "l3",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    alt: "Contemporary villa exterior",
    caption: "Architecture as identity",
  },
  {
    id: "l4",
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Luxury bedroom suite",
    caption: "Rest in refinement",
  },
  {
    id: "l5",
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80",
    alt: "City skyline at dusk",
    caption: "The city, elevated",
  },
  {
    id: "l6",
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    alt: "Contemporary cafe interior",
    caption: "Life beyond the property",
  },
  {
    id: "l7",
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    alt: "Minimalist bathroom design",
    caption: "Details that define luxury",
  },
  {
    id: "l8",
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    alt: "Modern architectural exterior",
    caption: "Spaces worth coming home to",
  },
];
