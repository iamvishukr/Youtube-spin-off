
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API =
  process.env.REACT_APP_YOUTUBE_VIDEOS_API + GOOGLE_API_KEY;
  
  export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
  GOOGLE_API_KEY +
  "&videoId=";