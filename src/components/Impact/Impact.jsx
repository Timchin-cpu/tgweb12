import React, { useState } from "react";
import styles from "./Impact.module.css";
import { useEffect } from "react";

const Impact = () => {
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
              The science behind BreatheSafetyIndex
            </h1>
            <div className={styles.textImageWrapper}>
              {" "}
              <div className={styles.aboutSection}>
                <p className={styles.aboutText}>
                  Leveraging research from leading institutions and backed by a
                  team of experts in public health, environmental science, and
                  data analytics, BreatheSafetyIndex assesses disease risks with
                  unparalleled accuracy. Our model evaluates the effect of air
                  quality on seven key health systems, offering unique insights
                  into the environmental factors impacting human health.
                </p>
                <img src="./scheme.png" alt="Фото" className={styles.image} />
              </div>
              <div className={styles.advantagesSection}>
                <div className={styles.arrow1} onClick={openModal}>
                  <div></div>
                </div>
                <p>Methodical approach for evaluation</p>
              </div>
            </div>
          </div>
          {isModalOpen && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <div className={styles.aboutTextMore}>
                  <p>
                    BreatheSafetyIndex employs a sophisticated risk evaluation
                    model that analyzes pollution’s impact on seven critical
                    health systems, including respiratory, cardiovascular,
                    immune, and nervous systems. The methodology encompasses
                    dynamic data processing, which integrates:
                  </p>
                  <ul>
                    <li>
                      Air Quality and Environmental parameters: Using data on
                      particulate matter (PM2.5 - 5.0), NOx, SOx, temperature,
                      humidity, insolation etc, our system provides a
                      comprehensive evaluation of environmental impacts.
                    </li>
                    <li>
                      Risk calculation models: Our method calculates health risk
                      levels by assessing the frequency increase of adverse
                      events (e.g., cardiovascular conditions) against nominally
                      “safe” thresholds established by the World Health
                      Organization. This model uses a unique set of functions
                      that considers the default baseline risk and adjusts it
                      based on pollutant concentrations, reflecting the
                      cumulative impact of poor air quality on specific bodily
                      systems.
                    </li>
                  </ul>
                </div>
                {/* <p className={styles.aboutTextMore}>
              Problem statement.With outdoor air pollution contributing to over
              238,000 premature deaths in the EU alone, translating air quality
              data into meaningful health insights has become essential.
              Standard air quality measures offer limited guidance on the direct
              effects of pollution on human health, leaving a significant gap in
              understanding the specific risks associated with daily exposure to
              pollutants. BreatheSafetyIndex addresses this gap, empowering
              businesses and public health platforms with targeted health risk
              assessments based on environmental data. Our platform bridges the
              divide between raw pollution data and actionable, health-centered
              insights, aiding decision-making in industries where human safety
              and well-being are paramount.
            </p>
            <br />
            <p>
              https://www.eea.europa.eu/en/topics/in-depth/air-pollution/eow-it-affects-our-health
            </p> */}
                <div
                  className={styles.arrow1Button}
                  onClick={() => setIsModalOpen(false)}
                >
                  <div></div>
                </div>
              </div>
            </div>
          )}
        </section>
      ) : (
        <div>
          <div className={styles.imageContainer}>
            <img
              src="3fon.png"
              alt="Landing page"
              className={styles.mainImage}
            />
            <button className={styles.overlayButton} onClick={openModal}>
              <img src="./icons8.png" alt="#" className={styles.buttonImage} />
            </button>
          </div>{" "}
          {isModalOpen && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <div className={styles.aboutTextMore}>
                  <p>
                    BreatheSafetyIndex employs a sophisticated risk evaluation
                    model that analyzes pollution’s impact on seven critical
                    health systems, including respiratory, cardiovascular,
                    immune, and nervous systems. The methodology encompasses
                    dynamic data processing, which integrates:
                  </p>
                  <ul>
                    <li>
                      Air Quality and Environmental parameters: Using data on
                      particulate matter (PM2.5 - 5.0), NOx, SOx, temperature,
                      humidity, insolation etc, our system provides a
                      comprehensive evaluation of environmental impacts.
                    </li>
                    <li>
                      Risk calculation models: Our method calculates health risk
                      levels by assessing the frequency increase of adverse
                      events (e.g., cardiovascular conditions) against nominally
                      “safe” thresholds established by the World Health
                      Organization. This model uses a unique set of functions
                      that considers the default baseline risk and adjusts it
                      based on pollutant concentrations, reflecting the
                      cumulative impact of poor air quality on specific bodily
                      systems.
                    </li>
                  </ul>
                </div>
                {/* <p className={styles.aboutTextMore}>
              Problem statement.With outdoor air pollution contributing to over
              238,000 premature deaths in the EU alone, translating air quality
              data into meaningful health insights has become essential.
              Standard air quality measures offer limited guidance on the direct
              effects of pollution on human health, leaving a significant gap in
              understanding the specific risks associated with daily exposure to
              pollutants. BreatheSafetyIndex addresses this gap, empowering
              businesses and public health platforms with targeted health risk
              assessments based on environmental data. Our platform bridges the
              divide between raw pollution data and actionable, health-centered
              insights, aiding decision-making in industries where human safety
              and well-being are paramount.
            </p>
            <br />
            <p>
              https://www.eea.europa.eu/en/topics/in-depth/air-pollution/eow-it-affects-our-health
            </p> */}
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

export default Impact;
