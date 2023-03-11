import classnames from "classnames/bind";
import styles from './SliderHome.module.scss';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function SliderItem({ src, title, subText }) {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('slider-container')}>
                <div className={cx('slogan')}>
                    <h1 className={cx('text')}>{title}</h1>
                    <h3 className={cx('sub-text')}>{subText}</h3>
                    <Link to='/discover' className={cx('button')}>Xem thêm</Link>
                </div>
                <div className={cx('div-image')}>
                    <img src={src} width='450px' alt='' className={cx('slider-image')} />
                </div>
            </div>
            
        </div>
     );
}

export default SliderItem;