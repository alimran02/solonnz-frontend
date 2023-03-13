import React from 'react';
import Image from 'next/image';
import storyImg from "../../../assets/Home/special-service/ourstory.png";
import storybg from "../../../assets/Home/special-service/storybg.png";
import underline from "../../../assets/Home/special-service/underline.png";
import rightArrow from "../../../assets/Home/special-service/rightarrow.png";
import halfCircle1 from "../../../assets/Home/special-service/halfCircle1.png";
import halfCircle2 from "../../../assets/Home/special-service/halfCirlce2.png";
import styles from './OurStory.module.css'



const OurStory = () => {
    return (
        <div className='ml-48 flex'>
        {/* // <div className={styles.storyContainer}> */}
            <Image src={halfCircle1} alt="" className={styles.halfCircle1} />
            <Image src={storyImg} alt="" className={styles.img} />
            {/* <Image src={storybg} alt="" className={styles.bgStory} /> */}
            

          
          
              <div>
                <div className={styles.bgStory}>
                    <div className={styles.textContainer}>


                        <h1 className={styles.heading}>Our Story <span><Image src={underline} alt="" className='ml-32'></Image></span> </h1>
                        <div className=''>
                            <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit delectus cumque asperiores culpa omnis modi, aliquid dolores nesciunt nemo pariatur earum commodi quis praesentium fugiat voluptatibus
                                repellat expedita facilis. Doloribus, animi culpa nesciunt suscipit repudiandae minima hic quaerat excepturi! Inventore.</p>
                            <button className={styles.button}>READ MORE

                                <Image src={rightArrow} alt='' className='pt-1 h-5 w-6' ></Image>
                            </button>
                            <Image src={halfCircle2} alt="" className={styles.halfCircle2} />
                        </div>
                    </div>
                </div>

                <div className={styles.happyCustomer}>
                    <div>
                        <h2>955+</h2>
                        <h4>Happy Customer</h4>
                    </div>
                    <div>
                        <h2>245+</h2>
                        <h4>Happy Customer</h4>
                    </div>
                </div>

              </div>
           </div>
           
           
     
       
    );
};

export default OurStory;