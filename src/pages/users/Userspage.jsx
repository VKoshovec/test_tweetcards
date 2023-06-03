import { fetchAllUsers } from "../../redux/users/operations";
import { selectAllUsers, selectTotlaUsers } from "../../redux/users/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import UserCard from "../../components/Usercard/Usercard";
import LoadMore from "../../components/LoadMore/LoadMore";
import UserFilter from "../../components/UserFilter/UserFilter";

const UsersPage =() => {

    const allUsers = useSelector(selectAllUsers);
    const totalUsers = useSelector(selectTotlaUsers);
    const totalPages = totalUsers/3;
    
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState();

    useEffect(()=>{
        dispatch(fetchAllUsers({ page, filter }));
    }, [dispatch, filter, page]);

    const onClick = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    }

    const filterChange = (e) => {
       setFilter(e.value);
       setPage(1);
    }

    return (
       <>
       { allUsers.length === 0 && <p>No results</p> }
       <UserFilter onChange={ filterChange }/>
       { allUsers.map(el => <UserCard 
       key={ el.id } 
       id={ el.id }
       tweets={ el.tweets } 
       followers={ el.followers } 
       avatar={ el.avatar } 
       following={ el.following }/>) }
       { page < totalPages && <LoadMore onClick={ onClick }/> }
       </>
    )
};

export default UsersPage;