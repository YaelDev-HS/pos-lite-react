import LoginPageApp from '@/auth/pages/LoginPageApp';
import { createBrowserRouter } from 'react-router';
import HomePageApp from '@/pages/HomePageApp';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePageApp />
    },
    {
        path: '/login',
        element: <LoginPageApp />
    },
]);
