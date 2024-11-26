import React, { useState } from "react";
import styles from "./Home.module.css";
import { useEffect } from "react";
const Home = () => {
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
              Unlock the health impact of Air Quality with precision
            </h1>
            <div className={styles.whiteSquare}>
              <img src="./smoke.png" alt="Фото" className={styles.image} />
              <p className={styles.aboutText}>
                BreatheSafetyIndex provides a data-driven assessment of health
                risks linked to outdoor air pollution and weather parameters,
                empowering businesses to make informed decisions on air quality
                impacts. Through advanced analytics and a robust API, our
                platform offers real-time and cumulative health risk
                evaluations, designed to seamlessly integrate into your
                applications.
              </p>{" "}
              <div>
                <div className={styles.arrow1} onClick={openModal}>
                  <div></div>
                </div>
              </div>
              <p className={styles.aboutTextMoreButton}>Problem statement.</p>
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
                <br />
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
              src="1fon.png"
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
                {/* <br /> */}
                <p className={styles.linkText}>
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
                {/* <div
                  className={styles.arrow1Button}
                  onClick={() => setIsModalOpen(false)}
                >
                  <div></div> */}
                {/* </div> */}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
