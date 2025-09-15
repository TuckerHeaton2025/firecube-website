const form = document.getElementById('contact_form');

form.addEventListener('submit', function (e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});

const captcha = document.querySelector('.h-captcha');
if (window.screen.width <= 380) {
    captcha.setAttribute('data-size', 'compact')
}
