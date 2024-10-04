const accordionItems = document.querySelectorAll(".accordionItem");
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordionHeader");
  header.addEventListener("click", () => {
    const currentlyActive = document.querySelector(".accordionItem.active");

    if (currentlyActive && currentlyActive !== item) {
      currentlyActive.classList.remove("active");
      currentlyActive.querySelector(".accordionInfo").classList.add("hidden");
      currentlyActive.querySelector("img").classList.remove("rotate-180");
    }

    item.classList.toggle("active");
    const content = item.querySelector(".accordionInfo");
    content.classList.toggle("hidden");
    const icon = item.querySelector("img");
    icon.classList.toggle("rotate-180");
  });
});
