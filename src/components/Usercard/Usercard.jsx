import scss from './UserCard.module.scss';
import { ReactComponent as CardLogo }from '../../images/logo.svg';
import { ReactComponent as CardHeadsvg }from '../../images/picture2_1.svg';
import UserLogo from '../UserLogo/UserLogo';
import UserData from '../UserData/UserData';

const UserCard = ({ id, avatar, tweets, followers, following }) => {
    return (
        <div className={ scss.usercard }>
            <div className={ scss.usercardheader }>
                <CardLogo className={ scss.usercardlogo }/>
                <CardHeadsvg className={ scss.usercardsvg }/>
            </div>
                <UserLogo logo={ avatar }/>  
            <div className={ scss.usercardstripe }></div>
                <UserData id={ id } buttonType={ following } tweets={ tweets } followers={ followers }/>
        </div>
    )
};

export default UserCard;