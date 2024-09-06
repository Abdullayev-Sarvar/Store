import { useRoutes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home/Home'));
const Login = lazy(() => import('./login/Login'));
const Profile = lazy(() => import('./profile/Profile'));

const App = () => {
    return useRoutes([
      {
        path: '/',
        element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'>Loading...</div>}><Home /></Suspense>,
      },
      {
        path: '/login',
        element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'>Loading...</div>}><Login /></Suspense>,
      },
      {
        path: '/profile',
        element: <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'>Loading...</div>}><Profile /></Suspense>,
      }
    ])
};

export default App;
