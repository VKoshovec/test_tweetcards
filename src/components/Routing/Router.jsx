import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Loader from '../Loader/Loader';
import { Suspense } from 'react';

const Tweets = lazy(()=> import ('../../pages/users/Userspage'));
const Home = lazy(()=> import ('../../pages/home/Home'));

export const Router = () => {

    return(
        <Suspense fallback={ <Loader/> }>
           <Routes>
              <Route path='/' element = { <Home /> } />
              <Route path='/tweets' element = { <Tweets /> } />
              <Route path='*' element = { <Home /> } />
           </Routes>
        </Suspense>
    )
};