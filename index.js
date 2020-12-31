"use strict";

let step = 1;
const maxStep = 5;
let block = false;

function next() {
  /*открывает следующий шаг
  если шаг последний, выводит отчёт*/
  if (step < maxStep) {
    document.getElementById('step-'+ String(step)).className = 'step-hidden';
    step++;

    let form = document.getElementById('step-'+ String(step));
    form.className = 'step';

    let textarea = form.querySelectorAll('textarea')[0];
    textarea.focus();
  } else {

    // скрывает шаг
    document.getElementById('step-' + String(step)).className = 'step-hidden';
    step++;

    // скрывает кнопки
    document.getElementsByClassName('navigation-buttons-block')[0].className = 'hidden';



    let resultTextarea = document.getElementById('result');
    resultTextarea.value = createResult();


    document.getElementById('report').className = "report";


  }
}

function pred() {
  /*открывает предыдущий шаг
  если шаг первый, ничего не делает*/
  if (step > 1 && step <= maxStep) {
    document.getElementById('step-'+ String(step)).className = 'step-hidden';
    step--;
    let form = document.getElementById('step-'+ String(step));
    form.className = 'step';

    let textarea = form.querySelectorAll('textarea')[0];
    textarea.focus();
  }
}

function copyToBuffer() {
  /*копирует в буфер обмена итоговый отчёт*/
  let copyTextarea = document.getElementById('result');
  copyTextarea.focus();
  copyTextarea.select();

  try {
    let successful = document.execCommand('copy');
    // var msg = successful ? 'successful' : 'unsuccessful';
    alert('Вы скопировали результат.')
  } catch (err) {
    alert('Копирование провалилось')
  }
  // copyToClipboard(document.getElementById("result").value);
}


function createResult() {
  /*создаёт итоговый отчёт*/
  let situationText = document.getElementById('situation').value;
  let feelingsText = document.getElementById('feelings').value;
  let thoughtsText = document.getElementById('thoughts').value;
  let answersText = document.getElementById('answers').value;
  return(`Ситуация:
${situationText}

Ваши чувства:
${feelingsText}

Ваши автоматические мысли:
${thoughtsText}

Ваш адаптивный ответ на них:
${answersText}`);
}
