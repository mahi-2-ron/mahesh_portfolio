import { SOCIAL_LINKS, PROJECTS, ACHIEVEMENTS } from "../constants";

export const getAIResponse = async (userMessage: string) => {
  const apiUrl = process.env.AI_API_URL || "";
  const apiKey = process.env.AI_API_KEY || "";

  const systemInstruction = `
    You are the AI Assistant for Mahesh R Madiwalar's professional portfolio.
    Mahesh is a high-achieving E&C Engineering Student at Dr. Ambedkar Institute of Technology.

    Mahesh's Academic Excellence:
    - CGPA: 8.5 (1st Year)
    - 10th Standard: 98%
    - 12th Standard: 93%

    Core Roles & Skills:
    - Technical Co-Lead at E-Cell.
    - DSA Co-Lead at Google Developer Groups (GDG).
    - Expertise: Java, JavaScript, Python, C, Node.js, Express, React, MongoDB, Firebase.
    - Deep knowledge in DSA, OOP, and Computer Networks.

    Key Achievements:
    - ${ACHIEVEMENTS.map(a => `${a.title} at ${a.organization}`).join('; ')}

    Featured Projects:
    - ${PROJECTS.map(p => p.name + ": " + p.description).join(' | ')}

    Connectivity:
    - LinkedIn: ${SOCIAL_LINKS.linkedin}
    - GitHub: ${SOCIAL_LINKS.github}
    - Email: ${SOCIAL_LINKS.email}

    Your Behavior:
    - Be professional, technical, and slightly encouraging.
    - If users ask about "Vijnana Lab", mention it won First Prize in a hackathon.
    - If users ask about "Rakhta Setu", explain it is a real-time blood donation management platform.
    - If users ask about "NEC", mention his Rank 164 in the Basic Track of the National Entrepreneurship Challenge by E-Cell IIT Bombay.
    - Keep responses concise (under 3 sentences).
  `;

  if (!apiUrl || !apiKey) {
    return "The AI assistant is not fully configured yet. Please check back soon or connect with Mahesh via LinkedIn!";
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        systemInstruction,
        message: userMessage,
        context: {
          socialLinks: SOCIAL_LINKS,
          projects: PROJECTS,
          achievements: ACHIEVEMENTS,
        },
      }),
    });

    if (!response.ok) {
      console.error("AI API Error:", await response.text());
      return "I'm having a bit of trouble connecting right now. Please feel free to reach out to Mahesh via LinkedIn!";
    }

    const data = await response.json();
    return data.reply || data.message || data.text || "I'm Mahesh's AI assistant. How can I help you today?";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm having a bit of trouble connecting right now. Please feel free to reach out to Mahesh via LinkedIn!";
  }
};