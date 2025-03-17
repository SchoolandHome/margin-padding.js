Как использовать эту библиотеку в проекте:
  1. Подключите этот скрипт в HTML-файле.
  2. Добавьте атрибуты `data-margin` и `data-padding` к элементам.
  3. Вызовите `MarginPadding.applyStyles();` после загрузки страницы.

 
  Пример HTML:
  <div data-margin="top -10px" data-padding="left 5rem"></div>
  <p data-margin="x 5px" data-padding="y 10px"></p>
  <span data-margin="10px"></span> <!-- Применится ко всем сторонам -->
 
  Пример использования в JavaScript:

  
  document.addEventListener("DOMContentLoaded", () => {
      MarginPadding.applyStyles();
  });
