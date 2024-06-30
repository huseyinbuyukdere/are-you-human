(function () {
  const languages = {
    en: {
      question: "Select all images with a traffic light",
      nextButton: "Next",
      successMessage: "Verification complete!",
    },
    tr: {
      question: "Trafik lambası olan tüm resimleri seçin",
      nextButton: "İleri",
      successMessage: "Doğrulama tamamlandı!",
    },
    // Add more languages as needed
  };

  const defaultLanguage = "en";

  // Function to get query parameters from the current script's URL
  function getScriptParams() {
    const script = document.currentScript;
    const params = {};
    if (script) {
      const src = script.src;
      const queryString = src.split("?")[1];
      if (queryString) {
        queryString.split("&").forEach((param) => {
          const [key, value] = param.split("=");
          params[decodeURIComponent(key)] = decodeURIComponent(value);
        });
      }
    }
    return params;
  }

  // Function to set a cookie
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Function to get a cookie
  function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cname) == 0) {
        return c.substring(cname.length, c.length);
      }
    }
    return "";
  }

  const queryParams = getScriptParams();
  const lang = queryParams.lang || defaultLanguage;
  const autoOpen = queryParams.autoOpen === "true";
  const delay = parseInt(queryParams.delay, 10) || 5000;
  const openOnce = queryParams.openOnce === "true";

  // Check if the CAPTCHA has been shown before
  const captchaShown = getCookie("captchaShown");

  function createOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "are-you-human-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = 9999;
    return overlay;
  }

  function createContainer() {
    const container = document.createElement("div");
    container.id = "are-you-human-container";
    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.background = "white";
    container.style.padding = "20px";
    container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    container.style.zIndex = 10000;
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "12px";
    return container;
  }

  function createCaptchaElement() {
    if (document.getElementById("are-you-human-overlay")) {
      // If the modal is already open, do not open another one
      return;
    }

    // Create overlay and container
    const overlay = createOverlay();
    const container = createContainer();

    const question = document.createElement("p");
    question.innerText = languages[lang].question;
    question.style.color = "black";
    container.appendChild(question);

    const imagesContainer = document.createElement("div");
    imagesContainer.style.display = "flex";
    imagesContainer.style.gap = "10px";
    // Placeholder for images
    for (let i = 0; i < 3; i++) {
      const img = document.createElement("img");
      img.src = `https://via.placeholder.com/100?text=${i + 1}`;
      img.style.cursor = "pointer";
      img.onclick = () => img.classList.toggle("selected");
      imagesContainer.appendChild(img);
    }
    container.appendChild(imagesContainer);

    const nextButton = document.createElement("button");
    nextButton.innerText = languages[lang].nextButton;
    nextButton.onclick = () => {
      alert(languages[lang].successMessage);
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      if (typeof window.areYouHumanCallback === "function") {
        window.areYouHumanCallback();
      }
    };
    container.appendChild(nextButton);

    overlay.appendChild(container);
    document.body.appendChild(overlay);
  }

  window.areyouhuman = function (callback) {
    window.areYouHumanCallback = callback;
    if (!openOnce || !captchaShown) {
      createCaptchaElement();
      if (openOnce) {
        setCookie("captchaShown", "true", 365);
      }
    }
  };

  if (autoOpen) {
    setTimeout(() => {
      if (!openOnce || !captchaShown) {
        createCaptchaElement();
        if (openOnce) {
          setCookie("captchaShown", "true", 365);
        }
      }
    }, delay);
  }
})();
