

document.getElementById('btn-next-step-1').addEventListener('click', function () {
    let step1 = document.querySelector('.first-step-registration');
    let step2 = document.querySelector('.second-step-registration');
    step1.style.backgroundColor = '#23C38E';
    step1.querySelector('.state-register').innerHTML = '<img src="./assets/img/step-checked.svg" alt="Your Image Alt Text">';
    let formRegister = document.querySelector('.form-register');
    formRegister.style.display = 'none';
    let nextForm = document.querySelector('.next-form-1');
    nextForm.style.display = 'block';
    step2.style.backgroundColor = "#0CB8B6"
    step2.style.color = "#fff"
});

document.getElementById('btn-previous-step-1').addEventListener('click', function () {
    let step2 = document.querySelector('.second-step-registration');
    let step1 = document.querySelector('.first-step-registration');
    step1.style.backgroundColor = '#0CB8B6';
    step1.querySelector('.state-register').innerHTML = '1';
    let formRegister = document.querySelector('.form-register');
    formRegister.style.display = 'block';
    let nextForm = document.querySelector('.next-form-1');
    nextForm.style.display = 'none';
    step2.style.backgroundColor = "#fff";
    step2.style.color = "#000"
});

document.getElementById('btn-next-step-2').addEventListener('click', function () {
    let step2 = document.querySelector('.second-step-registration');
    let step3 = document.querySelector('.third-step-registration');
    step2.style.backgroundColor = '#23C38E';
    step2.querySelector('.state-register').innerHTML = '<img src="./assets/img/step-checked.svg" alt="Your Image Alt Text">';
    let nextForm = document.querySelector('.next-form-1');
    nextForm.style.display = 'none';
    let nextForm2 = document.querySelector('.next-form-2');
    nextForm2.style.display = 'block';
    step3.style.backgroundColor = "#0CB8B6"
    step3.style.color = "#fff"
});

document.getElementById('btn-previous-step-2').addEventListener('click', function () {
    let step2 = document.querySelector('.second-step-registration');
    let step3 = document.querySelector('.third-step-registration');
    step2.style.backgroundColor = '#0CB8B6';
    step2.style.color = "#fff"
    step2.querySelector('.state-register').innerHTML = '2';
    let nextForm = document.querySelector('.next-form-2');
    nextForm.style.display = 'none';
    let nextForm1 = document.querySelector('.next-form-1');
    nextForm1.style.display = 'block';
    step3.style.backgroundColor = "#fff";
    step3.style.color = "#000"
});



// Select options
function changeOption(option, targetId) {
    var selectedOption = document.querySelector('[data-target="' + targetId + '"]');
    selectedOption.textContent = option;
  }