import React from 'react';
import styles from "@/styles/Home.module.css";

const ReadmeContent = () => (
    <div className={styles.readmeContent}>
        <h1>"Are you human?" Script Kullanım Kılavuzu</h1>
        <p>Bu kılavuz, "Are you human?" CAPTCHA scriptinin web sitenizde nasıl kullanılacağını ve scriptin alabileceği parametreleri açıklar.</p>

        <h2>Kullanım</h2>
        <p>Scripti web sitenize dahil etmek için şu adımları izleyin:</p>

        <h3>1. Scripti Sayfanıza Ekleyin</h3>
        <p>Scripti web sayfanızın <code>head</code> veya <code>body</code> etiketleri arasına ekleyin:</p>
        <pre><code>{`<script src="https://yourcdn.com/areyouhuman.js?lang=en&autoOpen=true&delay=5000&openOnce=true"></script>`}</code></pre>

        <h3>2. Scripti Programatik Olarak Tetikleyin</h3>
        <p>Scripti manuel olarak tetiklemek için aşağıdaki JavaScript kodunu kullanın:</p>
        <pre><code>{`<script>
  window.areyouhuman(() => {
    console.log("CAPTCHA tamamlandı");
  });
</script>`}</code></pre>

        <h2>Parametreler</h2>
        <p>Script, URL üzerinden çeşitli parametreler alabilir. Bu parametreler aşağıda açıklanmıştır:</p>

        <ul>
            <li><strong>lang</strong>: Scriptin dilini ayarlar. Desteklenen diller: <code>en</code> (İngilizce), <code>tr</code> (Türkçe). Varsayılan: <code>en</code>.
                <ul><li>Örnek: <code>lang=tr</code></li></ul>
            </li>
            <li><strong>autoOpen</strong>: Scriptin otomatik olarak açılıp açılmayacağını belirler. Değerler: <code>true</code> veya <code>false</code>. Varsayılan: <code>false</code>.
                <ul><li>Örnek: <code>autoOpen=true</code></li></ul>
            </li>
            <li><strong>delay</strong>: Eğer <code>autoOpen</code> <code>true</code> ise, scriptin açılmadan önceki gecikme süresini milisaniye cinsinden ayarlar. Değer: pozitif tam sayı. Varsayılan: <code>5000</code> (5 saniye).
                <ul><li>Örnek: <code>delay=3000</code> (3 saniye)</li></ul>
            </li>
            <li><strong>openOnce</strong>: Scriptin yalnızca bir kez açılmasını ve tekrar açılmamasını sağlar. Bu, bir çerez kullanılarak gerçekleştirilir. Değerler: <code>true</code> veya <code>false</code>. Varsayılan: <code>false</code>.
                <ul><li>Örnek: <code>openOnce=true</code></li></ul>
            </li>
        </ul>

        <h2>Örnekler</h2>

        <h3>1. Türkçe Olarak, 3 Saniye Sonra Otomatik Açılma</h3>
        <pre><code>{`<script src="https://yourcdn.com/areyouhuman.js?lang=tr&autoOpen=true&delay=3000"></script>`}</code></pre>

        <h3>2. İngilizce Olarak, Manuel Tetikleme, Yalnızca Bir Kez Açılma</h3>
        <pre><code>{`<script src="https://yourcdn.com/areyouhuman.js?lang=en&openOnce=true"></script>
<script>
  window.areyouhuman(() => {
    console.log("CAPTCHA tamamlandı");
  });
</script>`}</code></pre>

        <p>Bu kılavuz, "Are you human?" scriptini web sitenizde kolayca kullanmanız için gereken bilgileri sağlar. Ek sorularınız veya sorunlarınız varsa, lütfen destek ekibimizle iletişime geçin.</p>
    </div>
);

export default ReadmeContent;