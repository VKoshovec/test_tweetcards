import scss from './UserPage.module.scss';

import { fetchAllUsers, fetchEmpty } from "../../redux/users/operations";
import { selectAllUsers, selectTotlaUsers } from "../../redux/users/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserCard from "../../components/Usercard/Usercard";
import LoadMore from "../../components/LoadMore/LoadMore";
import UserFilter from "../../components/UserFilter/UserFilter";
import Loader from "../../components/Loader/Loader";

const UsersPage =() => {

    const allUsers = useSelector(selectAllUsers);
    const totalUsers = useSelector(selectTotlaUsers);
    const totalPages = totalUsers/3;
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('show all');

    useEffect(()=>{
        dispatch(fetchAllUsers({ page, filter }));
    }, [dispatch, filter, page]);

    const onClick = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const filterChange = (e) => {
       setFilter(e.value);
       setPage(1);
    };

    const onClickBtn = () => { 
        setPage(1);
        dispatch(fetchEmpty());
        navigate('/', { replace: true }) 
    };

    return (
       <>
       <div className={ scss.nav }>
         <button 
               type='button' 
               className={ scss.nav_btn }
               onClick={ onClickBtn }
               > BACK    
          </button>
       </div>
       <Loader/>
       { allUsers.length === 0 && <p>No results</p> }
       <UserFilter onChange={ filterChange }/>
       <div className={ scss.grid }>
          { allUsers.map(el => <UserCard 
          key={ el.id } 
          id={ el.id }
          tweets={ el.tweets } 
          followers={ el.followers } 
          avatar={ el.avatar } 
          following={ el.following }/>) }
       </div>
       { page < totalPages && <LoadMore onClick={ onClick }/> }
       </>
    )
};

export default UsersPage;