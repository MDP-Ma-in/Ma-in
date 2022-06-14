let modal = false;

const mainBlur = () => {
    document.querySelector(".bar").classList.toggle('blur');
    document.querySelector('.greeting').classList.toggle('blur');
    document.querySelector('.lottie-flying').classList.toggle('blur');
}

const signInclose = () => {
    mainBlur();
    document.querySelector('.sign-in').classList.toggle('hidden');
}

const signUpclose = () => {
    mainBlur();
    document.querySelector('.sign-up').classList.toggle('hidden');
}

const signInOnOff = () => {
    mainBlur();
    document.querySelector('.sign-in').classList.toggle('hidden');
}

const signUpOnOff = () => {
    document.querySelector('.sign-in').classList.toggle('hidden');
    document.querySelector('.sign-up').classList.toggle('hidden');
}



