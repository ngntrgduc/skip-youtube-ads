// Banner ads
// document.getElementsByClassName("ytp-ad-overlay-image")[0].style.visibility = 'hidden';
// document.getElementsByClassName("ytp-ad-overlay-image")[0].style.display = 'none'; 

setInterval(() => {
    try {
        let button = document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0];
        button.click();
    }
    catch(err) {} // Do nothing
}, 3000);