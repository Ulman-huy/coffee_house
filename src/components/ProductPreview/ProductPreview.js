import classnames from 'classnames/bind';
import styles from './ProductPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faClose, faHeart as faHeartSolid, faShare, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import  { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import product from '../../assets/image/product/product.png';
import logo from '../../assets/image/trademark/logo7.png';
import { useContext, useState } from 'react';
import { HomeContext } from '../../pages/Home/Home';

const cx = classnames.bind(styles);

function ProductPreview() {
    const { setShowPreview } = useContext(HomeContext);
    const [quantity, setQuantity] = useState(0);

    const increase = () => {
        setQuantity(prev => prev + 1)
    }
    const decrease = () => {
        setQuantity(prev => {
            if(prev === 0) return prev
            return prev - 1
        })
    }
    const renderStar = (star) => {
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
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('div-image')}>
                    <img src={product} alt='' className={cx('image')} />
                    <div className={cx('sale')}>- 50%</div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('top')}>
                        <div className={cx('div-logo')}>
                            <img src={logo} alt='' className={cx('logo')} />
                            <div className={cx('close')} onClick={() => setShowPreview(false)}>
                                <FontAwesomeIcon icon={faClose} />
                            </div>
                        </div>
                        <h2 className={cx('name')}>Barista Coffee Machine</h2>
                        <p className={cx('description')}>
                            Sentiments two occasional affronting solicitude travelling and one more contrasted. Now summer who day looked our behind moment coming. Mrs assured add private married removed believe did she.
                        </p>
                    </div>
                    <div className={cx('bottom')}>
                        <div className={cx('stars')}>
                            {renderStar(4)}
                        </div>
                        <div className={cx('price')}>
                            <del>{convertPrice(250000)}₫</del> 
                            - <span>{convertPrice(204000)}₫</span>
                        </div>
                        <div className={cx('quantity')}>
                            <span className={cx('decrease')} onClick={decrease}>-</span>
                            <div className={cx('count', {quantity: quantity > 0})}>
                                {quantity}
                            </div>
                            <span className={cx('increase')} onClick={increase}>+</span>
                        </div>
                        <div className={cx('add-cart')}>
                            <button>Thêm vào giỏ hàng</button>
                            <div className={cx('heart')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <div className={cx('share')}>
                                <FontAwesomeIcon icon={faShare} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ProductPreview;