// Navigation

const showNavPanel = (id) => {
  const panel = document.getElementById(id)
  if (panel) {
    panel.classList.add("active")
    document.getElementById("overlay").classList.add("active")
    document.getElementsByTagName("body")[0].style.overflow = "hidden"
  } else {
    console.log("Could not find id:" + id)
  }
}

const hideAllNavPanels = () => {
  document.getElementById("mobile-menu").classList.remove("active")
  document.getElementById("basket-drawer").classList.remove("active")
  document.getElementById("overlay").classList.remove("active")
  document.getElementsByTagName("body")[0].style.overflow = "visible"
}
