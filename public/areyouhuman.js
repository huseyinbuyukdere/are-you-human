(function () {
  const languages = {
    en: {
      questions: [
        "Select all images with a traffic light",
        "Select all images with a car",
        "Select all images with a tree",
      ],
      nextButton: "Next",
      successMessage: "Verification complete!",
      errorMessages: [
        "Please try again.",
        "Incorrect selection, try again.",
        "That's not right, please select the correct images.",
      ],
    },
    tr: {
      questions: [
        "Trafik lambası olan tüm resimleri seçin",
        "Araba olan tüm resimleri seçin",
        "Ağaç olan tüm resimleri seçin",
      ],
      nextButton: "İleri",
      successMessage: "Doğrulama tamamlandı!",
      errorMessages: [
        "Lütfen tekrar deneyin.",
        "Yanlış seçim, tekrar deneyin.",
        "Bu doğru değil, lütfen doğru resimleri seçin.",
      ],
    },
    // Add more languages as needed
  };

  const defaultLanguage = "en";

  const images = [
    {
      url: "https://via.placeholder.com/150?text=Image+1",
      correct: false,
      id: "1",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+2",
      correct: true,
      id: "2",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+3",
      correct: false,
      id: "3",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+4",
      correct: true,
      id: "4",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+5",
      correct: false,
      id: "5",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+6",
      correct: true,
      id: "6",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+7",
      correct: false,
      id: "7",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+8",
      correct: true,
      id: "8",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+9",
      correct: false,
      id: "9",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+10",
      correct: true,
      id: "10",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+11",
      correct: false,
      id: "11",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+12",
      correct: true,
      id: "12",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+13",
      correct: false,
      id: "13",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+14",
      correct: true,
      id: "14",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+15",
      correct: false,
      id: "15",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+16",
      correct: true,
      id: "16",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+17",
      correct: false,
      id: "17",
    },
    {
      url: "https://via.placeholder.com/150?text=Image+18",
      correct: true,
      id: "18",
    },
  ];

  let currentSet = 0;
  const imagesPerSet = 6;

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
    container.style.width = "80%"; // Updated for responsiveness
    container.style.maxWidth = "500px"; // Updated for desktop view
    container.style.maxHeight = "80%"; // Added for responsiveness
    container.style.overflowY = "auto"; // Added for responsiveness
    return container;
  }

  function showError(errorElement) {
    const errorIndex = Math.floor(
      Math.random() * languages[lang].errorMessages.length
    );
    const errorMessage = languages[lang].errorMessages[errorIndex];
    errorElement.innerText = errorMessage;
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
    question.innerText =
      languages[lang].questions[currentSet % languages[lang].questions.length];
    question.style.color = "black";
    container.appendChild(question);

    const imagesContainer = document.createElement("div");
    imagesContainer.style.display = "grid";
    imagesContainer.style.gridTemplateColumns =
      "repeat(auto-fill, minmax(100px, 1fr))";
    imagesContainer.style.gap = "10px";

    const startIndex = currentSet * imagesPerSet;
    const endIndex = startIndex + imagesPerSet;
    const currentImages = images.slice(startIndex, endIndex);

    currentImages.forEach((image) => {
      const imgWrapper = document.createElement("div");
      imgWrapper.style.position = "relative";
      imgWrapper.style.width = "100%";
      imgWrapper.style.paddingBottom = "100%"; // Maintains aspect ratio
      imgWrapper.style.overflow = "hidden";
      imgWrapper.style.boxSizing = "border-box";

      const img = document.createElement("img");
      img.src = image.url;
      img.id = image.id;
      img.style.position = "absolute";
      img.style.top = "0";
      img.style.left = "0";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      img.style.cursor = "pointer";
      img.onclick = () => {
        img.classList.toggle("selected");
        if (img.classList.contains("selected")) {
          img.style.border = "2px solid green";
          img.style.opacity = "0.6";
        } else {
          img.style.border = "none";
          img.style.opacity = "1";
        }
      };

      imgWrapper.appendChild(img);
      imagesContainer.appendChild(imgWrapper);
    });
    container.appendChild(imagesContainer);

    const errorElement = document.createElement("p");
    errorElement.style.color = "red";
    container.appendChild(errorElement);

    const nextButton = document.createElement("button");
    nextButton.innerText = languages[lang].nextButton;
    nextButton.onclick = () => {
      const selectedImages = Array.from(
        imagesContainer.getElementsByClassName("selected")
      );
      const correctSelection = selectedImages.every((img) => {
        return currentImages.find(
          (image) => image.id === img.id && image.correct
        );
      });

      if (correctSelection) {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
        currentSet++;
        if (currentSet * imagesPerSet < images.length) {
          createCaptchaElement();
        } else {
          alert(languages[lang].successMessage);
          if (typeof window.areYouHumanCallback === "function") {
            window.areYouHumanCallback();
          }
          // Reset currentSet for future calls
          currentSet = 0;
        }
      } else {
        showError(errorElement);
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
