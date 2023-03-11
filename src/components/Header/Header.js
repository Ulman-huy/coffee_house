import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faCartShopping, faGear, faMoon, faQuestion, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'
import CartItem from '../CartItem';
import { useRef } from 'react';

const cx = classnames.bind(styles);

function Header() {
    const cartRef = useRef(null);
    const navbar = [
        {
            title: 'Trang chủ',
            to:'/'
        },
        {
            title: 'Sản phẩm',
            to:'/product'
        },
        {
            title: 'Cửa hàng',
            to:'/store'
        },
        {
            title: "Khám phá",
            to: '/discover'

        },
        {
            title: 'Liên hệ',
            to:'/contact'
        }
    ]
    const userTools = [
        {
            title: 'Cài đặt',
            icon: faGear,
            to: '/settings'
        }, 
        {
            title: 'Chế độ tối',
            icon: faMoon,
        },
        {
            title: 'Phản hồi & Góp ý',
            icon: faQuestion,
            to: '/feedback'
        }
    ]
    const renderCart = () => (
        <div className={cx('cart-container')}>
            <div ref={cartRef} className={cx('carts')}>
                <CartItem />
            </div>
            <div className={cx('cart-footer')}>
                <p className={cx('count-item')}>1 sản phẩm trong giỏ hàng</p>
                <Link to='/cart' className={cx('button')}>Xem giỏ hàng</Link>
            </div>
        </div>)
    const renderUser = () => (
        <div className={cx('user-container')}>
            <div className={cx('username', 'line')}>Bùi Văn Huy</div>
            <div className={cx('user-tools')}>
                {userTools.map((tool, index) => {
                    let Comp = 'div';
                    const props = {};
                    if(tool.to) {
                        props.to = tool.to;
                        Comp = Link;
                    }
                    return <Comp key={index} className={cx('tool-item')} {...props}>
                            <span className={cx('tool-icon')}><FontAwesomeIcon icon={tool.icon} /></span>
                            <span className={cx('tool-title')}>{tool.title}</span>
                        </Comp>
                })}
            </div>
            <Link to='/login' className={cx('logout', 'line')}>
                <div className={cx('icon')}><FontAwesomeIcon icon={faArrowRightToBracket} /></div>
                <span className={cx('text')}>Đăng xuất</span>
            </Link>
        </div>
    )
    return <header className={cx('header')}>
            <div className={cx('wrapper')}>
                <div className={cx('logo')}>
                    <Link to='/'>coffeeHouse</Link>
                </div>
                <nav className={cx('navbar')}>
                    {navbar.map((nav, index) => 
                        <NavLink 
                            key={index} 
                            className={nav => cx('nav-item', {active: nav.isActive})} 
                            to={nav.to}
                        >
                            {nav.title}
                        </NavLink>)}
                </nav>
                <div className={cx('user')}>
                    <div className={cx('search')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div>
                        <Tippy 
                            delay={[100, 300]}
                            offset={[40, 12]}
                            placement='bottom-end'
                            interactive
                            render={renderCart}
                        >
                            <Link to="/cart" data-count-item="1" className={cx('cart')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy 
                            delay={[100, 300]}
                            placement='bottom-end'
                            interactive
                            render={renderUser}
                        >
                            <Link to="/user" className={cx('login')}>
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </Tippy>
                    </div>
                </div>
            </div>
        </header>;
}

export default Header;