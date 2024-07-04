import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import conferenceImage from '../../assets/evenements/conference.png';
import handicapImage from '../../assets/evenements/handicap.png';
import signesImage from '../../assets/evenements/signes.png';
import './eventSlider.css';

function EventSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      centeredSlides={true}
      speed={1500}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        draggable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="event-card">
          <img src={conferenceImage} alt="Inclus'Event Conference" />
          <p>Description de la conférence</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="event-card">
          <img src={handicapImage} alt="Inclus'Event Handicap" />
          <p>Description de l'événement handicap</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="event-card">
          <img src={signesImage} alt="Inclus'Event Signes" />
          <p>Description de l'événement signes</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default EventSlider;

