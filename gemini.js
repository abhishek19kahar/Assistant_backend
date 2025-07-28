import axios from 'axios'
const geminiResponse = async (command, assistantName, userName) => {
  try {
    const apiUrl = process.env.GEMINI_API_URL

    const prompt = ` You are Virtual assistant named ${assistantName} created by ${userName}.
      You are not Google. You will not behave like a voice-enabled assistant
      
      Your task is to understand the user's natural language input and response with JSON
      object like this:
      
      {
       "type": "general" | "google_search" | "youtube_search" | "youtube_play" |
       "get_time" | "get_date" | "get_day" | "get_month" | "calculator_open" |
       "instagram_open" | "facebook_open" | "whatsapp_open" | "whatsappweb_open" | "weather_show" | "spotify_open" | "facebook_search" | "chatgpt_open" | "chatgpt_search"|
       "claude_open" | "claude_search" | "gemini_open"| "gemini_search" | "copilot_open" | "copilot_search" | "perplexity_open" | "perplexity_search" |
       "you_open" | "you_search",
       "userInput": "<original user input>" {only remove your name from userinput if exists} and agar kisi ne google ya youtube pe kuch search karne ko bola hai to
       userInput me only vo search baala text jaye,
       "response": "<a short spoken response to read out loud to the user>" 
    }
       
    Instructions:
    - "type": determine the intent of the user.
    - "userinput": original sentence the user spoke.
    - "response": A short voice-friendly reply, e.g., "Sure, playing it now", "Here's what i found", "Today is Tuesday", etc.

    Type meanings:
    - "general": if it's a factual or informational question. aur agar koi aisa question puchta hai jiska answer tumhe pata hai usko bhi general ki categoary me rakho bas short answer
    - "google_search": if user wants to search something on Google.
    - "youtube_search": if user wants to search something on YouTube.
    - "claude_search": if user wants to search something on Claude.
    - "gemini_search": if user wants to search something on Gemini.
    - "copilot_search": if user wants to search something on Copilot.
    - "perplexity_search": if user wants to search something on Perplexity.
    - "you_search": if user wants to search something on You.
    - "facebook_search": if user wants to search something on Facebook.
    - "spotify_search": if user wants to search something on Spotify.
    - "chatgpt_search": if user wants to search something on Chatgpt.
    - "youtube_play": if user wants to direct play a video or song.
    - "calculator_open": if user wants to open calculator.
    - "instagram_open": if user wants to open instagram.
    - "facebook_open": if user wants to open facebook.
    - "whatshaap_open": if user wants to open whatsapp.
    - "spotify_open": if user wants to open spotify.
    - "chatgpt_open": if user wants to open Chatgpt.
    - "claude_open": if user wants to open Claude.
    - "gemini_open": if user wants to open Gemini.
    - "copilot_open": if user wants to open Copilot.
    - "perplexity_open": if user wants to open Perplexity.
    - "you_open": if user wants to open You.
    - "whatsappweb_open": if user wants to open whatsappweb.
    - "weather_show": if user wants to know weather.
    - "get_time": if user asks for current time.
    - "get_date": if user asks for today's date.
    - "get_day": if user asks what day it is.
    - "get_month": if user asks for the current month.


    Important:
    - Use "{userName}" agar koi puche tume kisne banaya
    - Only respond with the JSON object, nothing else.

    now your userInput- ${command}
    
    `;



    const result = await axios.post(apiUrl, {
      "contents": [
        {
          "parts": [
            {
              "text": prompt
            }
          ]
        }
      ]
    })
    return result.data.candidates[0].content.parts[0].text
  } catch (error) {
    console.log(error)

  }
}

export default geminiResponse;