let string = "";
let btn = document.getElementsByClassName("btn");
let text = document.getElementById("text");
console.log(text);
console.log(btn);
Array.from(btn).forEach((element) => {
  element.addEventListener("click", () => {
    let valu = element.innerHTML;
    console.log(element);
    if (valu == "=") {
      if (string.trim() == "") {
        text.value = "";
      } else {
        try {
          string = eval(string);
          text.value = string;
        } catch {
          text.value = "error";
          string = "";
        }
      }
    } else if (valu == "AC") {
      string = "";
      text.value = string;
    } else if (valu == "DEL") {
      string = string.slice(0, -1);
      text.value = string;
    } else {
      console.log(valu);
      string += valu;
      text.value = string;
    }
  });
});

// keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    event.preventDefault();
    string += key;
    text.value = string;
  } else if (key === "Enter") {
    event.preventDefault();
    try {
      string = eval(string).toString();
      text.value = string;
    } catch {
      text.value = "Error";
      string = "";
    }
  } else if (key === "Backspace") {
    event.preventDefault();
    string = string.slice(0, -1);
    text.value = string;
  } else if (key === "Escape") {
    event.preventDefault();
    string = "";
    text.value = "";
  }
});
