import scss from './Loadmore.module.scss';

const LoadMore = ({ onClick }) => {
    return(
    <>
       <button className={ scss.loadmore } onClick={ onClick }>Load more...</button>
    </>
    )
};

export default LoadMore;