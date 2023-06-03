import {
    Route,
    Routes,
    Navigate,
    useLocation 
} from 'react-router-dom';

import { lazy } from 'react';

const Tweets = lazy(()=> import ('../../pages/users/Userspage'));

export const Router = () => {

    return(
        <div>
           <Routes>
              <Route path='/tweets' element ={ <Tweets /> } />
           </Routes>
        </div>
    )
};