export const DISCORD_URL = 'https://discord.gg/xgrxUVVCUT';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/standfest/';

const COLOR_OPACITY = 0.7;

export const COLORS_PER_FEATURE = {
  BATHROOM: `rgb(255, 0, 255, ${COLOR_OPACITY})`,
  BATHTUB: `rgb(255, 0, 255, ${COLOR_OPACITY})`,
  DOOR: `rgb(0, 255, 0, ${COLOR_OPACITY})`,
  RAIL: `rgb(128, 0, 128, ${COLOR_OPACITY})`,
  SHOWER: `rgb(192, 126, 24, ${COLOR_OPACITY})`,
  SINK: `rgb(0, 128, 0, ${COLOR_OPACITY})`,
  TOILET: `rgb(0, 255, 255, ${COLOR_OPACITY})`,
  WALL: `rgb(42, 121, 161, ${COLOR_OPACITY})`,
  WINDOW: `rgb(255, 0, 0, ${COLOR_OPACITY})`,
  SUBTOTAL: `rgb(128,128,128, ${COLOR_OPACITY})`,
  KITCHEN: `rgb(255, 255, 0, ${COLOR_OPACITY})`,
  ROOM: `rgb(250, 250, 210, ${COLOR_OPACITY})`,
};

export const ENDPOINTS = {
    UPLOAD_URL: '/request_prediction',
    RETRIEVE_RESULTS: '/retrieve_prediction',
    RETRIEVE_STATS:'/retrieve_stats',
    RETRIEVE_BACKGROUND:'/retrieve_background',
}