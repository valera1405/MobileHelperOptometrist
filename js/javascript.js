let data = {
  "tales": [
      {"letter": "ш"},     
      {"letter": "б"}

      
  ]
};


// функция обработчика ввода в поле
function onInputHandler(event) {
  // из аргумента event можно достать элемент, который вызвал событие (event.target)
  // а оттуда и текущие значение (event.target.value)

  console.log("Содержимое", event.target.value, "Сам элемент:", event.target);

  let tale_element_id = event.target.id;  // получаем id элемента, вызвавшего событие
  let i = tale_element_id.split("-")[1]; // получаем i - номер элемента в массиве tales, соответсвующего вызвавшему событие элементу
  // для этого разбиваем id элемента по символу "-" и берем вторую часть
  // нумерация здесь, как и вдругих js-массивах с нуля, значит для "input-1"
  // после split получится в [0] будет "input", а в [1] - "1"

  i = parseInt(i); // превращаем строку в цифру. Это необходимо так как id элемента был строкой (например: "input-1"), а нам нужна 
  console.log("id и номер:", tale_element_id, i);

  // проверяем ввёденное значение
  if (event.target.value === "") {                            // если значение пустое, то возращаем стандартное состояние
      event.target.className = "tale-author"
  } else if (event.target.value === data.tales[i].author) {   // если введена правильная фамилия, то через классы задаем что значение верное
      event.target.className = "tale-author correct"
  } else {                                                    // иначе отмечаем что поле неверное
      event.target.className = "tale-author wrong"
  }
}


function fillBlocks() {
  let main_element = document.getElementById("main")
  let html_to_insert = "" // Переменная, для собирания всех создаваемых полей

  let element_html = ""
  for (let index = 0; index < data.tales.length; index++) {
      const tale = data.tales[index];

      // приписка g означает заменить во всех местах, а не только в одном
      // подстановка в шаблон:     номера(index) вместо {i}   название(title) вместо {title} 
      element_html = element_template.replace(/{i}/g, index).replace(/{title}/, tale.title);
      
      // посмотрим в консоли, какой текст элемента будет вставлен
      console.log(element_html)

      // лучше проводить вставку всех элементов разом, поэтому пока собираем их все в строковую переменную
      html_to_insert = html_to_insert + element_html;
  }
  
  // вставляем готовые элементы
  main_element.innerHTML = html_to_insert

  // собираем все элементы класса tale-author чтобы добавить к ним событие ввода
  let all_inputs = document.getElementsByClassName("tale-author")

  for (let index = 0; index < all_inputs.length; index++) {
      const element = all_inputs[index];
      
      // Стоит отметить, что есть несколько способов добавить обработчик события к элементу, плоть до
      // вписывания его прямо в HTML-код элемента через специальные аттрибуты "on..." ("onclick", например)
      // это может быть удобно для маленьких простых обработчиков, навешиваемых на большое количество элементов,
      // сгененрированных через JS (как в данном примере). Однако, наиболее предпочтительным способом является
      // конструкция addEventListener

      // Добавляем к элементу для события "input" (ввод в поле), обработчик этого собыытия (у нас это функция onInputHandler)
      // Событий бывают разные, для элементов <input> ещё есть событие "change" - активируется только если элемент потерял фокус
      // (было переключение куда-то ещё). Подробнее: https://learn.javascript.ru/events-change 
      element.addEventListener("input", onInputHandler);
  }
}



// выполнить действия после загрузки страницы
window.onload = function() {
  fillBlocks();
};