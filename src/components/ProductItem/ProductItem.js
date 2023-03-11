import classnames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faCartPlus, faEye, faHeart as faHeartSolid, faShare, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import  { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeContext } from '../../pages/Home/Home';

const cx = classnames.bind(styles);

function ProductItem({ to, sale, src, name, pricePrev, price, star=5}) {
    const { setShowPreview } = useContext(HomeContext);
    const [isLike, setIsLike] = useState(false);
    const renderStar = () => {
        var stars = []
        for(let i = 0; i < star; i++) {
            stars.push(faStarSolid)
        }
        if(stars.length < 5) {
            for(let i = 0; i < 5-star; i++) {
                stars.push(faStar)
            }
        }
        return stars.map((star, index) => (
            <span key={index}>
                <FontAwesomeIcon icon={star} />
            </span>
        ));
    }
    const convertPrice = (price) => {
        var priceString = price.toString()
        var priceArr = priceString.split('').reverse();
        var result = [];
        for(let i = 0; i< priceArr.length; i++) {
            if(i === 3 || i === 6 || i === 9) {
                result.push(priceArr[i] + '.')
                continue
            }
            result.push(priceArr[i])
        }
        return result.reverse().join('')
    }
    return ( 
       
            <div  className={cx('wrapper')}>
                {sale && <div className={cx('sale')}>Giảm {sale}%</div>}
                <div className={cx('container')}>
                    <Link to={to} className={cx('product-image')}>
                        <img src={src} alt='' className={cx('image')} />
                    </Link>
                        <div className={cx('tools')}>
                            <div className={cx('share')} title="Chia sẻ">
                                <FontAwesomeIcon icon={faShare} />
                            </div>
                            <div className={cx('view')} title="Xem trước" onClick={() => setShowPreview(true)}>
                                <FontAwesomeIcon icon={faEye} />
                            </div>
                            <div className={cx('add-cart')} title='Thêm vào giỏ hàng'>
                                <FontAwesomeIcon icon={faCartPlus} />
                            </div>
                        </div>
                    <div className={cx('product-desc')}>
                        <Link to={to} className={cx('name')} title={name}>{name}</Link>
                        <div className={cx('price-start')}>
                            <div className={cx('start')}>
                                {renderStar()}
                            </div>
                            <div className={cx('price')}>
                                <div>
                                    {pricePrev && <del>{convertPrice(pricePrev)}₫</del>}
                                    <p>{convertPrice(price)}₫</p>
                                </div>
                                <div onClick={() => setIsLike(!isLike)} className={cx('heart', { like: isLike })}>
                                    <FontAwesomeIcon icon={isLike ? faHeartSolid : faHeart} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div> 

    );
}

export default ProductItem;