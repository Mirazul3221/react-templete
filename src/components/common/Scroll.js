export const scroll = (value) => {
  window.scrollTo({
    top: value.current.offsetTop,
    behavior: "smooth",
  });
};
