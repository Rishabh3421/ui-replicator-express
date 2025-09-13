// chatData.js
export const chatData = [
  {
    id: 1,
    type: "bot",
    content: "Hello! Welcome to Easy World Educational Consultant 👋 How can I help you today?",
    options: [
      "About Easy World",
      "Our Services",
      "Countries We Serve",
      "Book Free Consultation",
      "Talk on WhatsApp",
      "Email us"
    ]
  },
  {
    id: "about",
    type: "bot",
    content: `
👋 Welcome to Easy World Educational Consultant! 

We guide students, professionals, and families toward global opportunities:
- Study Abroad
- Work Abroad
- Immigration & PR
- Family Visas

Do you want to know about our Managing Director or our mission?`,
    options: ["Managing Director", "Our Mission", "Back to main menu"]
  },
  {
    id: "services",
    type: "bot",
    content: `
🎓 Our Services at Easy World:

✅ Student Visas  
✅ Work Visas  
✅ Tourist & Visitor Visas  
✅ PR & Immigration  
✅ Business & Investor Visas  
✅ Family & Dependent Visas`,
    options: ["Explore Countries", "Back to main menu"]
  },
  {
    id: "countries",
    type: "bot",
    content: "🌍 Select a country to see opportunities:",
    countries: [
      { slug: "canada", name: "Canada", flag_emoji: "🇨🇦" },
      { slug: "australia", name: "Australia", flag_emoji: "🇦🇺" },
      { slug: "usa", name: "USA", flag_emoji: "🇺🇸" },
      { slug: "uk", name: "UK", flag_emoji: "🇬🇧" },
      { slug: "germany", name: "Germany", flag_emoji: "🇩🇪" },
      { slug: "new-zealand", name: "New Zealand", flag_emoji: "🇳🇿" },
      { slug: "japan", name: "Japan", flag_emoji: "🇯🇵" },
      { slug: "singapore", name: "Singapore", flag_emoji: "🇸🇬" }
    ]
  },
  {
    id: "book",
    type: "bot",
    content: "You can book a free consultation with our experts. Please fill your details in the enquiry form.",
    options: ["Fill Enquiry Form", "Back to main menu"]
  }
];
