import {
  RiYoutubeFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";

export const navLinks = [
  { path: "home", name: "home", offset: -50 },
  { path: "about", name: "about", offset: -20 },
  { path: "workouts", name: "workouts", offset: -100 },
  { path: "pricing", name: "pricing", offset: -100 },
  { path: "community", name: "community", offset: -100 },
  { path: "faq", name: "faq", offset: 0 },
  { path: "contact", name: "Contact", offset: 100 },
];

export const programList = [
  {
    image: "/images/workouts/resistance.png",
    name: "Resistance",
  },
  {
    image: "/images/workouts/boxing.png",
    name: "Boxing",
  },
  {
    image: "/images/workouts/body-pump.png",
    name: "Body Pump",
  },
  {
    image: "/images/workouts/yoga.png",
    name: "Yoga",
  },
  {
    image: "/images/workouts/full-body.png",
    name: "Full Body",
  },
  {
    image: "/images/workouts/fitness.png",
    name: "Fitness",
  },
  {
    image: "/images/workouts/battle-rope.png",
    name: "Battle Rope",
  },
];

export const pricingData = [
  {
    name: "Basic",
    price: 20,
    list: [
      { name: "unlimited gym access" },
      { name: "1 training programs" },
      { name: "free fitness consultation" },
    ],
    delay: 600,
  },
  {
    name: "Premium",
    price: 35,
    list: [
      { name: "unlimited gym access" },
      { name: "5 training programs" },
      { name: "free fitness consultation" },
      { name: "personal trainer" },
    ],
    delay: 800,
  },
  {
    name: "Elite",
    price: 49,
    list: [
      { name: "unlimited gym access" },
      { name: "all training programs" },
      { name: "free fitness consultation" },
      { name: "personal trainer" },
      { name: "50% off drinks" },
    ],
    delay: 1000,
  },
];

export const testimonialList = [
  {
    id: "1",
    image: "/images/community/img1.png",
    name: "Mark A.",
    message:
      "“An exceptional place with an inspiring atmosphere, top-tier facilities, and a supportive community. Everything you need to succeed!”",
  },
  {
    id: "2",
    image: "/images/community/img2.png",
    name: "Lauren K.",
    message:
      "“Gymme has transformed my life—not just physically, but mentally. I feel stronger, more confident, and ready to tackle anything. It’s more than a gym; it’s a family.”",
  },
  {
    id: "3",
    image: "/images/community/img3.png",
    name: "John D.",
    message:
      "“The workouts here are challenging and rewarding. The trainers are incredibly knowledgeable and always push you to be your best. Absolutely love it!”",
  },
  {
    id: "4",
    image: "/images/community/img4.png",
    name: "Anne R.",
    message:
      "“Gymme is an amazing place with a positive vibe and expert trainers who genuinely care. I feel motivated every time I walk through the doors!”",
  },
];

export const faqList = [
  {
    id: "1",
    question: "How can I book a workout class?",
    answer:
      "You can book a workout class through our mobile app or website. Simply log in, choose your preferred class, and reserve your spot!",
  },
  {
    id: "2",
    question: "Can I pay by cash for my membership?",
    answer:
      "We currently accept payments via credit/debit cards and online transfers. Unfortunately, we do not accept cash payments for memberships.",
  },
  {
    id: "3",
    question: "What age do I need to be to join?",
    answer:
      "You must be at least 16 years old to join our gym. Members under 18 require parental or guardian consent.",
  },
  {
    id: "4",
    question: "Are there any lockers?",
    answer:
      "Yes, we provide secure lockers for all members to store their belongings while they work out. Please bring your own lock or rent one at the front desk.",
  },
  {
    id: "5",
    question: "How do I cancel my membership?",
    answer:
      "You can cancel your membership by visiting our front desk or contacting our customer support team via email or phone. Please check your membership terms for cancellation policies.",
  },
  {
    id: "6",
    question: "Is there water available at the gym?",
    answer:
      "Yes, we have water fountains available throughout the facility. You can also purchase bottled water at the reception.",
  },
];

export const socialList = [
  {
    label: "Facebook",
    icon: RiFacebookBoxFill,
    link: "https://www.facebook.com",
  },
  {
    label: "Instagram",
    icon: RiInstagramFill,
    link: "https://www.instagram.com",
  },
  {
    label: "TwitterX",
    icon: RiTwitterXFill,
    link: "https://www.x.com",
  },
  {
    label: "Youtube",
    icon: RiYoutubeFill,
    link: "https://www.youtube.com",
  },
];
