import classnames from "classnames/bind";
import styles from './Advantages.module.scss';

import natural from '../../../assets/image/advantages/natural.png';
import fastBox from '../../../assets/image/advantages/fast_box.png';
import cashBack from '../../../assets/image/advantages/cash_back.png';
import freeMoney from '../../../assets/image/advantages/free_money.png';

const cx = classnames.bind(styles);

function Advantages() {
    const advantages = [
        {
            title: '100% Tự nhiên',
            description: 'That, lungo as coffee viennese extraction beans Acerbic coffee medium arabica.',
            iconImage: natural
        },
        {
            title: 'Vận chuyển miễn phí',
            description: 'Filter strong, dark cultivar siphon arabica as java sweet acerbic, half and half mug robusta coffee.',
            iconImage: fastBox
        },
        {
            title: 'Giao hàng nhanh chóng',
            description: 'Rich black frappuccino acerbic, sit percolator acerbic robusta. Americano aroma crema.',
            iconImage: freeMoney
        },
        {
            title: 'Hoàn tiền',
            description: 'Café au lait est dark, half and half mug variety dark viennese single half and half frappuccino.',
            iconImage: cashBack
        },
    ]
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}><h2>Tiện lợi</h2></div>
                <div className={cx('content')}>
                    {advantages.map((item, index) => (
                        <div key={index} className={cx('advantages-item')}>
                            <img className={cx('advantages-img')} src={item.iconImage} />
                            <div className={cx('advantages-title')}>{item.title}</div>
                            <div className={cx('advantages-description')}>{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}

export default Advantages;