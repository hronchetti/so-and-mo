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

const toggleNavDropdownDesktop = (dropdown) => {
  document.getElementById(dropdown).classList.toggle("active")
}

document.addEventListener("click", (event) => {
  const dropdown = document.getElementById("nav-dropdown-desktop-1")

  if (dropdown.classList.contains("active")) {
    const isClickInside = document
      .getElementById("nav-dropdown-desktop-1")
      .contains(event.target)

    if (!isClickInside) {
      toggleNavDropdownDesktop("nav-dropdown-desktop-1")
    }
  }
})

document.addEventListener("click", (event) => {
  const dropdown = document.getElementById("nav-dropdown-desktop-2")

  if (dropdown.classList.contains("active")) {
    const isClickInside = document
      .getElementById("nav-dropdown-desktop-2")
      .contains(event.target)

    if (!isClickInside) {
      toggleNavDropdownDesktop("nav-dropdown-desktop-2")
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
  const wasActive = nutrientButton.classList.contains("active")

  const allNutrientButtons = document.getElementsByClassName("nutrient-button")

  Array.from(allNutrientButtons).forEach((currentNutrientButton) => {
    currentNutrientButton.classList.remove("active")
  })

  if (window.innerWidth < 600) {
    const allNutrientBodys = document.getElementsByClassName("nutrient-body")

    Array.from(allNutrientBodys).forEach((currentNutrientBody) => {
      currentNutrientBody.style.maxHeight = null
    })
  }
  //

  if (!wasActive) {
    nutrientButton.classList.add("active")
    const nutrientBody = nutrientButton.nextElementSibling
    nutrientBody.style.maxHeight = nutrientBody.scrollHeight + "px"
  }
}

// Accordions

const toggleAccordion = (accordionButton) => {
  const wasActive = accordionButton.classList.contains("active")
  // Closed state for all accordion-header
  const allAccordionButtons = document.getElementsByClassName(
    "accordion-header"
  )
  Array.from(allAccordionButtons).forEach((currentAccordionButton) => {
    currentAccordionButton.classList.remove("active")
  })
  // Closed state for all accordion-body
  const allAccordionBody = document.getElementsByClassName("accordion-body")
  Array.from(allAccordionBody).forEach((currentAccordionBody) => {
    currentAccordionBody.style.maxHeight = null
  })

  // Open clicked accordion

  if (!wasActive) {
    accordionButton.classList.add("active")
    const accordionBody = accordionButton.nextElementSibling
    accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"
  }
}

// Retail Sign Up Form
const toggleFormState = (event, newState) => {
  event.preventDefault()
  const initialState = document.getElementById("retail-sign-up-initial")
  const completedState = document.getElementById("retail-sign-up-completed")

  if (newState === "subscribe") {
    initialState.classList.remove("active")
    completedState.classList.add("active")
  } else if (newState === "unsubscribe") {
    initialState.classList.add("active")
    completedState.classList.remove("active")
  } else {
    console.log("Form state not specified")
  }
}

// Our Story

const updateScrollProgress = () => {
  const storySection = document.getElementById("our-story-section")
  const storySectionHeight = storySection.scrollHeight
  const scrollPercentage = (window.scrollY / storySectionHeight) * 100

  const scrollPercentageReverse = 100 - scrollPercentage

  // Much better for performance to animate tranform than height
  if (scrollPercentage <= 100) {
    document.getElementById(
      "our-story-progrss-bar"
    ).style.transform = `translate3d(0, -${scrollPercentageReverse.toString()}%, 0)`
  }
}

const activateStep = () => {
  // const storySection = document.getElementById("our-story-section")
  // const storySectionHeight = storySection.scrollHeight
  // const scrollAmount = window.scrollY / storySectionHeight

  const OurStorySteps = document.getElementsByClassName(
    "our-story-content-section-heading"
  )
  for (let i = 0; i < OurStorySteps.length; i++) {
    const dotPosition =
      OurStorySteps[i].offsetTop + OurStorySteps[i].offsetHeight / 2 - 12

    if (window.scrollY > dotPosition) {
      OurStorySteps[i].classList.add("active")
    } else {
      OurStorySteps[i].classList.remove("active")
    }
  }
}
