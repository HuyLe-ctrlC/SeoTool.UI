const API_BASE_URL_DEVELOPMENT = "https://localhost:44322";

// !post-position trả về vị trí của ứng với từ khóa
// !get-title trả về tổng dàn bài
// !get API and get chatHub
const ENDPOINTS = {
  GET_POST_POSITION: "api/seo/post-position",
  GET_TITLE: "api/seo/get-title",
  POST_CHECK_INDEX: "api/seo/check-index",
  CHAT_HUB: "chatHub",
  POST_TOKEN: "api/Authenticate/token",
  GET_CONTENT: "api/seo/get-content",
};

const development = {
  API_URL_GET_POST_POSITION: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_POST_POSITION}`,
  API_URL_GET_TITLE: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_TITLE}`,
  API_URL_CHAT_HUB: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CHAT_HUB}`,
  API_URL_CHECK_INDEX: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.POST_CHECK_INDEX}`,
  API_URL_POST_TOKEN: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.POST_TOKEN}`,
  API_URL_GET_CONTENT: `${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_CONTENT}`,
};

const Constants = development;

export default Constants;