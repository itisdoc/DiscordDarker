let button = document.createElement('button'); button.innerText="Darker Settings";button.setAttribute("style", "width: 60px; margin-bottom: 10px; border-radius: 12px; margin-left: 7px;");$(".scroller-3X7KbA").prepend(button)
function options() {
  let option = prompt('What setting to you want to change?')
  if (option == "home-button-logo") {
   let value = prompt('Input SVG code (without the "svg" tag) to set it as the logo(or press cancel to not)') 
   if (value.includes("<")) {
    document.getElementsByClassName('homeIcon-r0w4ny')[0].innerHTML = value
   } else {
    return; 
   }
  }
}
button.addEventListener('click', options)
