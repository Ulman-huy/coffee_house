import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Footer.module.scss';
import paypal from '../../assets/image/pay/paypal.png';
import amazon from '../../assets/image/pay/amazon.ico';
import mastercard from '../../assets/image/pay/mastercard.png';
import visa from '../../assets/image/pay/visa.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedIcon } from "../Icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
const cx = classnames.bind(styles);

function Footer() {
    const pages = [
        {
            title: 'Trang chủ',
            to: '/'
        },
        {
            title: 'Sản phẩm',
            to: '/product'
        },
        {
            title: 'Cửa hàng',
            to: '/store'
        },
        {
            title: 'Khám phá',
            to: '/discover'
        },
        {
            title: 'Liên hệ',
            to: '/contact'
        },

    ]
    const category = [
        {
            title: 'Coffee',
            to: '/product/coffee'
        },
        {
            title: 'Thiết bị',
            to: '/product/machines'
        },
        {
            title: 'Tự động',
            to: '/product/vending'
        },
        {
            title: 'Món ăn',
            to: '/product/dishes'
        },
        {
            title: 'Capsules',
            to: '/product/capsules'
        }
    ]
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <form>
                    <div className={cx('form-container')}>
                        <label for='' className={cx('label')}>Nhận thông tin <span>mới nhất</span></label>
                        <input type='email' className={cx('input')} name='email' placeholder='Nhập email...'/>
                        <button type='submit' className={cx('submit')}>Đăng ký</button>
                    </div>
                </form>
                <div className={cx('content')}>
                    <div className="pages">
                        <h2>Trang</h2>
                        <ul className={cx('list')}>
                            {pages.map((page, index) => (
                                <li key={index}>
                                    <Link to={page.to}>{page.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="category">
                        <h2>Danh mục</h2>
                        <ul className={cx('list')}>
                            {category.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.to}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('contact')}>
                        <h2>Liên hệ</h2>
                        <ul className={cx('list-contact')}>
                            <li><FontAwesomeIcon icon={faPhone} /><span>+84 961 144 245</span></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /><span>aniflex.qi@gmail.com</span></li>
                            <li><FontAwesomeIcon icon={faLocationDot} /><span>Hoàng Mai, Hà Nội</span></li>
                            <li>
                                <div className={cx('social')}>
                                    <a href=''><FacebookIcon /></a>
                                    <a href=''><InstagramIcon /></a>
                                    <a href=''><TwitterIcon /></a>
                                    <a href=''><LinkedIcon /></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('pay')}>
                        <h2>Thanh toán</h2>
                        <ul className={cx('cards')}>
                            <li><img src={paypal} /></li>
                            <li><img src={mastercard} /></li>
                            <li><img src={amazon} /></li>
                            <li><img src={visa} /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('copyright')}>
                <FontAwesomeIcon icon={faCopyright} /><span>2023 ulman-huy</span>
            </div>
        </div> 
    );
}

export default Footer;