import UserCard from "../../components/Usercard/Usercard";
import { fetchAllUsers } from "../../redux/users/operations";
import { selectAllUsers } from "../../redux/users/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const UsersPage =() => {

    const allUsers = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAllUsers());
    }, [dispatch]);

    return (
       <>
       { allUsers.length === 0 && <p>No results</p> }
       { allUsers.map(el => <UserCard 
       key={ el.id } 
       id={ el.id }
       tweets={ el.tweets } 
       followers={ el.followers } 
       avatar={ el.avatar } 
       following={ el.following }/>) }
       </>
    )
};

export default UsersPage;