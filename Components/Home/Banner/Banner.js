import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css'
import circle from '../../../assets/Home/Hero/Circle1.png'
import verticle from '../../../assets/Home/Hero/verticle.png'
import rightArrow from '../../../assets/Home/Hero/right-arrow.png'


const Banner = () => {
    return (
        <div className={styles.heroContainer}>
            {/* <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}> */}
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                    <Image src={circle} alt="" className={styles.circleImg}></Image>
                <Image src={verticle} alt="" className={styles.verticleImg}></Image>
                <div className="hero-content text-neutral-content">
                    <div>
                       
                        <h1 className={styles.heading}>A <span className={styles.circle}>whole <span className='italic'>new world</span>,</span><br /> a whole <span className='italic'>new look</span></h1>
                        <div className='mr-96'>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className={styles.button}>DISCOVER MORE <Image src={rightArrow} alt='' className='pt-1 h-5 w-7' ></Image></button>
                        </div>
                   
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;