import classNames from 'classnames';
import scss from '../UserData/UserData.module.scss';

const UserData = ({buttonType, tweets, followers}) => {

    const buttonTypeClass = buttonType ? scss.userdatabuttonfollowing: scss.userdatabuttonfollow ;
    const buttonCaption = buttonType ? 'Following' : 'Follow';

    const followersNormalize = followers.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    return(
        <div className={ scss.userdata }>
            <p className={ scss.userdatatweets }>

                { `${ tweets } tweets` }

            </p>
            <p className={ scss.userdatafollowers }>

               { `${ followersNormalize } followers` }
            </p>

            <button type="button" 
            className = {classNames( scss.userdatabutton, buttonTypeClass )}>

               {buttonCaption}
               
            </button>
        </div>
    )
};

export default UserData;