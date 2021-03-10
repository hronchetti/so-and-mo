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

// Footer

const getFooterYear = () => {
  document.getElementById("footer-year").innerHTML = new Date().getFullYear()
}

document.addEventListener("DOMContentLoaded", () => {
  getFooterYear()
})

// Products

// Products -- Images Preview

const updateCarouselToTile = (slideNumber) => {
  // Get all images and thumbnails
  const thumbnails = document.getElementsByClassName(
    "product-header-images-thumbnail"
  )
  const tiles = document.getElementsByClassName(
    "product-header-images-preview-tile"
  )

  if (thumbnails.length === tiles.length) {
    // Reseting all thumbnails
    for (let i = 0; i < thumbnails.length; i++) {
      const element = thumbnails[i]
      element.classList.remove("active")
    }
    // Reseting all tiles
    for (let i = 0; i < tiles.length; i++) {
      const element = tiles[i]
      element.classList.remove("active")
    }
    // Finding new thumbnail to activate
    const newActiveThumbnail = document.getElementById(
      "product-header-images-thumbnail-" + slideNumber.toString()
    )
    // Finding new tile to activate
    const newActiveTile = document.getElementById(
      "product-header-images-preview-tile-" + slideNumber.toString()
    )
    // Activating new tile and thumbnail
    if (newActiveThumbnail && newActiveTile) {
      newActiveThumbnail.classList.add("active")
      newActiveTile.classList.add("active")
    } else {
      console.log("Could not find tile or thumbnail to activate")
    }
  } else {
    console.log("Number or tiles and thumbnails do not match")
  }
}

const updateCarouselTiles = (direction) => {
  let currentTile = 0
  let newTile = 0
  // Get all tiles
  const tiles = document.getElementsByClassName(
    "product-header-images-preview-tile"
  )
  // Find current tile by locating 'active' class
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains("active")) {
      const currentTileId = tiles[i].id
      currentTile = parseInt(
        currentTileId.slice(currentTileId.length - 1, currentTileId.length)
      )
    }
  }

  if (direction === "previous") {
    newTile = currentTile - 1
    if (newTile < 1) {
      newTile = tiles.length
    }
  } else if (direction === "next") {
    newTile = currentTile + 1
    if (newTile > tiles.length) {
      newTile = 1
    }
  }

  updateCarouselToTile(newTile)
}

// Products -- Lawn Feed -- Modals

const showProductModal = (id) => {
  const modal = document.getElementById(id)

  if (modal) {
    modal.classList.add("active")
    document.getElementById("modal-overlay").classList.add("active")
    document.getElementsByTagName("body")[0].style.overflow = "hidden"
  } else {
    console.log("Could not find id: " + id)
  }
}

const hideAllProductModals = () => {
  document.getElementById("lawn-measurement").classList.remove("active")
  document.getElementById("check-your-sprayer").classList.remove("active")
  document.getElementById("modal-overlay").classList.remove("active")
  document.getElementsByTagName("body")[0].style.overflow = "visible"
}

// Products -- Lawn Feed -- Bottle Viewer

const viewMonth = (monthButton, month) => {
  const monthElement = document.getElementById(month)
  const allMonthElements = document.getElementsByClassName(
    "bottle-viewer-month-content"
  )
  const allMonthButtonElements = document.getElementsByClassName(
    "bottle-viewer-month-button"
  )

  if (monthElement) {
    Array.from(allMonthElements).forEach((currentMonthElement) => {
      currentMonthElement.classList.remove("active")
    })

    Array.from(allMonthButtonElements).forEach((currentMonthButtonElement) => {
      currentMonthButtonElement.classList.remove("active")
    })

    monthButton.classList.add("active")
    monthElement.classList.add("active")
  } else {
    console.log("Could not find id: " + month)
  }
}

// Producst -- Lawn Feed -- Nutrients

const toggleNutrient = (nutrientButton) => {
  nutrientButton.classList.toggle("active")
  const nutrientBody = nutrientButton.nextElementSibling

  if (nutrientBody.style.maxHeight) {
    nutrientBody.style.maxHeight = null
  } else {
    nutrientBody.style.maxHeight = nutrientBody.scrollHeight + "px"
  }
}

// Accordions

const toggleAccordion = (accordionButton) => {
  // // Closed state for all accordion-header
  // const allAccordionButtons = document.getElementsByClassName(
  //   "accordion-header"
  // )
  // Array.from(allAccordionButtons).forEach((currentAccordionButton) => {
  //   currentAccordionButton.classList.remove("active")
  // })
  // // Closed state for all accordion-body
  // const allAccordionBody = document.getElementsByClassName("accordion-body")
  // Array.from(allAccordionBody).forEach((currentAccordionBody) => {
  //   currentAccordionBody.style.maxHeight = null
  // })
  // Open clicked accordion
  accordionButton.classList.toggle("active")
  const accordionBody = accordionButton.nextElementSibling

  if (accordionBody.style.maxHeight) {
    accordionBody.style.maxHeight = null
  } else {
    accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"
  }
}
