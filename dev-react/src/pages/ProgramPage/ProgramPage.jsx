import React, { useState } from "react";
import eventData from "../../assets/json/confData.json";
import imageData from "../../assets/json/imageData.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "./programPage.css";
import { Link } from "react-router-dom";

function ProgramPage() {
  const themesAll = eventData.map((event) => event.theme);
  const themes = [...new Set(themesAll)];

  const [selectedThemes, setSelectedThemes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleTheme = (theme) => {
    if (theme === "") {
      setSelectedThemes([]);
    } else {
      setSelectedThemes((prevSelectedThemes) => {
        if (prevSelectedThemes.includes(theme)) {
          return prevSelectedThemes.filter((t) => t !== theme);
        } else {
          return [...prevSelectedThemes, theme];
        }
      });
    }
  };

  

  // Vérifie si "Tous les thèmes" est sélectionné
  const allThemesSelected = selectedThemes.length === 0;

  const getRandomIndex = () => {
    return Math.floor(Math.random() * imageData.length);
};

  return (
    <section className="section-program-page">
      <h2 className="page-main-title program-main-title">PROGRAMME</h2>
      <div className="program-main-div">
        <img
          src="../../src/assets/images/image-programs.png"
          className="program-main-img"
          alt="Program"
        />
        <div className="button-filter-style">
          <button
            type="button"
            onClick={handleFilter}
            className="button-filter"
          >
            <img src="../../src/assets/images/filter.svg" alt="Filter" />
          </button>
        </div>
      </div>

      <div className="filter-wrapper-style">
        {isOpen && (
          <div className="filter-wrapper">
            <div className="cntr">
              <input
                type="checkbox"
                name="allThemes"
                id="allThemes"
                className="hidden-xs-up"
                checked={allThemesSelected}
                onChange={() => handleTheme("")}
              />
              <label htmlFor="allThemes" className="cbx label-filter"></label>
              <label htmlFor="allThemes" className="lbl label-filter">
                Tous les thèmes
              </label>
            </div>
            {themes.map((theme, index) => (
              <div className="cntr" key={index}>
                <input
                  type="checkbox"
                  name={theme}
                  id={theme}
                  value={theme}
                  className="hidden-xs-up"
                  checked={selectedThemes.includes(theme)}
                  onChange={() => handleTheme(theme)}
                />
                <label htmlFor={theme} className="cbx label-filter"></label>
                <label htmlFor={theme} className="lbl label-filter">
                  {theme}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedThemes.length === 0
        ? themes.map((theme) => (
         
            <div key={theme} className="theme-container">
              <h3 className="program-theme-title">{theme}</h3>
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                centeredSlides={false}
                speed={1500}
                pagination={{
                  clickable: true,
                  draggable: true,
                }}
                navigation={true}
                className="mySwiper"
                breakpoints={{
                  1024: {
                    slidesPerView: 3.6,
                  },
                }}
              >
                {eventData
                  .filter((event) => event.theme === theme)
                  .map((event) => (
                    <SwiperSlide key={event.id}>
                      <div className="centered-slide-content">
                      <Link to={`/conference/${event.id}`}>
                        <figure className="program-event-figure">
                          <img
                            src={event.image ? event.image : (imageData[getRandomIndex()].url)}
                            alt=""
                            className="event-img"
                          />
                          <figcaption>{event.titre}</figcaption>
                        </figure>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
           
          ))
        : selectedThemes.map((selectedTheme) => (
            <div key={selectedTheme} className="theme-container">
              <h3 className="program-theme-title">{selectedTheme}</h3>
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                centeredSlides={false}
                speed={1500}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                pagination={{
                  clickable: true,
                  draggable: true,
                }}
                navigation={true}
                className="mySwiper"
                breakpoints={{
                  1024: {
                    slidesPerView: 3.6,
                  },
                }}
              >
                {eventData
                  .filter((event) => event.theme === selectedTheme)
                  .map((event) => (
                    <SwiperSlide key={event.id}>
                      <figure className="program-event-figure">
                        <img
                          src={event.image ? event.image : (imageData[getRandomIndex()].url)}
                          alt=""
                          className="event-img"
                        />
                        <figcaption>{event.titre}</figcaption>
                      </figure>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          ))}
    </section>
  );
}

export default ProgramPage;
