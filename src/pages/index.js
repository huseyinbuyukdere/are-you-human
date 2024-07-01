import React, { useState } from 'react';
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// Define language options
const languages = [
  { code: 'tr', name: 'Türkçe' },
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'es', name: 'Español' },
];

// Define translations
const translations = {
  tr: {
    title: "Ana Sayfa",
    heading: "İnsan mısınız?",
    content: "Filistin'e karşı yapılan baskı ve soykırım, uzun süredir devam etmektedir. 7 Ekim'den bu yana şiddetin yeniden tırmanması, bölgede derinleşen insan hakları ihlalleri ve acımasızca öldürülen sivil kayıplarla hala devam etmektedir. İsrail'in Filistin topraklarındaki işgali, Filistinlilerin günlük yaşamını olumsuz etkilemekte ve çatışmayı körüklemektedir. Uluslararası toplumun barış çabalarına rağmen, Filistin halkı ciddi insani krizlerle karşı karşıya kalmaktadır. Bu sadece Müslüman olanların değil, tüm insanların vicdanını sızlatan ve tepki verilmesi gereken bir durumdur. Lütfen zulme karşı bir olup hep birlikte ses olalım.",
    buttonText: "İnsan mısınız'ı Aç",
    readmeTitle: "README İçeriği",
  },
  en: {
    title: "Home Page",
    heading: "Are You Human?",
    content: "The oppression and genocide against Palestine have been ongoing for a long time. Since October 7, the re-escalation of violence continues with deepening human rights violations in the region and ruthlessly killed civilian casualties. Israel's occupation of Palestinian territories negatively affects the daily lives of Palestinians and fuels the conflict. Despite the international community's peace efforts, the Palestinian people face serious humanitarian crises. This is a situation that should be responded to and pricks the conscience of not only Muslims but all people. Let's unite against oppression and raise our voices together.",
    buttonText: "Open Are you human",
    readmeTitle: "README Content",
  },
  ar: {
    title: "الصفحة الرئيسية",
    heading: "هل أنت إنسان؟",
    content: "إن القمع والإبادة الجماعية ضد فلسطين مستمران منذ فترة طويلة. منذ 7 أكتوبر، يستمر تصاعد العنف مجددًا مع تعميق انتهاكات حقوق الإنسان في المنطقة والضحايا المدنيين الذين قُتلوا بوحشية. يؤثر احتلال إسرائيل للأراضي الفلسطينية سلبًا على الحياة اليومية للفلسطينيين ويؤجج الصراع. على الرغم من جهود السلام التي يبذلها المجتمع الدولي، يواجه الشعب الفلسطيني أزمات إنسانية خطيرة. هذا وضع يجب الرد عليه ويؤثر على ضمير ليس فقط المسلمين ولكن جميع الناس. دعونا نتحد ضد الظلم ونرفع أصواتنا معًا.",
    buttonText: "افتح 'هل أنت إنسان'",
    readmeTitle: "محتوى README",
  },
  es: {
    title: "Página de inicio",
    heading: "¿Eres humano?",
    content: "La represión y el genocidio contra Palestina vienen de lejos. Desde el 7 de octubre, continúa la renovada escalada de violencia, con profundas violaciones de derechos humanos y brutales víctimas civiles en la región. La ocupación israelí de los territorios palestinos afecta negativamente a la vida cotidiana de los palestinos y aviva el conflicto. A pesar de los esfuerzos de la comunidad internacional por la paz, el pueblo palestino se enfrenta a graves crisis humanitarias. Se trata de una situación que hiere la conciencia de todas las personas, no sólo de los musulmanes, y exige una reacción. Por favor, unámonos contra la opresión y seamos una voz común.",
    buttonText: "Abrir Are You Human",
    readmeTitle: "Contenido README",
  },
};

// Language selector component
const LanguageSelector = ({ currentLang, onLanguageChange }) => (
  <div className={styles.languageSelector}>
    <select value={currentLang} onChange={(e) => onLanguageChange(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  </div>
);

// README content component
const ReadmeContent = () => (
  <div className={styles.readmeContent}>
    <h1>"Are you human?" Script Usage Guide</h1>
    <p>This guide explains how to use the "Are you human?" CAPTCHA script on your website and the parameters the script can take.</p>

    <h2>Usage</h2>
    <p>To include the script on your website, follow these steps:</p>

    <h3>1. Include the Script in Your Page</h3>
    <p>Add the script between the <code>head</code> or <code>body</code> tags of your web page:</p>
    <pre><code>{`<script src="https://yourcdn.com/areyouhuman.js?lang=en&autoOpen=true&delay=5000&openOnce=true"></script>`}</code></pre>

    <h3>2. Trigger the Script Programmatically</h3>
    <p>To trigger the script manually, use the following JavaScript code:</p>
    <pre><code>{`<script>
  window.areyouhuman(() => {
    console.log("CAPTCHA completed");
  });
</script>`}</code></pre>

    <h2>Parameters</h2>
    <p>The script can take various parameters via the URL. These parameters are explained below:</p>

    <ul>
      <li><strong>lang</strong>: Sets the language of the script. Supported languages: <code>en</code> (English), <code>tr</code> (Turkish). Default: <code>en</code>.
        <ul><li>Example: <code>lang=tr</code></li></ul>
      </li>
      <li><strong>autoOpen</strong>: Determines whether the script should open automatically. Values: <code>true</code> or <code>false</code>. Default: <code>false</code>.
        <ul><li>Example: <code>autoOpen=true</code></li></ul>
      </li>
      <li><strong>delay</strong>: If <code>autoOpen</code> is <code>true</code>, this sets the delay in milliseconds before the script opens. Value: positive integer. Default: <code>5000</code> (5 seconds).
        <ul><li>Example: <code>delay=3000</code> (3 seconds)</li></ul>
      </li>
      <li><strong>openOnce</strong>: Ensures the script opens only once and does not open again. This is achieved using a cookie. Values: <code>true</code> or <code>false</code>. Default: <code>false</code>.
        <ul><li>Example: <code>openOnce=true</code></li></ul>
      </li>
    </ul>

    <h2>Examples</h2>

    <h3>1. In Turkish, Open Automatically After 3 Seconds</h3>
    <pre><code>{`<script src="https://yourcdn.com/areyouhuman.js?lang=tr&autoOpen=true&delay=3000"></script>`}</code></pre>

    <h3>2. In English, Manual Trigger, Open Only Once</h3>
    <pre><code>{`<script src="https://yourcdn.com/areyouhuman.js?lang=en&openOnce=true"></script>
<script>
  window.areyouhuman(() => {
    console.log("CAPTCHA completed");
  });
</script>`}</code></pre>

    <p>This guide provides the necessary information to easily use the "Are you human?" script on your website. If you have any additional questions or issues, please contact our support team.</p>
  </div>
);

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