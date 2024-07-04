import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import conferenceImage from '../../assets/evenements/conference.png';
import handicapImage from '../../assets/evenements/handicap.png';
import signesImage from '../../assets/evenements/signes.png';
import lgbt from '../../assets/evenements/lgbt.jpg'
import bureau from '../../assets/evenements/bureau.png'
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
          <p>Handicap invisible chez les employeurs : <br/> En parler, c’est avancer ! </p>
          <p>08/07/2024</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="event-card">
          <img src={handicapImage} alt="Inclus'Event Handicap" />
          <p>Salariés-aidants : <br/>comment valoriser l'expérience et favoriser le transfert de compétences ?</p>
          <p>12/07/2024</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="event-card">
          <img src={signesImage} alt="Inclus'Event Signes" />
          <p>Surdité et accessibilité : <br/> Comment communiquer en toute fluidité ?</p>
          <p>26/07/2024</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="event-card">
          <img src={lgbt} alt="Inclus'Event lgbt" />
          <p>Identité de genre : <br/> Soutenir les jeunes LGBTQ+</p>
          <p>15/08/2024</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="event-card">
          <img src={bureau} alt="Inclus'Event bureau handicap" />
          <p>Handicap : <br/>Comment répondre efficacement aux enjeux de demain ?</p>
          <p>20/08/2024</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default EventSlider;

