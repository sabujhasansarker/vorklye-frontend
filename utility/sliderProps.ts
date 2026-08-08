import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

export const sliderProps = {
  testimonial: {
    // Inject the required Swiper modules
    modules: [Navigation, Pagination, Autoplay, A11y],
    loop: true,
    speed: 800,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 5,
    centeredSlides: true,
    centeredSlidesBounds: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    },
    pagination: {
      el: ".testimonial-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  },
};
