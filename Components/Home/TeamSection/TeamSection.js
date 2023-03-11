import React from 'react';
import Image from 'next/image';
import styles from './TeamSection.module.css'
import rightArrow from '../../../assets/Home/team/rightArrow.png'
import underline from '../../../assets/Home/team/underline.png'
import member1 from '../../../assets/Home/team/memebr1.png'
import member2 from '../../../assets/Home/team/memebr2.png'
import member3 from '../../../assets/Home/team/mmeber3.png'
import member4 from '../../../assets/Home/team/memebr4.png'
import facebook from '../../../assets/Home/team/Rectangle 770.png'




const TeamSection = () => {
    return (
        <div className={styles.teamContainer}>
             <div className="hero min-h-screen">
                 <div className="hero-content text-neutral-content">
                   <div className='ml-80 mb-72 md:flex'>
                        <div className={styles.textContainer}>


                            <h1 className={styles.heading}>Our Team <span><Image src={underline} alt="" className='ml-32'></Image></span> </h1>
                            <div className='mr-96'>
                                <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit Veniam!</p>
                                <button className={styles.button}>SHOP NOW 
                                    
                                <Image src={rightArrow} alt='' className='pt-1 h-5 w-6' ></Image>
                                </button>
                            </div>
                        </div>

                        <div className={styles.imageContainer}>


                            <div className={styles.image}><Image src={member1} alt=""></Image><h2 className={styles.name}>Sarah</h2></div>
                            <div className={styles.image}><Image src={member2} alt=""></Image><h2 className={styles.name}>Lisah</h2></div>

                            <div className={styles.image}><Image src={member3} alt=""></Image><h2 className={styles.name}>Sarah</h2></div>

                            {/* <div className={styles.image}><Image src={member4} alt=""></Image><h2 className={styles.name}>Mara</h2></div> */}

                            <Image src={facebook} alt="" className={styles.socialMedia}></Image>

                            
                       
                        </div> 

                       

                            
                   </div>

                   
                  </div>
                   
                    
                   
                </div>
            </div>



      
        
    );
};

export default TeamSection;