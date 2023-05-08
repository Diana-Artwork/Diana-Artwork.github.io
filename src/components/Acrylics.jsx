// import React from '@astrojs/react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// //var React = require('react');
// //var ReactDOM = require('react-dom');
// import ReactDOM from 'react-dom'
// //import * as Coverflow from 'react-coverflow'
// //var Coverflow = require('react-coverflow');

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import bifrost from '../images/acrylic/Bifrost/Bifrost.jpg';
// import aBeautifulMess from '../images/acrylic/A_Beautiful_Mess.png';
// import aTucsonDay from '../images/acrylic/A_Tucson_Day.jpg';
// import auroraCascade from '../images/acrylic/Aurora_Cascade.jpg';

// function Acrylics() {
//   return (
//     <div className="container">
//       <h1 className="heading">Flower Gallery</h1>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src={bifrost} alt="Bifrost" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={aBeautifulMess} alt="A Beautiful Mess" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={aTucsonDay} alt="A Tucson Day" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={auroraCascade} alt="Aurora Cascade" />
//         </SwiperSlide>
        

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }


// // var fn = function () {
// //   // custom functionality?
// // }

// // ReactDOM.render(
// //   <Coverflow
// //     width={960}
// //     height={480}
// //     displayQuantityOfSide={2}
// //     navigation={false}
// //     enableHeading={false}
// //   >
// //     <div
// //       onClick={() => fn()}
// //       onKeyDown={() => fn()}
// //       role="menuitem"
// //       tabIndex="0"
// //     >
// //       <img
// //         src='./../images/acrylic/A_Beautiful_Mess.png'
// //         alt='A Beautiful Mess'
// //         style={{ display: 'block', width: '100%' }}
// //       />
// //     </div>
// //     <img 
// //       src='./../images/acrylic/North_Carolina_Hills.jpg' 
// //       alt='North Carolina Hills' 
// //       data-action="https://diana-artwork.github.io"/>
// //     <img 
// //       src='./../images/acrylic/Unicorn.jpg' 
// //       alt='Unicorn' 
// //       data-action="https://diana-artwork.github.io"/>
// //   </Coverflow>, 

// //   //document.querySelector('.content')
// // );

// // export const Acrylics = withRouter(() => {

// // })
// export default Acrylics;