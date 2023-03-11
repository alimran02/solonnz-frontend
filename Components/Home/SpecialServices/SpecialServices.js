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

const SpecialServices = () => {
    return (
        <div className={styles.serviceContainer}>
            <div className='text-center'>
                <h2 className={styles.heading}>Special Services from Salonnz<span></span></h2>
                <Image src={circle} alt='' className={styles.circle}></Image>
           
                
                <p className={styles.details}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione <br />
                    architecto vero, exercitationem illum suscipit repellat!</p>
            </div>

            
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-5 mx-24">
                <Image src={facial} alt="" className='services'></Image>
                <Image src={faceMassage} alt="" className='services'></Image>
                <Image src={bodyRelaxation} alt="" className='services'></Image>
                <Image src={aroma} alt="" className='services'></Image>
                <Image src={manicure} alt="" className='services'></Image>
                <Image src={spaCouples} alt="" className='services'></Image>
                 
            </div>
        </div>
    );
};

export default SpecialServices;