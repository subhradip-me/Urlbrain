import { aiAPI } from "../api/API";

export const aiSuggest = async (url) => {
  try {
    console.log("Making AI suggest request for URL:", url);
    const data = await aiAPI.suggest(url);
    console.log("AI suggest response:", data);
    return data; // { url, tags:[], category:"" }
  } catch (error) {
    console.error("AI Suggest Error Details:", {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      url: url
    });
    throw error;
  }
};

export const aiSummarize = async (url) => {
  try {
    console.log("Making AI summarize request for URL:", url);
    const data = await aiAPI.summarize(url);
    console.log("AI summarize response:", data);
    return data; // { url, summary:"..." }
  } catch (error) {
    console.error("AI Summarize Error Details:", {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      url: url
    });
    throw error;
  }
};