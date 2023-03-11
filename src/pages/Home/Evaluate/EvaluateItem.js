import classnames from 'classnames/bind';
import styles from './Evaluate.module.scss';
import { FacebookIcon, InstagramIcon, LinkedIcon, TwitterIcon } from '../../../components/Icons';
const cx = classnames.bind(styles);

function EvaluateItem() {
    return ( 
        <div className={cx('evaluate-item')}>
            <div className={cx('avatar')}>
                <img src='https://i.quotev.com/sn6v67yx4cgq.jpg' alt='' />
            </div>
            <div className={cx('text')}>
                <i>Strong caramelization strong irish robust, that pumpkin spice skinny trifecta galão. Cappuccino bar cinnamon galão medium iced spoon. Galão frappuccino rich, that, cinnamon eu, as robust filter cup at extraction. Whipped cultivar skinny mazagran irish cappuccino foam mazagran viennese aroma whipped cultivar skinny mazagran irish cappuccino. </i>
            </div>
            <div className={cx('name')}>
                <p>Lisa Jefferson</p>
            </div>
            <div className={cx('career')}>
                <p>Designer</p>
            </div>
            <div className={cx('contact')}>
                <a href='' className={cx('icon')}>
                    <TwitterIcon />
                </a>
                <a href='' className={cx('icon')}>
                    <LinkedIcon />
                </a>
                <a href='' className={cx('icon')}>
                    <FacebookIcon />
                </a>
                <a href='' className={cx('icon')}>
                    <InstagramIcon />
                </a>
            </div>
        </div>
     );
}

export default EvaluateItem;