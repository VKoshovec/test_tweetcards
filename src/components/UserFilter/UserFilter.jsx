import scss from './UserFilter.module.scss';
import Dropdown from 'react-dropdown';

const UserFilter = ({ onChange }) => {

    const options = ['show all', 'follow', 'followings'];
    const defaultOption = options[0];
    
    return(
    <div className={ scss.filter }>
      <h2 className={ scss.filtertitle }>Results</h2>  
      <Dropdown 
            className={ scss.dropdown }
            menuClassName={ scss.dropdownmenu }
            placeholderClassName ={ scss.dropdownplaceholder }
            options={options} 
            onChange={ (e) => onChange(e) } 
            value={defaultOption} 
            placeholder="Select an option" />
    </div>
    );
};

export default UserFilter;