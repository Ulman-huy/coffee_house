import classnames from 'classnames/bind';
import ProductItem from '../../../components/ProductItem';
import background from '../../../assets/image/background/bg2.jpg';
import styles from './TopProduct.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import { Component } from 'react';
import product from '../../../assets/image/product/product.png';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

const nav = ['Tất cả', 'Coffee', 'Thiết bị', 'Tự động', 'Món ăn', 'Capsules']
export default class TopProduct extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {
            type: 'Tất cả',
            preview: false
        }
    }
    componentDidMount() {
        // call api
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
        };
        return (
            <div className={cx('wrapper')} style={{ backgroundImage: `url(${background})`}}>
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <h1>Sản phẩm bán chạy</h1>
                        <ul className={cx('nav-product')}>
                            {nav.map((item, index) => (
                                <li 
                                    key={index} 
                                    className={cx('product-item', { active: item === this.state.type})}
                                    onClick={() => this.setState({ type: item })}
                                >
                                    <p>{item}</p>
                                </li>

                            ))}
                        </ul>
                    </div>
                    <div className={cx('content')}>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <ProductItem 
                                to='/product/may-pha-che'
                                sale='50'
                                src={product}
                                name='Máy pha chế cafe tự động'
                                pricePrev='114000'
                                price='100300'
                                star={3}
                            />
                            <ProductItem 
                                to='/product/may-pha-che'
                                src={product}
                                name='Phin pha cà phê Highlands Coffee'
                                price='200000'
                            />
                            <ProductItem 
                                to='/product/may-pha-che'
                                sale='23'
                                src={product}
                                name='Cà phê rang xay Moka Highlands coffee 200g - dòng cà phê cao cấp'
                                pricePrev='244000'
                                price='150000'
                                star={4}
                            />
                            <ProductItem 
                                to='/product/may-pha-che'
                                src={product}
                                name='Cà phê ROBUSTA HONEY nguyên chất rang mộc cafe bột xay sẵn pha phin, pha máy vị đắng đầm - hậu vị ngọt - thơm nồng từ Message Coffee'
                                price='100000'
                            />
                            <ProductItem 
                                to='/product/may-pha-che'
                                sale='50'
                                src={product}
                                name='Máy pha chế cafe tự động Máy pha chế cafe tự độngMáy pha chế cafe tự độngMáy pha chế cafe tự động'
                                pricePrev='114000'
                                price='100000'
                                star={2}
                            />
                            <ProductItem 
                                to='/product/may-pha-che'
                                src={product}
                                name='Máy pha chế cafe tự động Máy pha chế cafe tự độngMáy pha chế cafe tự độngMáy pha chế cafe tự động'
                                price='100000'
                            />
                        </Slider>
                    </div>
                    <div className={cx('btn-slider')}>
                        <div className={cx('prev')} onClick={this.previous}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className={cx('next')} onClick={this.next}> 
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                    <Link to='/product' className={cx('more')}>Xem thêm</Link>
                </div>
            </div>
        )
    }
}