import React, { useState } from 'react'
import './styles.css'

const Header = () => {
  const [isImagesVisible, setIsImagesVisible] = useState(false)
  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const [isHoursVisible, setIsHoursVisible] = useState(false)

  const toggleImages = () => setIsImagesVisible(!isImagesVisible)
  const toggleAbout = () => setIsAboutVisible(!isAboutVisible)
  const toggleHours = () => setIsHoursVisible(!isHoursVisible)

  return (
    <div>
      <header>
        <div className="button-container">
          <button onClick={toggleImages}>Menu</button>
          <button onClick={toggleAbout}>Hakkında</button>
          <button onClick={toggleHours}>Saatler & Lokasyon</button>
        </div>
      </header>

      <main>
        <h1 className="logo-container">Basit Yemekler Restoranı</h1>

        {isAboutVisible && (
          <p className="info-container">
            Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz?
            Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz
            börekleri ile yerel kaynaklı balla sırlanmış haşlanmış somon
            yumurtası? Hadi oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi
            deneyin.
          </p>
        )}

        {isHoursVisible && (
          <div className="hours-container">
            <p>Hafta İçi: 09:00 - 22:00</p>
            <p>Hafta Sonu: 09:00 - 00:00</p>
            <p>Adres: Kadıköy, İstanbul</p>
          </div>
        )}
      </main>

      {isImagesVisible && (
        <div className="image-container">
          <div className="image-wrapper">
            <img className="hot-dog" src="images/hotdogs.jpg" alt="Hot Dog" />
          </div>
          <div className="image-wrapper">
            <img src="images/sandwich.jpg" alt="Sandwich" />
          </div>
          <div className="image-wrapper">
            <img src="images/hamburger.jpg" alt="Hamburger" />
          </div>
        </div>
      )}

      <footer>
        <p>
          Made by{' '}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            Coding Company
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Header
