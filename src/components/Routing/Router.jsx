import {
    Route,
    Routes,
    Navigate,
    useLocation 
} from 'react-router-dom';

import { lazy } from 'react';

const Tweets = lazy(()=> import ('../../pages/users/Userspage'));
const Home = lazy(()=> import ('../../pages/home/Home'));

export const Router = () => {

    return(
        <div>
           <Routes>
              <Route path='/' element = { <Home /> } />
              <Route path='/tweets' element = { <Tweets /> } />
              <Route path='*' element = { <Home /> } />
           </Routes>
        </div>
    )
};