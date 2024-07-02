import React, { useState } from 'react';
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import { inter, translations } from '../constants';
import ReadmeContent from '@/components/ReadmeContent';
import LanguageSelector from '@/components/LanguageSelector';

export default function Home() {
  const [currentLang, setCurrentLang] = useState('en');

  const openAreYouHuman = () => {
    window.areyouhuman(() => console.log("ok"));
  };

  return (
    <>
      <Head>
        <title>{translations[currentLang].title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <main className={styles.mainContainer}>
        <section className={styles.topSection}>
          <LanguageSelector currentLang={currentLang} onLanguageChange={setCurrentLang} />
          <div className={styles.imageContainer}>
            <Image
              src="https://drive.google.com/uc?export=view&id=1mw4OLnMYYwRPz0DJMMbBpkr3RTlCWSKZ"
              alt="Stop the genocide, Free Palestine"
              layout="fill"
              objectFit="cover"
              className={styles.topImage}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.imageText}>
              <h2>{translations[currentLang].heading}</h2>
              <br /> <br />
              <p>{translations[currentLang].content}</p>
            </div>
            <button className={styles.areYouHumanButton} onClick={openAreYouHuman}>
              {translations[currentLang].buttonText}
            </button>
            <div className={styles.socialMediaIcons}>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.readmeSection}>
          <h2>{translations[currentLang].readmeTitle}</h2>
          <ReadmeContent />
        </section>
      </main>
    </>
  );
}