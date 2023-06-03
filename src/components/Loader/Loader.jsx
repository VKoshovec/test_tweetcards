import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/users/selectors';

const Loader = () => {

   const loading = useSelector(selectLoading) ;

   return (
     loading ? Loading.dots() : Loading.remove()
   );

};

export default Loader;