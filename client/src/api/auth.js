// Re-export from API.js for backwards compatibility
export { API, auth } from './API';
export const { login, register, logout, isAuthenticated } = auth;
