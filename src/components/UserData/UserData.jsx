import classNames from 'classnames';
import scss from '../UserData/UserData.module.scss';
import { useDispatch  } from 'react-redux';
import { fetchUserById } from '../../redux/users/operations';

const UserData = ({id, buttonType, tweets, followers}) => {

    const buttonTypeClass = buttonType ? scss.userdata_button_following: scss.userdata_button_follow ;
    const buttonCaption = buttonType ? 'Following' : 'Follow';
    const followersNormalize = followers.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    const dispatch = useDispatch();
   
    const onHandleClick = (id) => {

        let newData;

        if(buttonType) {
            newData = { following: false, followers: followers - 1};
        } 

        if(!buttonType) {
            newData = { following: true, followers: followers + 1};
        } 

        dispatch(fetchUserById({id, newData}));
        
    }

    return(
        <div className={ scss.userdata }>
            <p className={ scss.userdata_tweets }>

                { `${ tweets } tweets` }

            </p>
            <p className={ scss.userdata_followers }>

               { `${ followersNormalize } followers` }
            </p>

            <button type="button" 
            onClick={ () => onHandleClick(id) }
            className = {classNames( scss.userdata_button, buttonTypeClass )}>

               {buttonCaption}
               
            </button>
        </div>
    )
};

export default UserData;