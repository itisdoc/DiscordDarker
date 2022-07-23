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
  if (option == "rareRingtone") {
    let value = prompt('ALWAYS PLAY RARE RINGTONE WHEN CALLED: (y/n)')
    if (value.toLowerCase() == "y") {
      Audio.prototype.play = function() {
    this.src = this.src.replace(/84a1b4e11d634dbfa1e5dd97a96de3ad/g, 'b9411af07f154a6fef543e7e442e4da9');
    return this._play();
}; 
    } else {
     Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/b9411af07f154a6fef543e7e442e4da9/g, '84a1b4e11d634dbfa1e5dd97a96de3ad');
    return this._play();
}; 
    }
}
button.addEventListener('click', options)


let token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
// |||                                                                                     ||||||
// vvv WE ARE NOT USING YOUR TOKEN FOR BAD. WE ARE USING IT TO MAKE A FUNCTION IN WEBTOOLS vvvvvv
function getMyToken() {
return token;
}

document.getElementsByTagName('body')[0].addEventListener("load", page)

function page() {
if (window.location.href ==  "https://discord.com/store") {
document.getElementsByClassName('scroller-29cQFV')[0].childNodes.forEach((i) => {
    document.getElementsByClassName('scroller-29cQFV')[0].removeChild(i)
});
document.getElementsByClassName('scroller-29cQFV')[0].innerHTML = `<div class="premiumContainer-3GGa8Q"><div class="container-LUKdw8"><div class="content-374sTA"><div></div><div><h3 class="defaultColor-24IHKz heading-xl-medium-_XBxHT defaultColor-HXu-5n featuresHeader-2bjq5B" data-text-variant="heading-xl/medium">Coming soon...</h3></div></div></div></div><div aria-hidden="true" style="position: absolute; pointer-events: none; min-height: 0px; min-width: 1px; flex: 0 0 auto; height: 0px;"></div>`
} else {
  // dont do nothin
}
}

function
