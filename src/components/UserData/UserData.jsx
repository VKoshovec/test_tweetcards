import classNames from 'classnames';
import scss from '../UserData/UserData.module.scss';
import { useSelector, useDispatch  } from 'react-redux';
import { selectAllUsers} from '../../redux/users/selectors';
import { fetchUserById } from '../../redux/users/operations';

const UserData = ({id, buttonType, tweets, followers}) => {

    const buttonTypeClass = buttonType ? scss.userdatabuttonfollowing: scss.userdatabuttonfollow ;
    const buttonCaption = buttonType ? 'Following' : 'Follow';
    const followersNormalize = followers.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();
   
    const onHandleClick = (id) => {
        const userForUpd = users.filter(el => el.id === id)[0];

        let fetchData;

        if(buttonType) {
            fetchData = {...userForUpd, following: false, followers: followers - 1};
        } 

        if(!buttonType) {
            fetchData = {...userForUpd, following: true, followers: followers + 1};
        } 

        dispatch(fetchUserById(id, fetchData));
        
    }

    return(
        <div className={ scss.userdata }>
            <p className={ scss.userdatatweets }>

                { `${ tweets } tweets` }

            </p>
            <p className={ scss.userdatafollowers }>

               { `${ followersNormalize } followers` }
            </p>

            <button type="button" 
            onClick={ () => onHandleClick(id) }
            className = {classNames( scss.userdatabutton, buttonTypeClass )}>

               {buttonCaption}
               
            </button>
        </div>
    )
};

export default UserData;