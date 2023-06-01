import scss from './UserCard.module.scss';
import { ReactComponent as CardLogo }from '../../images/logo.svg';
import { ReactComponent as CardHeadsvg }from '../../images/picture2_1.svg';
import UserLogo from '../UserLogo/UserLogo';
import UserData from '../UserData/UserData';

const UserCard = () => {
    return (
        <div className={ scss.usercard }>
            <div className={ scss.usercardheader }>
                <CardLogo className={ scss.usercardlogo }/>
                <CardHeadsvg className={ scss.usercardsvg }/>
            </div>
                <UserLogo/>  
            <div className={ scss.usercardstripe }></div>
                 <UserData/>
        </div>
    )
};

export default UserCard;