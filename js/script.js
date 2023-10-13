const keys = document.querySelectorAll(".key");
const checkbox = document.querySelector('.checkbox_keys');
const switcher = document.querySelector('.switcher');
const keisSection = document.querySelector('.piano_keys')
const playNote = (note) => {
const audio = new Audio(`../notas/notes_${note}.wav`);
    audio.play();
}


const handleMouseDown = (key) => {
    playNote(key.getAttribute("data-note"));
    if(key.className.includes("black")){
        key.classList.add("black--pressed");
        return;
    }


key.style.background = "#ddd"
}
const handleMouseUp = (key) => {
    if(key.className.includes("black")){
        key.classList.remove("black--pressed");

        return;
    }
    
    
    key.style.background = "white"
    }


keys.forEach((key) => {

    key.addEventListener("mousedown",() => handleMouseDown (key))

    key.addEventListener("mouseup",() => handleMouseUp (key))

});
checkbox.addEventListener('change',({target}) => {
    if(target.checked)  {             
      switcher.classList.add('switcher--active');
      keisSection.classList.remove('disabled-keys');
        return;
    }
    switcher.classList.remove
    ('switcher--active');
    keisSection.classList.add('disabled-keys');

})
