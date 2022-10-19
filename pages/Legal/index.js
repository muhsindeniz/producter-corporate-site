import React, { useContext } from 'react'
import Header from "../../components/Header"
import style from "./Legal.module.css"
import mouse from "../../assets/media/icons/mouse.svg"
import TabBar from '../../components/TabBar/TabBar'
import Footer from '../../components/Footer'
import Cards from '../Home/ProductDetailCards'
import { GlobalSettingsContext } from '../../context/GlobalSettingsContext'
const LegalPage = () => {
  let { width } = useContext(GlobalSettingsContext)
  return (
    <div>
      <div className={style.container}>
        <Header count={width > 1024 ?10 : 9} />

        <section className={style.managementContainer}>
          <span className={style.managementToolTopTitle}>producter legal documents</span>
          <h2 className={style.title}>Designed to become <br /> customer-driven</h2>
          <h6 className={style.subDescription}>Collect feedback from your customers and teammates <br />
            and communicate product decisions in one place.</h6>
          <div className={style.mouseScroll}>
            <img src={mouse.src} />
          </div>
        </section>
      </div>

      {/* <section>
        <TabBar />
      </section> */}
      <section className={style.cards}>
        <Cards />
      </section>
      <Footer />
    </div>
  )
}


export default LegalPage