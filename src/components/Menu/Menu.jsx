import React, { useState } from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <button className={styles.logoButton}>
          <span>Breathe Safety Index</span>
        </button>
        <div className={styles.buttonGroup}>
          <button className={styles.tryNowButton}>Try now</button>
          <div className={styles.menuContainer}>
            <button className={styles.menuButton} onClick={toggleMenu}>
              Menu
            </button>
          </div>
          {isMenuOpen && (
            <ul className={styles.dropdownMenu}>
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#benefits" onClick={() => scrollToSection("benefits")}>
                  Key benefits
                </a>
              </li>
              <li>
                <a href="#impact" onClick={() => scrollToSection("impact")}>
                  Air pollution impact
                </a>
              </li>
              <li>
                <a href="#approach" onClick={() => scrollToSection("approach")}>
                  Assessment approach
                </a>
              </li>
              <li>
                <a href="#nasa" onClick={() => scrollToSection("nasa")}>
                  NASA/TEMPO program
                </a>
              </li>
              <li>
                <a href="#api" onClick={() => scrollToSection("api")}>
                  API capabilities
                </a>
              </li>
              <li>
                <a
                  href="#customers"
                  onClick={() => scrollToSection("customers")}
                >
                  For customers
                </a>
              </li>
              <li>
                <a href="#contacts" onClick={() => scrollToSection("contacts")}>
                  Contacts
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Menu;
