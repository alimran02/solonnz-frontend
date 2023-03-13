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
                
              </div>
           </div>
           
           
     
       
    );
};

export default OurStory;