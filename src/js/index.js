// Navigation

// Navigation -- Panels

const showNavPanel = (id) => {
  const panel = document.getElementById(id)
  if (panel) {
    panel.classList.add("active")
    document.getElementById("nav-overlay").classList.add("active")
    document.getElementsByTagName("body")[0].style.overflow = "hidden"
  } else {
    console.log("Could not find id: " + id)
  }
}

const hideAllNavPanels = () => {
  document.getElementById("mobile-menu").classList.remove("active")
  document.getElementById("basket-drawer").classList.remove("active")
  document.getElementById("nav-overlay").classList.remove("active")
  document.getElementsByTagName("body")[0].style.overflow = "visible"
}

// Navigation -- Desktop Dropdown

const toggleNavDropdownDesktop = () => {
  document.getElementById("nav-dropdown-desktop").classList.toggle("active")
}

document.addEventListener("click", (event) => {
  const dropdown = document.getElementById("nav-dropdown-desktop")

  if (dropdown.classList.contains("active")) {
    const isClickInside = document
      .getElementById("nav-dropdown-desktop")
      .contains(event.target)

    if (!isClickInside) {
      toggleNavDropdownDesktop()
    }
  }
})
