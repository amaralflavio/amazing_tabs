const mainTabs = document.querySelector(".main-tabs");
const mainSliderCircle = document.querySelector(".main-slider-circle");
const roundButtons = document.querySelectorAll(".round-button");

const colors = {
  blue: {
    50: {
      value: "#e3f2fd",
    },
    100: {
      value: "#bbdefb",
    },
  },
  green: {
    50: {
      value: "#e8f5e9",
    },
    100: {
      value: "#c8e6c9",
    },
  },
  purple: {
    50: {
      value: "#f3e5f5",
    },
    100: {
      value: "#e1bee7",
    },
  },
  orange: {
    50: {
      value: "#ffe0b2",
    },
    100: {
      value: "#ffe0b2",
    },
  },
  red: {
    50: {
      value: "#ffebee",
    },
    100: {
      value: "#ffcdd2",
    },
  },
};

const getColor = (color, variant) => {
  return colors[color][variant].value;
};

mainTabs.addEventListener("click", (e) => {
  const root = document.documentElement;

  if (e.target.classList.contains("round-button")) {
    mainSliderCircle.classList.remove("animate-jello");
    void mainSliderCircle.offsetWidth;
    mainSliderCircle.classList.add("animate-jello");

    root.style.setProperty(
      "--translate-main-slider",
      e.target.dataset.translateValue
    );
    root.style.setProperty(
      "--main-slider-color",
      getColor(e.target.dataset.color, 50)
    );
    root.style.setProperty(
      "--background-color",
      getColor(e.target.dataset.color, 100)
    );

    roundButtons.forEach((roundButton) => {
      roundButton.classList.remove("active");
    });

    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
    }
  }
});
