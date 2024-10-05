const scrollToSectionUtil = (id, offset = 0) => {
  const targetSection = document.getElementById(id);

  if (!targetSection) {
    console.error("Target section not found");
    return;
  }

  const scrollOffset = targetSection.offsetTop - offset;

  window.scrollTo({
    top: scrollOffset,
    behavior: "smooth",
  });
};

export default scrollToSectionUtil;
