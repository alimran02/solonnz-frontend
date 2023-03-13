import Head from 'next/head'
import Image from 'next/image'
import AboutSpa from '../Components/Home/AboutSpa/AboutSpa'
import Banner from '../Components/Home/Banner/Banner'
import Nav from '../Components/Home/Nav/Nav'
import SpecialServices from '../Components/Home/SpecialServices/SpecialServices'

import TeamSection from '../Components/Home/TeamSection/TeamSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav></Nav>
      <Banner></Banner>
      <AboutSpa></AboutSpa>
      <TeamSection></TeamSection>
     
      <SpecialServices></SpecialServices>
      
      
    </div>
  )
}
