import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

// Define language options
export const languages = [
    { code: 'tr', name: 'Türkçe' },
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
    { code: 'es', name: 'Español' },
];

// Define translations
export const translations = {
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