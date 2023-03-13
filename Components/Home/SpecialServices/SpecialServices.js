import React from 'react';
import Image from 'next/image';
import styles from './SpecialServices.module.css'
import circle from '../../../assets/Home/special-service/Vector.png'
import facial from '../../../assets/Home/special-service/facial.png'
import aroma from '../../../assets/Home/special-service/aroma.png'
import bodyRelaxation from '../../../assets/Home/special-service/bodyRelaxation.png'
import faceMassage from '../../../assets/Home/special-service/faceMassage.png'
import spaCouples from '../../../assets/Home/special-service/spaCouples.png'
import manicure from '../../../assets/Home/special-service/manicure.png'
import underline from '../../../assets/Home/special-service/Rectangle 2.png'
import rightArrow from '../../../assets/Home/special-service/rightarrow.png'
import OurStory from './OurStory';

const SpecialServices = () => {
    return (
        <div className={styles.serviceContainer}>
           <div className='mt'>
                <div className={styles.textContainer}>
                    <h2 className={styles.heading}>Special Services from Salonnz<span></span></h2>
                    <Image src={circle} alt='' className={styles.circle}></Image>


                    <p className={styles.details}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione <br />
                        architecto vero, exercitationem illum suscipit repellat!</p>
                </div>


                <div class="mt-5 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-5 mx-24">
                    <div>
                        <Image src={facial} alt="" className='services'></Image>

                        <div className={styles.card}>
                            <div className="w-80 h-56 shadow-xl bg-white ml-20">
                                <div className="text-black text-center">
                                    <h2 className={styles.serviceName}>Facial</h2>
                                    <p className={styles.detailsService}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <button className={styles.learnmore}><div className='flex'>LEARN MORE<Image src={rightArrow} alt="" className='w-6 h-3 mt-2 ml-1' /> </div> <Image src={underline} alt="" className='w-11/12'></Image> </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <Image src={faceMassage} alt="" className='services'></Image>
                        <div className={styles.card}>
                            <div className="w-80 h-56 shadow-xl bg-white ml-20">
                                <div className="text-black text-center">
                                    <h2 className={styles.serviceName}>Face Massage</h2>
                                    <p className={styles.detailsService}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <button className={styles.learnmore}><div className='flex'>LEARN MORE<Image src={rightArrow} alt="" className='w-6 h-3 mt-2 ml-1' /> </div> <Image src={underline} alt="" className='w-11/12'></Image> </button>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image src={bodyRelaxation} alt="" className='services'></Image>
                        <div className={styles.card}>
                            <div className="w-80 h-56 shadow-xl bg-white ml-20">
                                <div className="text-black text-center">
                                    <h2 className={styles.serviceName}>Body Relaxation</h2>
                                    <p className={styles.detailsService}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <button className={styles.learnmore}><div className='flex'>LEARN MORE<Image src={rightArrow} alt="" className='w-6 h-3 mt-2 ml-1' /> </div> <Image src={underline} alt="" className='w-11/12'></Image> </button>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <Image src={aroma} alt="" className='services'></Image>
                        <div className={styles.card}>
                            <div className="w-80 h-56 shadow-xl bg-white ml-20">
                                <div className="text-black text-center">
                                    <h2 className={styles.serviceName}>Aroma Therapy</h2>
                                    <p className={styles.detailsService}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <button className={styles.learnmore}><div className='flex'>LEARN MORE<Image src={rightArrow} alt="" className='w-6 h-3 mt-2 ml-1' /> </div> <Image src={underline} alt="" className='w-11/12'></Image> </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={manicure} alt="" className='services'></Image>
                        <div className={styles.card}>
                            <div className="w-80 h-56 shadow-xl bg-white ml-20">
                                <div className="text-black text-center">
                                    <h2 className={styles.serviceName}>Manicure & Pedicure</h2>
                                    <p className={styles.detailsService}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <button className={styles.learnmore}><div className='flex'>LEARN MORE<Image src={rightArrow} alt="" className='w-6 h-3 mt-2 ml-1' /> </div> <Image src={underline} alt="" className='w-11/12'></Image> </button>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Image src={spaCouples} alt="" className='services'></Image>
                        <div className={styles.card}>
                            <div className="w-80 h-56 shadow-xl bg-white ml-20">
                                <div className="text-black text-center">
                                    <h2 className={styles.serviceName}>Spa For Couples</h2>
                                    <p className={styles.detailsService}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <button className={styles.learnmore}><div className='flex'>LEARN MORE<Image src={rightArrow} alt="" className='w-6 h-3 mt-2 ml-1' /> </div> <Image src={underline} alt="" className='w-11/12'></Image> </button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
           </div>

           <OurStory></OurStory>
        </div>
    );
};

export default SpecialServices;