const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ['/', '*', '-', '+', '='];
let output = "";
let result = null;

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== ""){
        result = eval(output);
        output = result.toString();
    } else if (btnValue === "AC"){
        output = "";
    } else if (btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    } else if (btnValue === "()"){
        if (output === "" || output.slice(-1) === "(") {
            output += "(";
        } else if (output.slice(-1) !== ")") {
            output += ")";
        }
    } else if (specialChars.includes(btnValue)) {
        if (output === "" || specialChars.includes(output.slice(-1))) {
            return;
        } else {
            output += btnValue;
        }
    } else {
        if (result !== null && specialChars.includes(btnValue)) {
            output = result.toString() + btnValue;
        } else {
            output += btnValue;
        }
    }

    display.value = output;
};

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const btnValue = e.target.dataset.value;
        calculate(btnValue);
    });
});
