export const filters = {
  none: "none",
  grayscale: "grayscale(100%)",
  sepia: "sepia(100%)",
  invert: "invert(100%)",
  warm: "sepia(50%) saturate(150%) hue-rotate(-15deg)",
  cool: "saturate(150%) hue-rotate(15deg)",
  // Vintage and Retro Filters
  vintage: "sepia(40%) brightness(90%) contrast(110%)",
  retroFade: "sepia(30%) saturate(90%) brightness(120%) contrast(85%)",
  oldFilm: "grayscale(100%) sepia(20%) brightness(90%) contrast(120%)",
  polaroid: "sepia(20%) brightness(105%) contrast(85%) saturate(110%)",

  // Color Enhancement Filters
  vibrant: "saturate(200%) contrast(110%)",
  vivid: "saturate(180%) brightness(105%) contrast(120%)",
  fresh: "saturate(140%) brightness(110%) contrast(105%)",
  crisp: "contrast(130%) brightness(105%)",

  // Mood Filters
  dreamy: "brightness(110%) contrast(90%) saturate(85%) blur(0.5px)",
  moody: "brightness(95%) contrast(115%) saturate(90%)",
  dramatic: "contrast(130%) brightness(90%) saturate(110%)",
  melancholy: "saturate(90%) brightness(95%) contrast(105%) sepia(20%)",

  // Temperature Filters
  arctic: "brightness(105%) saturate(80%) hue-rotate(180deg)",
  desert: "brightness(105%) saturate(120%) hue-rotate(-15deg) sepia(20%)",
  tropical: "brightness(105%) saturate(140%) hue-rotate(5deg)",
  sunset: "brightness(105%) saturate(130%) hue-rotate(-10deg) sepia(30%)",

  // Creative Color Filters
  emerald: "hue-rotate(120deg) saturate(130%)",
  amethyst: "hue-rotate(270deg) saturate(130%)",
  ruby: "hue-rotate(-30deg) saturate(150%)",
  sapphire: "hue-rotate(180deg) saturate(140%)",

  // Artistic Filters
  noir: "grayscale(100%) contrast(120%) brightness(90%)",
  silhouette: "contrast(200%) brightness(50%)",
  highnoon: "brightness(120%) contrast(110%) saturate(110%)",
  midnight: "brightness(80%) contrast(120%) saturate(90%)",

  // Modern Filters
  clarity: "contrast(120%) brightness(102%) saturate(110%)",
  chrome: "grayscale(50%) brightness(105%) contrast(115%)",
  matte: "contrast(90%) brightness(105%) saturate(90%)",
  fade: "brightness(105%) saturate(80%) contrast(90%)",

  // Seasonal Filters
  spring: "brightness(105%) saturate(120%) hue-rotate(5deg)",
  summer: "brightness(110%) saturate(130%) contrast(105%)",
  autumn: "sepia(30%) saturate(110%) brightness(100%)",
  winter: "brightness(105%) saturate(80%) contrast(110%)",

  // Special Effects
  neon: "brightness(110%) contrast(130%) saturate(200%)",
  cosmic: "hue-rotate(180deg) saturate(200%) brightness(110%)",
  cyberpunk: "hue-rotate(-45deg) saturate(200%) contrast(120%)",
  synthwave: "hue-rotate(210deg) saturate(180%) contrast(110%)",

  // Time of Day
  dawn: "brightness(105%) saturate(110%) sepia(20%) hue-rotate(-10deg)",
  dusk: "brightness(95%) saturate(120%) sepia(30%) hue-rotate(-5deg)",
  daylight: "brightness(110%) saturate(110%) contrast(105%)",
  twilight: "brightness(90%) saturate(110%) sepia(20%)",

  // Film Simulation
  kodak: "sepia(20%) saturate(120%) contrast(105%)",
  fuji: "contrast(110%) saturate(115%) brightness(105%)",
  crossProcess: "hue-rotate(-10deg) saturate(140%) contrast(120%)",
  slide: "saturate(130%) contrast(120%) brightness(105%)",

  // Experimental
  glitch: "hue-rotate(360deg) saturate(200%) contrast(150%)",
  psychedelic: "hue-rotate(180deg) saturate(200%) contrast(120%)",
  binary: "contrast(200%) brightness(150%) grayscale(100%)",
  infrared: "hue-rotate(180deg) saturate(200%) contrast(120%) brightness(110%)",
};
