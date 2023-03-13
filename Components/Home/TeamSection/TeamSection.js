import React, { useState } from 'react';
import Image from 'next/image';
import styles from './TeamSection.module.css'
import rightArrow from '../../../assets/Home/team/rightArrow.png'
import underline from '../../../assets/Home/team/underline.png'
import member1 from '../../../assets/Home/team/memebr1.png'
import member2 from '../../../assets/Home/team/memebr2.png'
import member3 from '../../../assets/Home/team/mmeber3.png'
import member4 from '../../../assets/Home/team/memebr4.png'
import facebook from '../../../assets/Home/team/facebook.png'
import twitter from '../../../assets/Home/team/twitter.png'
import insta from '../../../assets/Home/team/insta.png'

import right from '../../../assets/Home/team/right-arrow.png'
import left from '../../../assets/Home/team/leftArrow.png'






const TeamSection = () => {

  
    return (
        <div className={styles.teamContainer}>
             {/* <div> */}
                 {/* <div className="hero-content text-neutral-content"> */}
                   {/* <div className='ml-80 mb-72 md:flex'> */}
                    <div className='grid-cols-12 mb-42 md:flex'>
                        <div className='grid-cols-4'>
                            <div className={styles.textContainer}>


                                <h1 className={styles.heading}>Our Team <span><Image src={underline} alt="" className='ml-32'></Image></span> </h1>
                                <div className=''>
                                    <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit Veniam!</p>
                                    <button className={styles.button}>SHOP NOW
                               
                                        <Image src={rightArrow} alt='' className='pt-1 h-5 w-6' ></Image>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <div className={styles.imageContainer}> */}
                      <div className='grid-cols-8'>
                            <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-24'>

                                <div className={styles.imageWrapper}>
                                    <Image src={member2} alt="" />
                                   <h2 className={styles.name}>Sarah</h2>
                                    <div className={styles.socialIcons}>

                                        <span> <Image src={facebook} alt=""></Image></span>
                                        <span><Image src={twitter} alt=""></Image></span>
                                        <span><Image src={insta} alt=""></Image></span>

                                    </div>
                                </div>

                                <div className={styles.imageWrapper}>
                                    <Image src={member2} alt="" />
                                    <h2 className={styles.name}>Sarah</h2>
                                    <div className={styles.socialIcons}>

                                        <span> <Image src={facebook} alt=""></Image></span>
                                        <span><Image src={twitter} alt=""></Image></span>
                                        <span><Image src={insta} alt=""></Image></span>

                                    </div>
                                </div>
                                <div className={styles.imageWrapper}>
                                    <Image src={member2} alt="" />
                                    <h2 className={styles.name}>Sarah</h2>
                                    <div className={styles.socialIcons}>

                                        <span> <Image src={facebook} alt=""></Image></span>
                                        <span><Image src={twitter} alt=""></Image></span>
                                        <span><Image src={insta} alt=""></Image></span>

                                    </div>
                                </div>
                      

                     

                            


                            </div> 
                    <div className='flex justify-end gap-5 mr-8'>
                        <div className='flex'>
                            
                                <Image src={left} alt='' className='bg-none' ></Image>
                                
                            
                        </div>
                        <div className='flex'>
                           
                                <Image src={right} alt='' ></Image>
                               
                        </div>
                    </div>

                      </div>
                       

                            
                   </div>

           
                  </div>
                   
                    
                   
                // </div>
            // </div>



      
        
    );
};

export default TeamSection;