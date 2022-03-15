const btn = document.querySelector(".btn-arrow");
btn.addEventListener("click", () => {

    Window.scrollTo({
        top: 0,
        left : 0,
        behavior: "smooth"
    })
})
  