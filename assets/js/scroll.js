function initCommonHeader(headerSelector, scrollSentinelSelector) {
  const header = document.querySelector(headerSelector);
  const scrollSentinel = document.querySelector(scrollSentinelSelector);

  if (!header || !scrollSentinel) return;

  const headerHeight = header.offsetHeight;

  const shadowObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.classList.remove("shadowed");
        } else {
          header.classList.add("shadowed");
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: `-${headerHeight}px 0px 0px 0px`,
    }
  );

  shadowObserver.observe(scrollSentinel);
}

document.addEventListener("DOMContentLoaded", () => {
  initCommonHeader(".header", ".scroll-sentinel");
});