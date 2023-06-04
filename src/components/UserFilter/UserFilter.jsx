import scss from './UserFilter.module.scss';
import Dropdown from 'react-dropdown';

const UserFilter = ({ onChange }) => {

    const options = ['show all', 'follow', 'followings'];
    const defaultOption = options[0];
    
    return(
    <div className={ scss.filter }>
      <h2 className={ scss.filter_title }>Results</h2>  
      <Dropdown 
            className={ scss.dropdown }
            menuClassName={ scss.dropdown_menu }
            placeholderClassName ={ scss.dropdown_placeholder }
            options={options} 
            onChange={ (e) => onChange(e) } 
            value={defaultOption}/>
    </div>
    );
};

export default UserFilter;