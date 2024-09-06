import { useRoutes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Login = lazy(() => import('./login/Login'));
const Profile = lazy(() => import('./profile/Profile'));

const App = () => {
  const token = useSelector((state) => state.token);
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
        element: token ? <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'>Loading...</div>}><Profile /></Suspense> : <Navigate to="/login"/>,
      }
    ])
};

export default App;
