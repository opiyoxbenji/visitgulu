export { default } from 'next-auth/middleware';

// Making the dashboard unavailable when the user logs out
export const config = { matcher: ['/dashboard'] };
