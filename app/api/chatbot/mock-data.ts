interface MockResponse {
  [key: string]: string;
}

// Mock responses for common queries during development and testing
export const mockResponses: MockResponse = {
  // Disaster-related
  flood: "During a flood, you should: 1) Move to higher ground immediately, 2) Avoid walking or driving through flood waters, 3) Follow evacuation orders, 4) Turn off utilities if instructed, and 5) Stay informed via emergency broadcasts. Remember that just 6 inches of moving water can knock you down.",

  fire: "To report a fire in your neighborhood: 1) Call emergency services immediately (usually 911), 2) Provide the exact location and any details about people who might be trapped, 3) Don't attempt to fight a large fire yourself, 4) Evacuate and maintain a safe distance, 5) Alert neighbors if it's safe to do so.",

  earthquake: "During an earthquake: 1) Drop, cover, and hold on, 2) If indoors, stay away from windows and take cover under sturdy furniture, 3) If outdoors, move to an open area away from buildings and power lines, 4) After shaking stops, check for injuries and damage, 5) Be prepared for aftershocks.",

  // Crime-related
  theft: "You can report a theft anonymously through our platform by: 1) Using the 'Submit Report' button on our homepage, 2) Providing all relevant details about the incident, 3) Choosing the 'anonymous' option when prompted, 4) Submitting any evidence you might have. Your identity will be fully protected throughout the process.",

  report: "When reporting a crime, you should provide: 1) The location and time of the incident, 2) A detailed description of what happened, 3) Description of any suspects involved, 4) Information about any witnesses, 5) Details of any stolen items or damage, and 6) Any evidence you might have like photos or videos.",

  identity: "Yes, your identity is 100% protected when you report a crime through our platform. We use military-grade encryption and don't collect any personally identifiable information unless you choose to provide it. You can report completely anonymously or create a secure anonymous account to follow up on your report.",

  track: "You can track your crime report by using the unique tracking number you received when submitting your report. Visit the 'Track Report' section on our website and enter this number to see updates on your case. If you enabled secure messaging, you'll also receive updates from law enforcement while maintaining your anonymity.",

  // Default responses
  default_on_topic: "I understand you're asking about a safety or crime-related topic. To provide the most accurate information, could you please provide more specific details about your question?",

  default_off_topic: "I'm sorry, but I can only provide information related to disasters, crimes, and safety. Please ask a relevant question about these topics.",

  inappropriate: "I cannot provide information on that topic. I'm here to help with disaster and crime-related questions only."
};

// Function to get a mock response based on the user's input
export function getMockResponse(input: string): string {
  const lowerInput = input.toLowerCase();

  // Check for inappropriate content
  if (
    lowerInput.includes("sex") ||
    lowerInput.includes("porn") ||
    lowerInput.includes("hack") ||
    lowerInput.includes("president") ||
    lowerInput.includes("minister") ||
    lowerInput.includes("illegal")
  ) {
    return mockResponses.inappropriate;
  }

  // Check for disaster-related queries
  if (
    lowerInput.includes("flood") ||
    lowerInput.includes("water") ||
    lowerInput.includes("drowning")
  ) {
    return mockResponses.flood;
  }

  if (
    lowerInput.includes("fire") ||
    lowerInput.includes("burning") ||
    lowerInput.includes("smoke")
  ) {
    return mockResponses.fire;
  }

  if (
    lowerInput.includes("earthquake") ||
    lowerInput.includes("tremor") ||
    lowerInput.includes("quake")
  ) {
    return mockResponses.earthquake;
  }

  // Check for crime-related queries
  if (
    lowerInput.includes("theft") ||
    lowerInput.includes("steal") ||
    lowerInput.includes("robber")
  ) {
    return mockResponses.theft;
  }

  if (
    lowerInput.includes("report crime") ||
    lowerInput.includes("reporting") ||
    lowerInput.includes("information") && lowerInput.includes("report")
  ) {
    return mockResponses.report;
  }

  if (
    lowerInput.includes("identity") ||
    lowerInput.includes("anonymous") ||
    lowerInput.includes("privacy")
  ) {
    return mockResponses.identity;
  }

  if (
    lowerInput.includes("track") ||
    lowerInput.includes("follow") && lowerInput.includes("report") ||
    lowerInput.includes("status")
  ) {
    return mockResponses.track;
  }

  // Check if generally on-topic
  if (
    lowerInput.includes("crime") ||
    lowerInput.includes("disaster") ||
    lowerInput.includes("emergency") ||
    lowerInput.includes("safety") ||
    lowerInput.includes("police") ||
    lowerInput.includes("help")
  ) {
    return mockResponses.default_on_topic;
  }

  // Default to off-topic response
  return mockResponses.default_off_topic;
} 