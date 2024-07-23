import type { PlasmoCSConfig } from "plasmo"

export {}
console.log("??")
const doseWhite = "#ffffff"
const doesGray = "#cdcdcd"
const doseBlue = "#0e4a71"
const doseOrange = "#ff8e37"

const convertStyles = (root) => {
  const photonBackgrounds = root.querySelectorAll(".bg-\\[\\#F9FAFB\\]")
  const photonButtons = root.querySelectorAll("button")
  const photonHeader = root.querySelectorAll(
    "div > .px-4.py-3.sm\\:px-6.sm\\:py-4"
  )
  const photonHeaderText = root.querySelectorAll(
    ".leading-snug.text-base.text-slate-500"
  )
  const photonOrangeHeaderText = root.querySelectorAll(
    ".leading-snug.text-lg.text-black.font-semibold"
  )
  const photonLabels = root.querySelectorAll(".text-gray-700.text-sm.font-sans")
  // const allText = root.querySelectorAll("p")
  // const allDivs = root.querySelectorAll("div")
  // const allSpans = root.querySelectorAll("span")
  // console.log(allText)
  // for (const text of allText) {
  //   // add class .source-sans-3-photon
  //   text.classList.add("source-sans-3-photon")
  // }
  // for (const div of allDivs) {
  //   // add class .source-sans-3-photon
  //   div.classList.add("source-sans-3-photon")
  // }
  // for (const span of allSpans) {
  //   // add class .source-sans-3-photon
  //   span.classList.add("source-sans-3-photon")
  // }

  for (const label of photonLabels) {
    ;(label as HTMLElement).style.color = doseOrange
    ;(label as HTMLElement).style.fontSize = "20px"
    ;(label as HTMLElement).style.fontWeight = "900"
  }

  for (const header of photonOrangeHeaderText) {
    ;(header as HTMLElement).style.color = doseOrange
    ;(header as HTMLElement).style.fontSize = "30px"
    ;(header as HTMLElement).style.fontWeight = "900"
  }

  for (const bg of photonBackgrounds) {
    ;(bg as HTMLElement).style.background = doesGray
  }

  for (const headerText of photonHeaderText) {
    ;(headerText as HTMLElement).style.color = doseWhite
  }

  for (const button of photonButtons) {
    ;(button as HTMLElement).style.background = doseOrange
    ;(button as HTMLElement).style.color = doseWhite
    ;(button as HTMLElement).style.borderColor = doseBlue
    ;(button as HTMLElement).style.borderWidth = "2px"
    ;(button as HTMLElement).style.borderRadius = "0px"
  }

  let count = 0
  for (const header of photonHeader) {
    ;(header as HTMLElement).style.borderColor = doseBlue
    ;(header as HTMLElement).style.borderWidth = "2px"
    if (count % 2 === 0) {
      // border color blue
      ;(header as HTMLElement).style.background = doseBlue
      ;(header as HTMLElement).style.color = doseWhite
    }
    count++
  }
}

// if window location is app.boson.health
if (window.location.href.includes("app.boson.health")) {
  console.log("app.boson.health")
  window.addEventListener("load", () => {
    console.log("app.boson.health load")
    const bgInterval = setInterval(() => {
      const photonClientElement = document.querySelector(
        "photon-multirx-form-wrapper"
      )
      const shadowFormWrapper = photonClientElement?.shadowRoot

      if (!photonClientElement || !shadowFormWrapper) {
        return
      }

      const prescribeFlow = shadowFormWrapper.querySelector(
        "photon-prescribe-workflow"
      )
      const shadowPrescribeFlow = prescribeFlow.shadowRoot

      if (!prescribeFlow || !shadowPrescribeFlow) {
        return
      }

      const treatmentSelect = shadowPrescribeFlow.querySelector(
        "photon-treatment-select"
      )
      console.log("??")
      const shadowTreatmentSelect = treatmentSelect.shadowRoot
      const headerDivs = shadowFormWrapper.querySelectorAll("header > div")

      const img = document.createElement("img")
      img.src = "https://i.ibb.co/d0Nk364/phosespot.png"
      img.style.width = "140px"
      img.style.height = "50px"
      img.style.margin = "0 auto"
      img.style.display = "block"

      // remove everything inside of headerDivs[1]
      while (headerDivs[1].firstChild) {
        headerDivs[1].removeChild(headerDivs[1].firstChild)
      }
      headerDivs[1].appendChild(img)

      // append preconnect links <link rel="preconnect" href="https://fonts.googleapis.com">
      // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

      // const preconnect = document.createElement("link")
      // preconnect.rel = "preconnect"
      // preconnect.href = "https://fonts.googleapis.com"
      // document.head.appendChild(preconnect)

      // const preconnect2 = document.createElement("link")
      // preconnect2.rel = "preconnect"
      // preconnect2.href = "https://fonts.gstatic.com"
      // preconnect2.crossOrigin = "anonymous"
      // document.head.appendChild(preconnect2)

      // // append style tag to head
      // const link = document.createElement("link")
      // link.rel = "stylesheet"
      // link.href =
      //   "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
      // document.head.appendChild(link)

      // const fontStyle = `
      // .source-sans-3-photon {
      //   font-family: "Source Sans 3", sans-serif;
      //   font-optical-sizing: auto;
      //   font-weight: 500;
      //   font-style: normal;
      // }`

      // // append font style to a style tag in the head
      // const style = document.createElement("style")
      // style.innerHTML = fontStyle
      // document.head.appendChild(style)

      const styleInterval = setInterval(() => {
        convertStyles(shadowFormWrapper)
        convertStyles(shadowPrescribeFlow)
        convertStyles(shadowTreatmentSelect)
      }, 300)

      setTimeout(() => {
        clearInterval(styleInterval)
      }, 5000)

      clearInterval(bgInterval)
    }, 100)
  })
}
