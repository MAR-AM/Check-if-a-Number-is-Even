function isEven(number) {
            return number % 2 === 0;
        }
        var inputNumber = parseFloat(prompt("Enter a number to check if it's even or odd: "));
        if (isEven(inputNumber)) {
            document.write("The number " + inputNumber + " is even.<br>");
        } else {
            document.write("The number " + inputNumber + " is odd.<br>");
        }
