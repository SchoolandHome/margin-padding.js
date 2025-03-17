# `#MarginPadding`

## Описание

Класс `MarginPadding` предоставляет возможность автоматического применения отступов (margin) и внутренних отступов (padding) к элементам на основе HTML-атрибутов. Он поддерживает указание значений для осей `x` (левая и правая стороны), `y` (верхняя и нижняя стороны), а также для всех сторон. Значения отступов могут быть в единицах `px`, `rem` и `em`, включая как положительные, так и отрицательные значения.

## Методы

### `setMargins()`
Устанавливает отступы (`margin`) для всех элементов, имеющих атрибут `data-margin`.

### `setPaddings()`
Устанавливает внутренние отступы (`padding`) для всех элементов, имеющих атрибут `data-padding`.

### `applyStyles()`
Инициализирует обработку всех элементов с атрибутами `data-margin` и `data-padding`. Этот метод вызывает `setMargins()` и `setPaddings()` для применения стилей.

## Использование

### Подключение библиотеки

1. Подключите скрипт с классом `MarginPadding` в ваш HTML-файл:

```html
<script src="https://cdn.schoolandhome.ru/libs/@current/margin-padding.js"></script>
```

или 

```html 
npm i margin-padding.js
```


2. Добавьте атрибуты data-margin и/или data-padding к элементам
Для применения отступов или внутренних отступов к элементам, добавьте соответствующие атрибуты:

Пример 1: Применение margin

```html
<div data-margin="top -10px" data-padding="left 5rem">  <!-- Можно использовать одновременно для значений внешних и внутренних отступов-->
    <p data-margin="x 5px">Test text</p> <!-- Применится ко сторонам оси X (left, right)-->
    <span data-margin="10px">Test subtext</span> <!-- Применится ко всем сторонам -->
</div>

```

Пример 2: Применение padding
```html
<p data-padding="left 3rem right 2rem">Some text example</p> 
```



3. Вызовите метод для применения стилей
После загрузки страницы вызовите метод MarginPadding.applyStyles(), чтобы применить отступы:

```html
document.addEventListener("DOMContentLoaded", () => {
    MarginPadding.applyStyles();
});
```

4. Формат значений для атрибутов
data-margin и data-padding поддерживают следующие оси:
* top — верхний отступ.
* right — правый отступ.
* bottom — нижний отступ.
* left — левый отступ.
* x — отступы по горизонтали (левая и правая стороны).
* y — отступы по вертикали (верхняя и нижняя стороны).

Если ось не указана, отступ применяется ко всем сторонам.

### Пример нескольких значений для одного атрибута
Если нужно указать разные значения для разных сторон, вы можете использовать следующий формат:

```html
<p data-margin="left 3rem right 2rem">Some example text</p>
```

В этом случае:

* Для верхнего отступа будет применено значение 5px.
* Для нижнего отступа будет применено значение 2px.
* Левые и правые отступы будут равны 0, если не указаны отдельно.

Пример с внутренними отступами:
```html
<p data-padding="left 3rem right 2rem">Some example text</p>
```
В этом случае:

* Левый отступ будет равен 3rem.

* Правый отступ будет равен 2rem.

* Верхний и нижний отступы будут равны 0, если не указаны отдельно.


> <strong>⚠️ Внимание!</strong> Не используйте дублирование атрибутов для разных сторон, например такая запись
    
```html
<p data-margin="left 3rem" data-margin="top 2rem">Some example text</p>
<p data-padding="left 3rem" data-padding="top 2rem">Some example text</p>
```

    
    не сработает, вернее примениться значение только из последнего data аттрибута: top: 2rem
</div>






# Советы

* Используйте атрибуты data-margin и data-padding для динамичного управления отступами в зависимости от состояния вашего приложения.

* Применение отрицательных значений отступов (-10px и т.п.) позволяет настраивать элементы, чтобы они могли перекрывать другие элементы.

* Вы можете использовать различные единицы измерения: px, rem, em, что позволяет гибко работать с размерами в зависимости от контекста.

## Примечания
<<<<<<< HEAD
После применения ``` MarginPadding.applyStyles() ``` отступы будут применены ко всем элементам с указанными аттрибутами.
=======
После применения ``` MarginPadding.applyStyles() ``` отступы будут применены ко всем элементам с указанными аттрибутами.



>>>>>>> 0ff1019ddede9e6fd1bd400c87b54ea80345c6ac
