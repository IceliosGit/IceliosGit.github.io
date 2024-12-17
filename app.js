const button_beaver = document.getElementById("button_beaver")
let  banana_counter = document.querySelector("#banana_counter span")
let count_value = 12;
button_beaver.addEventListener("click", function() {
    count_value += 1;
    banana_counter.innerHTML = count_value;
});