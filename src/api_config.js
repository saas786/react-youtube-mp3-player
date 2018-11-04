const API_CONFIG = {
  yt_api_key: 'AIzaSyD7GI67U8jOax0uBV301aF9XnJIA9XJfKE',
  yt_search_endpoint: _ => `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${_.searchQuery}&key=${API_CONFIG.yt_api_key}`,
  yt_video_info_endpoint: _ => `https://www.googleapis.com/youtube/v3/videos?id=${_.videoId}&part=contentDetails&key=${API_CONFIG.yt_api_key}`
};

export default API_CONFIG;