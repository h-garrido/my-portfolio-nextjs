export const transitionVariantsPage = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: 0,
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export const fadeIn = (position: string) => {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.3,
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
    hidden: {
      y: position === "bottom" ? -80 : 0,
      x: position === "right" ? 80 : 0,
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 1.3,
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };
};

export const loadingSpinner = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

export const spinAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
