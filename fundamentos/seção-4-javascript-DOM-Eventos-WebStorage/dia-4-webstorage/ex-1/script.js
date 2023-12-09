window.onload = () => {
    const setBackgroundColor = (color) => {
      let content = document.querySelector(".content")
      content.style.backgroundColor = color;
    }
  
    const setFontColor = (color) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.color = color
      }
    }
  
    const setFontSize = (size) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontSize = size
      }
    }
  
    const setLineHeight = (height) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.lineHeight = height
      }
    }
  
    const setFontFamily = (family) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontFamily = family
      }
    }
  
    // Cor de fundo da tela;
    let backgroundColorButtons = document.querySelectorAll("#background-color>button")
    const oldBackgroundColor = JSON.parse(localStorage.getItem('backgroundColor'));
    setBackgroundColor(oldBackgroundColor)
    for (let index = 0; index < backgroundColorButtons.length; index += 1) {
      backgroundColorButtons[index].addEventListener("click", (event) => {
        const backgroundColor = backgroundColorButtons[index].innerHTML;
        localStorage.setItem('backgroundColor', JSON.stringify(backgroundColor));
        setBackgroundColor(backgroundColor)
      })
    }
  
    // Cor do texto;
    let fontColorButtons = document.querySelectorAll("#font-color>button")
    const oldFontColor = JSON.parse(localStorage.getItem('fontColor'));
    setFontColor(oldFontColor)
    for (let index = 0; index < fontColorButtons.length; index += 1) {
      fontColorButtons[index].addEventListener("click", (event) => {
        const fontColor = fontColorButtons[index].innerHTML;
        localStorage.setItem('fontColor', JSON.stringify(fontColor));
        setFontColor(fontColor)
      })
    }
  
    // Tamanho da fonte
    let fontSizeButtons = document.querySelectorAll("#font-size>button")
    const oldFontSize = JSON.parse(localStorage.getItem('fontSize'));
    setFontSize(oldFontSize);
    for (let index = 0; index < fontSizeButtons.length; index += 1) {
      fontSizeButtons[index].addEventListener("click", (event) => {
        const fontSize = fontSizeButtons[index].innerHTML;
        localStorage.setItem('fontSize', JSON.stringify(fontSize));
        setFontSize(fontSize)
      })
    }
  
    // Espaçamento entre as linhas do texto;
    let lineHeightButtons = document.querySelectorAll("#line-height>button")
    const oldLineHeight = JSON.parse(localStorage.getItem('lineHeight'))
    setLineHeight(oldLineHeight)
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
      lineHeightButtons[index].addEventListener("click", (event) => {
        const lineHeight = lineHeightButtons[index].innerHTML
        localStorage.setItem('lineHeight', JSON.stringify(lineHeight))
        setLineHeight(lineHeight)
      })
    }
  
    // Tipo da fonte (_Font family_).
    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    const oldFontFamily = JSON.parse(localStorage.getItem('fontFamily'));
    setFontFamily(oldFontFamily)
    for (let index = 0; index < fontFamilyButtons.length; index += 1) {
      fontFamilyButtons[index].addEventListener("click", (event) => {
        const fontFamily = fontFamilyButtons[index].innerHTML
        localStorage.setItem('fontFamily', JSON.stringify(fontFamily))
        setFontFamily(fontFamily)
      })
    }
  }