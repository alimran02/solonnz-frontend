import React from 'react';
import Image from 'next/image';
import image1 from '../../../assets/Home/about/image1.png'
import image2 from '../../../assets/Home/about/image2.png'
import circle from '../../../assets/Home/about/circle.png'
import styles from './AboutSpa.module.css'
import halfCircle1 from '../../../assets/Home/about/halfCirle1.png'
import halfCircle2 from '../../../assets/Home/about/halfCircle2.png'
const AboutSpa = () => {
    return (
    //     <div className={styles.aboutContainer}>
        
    //      <div className='section flex px-20 py-32 gap-56'>
            
    //         <div className={styles.parent}>
    //                 <Image src={halfCircle1} alt='' className={styles.halfCircle1}></Image>
    //                 <Image className={styles.spaImage1} src={image1} alt=""></Image>
    //         </div>

    //          <div className={styles.details}>
    //             <h3 className={styles.aboutHeading}>About Salonnz Spa</h3>
    //             <h2 className={styles.heading}>Beauty is all about <br /> <span className='ml-48'>
    //                    you</span></h2>
                 
    //             <Image className={styles.circle} src={circle} alt=""></Image>
    //             <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br /><span className='ml-4'>lobortis sed sapien in pretium. Donec tincidunt, quam.</span></p>
    //          </div>
             
    //          <div className={styles.parent2}>
    //             <Image className={styles.spaImage2} src={image2} alt=""></Image>
    //             <Image src={halfCircle2} alt='' className={styles.halfCircle2}></Image>

    //          </div>
    //     </div>
    //  </div>


    
  
             <div className={styles.aboutContainer}> 
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

                {/* <div className='section flex px-20 py-32 gap-56'> */}

                    <div className={styles.parent}>
                        <Image src={halfCircle1} alt='' className={styles.halfCircle1}></Image>
                        <Image className={styles.spaImage1} src={image1} alt=""></Image>
                    </div>

                    <div className={styles.details}>
                        <h3 className={styles.aboutHeading}>About Salonnz Spa</h3>
                        <h2 className={styles.heading}>Beauty is all about <br /> <span className='ml-36'>
                            you</span></h2>

                        <Image className={styles.circle} src={circle} alt=""></Image>
                        <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br /><span className='ml-4'>lobortis sed sapien in pretium. Donec tincidunt, quam.</span></p>
                    </div>

                    <div className={styles.parent2}>
                        <Image className={styles.spaImage2} src={image2} alt=""></Image>
                        <Image src={halfCircle2} alt='' className={styles.halfCircle2}></Image>

                    </div>
                </div>
             </div>

    // </div>

    );
};

export default AboutSpa;


// import React from 'react';
// import Image from 'next/image';
// import AboutSection from '../../../assets/Home/about/AboutSection.png'

// const AboutSpa = () => {
//     return (
//         <div>
//             <Image src={AboutSection} alt=''></Image>
//         </div>
//     );
// };

// export default AboutSpa;