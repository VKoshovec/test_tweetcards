import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Tweets = lazy(()=> import ('../../pages/users/Userspage'));
const Home = lazy(()=> import ('../../pages/home/Home'));

export const Router = () => {

    return(
           <Routes>
              <Route path='/' element = { <Home /> } />
              <Route path='/tweets' element = { <Tweets /> } />
              <Route path='*' element = { <Home /> } />
           </Routes>
    )
};