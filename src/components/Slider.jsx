import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import styles from "./Slider.module.scss";
import banner from '../img/Group.png';
import btnRight from "../img/btn-right.png";
import btnLeft from "../img/btn-left.png";
import smile from "../img/smile.svg";

const Slider = () => {
   const sliderRef = useRef(null);
   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const paginationRef = useRef(null);

   useEffect(() => {
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
                  <img src={banner} alt="Slide-1" />
                  <img src={smile} alt="Smile" className={styles.smile} />
               </div>
               <div className="swiper-slide">
                  <img src={banner} alt="Slide-2" />
                  <img src={smile} alt="Smile" className={styles.smile} />
               </div>
               <div className="swiper-slide">
                  <img src={banner} alt="Slide-3" />
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
