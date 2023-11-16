let a = +prompt("son kiriting")
while (isNaN(a) || a == 0) {
    a = +prompt("xato")
}
box = ""
for (let i = 0; i < a; i++) {
    for (let j = 0; j < a; j++) {
        if (i === 0 || i === a - 1 || i === 0 || i === a - 1 || j === 0 || j === a - 1 || i === j) {
            box += "⬛"
        }  else {
            box += "⬜"
        }

    }
    console.log(box)
    box = ""
}

let b = +prompt("qoylar soni")
while (isNaN(b) || b == 0) {
    b = +prompt("xato")
}
box = ""
for (let i = 0; i < b; i++) {
    if (i === 1) {
        box = +i + "qoy..."
    } else {
        box += i + "qoylar..."
    }
}
console.log(box);

let p = +prompt("Nechta misol yechmoqchisiz");
for(let i = 0; i < p; i++) {
    let a = Math.round(Math.random() * 100)
    let b = Math.raund(Math.random() * 100)

    let misol = +prompt (`${a} + ${b}`)

    if (misol == a + b) {
        console.log("Togri");
    } else {
        console.log("Notog'ri")
    }
}