import classNames from "classnames/bind";
import styles from './CartItem.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function CartItem() {
    return <Link to="/coffee-nguyen-chat" className={cx('wrapper')}>
            <div className={cx('image-container')}> 
                <img 
                    src="https://i.ytimg.com/vi/9rlSpJlWP3I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgkfRPNfOJGo11EMjT6x8CwBbiKw" 
                    alt="" 
                    className="item-image" 
                />
            </div>
            <div className={cx('item-desc')}>
                <div className={cx('title')}>Cafe nguyên chất cà phê Arabica Cầu Đất nguyên chất rang xay mùi vị thanh dịu tinh tế</div>
                <div className={cx('price')}>₫300.000</div>
            </div>
        </Link>
}

export default CartItem;