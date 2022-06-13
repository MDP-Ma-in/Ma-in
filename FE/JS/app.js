let modal = false;

const mainBlur = () => {
    document.querySelector(".bar").classList.toggle('blur');
    document.querySelector('.greeting').classList.toggle('blur');
    document.querySelector('.lottie-flying').classList.toggle('blur');
}

const modalOnOff = () => {
    modal = !modal;
    mainBlur();
    document.querySelector('.sign-in').classList.toggle('hidden');
}