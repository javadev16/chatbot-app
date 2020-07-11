// toggles 
let darkmode = localStorage.getItem('darkmode');
const darkmodeToggleButton = document.querySelector('.toggle-button');
console.log(darkmode);

//if enableddarkmode is off then turn it on if it's on turn it off
const enableDarkMode = ()=>{
    //add darmode class to the body & update localStorage
    document.body.classList.add('darkmode');
     localStorage.setItem('darkmode', 'enabled');
}

const disableDarkMode = ()=>{
    //remove darmode class to the body & update localStorage
    document.body.classList.remove('darkmode');
     localStorage.setItem('darkmode', 'disabled');
}
if(darkmode === 'enabled'){
    enableDarkMode();
}

darkmodeToggleButton.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    if(darkmode !== 'enabled'){
        enableDarkMode();
        console.log(darkmode);
    }else{
        disableDarkMode();
    }
})