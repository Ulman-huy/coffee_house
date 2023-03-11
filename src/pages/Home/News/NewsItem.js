import classnames from 'classnames/bind';
import styles from './News.module.scss';
import image from '../../../assets/image/news/spring_blossom.jpg';
const cx = classnames.bind(styles);

function NewsItem() {
    return ( 
        <div className={cx('news-item')}>
            <div className={cx('image')}>
                <img src={image} alt='' />
            </div>
            <div className={cx('news-content')}>
                <div className={cx('content')}>
                    <div className={cx('title-news')}>
                        <h3>Starbucks sẽ chính thức ra mắt "Spring Blossom"</h3>
                    </div>
                    <div className={cx('text')}>
                        Từ ngày 10/3/2023, Starbucks sẽ chính thức ra mắt dòng sản phẩm cafe mới mang tên "Spring Blossom" tại các cửa hàng trên toàn thế giới. Đây là một loại cafe được chế biến từ hạt Arabica chất lượng cao kết hợp với hương vị hoa anh đào tươi ngon, tạo nên một hương vị thơm ngon đặc biệt cho mùa xuân.
                        Ngoài ra, Starbucks cũng sẽ cập nhật menu với các loại cafe phong phú hơn cho khách hàng lựa chọn, bao gồm cả các loại cafe không chất kích thích và thức uống đá xay mới. Khách hàng cũng có thể tùy chọn sữa đặc biệt để thêm vị ngọt hoặc sữa hạt điều thơm ngon cho đồ uống của mình.
                        Để đón mừng sự ra mắt của dòng sản phẩm mới này, Starbucks sẽ áp dụng chương trình giảm giá 10% cho tất cả các sản phẩm cafe và đồ uống mới trong vòng 3 ngày đầu tiên, từ ngày 10/3 đến ngày 12/3/2023.
                        Đây chắc chắn là một tin vui cho những tín đồ của cafe và Starbucks.
                    </div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('time')}>
                        12.03.2023
                    </div>
                    <div className={cx('tags')}>
                        <span>Coffee</span>,
                        <span> Starbucks</span>,
                        <span> Spring Blossom</span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default NewsItem;