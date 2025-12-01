import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

import { CaretLeft, CaretRight } from 'phosphor-react'

import claudineide from '../../assets/claudineide.svg'
import patriciaJunia from '../../assets/patriciaJunia.svg'
import edmilsonRibeiro from '../../assets/edmilsonRibeiro.svg'
import joaoMauricio from '../../assets/joaoMauricio.svg'
import amintasRibeiro from '../../assets/amintasRibeiro.svg'
import joseGeraldo from '../../assets/joseGeraldo.svg'
import joseCardoso from '../../assets/joseCardoso.svg'
import joseFernandes from '../../assets/joseFernandes.svg'
import joseAdao from '../../assets/joseAdao.svg'
import adilsonRamos from '../../assets/adilsonRamos.svg'

import styles from './styles.module.scss'

export function PresidentsGallery() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{className: styles.buttonContent, children: <CaretRight size={40} weight='bold'/>}}
        backwardBtnProps={{className: styles.buttonContent, children: <CaretLeft size={40} weight='bold'/>}}
        responsiveProps={[
          {
            itemsToShow: 1,
            minWidth: 1300,
          },
        ]}
        speed={800}
        easing="ease-in"

      >
      
          <div className={styles.photo}>
              <img src={claudineide} alt="Claudineide Ferreira de Menezes" />
              <span>Claudineide Ferreira de Menezes</span>
          </div>

            <div className={styles.photo}>
              <img src={patriciaJunia} alt="Patricia Júnia Ribeiro" />
              <span>Patricia Júnia Ribeiro</span>
          </div>

          <div className={styles.photo}>
              <img src={edmilsonRibeiro} alt="Edmilson Ribeiro Neves" />
              <span>Edmilson Ribeiro Neves</span>
          </div>
          <div className={styles.photo}>
              <img src={joaoMauricio} alt="João Mauricio Ribeiro" />
              <span>João Mauricio Ribeiro</span>
          </div>
          <div className={styles.photo}>
              <img src={amintasRibeiro} alt="Amintas Ribeiro Neves" />
              <span>Amintas Ribeiro Neves</span>
          </div>
          <div className={styles.photo}>
              <img src={joseGeraldo} alt="José Geraldo Ribeiro" />
              <span>José Geraldo Ribeiro</span>
          </div>
          <div className={styles.photo}>
              <img src={joseCardoso} alt="José Cardoso de Barros" />
              <span>José Cardoso de Barros</span>
          </div>
          <div className={styles.photo}>
              <img src={joseFernandes} alt="José Fernandes da Silva" />
              <span>José Fernandes da Silva</span>
          </div>
          <div className={styles.photo}>
              <img src={joseAdao} alt="José Adão Ramos Queiroz" />
              <span>José Adão Ramos Queiroz</span>
          </div>
          <div className={styles.photo}>
              <img src={adilsonRamos} alt="Adilson Ramos de Queiroz" />
              <span>Adilson Ramos de Queiroz</span>
          </div>
      </ReactSimplyCarousel>
    )
}
