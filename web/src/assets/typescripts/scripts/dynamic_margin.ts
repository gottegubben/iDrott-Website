function getCssVariableValueAsDigit(variableName: string): number {
    let value  = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
    let match  = value.match(/\d+/); // Find all the digits and concat them.

    if(match != null) {
        return +match[0]; // +match[0], the '+' converts the string into a number.
    }

    return 0;
}

function setCssVariableValue(variableName: string, value: string): void {
    document.documentElement.style.setProperty(variableName, value);
}

const max_dyn_margin = getCssVariableValueAsDigit("--max_dyn_margin");
const min_dyn_margin = getCssVariableValueAsDigit("--min_dyn_margin");

const max_dyn_width  = getCssVariableValueAsDigit("--max_dyn_width");
const min_dyn_width  = getCssVariableValueAsDigit("--min_dyn_width");

// The k value for the linear function: y = k * x + m.
const dyn_k          = (max_dyn_margin - min_dyn_margin) / (max_dyn_width - min_dyn_width);

// Linear function with a clamp when windowWidth is out of bounds, used for calculating the margin.
function getDynamicMargin(windowWidth: number): number {
    if(min_dyn_width <= windowWidth && min_dyn_width <= max_dyn_width) {
        return dyn_k * (windowWidth - min_dyn_width) + min_dyn_margin;
    }
    else if(windowWidth < min_dyn_width) {
        return min_dyn_margin;
    }
    else if(windowWidth > max_dyn_width) {
        return max_dyn_margin;
    }
    
    return 0;
}

// One update in the beginning in case of resize event not firing first hand!
setCssVariableValue("--dynamic_margin", `${getDynamicMargin(window.innerWidth).toString()}px`);

window.addEventListener("resize", () => {
    let width = window.innerWidth;

    let newMargin = getDynamicMargin(width);

    setCssVariableValue("--dynamic_margin", `${newMargin.toString()}px`);
});