import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import styles from "./Slider.module.scss";
import banner from '../img/Group.png';
import banner2 from '../img/banner.png';
import btnRight from "../img/btn-right.png";
import btnLeft from "../img/btn-left.png";
import smile from "../img/smile.svg";

const Slider = () => {
   const sliderRef = useRef(null);
   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const paginationRef = useRef(null);
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

   // Функція для оновлення стану isMobile
   const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
   };

   useEffect(() => {
      // Додаємо слухач події resize для оновлення стану isMobile
      window.addEventListener('resize', updateIsMobile);

      // Прибираємо слухач при розмонтуванні компонента
      return () => {
         window.removeEventListener('resize', updateIsMobile);
      };
   }, []);

   useEffect(() => {
      // Ініціалізація Swiper
      const swiper = new Swiper(sliderRef.current, {
         modules: [Navigation, Pagination],
         slidesPerView: 1,
         loop: true,
         navigation: {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
         },
         pagination: {
            el: paginationRef.current,
            clickable: true,
            renderBullet: function (index, className) {
               return `<span class="${styles.bullet} ${className}"></span>`;
            },
         },
      });

      // Оновлення навігації Swiper
      setTimeout(() => {
         swiper.params.navigation.prevEl = prevRef.current;
         swiper.params.navigation.nextEl = nextRef.current;
         swiper.navigation.init();
         swiper.navigation.update();
      });

   }, []);

   return (
      <div className={styles.sliderWrapper}>
         <div className="swiper" ref={sliderRef}>
            <div className="swiper-wrapper">
               <div className="swiper-slide">
                  <img src={isMobile ? banner2 : banner} alt="Slide-1" className={styles.banner} />
                  <img src={smile} alt="Smile" className={styles.smile} />
               </div>
               <div className="swiper-slide">
                  <img src={isMobile ? banner2 : banner} alt="Slide-2" className={styles.banner} />
                  <img src={smile} alt="Smile" className={styles.smile} />
               </div>
               <div className="swiper-slide">
                  <img src={isMobile ? banner2 : banner} alt="Slide-3" className={styles.banner} />
                  <img src={smile} alt="Smile" className={styles.smile} />
               </div>
            </div>
            <div className={styles.customPagination} ref={paginationRef}></div>
         </div>
         <div className={styles.prevButton} ref={prevRef}>
            <img src={btnLeft} alt="Previous" />
         </div>
         <div className={styles.nextButton} ref={nextRef}>
            <img src={btnRight} alt="Next" />
         </div>
      </div>
   );
};

export default Slider;