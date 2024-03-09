var TOtals = 0
var count = document.getElementById('resereve')
function NUM1() {
    document.getElementById('clc-afficher').innerText += 1
}
function NUM2() {
    document.getElementById('clc-afficher').innerText += 2
}
function NUM3() {
    document.getElementById('clc-afficher').innerText += 3
}
function NUM4() {
    document.getElementById('clc-afficher').innerText += 4
}
function NUM5() {
    document.getElementById('clc-afficher').innerText += 5
}
function NUM6() {
    document.getElementById('clc-afficher').innerText += 6
}
function NUM7() {
    document.getElementById('clc-afficher').innerText += 7
}
function NUM8() {
    document.getElementById('clc-afficher').innerText += 8
}
function NUM9() {
    document.getElementById('clc-afficher').innerText += 9
}
function NUM0() {
    document.getElementById('clc-afficher').innerText += 0
}
function OPIADD() {
    document.getElementById('clc-afficher').innerText += '+'
}
function OPISUP() {

    document.getElementById('clc-afficher').innerText += "-"
}
function OPIMUL() {

    document.getElementById('clc-afficher').innerText += "X"
}
function OPIfactorial() {

    var contnt = document.getElementById('clc-afficher').textContent
    contnt = Number(contnt)
    if (contnt != '') {
        var Tcontnt = 1
        for (i = 0; i < contnt; i++) {
            Tcontnt += Tcontnt * i
        }
        if (Tcontnt > 0) {
            document.getElementById('clc-afficher').innerText = Tcontnt
            count.innerText = TOtals + Tcontnt
        }
    }
    if (contnt == 0) {
        document.getElementById('clc-afficher').innerText = 1
        count.innerText = TOtals + 1
    }
}
function OPIDIV() {
    document.getElementById('clc-afficher').innerText += "÷"
}
function OPIEGAL() {
    var total = document.getElementById("clc-afficher").textContent
    total = total.replace(/X/g, "*")
    total = total.replace(/\^/g, "**")
    total = total.replace(/π/g, 3.14)
    total = total.replace(/ln/g, 'LN')
    total = total.replace(/mod/g, '%')
    total = total.replace(/÷/g, '/')
    total = total.replace(/sin\((\d+)\)/g, "Math.sin($1)")
    total = total.replace(/cos\((\d+)\)/g, "Math.cos($1)")
    total = total.replace(/tan\((\d+)\)/g, "Math.tan($1)")
    total = total.replace(/ln\((\d+)\)/g, "Math.log($1)")
    total = total.replace(/e\((\d+)\)/g, "Math.exp($1)")
    total = total.replace(/log\((\d+)\)/g, "Math.log10($1)")
    total = total.replace(/√(\d+)/g, 'Math.sqrt($1)')
    var resutat = eval(total)
    resutat = parseFloat(resutat).toFixed(4)
    resutat=parseFloat(resutat)
  
    if (isNaN(resutat) || resutat===undefined) {
        count.innerText = "Syntax Error"
    }
    else{
        TOtals += resutat
        count.innerText = resutat
    }
}
function symbolR() {
    document.getElementById('clc-afficher').innerText += '('
}
function symbolL() {
    document.getElementById('clc-afficher').innerText += ")"
}
function OPIPi() {
    document.getElementById('clc-afficher').innerText += "π"
}
function OPIAC() {
    document.getElementById('clc-afficher').innerText = ""
    TOtals = 0
    count.innerText = TOtals
}
function OPIS() {
    var content = document.getElementById('clc-afficher').textContent
    content = content.slice(0, -1)
    document.getElementById('clc-afficher').innerText = content
}
function OPIsq() {
    var total = document.getElementById("clc-afficher").textContent
    total = Number(total)
    var res = Math.pow(total, 2)

    if (isNaN(res) || res===undefined) {
        
        count.innerText = "Syntax Error"
    }
    else{
        document.getElementById('clc-afficher').innerText = ''
        TOtals += res
        count.innerText = res
    }
}
function OPIpow() {
    var total = document.getElementById("clc-afficher").textContent
    total = Number(total)
    var res = Math.pow(total, 3)
    if (isNaN(res) || res===undefined) {
        
        count.innerText = "Syntax Error"
    }
    else{
        document.getElementById('clc-afficher').innerText = ''
        TOtals += res
        count.innerText = res
    }
}
function OPIeny() {
    document.getElementById('clc-afficher').innerText += '^'
}
function OPIsin() {
    var cont = document.getElementById('clc-afficher').innerText += 'sin('
}
function OPIcos() {
    var cont = document.getElementById('clc-afficher').innerText += 'cos('
}
function OPItan() {
    var cont = document.getElementById('clc-afficher').innerText += 'tan('
}
function OPIlog() {
    var cont = document.getElementById('clc-afficher').innerText += 'log('
}
function OPIln() {
    var cont = document.getElementById('clc-afficher').innerText += 'ln('
}
function OPIexp() {
    var cont = document.getElementById('clc-afficher').innerText += 'e('
}
function OPIsqrt() {
    var cont = document.getElementById('clc-afficher').innerText += '√'
}
function OPImod() {
    var cont = document.getElementById('clc-afficher').innerText += 'mod'
}
function OPIAns() {
    var cont = document.getElementById('clc-afficher').innerText = TOtals
}
document.addEventListener("keydown", keypress);
function keypress(event) {
    

    switch (event.key) {
        case "1":
            document.getElementById("clc-afficher").innerText += 1
            break
        case "2":
            document.getElementById("clc-afficher").innerText += 2
            break
        case "3":
            document.getElementById("clc-afficher").innerText += 3
            break
        case "4":
            document.getElementById("clc-afficher").innerText += 4
            break
        case "5":
            document.getElementById("clc-afficher").innerText += 5
            break
        case "6":
            document.getElementById("clc-afficher").innerText += 6
            break
        case "7":
            document.getElementById("clc-afficher").innerText += 7
            break
        case "8":
            document.getElementById("clc-afficher").innerText += 8
            break
        case "9":
            document.getElementById("clc-afficher").innerText += 9
            break
        case "0":
            document.getElementById("clc-afficher").innerText += 0
            break
        case "Backspace":
            var content = document.getElementById('clc-afficher').textContent
            content = content.slice(0, -1)
            document.getElementById('clc-afficher').innerText = content
            break
        case ".":
            document.getElementById("clc-afficher").innerText += "."
            break
        case "-":
            document.getElementById("clc-afficher").innerText += "-"
            break
        case "+":
            document.getElementById("clc-afficher").innerText += "+"
            break
        case "/":
            document.getElementById("clc-afficher").innerText += "/"
            break
        case "(":
            document.getElementById("clc-afficher").innerText += "("
            break
        case ")":
            document.getElementById("clc-afficher").innerText += ")"
            break
        case "*":
            document.getElementById("clc-afficher").innerText += "X"
            break
        case "^":
            document.getElementById("clc-afficher").innerText += "^"
            break

        case "=":
            var total = document.getElementById("clc-afficher").textContent
            total = total.replace(/X/g, "*")
            total = total.replace(/\^/g, "**")
            total = total.replace(/π/g, 3.14)
            total = total.replace(/ln/g, 'LN')
            total = total.replace(/mod/g, '%')
            total = total.replace(/÷/g, '/')
            total = total.replace(/sin\((\d+)\)/g, "Math.sin($1)")
            total = total.replace(/cos\((\d+)\)/g, "Math.cos($1)")
            total = total.replace(/tan\((\d+)\)/g, "Math.tan($1)")
            total = total.replace(/ln\((\d+)\)/g, "Math.log($1)")
            total = total.replace(/log\((\d+)\)/g, "Math.log10($1)")
            total = total.replace(/e\((\d+)\)/g, "Math.exp($1)")
            total = total.replace(/√(\d+)/g, 'Math.sqrt($1)')
            var resutat = eval(total)
            //  resutat=resutat.toFixed(6)
            resutat = parseFloat(resutat).toFixed(4)
            resutat=parseFloat(resutat)
            
            document.getElementById("clc-afficher").innerText = ''
            if (isNaN(resutat) || resutat===undefined) {
                count.innerText = "Syntax Error"
            }
            else{
                TOtals += resutat
                count.innerText = resutat
            }
            break
        case "Enter":
            var total = document.getElementById("clc-afficher").textContent
            total = total.replace(/X/g, "*")
            total = total.replace(/\^/g, "**")
            total = total.replace(/π/g, 3.14)
            total = total.replace(/ln/g, 'LN')
            total = total.replace(/mod/g, '%')
            total = total.replace(/÷/g, '/')
            total = total.replace(/sin\((\d+)\)/g, "Math.sin($1)")
            total = total.replace(/cos\((\d+)\)/g, "Math.cos($1)")
            total = total.replace(/tan\((\d+)\)/g, "Math.tan($1)")
            total = total.replace(/ln\((\d+)\)/g, "Math.log($1)")
            total = total.replace(/log\((\d+)\)/g, "Math.log10($1)")
            total = total.replace(/e\((\d+)\)/g, "Math.exp($1)")
            total = total.replace(/√(\d+)/g, 'Math.sqrt($1)')
            var resutat = eval(total)
            resutat = parseFloat(resutat).toFixed(4)
            resutat=parseFloat(resutat)
            
            //  resutat=resutat.toFixed(6)
            document.getElementById("clc-afficher").innerText = ''
            if (isNaN(resutat) || resutat===undefined) {
                count.innerText = "Syntax Error"
            }
            else{
                TOtals += resutat
                count.innerText = resutat
            }

            break
        default:
            break;
    }
}
