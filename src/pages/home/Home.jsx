import scss from './Home.module.scss';
import { ReactComponent as CardLogo }from '../../images/logo.svg';
import { ReactComponent as CardHeadsvg }from '../../images/picture2_1.svg';
import { useNavigate } from "react-router-dom";

const HomePage =()=> {

    const nav = useNavigate();

    return (
    <div>
        <header>
            <div className={ scss.header }>
               <CardLogo  className={ scss.header_logo } />
            </div>
               <CardHeadsvg className={ scss.hero } />
            <h1 className={ scss.title }>Tweets here!!!</h1>
            <div className={ scss.nav }>
               <button 
               type='button' 
               className={ scss.nav_btn }
               onClick={ () => nav ('/tweets', { replace: true }) }
               > WATCH...
               </button>
            </div>
        </header>
        
    </div>
    );

};

export default HomePage;
