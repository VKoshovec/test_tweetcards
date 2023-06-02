import scss from './UserFilter.module.scss';
import Dropdown from 'react-dropdown';

const UserFilter = () => {

    const options = ['show all', 'follow', 'followings'];
    const defaultOption = options[0];

    return(
    <div>
      <Dropdown 
      options={options} 
    //   onChange={this._onSelect} 
      value={defaultOption} 
      placeholder="Select an option" />
    </div>
    );
};

export default UserFilter;