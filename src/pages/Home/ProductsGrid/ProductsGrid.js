import classnames from "classnames/bind";
import styles from './ProductsGrid.module.scss';
import background from '../../../assets/image/background/bg1.jpg';
import coffee from '../../../assets/image/background/coffee.jpg';
import dishes from '../../../assets/image/background/dishes.jpg';
import capsules from '../../../assets/image/background/capsules.webp';
import auto from '../../../assets/image/background/auto.webp';
import machines from '../../../assets/image/background/machines.jpg';
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

function ProductsGrid() {
    return ( 
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${background})`}}>
            <div className={cx('grid-container')}>
                <div className={cx('product-1')}>
                    <img className={cx('image-1')} src={coffee} alt="" />
                    <Link to='/product/coffee' className={cx('btn')}>Coffee Tự nhiên</Link>
                </div>
                <div className={cx('product-2')}>
                    <img className={cx('image-2')} src={dishes} alt="" />
                    <Link to='/product/dishes' className={cx('btn')}>Món ăn</Link>
                </div>
                <div className={cx('product-3')}>
                    <img className={cx('image-3')} src={auto} alt="" />
                    <Link to='/product/vending' className={cx('btn')}>Tự động</Link>
                </div>
                <div className={cx('product-4')}>
                    <img className={cx('image-4')} src={machines} alt="" />
                    <Link to='/product/machines' className={cx('btn')}>Thiết bị</Link>
                </div>
                <div className={cx('product-5')}>
                    <img className={cx('image-5')} src={capsules} alt="" />
                    <Link to='/product/capsules' className={cx('btn')}>Capsules</Link>
                </div>
            </div>
        </div>
     );
}

export default ProductsGrid;