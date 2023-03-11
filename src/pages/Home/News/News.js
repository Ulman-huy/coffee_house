import classnames from 'classnames/bind';
import { Component } from 'react';
import styles from './News.module.scss';
import NewsItem from './NewsItem';
import background from '../../../assets/image/background/bg2.jpg';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classnames.bind(styles);

class News extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        return ( 
            <div className={cx('wrapper')} style={{backgroundImage: `url(${background})`}}>
                <div className={cx('container')}>
                    <h1 className={cx('title')}>Tin tức</h1>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                    </Slider>
                    <div className={cx('arrows')}>
                        <div className={cx('prev')} onClick={this.previous}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className={cx('next')} onClick={this.next}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

export default News;