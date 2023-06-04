import scss from './UserCard.module.scss';
import { ReactComponent as CardLogo }from '../../images/logo.svg';
import { ReactComponent as CardHeadsvg }from '../../images/picture2_1.svg';
import UserLogo from '../UserLogo/UserLogo';
import UserData from '../UserData/UserData';

const UserCard = ({ id, avatar, tweets, followers, following }) => {
    return (
        <div className={ scss.usercard }>
            <div className={ scss.usercard_header }>
                <CardLogo className={ scss.usercard_logo }/>
                <CardHeadsvg className={ scss.usercard_svg }/>
            </div>
                <UserLogo logo={ avatar }/>  
            <div className={ scss.usercard_stripe }></div>
                <UserData id={ id } buttonType={ following } tweets={ tweets } followers={ followers }/>
        </div>
    )
};

export default UserCard;