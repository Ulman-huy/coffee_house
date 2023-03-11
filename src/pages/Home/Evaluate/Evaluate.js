import { Component } from 'react';
import classnames from 'classnames/bind';
import Slider from 'react-slick';
import styles from './Evaluate.module.scss';
import EvaluateItem from './EvaluateItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

export default class Evaluate extends Component {
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
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Đánh giá</h2>
                <div className={cx('content')}>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <EvaluateItem />
                        <EvaluateItem />
                        <EvaluateItem />
                        <EvaluateItem />
                    </Slider>
                </div>
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
        )
    }
}

