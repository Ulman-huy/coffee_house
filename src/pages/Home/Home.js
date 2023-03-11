import classnames from 'classnames/bind';
import styles from './Home.module.scss';
import { createContext, useState } from 'react';

import Advantages from './Advantages';
import ProductsGrid from './ProductsGrid';
import TopProduct from './TopProduct';
import Slider from './Slider';
import Trademark from './Trademark';
import ProductPreview from '../../components/ProductPreview';
import { useDelayUnmount } from '../../hooks'
import Evaluate from './Evaluate';
import News from './News';

const cx = classnames.bind(styles);
export const HomeContext = createContext();

function Home() {
    const [showPreview, setShowPreview] = useState(false);
    const animationPreview = useDelayUnmount(showPreview, 300);
    const mountedStyle = {opacity: 1, transition: "opacity 300ms ease-in"};
    const unmountedStyle = {opacity: 0, transition: "opacity 300ms ease-in"};
    return (
        <HomeContext.Provider value={{showPreview, setShowPreview}}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <Slider />
                    <Trademark />
                    <Advantages />
                    <ProductsGrid />
                    <TopProduct />
                    {animationPreview && 
                        <div className={cx('preview')} style={showPreview ? mountedStyle : unmountedStyle}>
                            <div className={cx('mask-preview')}></div>
                            <ProductPreview/>
                        </div>}
                    <Evaluate />
                    <News />
                </div>
            </div>
        </HomeContext.Provider>
    )
}

export default Home;