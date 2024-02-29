let colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors = colors.filter(item => item == "черный" || item == "красный" || item == "желтый").join('-');
}

console.log(createColorString());

