var screens = "";
var output = [];

let num1 = document.getElementById("num1").onclick = function() {
    screens = screens + "1"
    output.push(1)
    document.getElementById("span").innerText = screens
}

let num2 = document.getElementById("num2").onclick = function() {
    screens = screens + "2"
    output.push(2)
    document.getElementById("span").innerText = screens
}

let num3 = document.getElementById("num3").onclick = function() {
    screens = screens + "3"
    output.push(3)
    document.getElementById("span").innerText = screens
}

let num4 = document.getElementById("num4").onclick = function() {
    screens = screens + "4"
    output.push(4)
    document.getElementById("span").innerText = screens
}

let num5 = document.getElementById("num5").onclick = function() {
    screens = screens + "5"
    output.push(5)
    document.getElementById("span").innerText = screens
}

let num6 = document.getElementById("num6").onclick = function() {
    screens = screens + "6"
    output.push(6)
    document.getElementById("span").innerText = screens
}

let num7 = document.getElementById("num7").onclick = function() {
    screens = screens + "7"
    output.push(7)
    document.getElementById("span").innerText = screens
}

let num8 = document.getElementById("num8").onclick = function() {
    screens = screens + "8"
    output.push(8)
    document.getElementById("span").innerText = screens
}

let num9 = document.getElementById("num9").onclick = function() {
    screens = screens + "9"
    output.push(9)
    document.getElementById("span").innerText = screens
}

let num0 = document.getElementById("num0").onclick = function() {
    screens = screens + "0"
    output.push(0)
    document.getElementById("span").innerText = screens
}


let reset = document.getElementById("reset").onclick = function() {
    screens = ""
    output = []
    document.getElementById("span").innerText = screens
}

let plus = document.getElementById("plus").onclick = function() {
    screens = screens + "+"
    output.push("+")
    document.getElementById("span").innerText = screens
}

let devide = document.getElementById("devide").onclick = function() {
    screens = screens + ":"
    output.push("/")
    document.getElementById("span").innerText = screens
}

let minus = document.getElementById("minus").onclick = function() {
    screens = screens + "-"
    output.push("-")
    document.getElementById("span").innerText = screens
}

let multy = document.getElementById("multy").onclick = function() {
    screens = screens + "*"
    output.push("*")
    document.getElementById("span").innerText = screens
}

let dot = document.getElementById("dot").onclick = function() {
    screens = screens + "."
    output.push(".")
    document.getElementById("span").innerText = screens
}



let equal = document.getElementById("equal").onclick = function() {
    screens = eval(output.join(""))
    document.getElementById("span").innerText = screens
}

let del = document.getElementById("del").onclick = function() {
    output.pop()
    screens = screens.slice(0, -1)
    document.getElementById("span").innerText = screens
}


let firstBow = document.getElementById("firstBow").onclick = function() {
    screens = screens + "("
    output.push("(")
    document.getElementById("span").innerText = screens
}


let secondBow = document.getElementById("secondBow").onclick = function() {
    screens = screens + ")"
    output.push(")")
    document.getElementById("span").innerText = screens
}

