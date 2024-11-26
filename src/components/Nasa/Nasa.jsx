import React, { useState } from "react";
import styles from "./Nasa.module.css";
import { useEffect } from "react";

const Nasa = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1800);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const openModal = () => setIsModalOpen(true);
  return (
    <div>
      {isWideScreen ? (
        <section className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              BreatheSafetyIndex`s key offerings:
            </h1>
            <div className={styles.textImageWrapper}>
              {" "}
              <div className={styles.aboutSection}>
                <div className={styles.aboutText}>
                  <ul>
                    <li>
                      High quality of environmental dataThe integration of air
                      quality data from various sources (including space-based
                      monitoring programs (ESA and NASA/ TEMPO) expands the
                      capabilities to provide high-resolution hourly pollutant
                      data.
                    </li>
                    <li>
                      Comprehensive outdoor environment hazards assessmentsOur
                      system evaluates risk levels for respiratory,
                      cardiovascular, immune, and other systems based on live
                      air quality data, giving an all-encompassing view of
                      pollution’s impact on health.
                    </li>
                    <li>
                      Simple API integrationEasily integrate our JSON-based API
                      into your weather services, smart city platforms, health
                      apps, or public health management systems. The
                      user-friendly format ensures seamless access to our
                      extensive data, helping you deliver reliable, real-time
                      information on air quality risks to your users.
                    </li>
                  </ul>
                </div>
                {/* <p className={styles.aboutText}>
              High quality of environmental dataThe integration of air quality
              data from various sources (including space-based monitoring
              programs (ESA and NASA/ TEMPO) expands the capabilities to provide
              high-resolution hourly pollutant data.Comprehensive outdoor
              environment hazards assessmentsOur system evaluates risk levels
              for respiratory, cardiovascular, immune, and other systems based
              on live air quality data, giving an all-encompassing view of
              pollution’s impact on health.Simple API integrationEasily
              integrate our JSON-based API into your weather services, smart
              city platforms, health apps, or public health management systems.
              The user-friendly format ensures seamless access to our extensive
              data, helping you deliver reliable, real-time information on air
              quality risks to your users.
            </p> */}
                <img src="./Nasa.png" alt="Фото" className={styles.image} />{" "}
              </div>
              <div className={styles.advantagesSection}>
                <div className={styles.arrow1} onClick={openModal}>
                  <div></div>
                </div>
                <p>Methodical approach for evaluation</p>
              </div>
              {/* <div className={styles.arrow1} onClick={openModal}>
            <div></div>
          </div> */}
            </div>
          </div>
          {isModalOpen && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <p className={styles.aboutTextMore}>
                  Problem statement.With outdoor air pollution contributing to
                  over 238,000 premature deaths in the EU alone, translating air
                  quality data into meaningful health insights has become
                  essential. Standard air quality measures offer limited
                  guidance on the direct effects of pollution on human health,
                  leaving a significant gap in understanding the specific risks
                  associated with daily exposure to pollutants.
                  BreatheSafetyIndex addresses this gap, empowering businesses
                  and public health platforms with targeted health risk
                  assessments based on environmental data. Our platform bridges
                  the divide between raw pollution data and actionable,
                  health-centered insights, aiding decision-making in industries
                  where human safety and well-being are paramount.
                </p>
                <br />{" "}
                <div
                  className={styles.arrow1Button}
                  onClick={() => setIsModalOpen(false)}
                >
                  <div></div>
                </div>
                <p>
                  https://www.eea.europa.eu/en/topics/in-depth/air-pollution/eow-it-affects-our-health
                </p>
              </div>
            </div>
          )}
        </section>
      ) : (
        <div>
          <div className={styles.imageContainer}>
            <img
              src="5fon.png"
              alt="Landing page"
              className={styles.mainImage}
            />
            <button className={styles.overlayButton} onClick={openModal}>
              <img src="./icons8.png" alt="#" className={styles.buttonImage} />
            </button>
          </div>
          {isModalOpen && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <p className={styles.aboutTextMore}>
                  Problem statement.With outdoor air pollution contributing to
                  over 238,000 premature deaths in the EU alone, translating air
                  quality data into meaningful health insights has become
                  essential. Standard air quality measures offer limited
                  guidance on the direct effects of pollution on human health,
                  leaving a significant gap in understanding the specific risks
                  associated with daily exposure to pollutants.
                  BreatheSafetyIndex addresses this gap, empowering businesses
                  and public health platforms with targeted health risk
                  assessments based on environmental data. Our platform bridges
                  the divide between raw pollution data and actionable,
                  health-centered insights, aiding decision-making in industries
                  where human safety and well-being are paramount.
                </p>
                <br />
                <p>
                  https://www.eea.europa.eu/en/topics/in-depth/air-pollution/eow-it-affects-our-health
                </p>
                <button
                  className={styles.overlayButtonModal}
                  onClick={() => setIsModalOpen(false)}
                >
                  <img
                    src="./icons8.png"
                    alt="#"
                    className={styles.buttonImage}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Nasa;
