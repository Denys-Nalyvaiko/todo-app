const API = Object.freeze({
  // BASE_URL: "https://todo-api-vzn4.onrender.com",
  BASE_URL: "http://localhost:8000",
  ENDPOINTS: Object.freeze({
    AUTH: Object.freeze({
      REGISTER: "/auth/register",
      LOGIN: "/auth/login",
    }),
    USERS: Object.freeze({
      CURRENT: "/current",
    }),
    TASKS: "/tasks",
  }),
});

export default API;
