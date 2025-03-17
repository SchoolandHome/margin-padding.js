/**
 * Класс для автоматического применения margin и padding к элементам на основе HTML-атрибутов.
 * Поддерживает положительные и отрицательные значения в px, rem, em.
 * Поддерживает оси x (left, right) и y (top, bottom), а также применение ко всем сторонам.
 */
class MarginPadding {
    /**
     * Устанавливает отступы (margin) для всех элементов с атрибутом data-margin
     */
    static setMargins() {
        document.querySelectorAll("[data-margin]").forEach(element => {
            const marginValue = element.getAttribute("data-margin");
            if (marginValue) {
                const parts = marginValue.matchAll(/(top|right|bottom|left|x|y)?\s*(-?\d*\.?\d+)(px|rem|em)/g);
                for (const match of parts) {
                    let [, axis, value, unit] = match;
                    const cssValue = `${value}${unit}`;
                    
                    if (!axis) {
                        // Если ось не указана, применяем ко всем сторонам
                        element.style.margin = cssValue;
                    } else if (axis === "x") {
                        element.style.marginLeft = cssValue;
                        element.style.marginRight = cssValue;
                    } else if (axis === "y") {
                        element.style.marginTop = cssValue;
                        element.style.marginBottom = cssValue;
                    } else {
                        element.style[`margin-${axis}`] = cssValue;
                    }
                }
            }
        });
    }

    /**
     * Устанавливает внутренние отступы (padding) для всех элементов с атрибутом data-padding
     */
    static setPaddings() {
        document.querySelectorAll("[data-padding]").forEach(element => {
            const paddingValue = element.getAttribute("data-padding");
            if (paddingValue) {
                const parts = paddingValue.matchAll(/(top|right|bottom|left|x|y)?\s*(-?\d*\.?\d+)(px|rem|em)/g);
                for (const match of parts) {
                    let [, axis, value, unit] = match;
                    const cssValue = `${value}${unit}`;
                    
                    if (!axis) {
                        // Если ось не указана, применяем ко всем сторонам
                        element.style.padding = cssValue;
                    } else if (axis === "x") {
                        element.style.paddingLeft = cssValue;
                        element.style.paddingRight = cssValue;
                    } else if (axis === "y") {
                        element.style.paddingTop = cssValue;
                        element.style.paddingBottom = cssValue;
                    } else {
                        element.style[`padding-${axis}`] = cssValue;
                    }
                }
            }
        });
    }

    /**
     * Инициализирует обработку всех элементов с data-margin и data-padding
     */
    static applyStyles() {
        this.setMargins();
        this.setPaddings();
    }
}
