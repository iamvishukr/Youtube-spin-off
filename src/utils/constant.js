export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API =
  process.env.REACT_APP_YOUTUBE_VIDEOS_API + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

  export const YOUTUBE_SEARCH_RESULTS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=";