const toggleMenu = document.getElementById("toggle-menu")
toggleMenu.addEventListener("change", () => {
  if(!document.body.classList.contains('toggled')) document.body.classList.add('toggled')
})