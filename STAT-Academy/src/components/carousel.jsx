import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Carousel() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
    >
      <SwiperSlide>
        <img src="https://cruzrojasal.org.sv/wp-content/uploads/2024/06/Curso-BAPA02.png" alt="1" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://grupoferga.com/wp-content/uploads/2023/12/que-tipos-de-primeros-auxilios-existen.jpg" alt="2" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://www.bupasalud.com/sites/default/files/inline-images/que-son-primeros-auxilios-4.jpg" alt="3" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;