import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ---------- Suggest Tags & Category ----------
export const suggestTagsAndCategory = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    console.log("Processing AI suggestion for URL:", url);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Enhanced prompt for better results
    const prompt = `
      Analyze the following URL and suggest:
      1. 3–5 relevant tags that describe the content/topic
      2. One best category from: Technology, Business, Education, Entertainment, News, Social, Health, Sports, Finance, Travel, Food, Science, Art, or Other
      
      URL: ${url}
      
      Return ONLY a valid JSON object in this exact format (no additional text):
      {
        "tags": ["tag1", "tag2", "tag3"],
        "category": "category_name"
      }
    `;

    const result = await model.generateContent(prompt);

    // Extract JSON from AI response
    let text = result.response.text().trim();
    console.log("Raw AI response:", text);
    
    let jsonResponse;
    try {
      // Remove any markdown code block formatting
      text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      jsonResponse = JSON.parse(text);
    } catch (parseError) {
      console.log("JSON parse failed, trying to extract JSON:", parseError.message);
      // If AI adds extra text, try to clean it
      const match = text.match(/\{[\s\S]*\}/);
      if (match) {
        try {
          jsonResponse = JSON.parse(match[0]);
        } catch (secondParseError) {
          console.error("Second JSON parse failed:", secondParseError.message);
          jsonResponse = { tags: [], category: "Other" };
        }
      } else {
        jsonResponse = { tags: [], category: "Other" };
      }
    }

    // Validate response structure
    if (!jsonResponse.tags || !Array.isArray(jsonResponse.tags)) {
      jsonResponse.tags = [];
    }
    if (!jsonResponse.category || typeof jsonResponse.category !== 'string') {
      jsonResponse.category = "Other";
    }

    console.log("Final response:", jsonResponse);
    res.json(jsonResponse);
  } catch (error) {
    console.error("AI Suggest Error:", error.message);
    console.error("Full error:", error);
    res.status(500).json({ error: "Failed to suggest tags & category", details: error.message });
  }
};

// ---------- Summarize URL ----------
export const summarizeUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    console.log("Processing AI summary for URL:", url);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Read the page at this URL and provide a concise summary in 3–4 sentences. 
    Highlight only the essential points, purpose, and key takeaways. 
    Use clear, simple language without filler or promotional text. 
    Ensure the summary is easy to understand and accurately reflects the content. 
    URL: ${url}`;

    const result = await model.generateContent(prompt);
    const summary = result.response.text().trim();

    console.log("AI summary generated:", summary.substring(0, 100) + "...");

    res.json({ summary });
  } catch (error) {
    console.error("AI Summary Error:", error.message);
    console.error("Full error:", error);
    res.status(500).json({ error: "Failed to summarize URL", details: error.message });
  }
};
