import classnames from "classnames/bind";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styles from './Trademark.module.scss';
import logo1 from '../../../assets/image/trademark/logo1.png';
import logo2 from '../../../assets/image/trademark/logo2.png';
import logo3 from '../../../assets/image/trademark/logo3.png';
import logo4 from '../../../assets/image/trademark/logo4.png';
import logo5 from '../../../assets/image/trademark/logo5.png';
import logo6 from '../../../assets/image/trademark/logo6.png';
import logo7 from '../../../assets/image/trademark/logo7.png';
import logo8 from '../../../assets/image/trademark/logo8.png';
import logo9 from '../../../assets/image/trademark/logo9.png';
import logo10 from '../../../assets/image/trademark/logo10.png';
import logo11 from '../../../assets/image/trademark/logo11.png';

const cx = classnames.bind(styles);

function Trademark() {
    const listLogo = [
        {
            logo: logo1
        },
        {
            logo: logo2
        },
        {
            logo: logo3
        },
        {
            logo: logo4
        },
        {
            logo: logo5
        },
        {
            logo: logo6
        },
        {
            logo: logo7
        },
        {
            logo: logo8
        },
        {
            logo: logo9
        },
        {
            logo: logo10
        },
        {
            logo: logo11
        },
    ]
    const settings = {
        className: "center",
        autoplay: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
    }
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Slider {...settings}>
                    {listLogo.map((logo, index) => <img key={index} className={cx('trademark-image')} src={logo.logo} alt="" />)}
                </Slider>
            </div>
        </div>
    )
}

export default Trademark;