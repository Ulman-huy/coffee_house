import classnames from "classnames/bind";
import styles from './SliderHome.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import image from '../../../assets/image/slider/image_1.png';
import image2 from '../../../assets/image/slider/love.png';
import image3 from '../../../assets/image/slider/cafein-fin.png';
import SliderItem from "./SliderItem";

const cx = classnames.bind(styles);
function SliderHome() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <ul className={cx('slider-btn')}>{dots}</ul>
        ),
        customPaging: i => (
            <div className={cx('btn')}></div>
        ),
        dotsClass: cx('dots'),
    };
    return ( 
        <Slider {...settings}>
            <SliderItem src={image2} title='Bắt đầu một ngày mới với ly cafe' subText="Uống cafe vào buổi sáng giúp tăng sự tập trung và trí nhớ, kích thích trái tim và tuần hoàn, giảm cảm giác buồn ngủ." />
            <SliderItem src={image3} title='Nơi sẻ chia vui buồn cùng bạn' subText="Bên ly cà phê phin đang tí tách rơi, người ta trải lòng mình trong những tâm sự vui buồn, những ký ức tưởng chừng đã ngủ quên." />
            <SliderItem src={image} title='Chậm lại để suy ngẫm' subText="Muốn nếm vị cà phê phải chờ đợi pha chế, đó là nét tinh hoa được chắt chiu lại mỗi giây sống chậm với cuộc đời." />
        </Slider>
     );
}

export default SliderHome;