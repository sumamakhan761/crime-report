import { ReactNode } from 'react';

interface BlogSection {
  title?: string;
  paragraphs: string[];
  list?: string[];
  image?: string;
  quote?: string;
  quoteAuthor?: string;
}

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
  icon: ReactNode;
  content: BlogSection[];
}

// Icons for each blog post
const TheftIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const FireIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
  </svg>
);

const MedicalIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
  </svg>
);

const DisasterIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ViolenceIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const getIcon = (id: string): ReactNode => {
  switch (id) {
    case "theft":
      return <TheftIcon />;
    case "fire":
      return <FireIcon />;
    case "medical-emergency":
      return <MedicalIcon />;
    case "natural-disaster":
      return <DisasterIcon />;
    case "violence":
      return <ViolenceIcon />;
    default:
      return <TheftIcon />;
  }
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "theft",
    title: "Preventing Theft and Protecting Your Property",
    category: "Personal Safety",
    excerpt: "Learn effective strategies to safeguard your valuables and prevent theft in various environments.",
    coverImage: "/theft1.jpg",
    icon: getIcon("theft"),
    content: [
      {
        title: "Understanding Different Types of Theft",
        paragraphs: [
          "Theft comes in many forms, from petty theft and pickpocketing to burglary and robbery. Understanding the different types of theft can help you better protect yourself and your property.",
          "Theft is often a crime of opportunity. Thieves look for easy targets - unlocked doors, visible valuables, or distracted individuals. By being aware of your surroundings and taking simple precautions, you can significantly reduce your risk of becoming a victim."
        ]
      },
      {
        title: "Home Security Measures",
        paragraphs: [
          "Your home should be your safe haven. Implementing proper security measures can deter potential thieves and keep your family and possessions secure."
        ],
        list: [
          "Install quality locks on all doors and windows and use them consistently",
          "Consider a home security system with visible cameras and alarms",
          "Use timer switches on lights when away from home to create the appearance of occupancy",
          "Keep valuable items out of sight from windows and doorways",
          "Maintain landscaping to eliminate hiding spots near entry points"
        ],
          image: "/theft2.jpg"
      },
      {
        title: "Personal Safety in Public",
        paragraphs: [
          "Maintaining awareness of your surroundings is key to preventing theft when you're out in public spaces. Thieves often target those who appear distracted or vulnerable."
        ],
        list: [
          "Keep valuables concealed and secure; avoid displaying expensive items",
          "Be alert in crowded areas where pickpockets commonly operate",
          "Carry bags and purses securely, preferably with cross-body straps",
          "Don't leave belongings unattended, even for a brief moment",
          "Be cautious when using ATMs or handling cash in public"
        ]
      },
      {
        title: "Digital Security",
        paragraphs: [
          "In today's connected world, theft isn't limited to physical items. Protecting your digital assets is equally important.",
          "Identity theft can have far-reaching consequences, affecting your finances, reputation, and personal security. Taking proactive steps to secure your digital life is essential in the modern world."
        ],
        list: [
          "Use strong, unique passwords for different accounts and consider a password manager",
          "Enable two-factor authentication whenever possible",
          "Be cautious about sharing personal information online",
          "Regularly monitor financial statements for unauthorized transactions",
          "Use secure, encrypted connections when accessing sensitive information"
        ],
        quote: "The best way to prevent theft is to remove the opportunity. Think like a thief to identify vulnerabilities, then take action to address them.",
        quoteAuthor: "Security Expert"
      },

      {
        title: "What to Do If You Become a Victim",
        paragraphs: [
          "Despite our best efforts, theft can still occur. Knowing how to respond effectively can help minimize the damage and increase the chances of recovering your property.",
          "Report the theft to local authorities immediately. Provide as much detail as possible, including descriptions of stolen items, serial numbers, and any information about potential suspects. File an official police report, which may be necessary for insurance claims.",
          "Contact relevant institutions to report stolen items like credit cards, phones, or identification documents. Change passwords for any accounts that may have been compromised. Document everything for insurance purposes and follow up regularly on the status of your case."
        ]
      }
    ]
  },
  {
    id: "fire",
    title: "Fire Safety: Prevention and Emergency Response",
    category: "Emergency Preparedness",
    excerpt: "Essential knowledge for preventing fires and responding effectively to fire emergencies.",
    coverImage: "fire1.jpg",
    icon: getIcon("fire"),
    content: [
      {
        title: "Understanding Fire Risks",
        paragraphs: [
          "Fires can start and spread with alarming speed, causing devastating damage in minutes. Understanding common causes and risk factors is the first step in prevention.",
          "Most residential fires are caused by cooking equipment, heating devices, electrical malfunctions, smoking materials, and candles. Being aware of these common sources can help you take specific precautions to minimize risks in your home or workplace."
        ]
      },
      {
        title: "Fire Prevention Strategies",
        paragraphs: [
          "Many fires are entirely preventable with proper awareness and precautions. Implementing these strategies can significantly reduce fire risks."
        ],
        list: [
          "Install smoke alarms on every level of your home and test them monthly",
          "Keep flammable items away from heat sources like stoves, heaters, and candles",
          "Never leave cooking unattended, especially when using high heat or oil",
          "Have heating systems, chimneys, and electrical systems inspected regularly",
          "Practice proper storage of flammable liquids and materials",
          "Avoid overloading electrical outlets and extension cords"
        ],
        image: "fire2.jpg"
      },
      {
        title: "Creating a Fire Escape Plan",
        paragraphs: [
          "When a fire occurs, every second counts. Having a well-practiced escape plan can be the difference between life and death."
        ],
        list: [
          "Identify two ways out of every room if possible",
          "Establish a meeting point outside, a safe distance from your home",
          "Practice your escape plan regularly, including in low-light conditions",
          "Ensure everyone knows how to call emergency services",
          "Consider special arrangements for children, elderly, or disabled family members"
        ]
      },
      {
        title: "Using Fire Extinguishers",
        paragraphs: [
          "Fire extinguishers can be effective for containing small fires before they spread. Understanding how to use them properly is essential.",
          "Remember the PASS technique: Pull the pin, Aim at the base of the fire, Squeeze the handle, and Sweep from side to side. Only attempt to fight small, contained fires and always ensure you have a clear escape route."
        ],
        list: [
          "Class A: For ordinary combustibles like wood, paper, and cloth",
          "Class B: For flammable liquids like grease, gasoline, and oil",
          "Class C: For electrical fires",
          "Class D: For flammable metals",
          "Class K: For kitchen fires involving cooking oils and fats"
        ],
        quote: "In a fire emergency, remember: Get out, stay out, and call for help. No possession is worth risking your life.",
        quoteAuthor: "Fire Safety Official"
      },
      {
        title: "What to Do After a Fire",
        paragraphs: [
          "The aftermath of a fire can be overwhelming. Knowing what steps to take can help you recover and rebuild safely.",
          "Do not re-enter your home until authorities confirm it's safe. Document damage for insurance purposes and contact your insurance company promptly. Seek temporary housing if needed and connect with local disaster relief services for assistance with immediate needs."
        ]
      }
    ]
  },
  {
    id: "medical-emergency",
    title: "Responding to Medical Emergencies",
    category: "First Aid",
    excerpt: "Critical knowledge for responding effectively to common medical emergencies before professional help arrives.",
    coverImage: "medical1.avif",
    icon: getIcon("medical-emergency"),
    content: [
      {
        title: "Recognizing a Medical Emergency",
        paragraphs: [
          "Medical emergencies can happen suddenly and require immediate action. Knowing how to recognize them is the first critical step.",
          "Key signs of a medical emergency include sudden severe pain, difficulty breathing, severe bleeding, changes in mental status, signs of stroke (face drooping, arm weakness, speech difficulties), signs of heart attack (chest pain, shortness of breath, discomfort in other areas of the upper body), and severe allergic reactions."
        ]
      },
      {
        title: "Basic Emergency Response Steps",
        paragraphs: [
          "When faced with a medical emergency, following these fundamental steps can help save lives."
        ],
        list: [
          "Check the scene for safety before approaching",
          "Call emergency services (911) immediately for serious situations",
          "Check for responsiveness and breathing",
          "For an unresponsive person, begin CPR if you're trained",
          "Control severe bleeding by applying direct pressure",
          "Keep the person still if injury to the head or spine is suspected",
          "Provide reassurance and comfort while waiting for help"
        ],
        image: "medical2.avif"
      },
      {
        title: "CPR Basics",
        paragraphs: [
          "Cardiopulmonary Resuscitation (CPR) can keep oxygenated blood flowing to the brain and other vital organs until emergency medical help arrives.",
          "While formal training is recommended, basic CPR involves chest compressions at a rate of 100-120 per minute, pressing at least 2 inches deep on the center of the chest. For adults, rescue breaths may be given (if trained) after 30 compressions."
        ],
        quote: "Hands-only CPR (compression without rescue breaths) can be effective for untrained bystanders and is better than no CPR at all.",
        quoteAuthor: "American Heart Association"
      },
      {
        title: "Responding to Specific Emergencies",
        paragraphs: [
          "Different medical emergencies require specific responses. Here are guidelines for some common scenarios:"
        ],
        list: [
          "Choking: Perform abdominal thrusts (Heimlich maneuver) for a conscious person who cannot breathe, cough, or speak",
          "Severe Bleeding: Apply direct pressure with a clean cloth or bandage; if blood soaks through, add another layer without removing the first",
          "Heart Attack: Help the person to a comfortable position, loosen tight clothing, and provide prescribed medications if available",
          "Stroke: Note the time symptoms began (important for treatment) and use the FAST method (Face drooping, Arm weakness, Speech difficulty, Time to call 911)",
          "Seizures: Clear the area of hazards, cushion the head, loosen tight clothing, and time the seizure"
        ]
      },
      {
        title: "Creating a Personal First Aid Kit",
        paragraphs: [
          "Being prepared with basic supplies can make a significant difference in an emergency situation."
        ],
        list: [
          "Adhesive bandages in various sizes",
          "Sterile gauze pads and adhesive tape",
          "Antiseptic wipes and antibiotic ointment",
          "Scissors, tweezers, and disposable gloves",
          "Instant cold packs and emergency blanket",
          "CPR face shield or mask",
          "Personal medications and emergency contact information"
        ]
      },
      {
        title: "Getting Proper Training",
        paragraphs: [
          "While this guide provides basic information, proper training in first aid and CPR is invaluable. Consider taking courses from organizations like the Red Cross or American Heart Association. Regular refresher courses are recommended to keep skills current.",
          "Remember that your primary role in an emergency is to provide initial care until professional help arrives. Your actions in those critical first minutes can make a significant difference in outcomes."
        ]
      }
    ]
  },
  {
    id: "natural-disaster",
    title: "Natural Disaster Preparedness and Response",
    category: "Emergency Preparedness",
    excerpt: "Comprehensive guide to preparing for and responding to various natural disasters safely.",
    coverImage: "disaster1.jpg",
    icon: getIcon("natural-disaster"),
    content: [
      {
        title: "Understanding Natural Disaster Risks",
        paragraphs: [
          "Natural disasters can strike with little warning, causing significant damage and disruption. Understanding the specific risks in your region is essential for proper preparation.",
          "Different geographical areas face different threats - from hurricanes and floods in coastal regions to wildfires in dry areas, earthquakes along fault lines, and tornadoes in plains states. Research the most likely disasters for your location and prepare accordingly."
        ]
      },
      {
        title: "Creating an Emergency Plan",
        paragraphs: [
          "A comprehensive emergency plan is crucial for keeping your family safe during a natural disaster."
        ],
        list: [
          "Identify safe locations in your home for different types of disasters",
          "Determine evacuation routes and meeting places outside your neighborhood",
          "Establish an out-of-area contact person for family members to check in with",
          "Plan for pets and those with special needs",
          "Practice your plan regularly with all household members",
          "Keep important documents in a waterproof, portable container"
        ],
        image: "disaster2.avif"
      },
      {
        title: "Building an Emergency Kit",
        paragraphs: [
          "Your emergency kit should sustain your household for at least 72 hours without utilities or outside assistance."
        ],
        list: [
          "Water (one gallon per person per day)",
          "Non-perishable food and manual can opener",
          "Battery-powered or hand-crank radio and extra batteries",
          "Flashlight, first aid kit, and whistle",
          "Dust mask, plastic sheeting, and duct tape for shelter-in-place situations",
          "Moist towelettes, garbage bags, and plastic ties for sanitation",
          "Cell phone with chargers and backup battery",
          "Cash and change, emergency blankets, and change of clothing"
        ]
      },
      {
        title: "Specific Disaster Responses",
        paragraphs: [
          "Different disasters require different responses. Here are basic guidelines for common natural disasters:"
        ]
      },
      {
        title: "Earthquakes",
        paragraphs: [
          "During an earthquake, drop to the ground, take cover under sturdy furniture, and hold on until the shaking stops. Stay away from windows, exterior walls, and anything that could fall. If outdoors, move to an open area away from buildings, trees, and power lines."
        ]
      },
      {
        title: "Hurricanes and Floods",
        paragraphs: [
          "When a hurricane or flood warning is issued, secure your home by boarding windows and moving valuable items to higher levels. Follow evacuation orders immediately if given. Never walk, swim, or drive through flood waters, as just six inches of moving water can knock you down and one foot of water can sweep a vehicle away."
        ]
      },
      {
        title: "Tornadoes",
        paragraphs: [
          "During a tornado, seek shelter in a basement or an interior room on the lowest floor with no windows. If outdoors with no shelter available, lie flat in a nearby ditch or depression and cover your head with your hands. Never try to outrun a tornado in a vehicle."
        ]
      },
      {
        title: "Wildfires",
        paragraphs: [
          "If advised to evacuate due to a wildfire, do so immediately. If trapped, call 911 and give your location. Close all doors and windows but leave them unlocked for firefighter access. Fill sinks and tubs with water and place wet towels under doors to keep smoke out."
        ],
        quote: "Preparation through education is less costly than learning through tragedy.",
        quoteAuthor: "Max Mayfield, Former Director of the National Hurricane Center"
      },
      {
        title: "After a Disaster",
        paragraphs: [
          "Once the immediate danger has passed, focus on safety and recovery.",
          "Return home only when authorities say it's safe. Inspect your home for damage and take pictures for insurance purposes. Be aware of new hazards created by the disaster, such as broken glass, damaged gas lines, or downed power lines. Check on neighbors, especially elderly or disabled individuals who might need assistance."
        ]
      }
    ]
  },
  {
    id: "violence",
    title: "Violence Awareness and Personal Safety",
    category: "Personal Safety",
    excerpt: "Strategies for recognizing, avoiding, and responding to potential violence to protect yourself and others.",
    coverImage: "violence1.avif",
    icon: getIcon("violence"),
    content: [
      {
        title: "Understanding Violence Risk Factors",
        paragraphs: [
          "Violence can occur in many contexts - from public spaces to domestic settings. Understanding risk factors and warning signs is the first step in prevention.",
          "While violence can affect anyone, certain situations may increase risk, such as isolated locations, unfamiliar surroundings, late night hours, or environments where alcohol and substance use are prevalent. Being aware of these factors can help you make safer choices."
        ]
      },
      {
        title: "Recognizing Warning Signs",
        paragraphs: [
          "Violence rarely occurs without warning. Learning to recognize potential warning signs can help you avoid dangerous situations."
        ],
        list: [
          "Escalating anger or agitation",
          "Threatening words or gestures",
          "Invasion of personal space",
          "Visible weapons or implied threats",
          "Extreme jealousy or controlling behavior in relationships",
          "Substance impairment affecting behavior",
          "History of violent behavior"
        ],
        image: "violence2.jpg"
      },
      {
        title: "Prevention Strategies",
        paragraphs: [
          "Taking proactive steps to reduce your vulnerability can significantly decrease your risk of becoming a victim of violence."
        ],
        list: [
          "Stay alert and aware of your surroundings at all times",
          "Trust your instincts - if a situation feels unsafe, leave immediately",
          "Avoid isolated areas, especially after dark",
          "Travel with companions when possible",
          "Keep friends or family informed about your whereabouts",
          "Limit sharing of personal information with strangers",
          "Have your keys ready before approaching your home or vehicle",
          "Consider taking a self-defense course"
        ]
      },
      {
        title: "De-escalation Techniques",
        paragraphs: [
          "If confronted with a potentially violent situation, de-escalation techniques may help diffuse tension before violence occurs."
        ],
        list: [
          "Maintain a calm, non-threatening demeanor",
          "Speak in a steady, even tone without raising your voice",
          "Use non-threatening body language and maintain distance",
          "Acknowledge the person's feelings without judgment",
          "Avoid arguing or making accusations",
          "Look for ways to give the person a face-saving way out",
          "Focus on specific issues rather than personalities"
        ]
      },
      {
        title: "Response Options During a Violent Encounter",
        paragraphs: [
          "If prevention fails and you find yourself in a violent situation, you have several potential response options.",
          "The Department of Homeland Security recommends a 'Run, Hide, Fight' approach for active threat situations. First priority is to evacuate if possible. If evacuation isn't possible, find a secure hiding place. As a last resort, take action against the attacker using whatever improvised weapons are available."
        ],
        quote: "The best self-defense is awareness, preparation, and trusting your instincts.",
        quoteAuthor: "Personal Safety Expert"
      },
      {
        title: "Domestic Violence Awareness",
        paragraphs: [
          "Domestic violence affects millions of people across all demographics. Recognizing the signs and knowing available resources is critical.",
          "Warning signs include controlling behavior, isolation from friends and family, extreme jealousy, intimidation, and physical aggression. If you or someone you know is experiencing domestic violence, contact the National Domestic Violence Hotline at 1-800-799-SAFE (7233) for confidential support and resources."
        ]
      },
      {
        title: "Reporting Violence",
        paragraphs: [
          "Reporting violence is essential for both immediate intervention and long-term prevention. In emergency situations, call 911 immediately. For non-emergency situations, contact local law enforcement through their non-emergency line.",
          "When safe to do so, document incidents with dates, times, locations, and descriptions. If injuries occur, seek medical attention and inform healthcare providers about the cause. Consider connecting with victim advocacy services for additional support and guidance through legal processes."
        ]
      }
    ]
  }
]; 