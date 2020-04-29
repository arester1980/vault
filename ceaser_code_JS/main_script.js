document.getElementById('input').oninput = function () {
    let step = parseInt(document.getElementById('step').value);
    console.log(step)
    let s = this.value;
    console.log(s)
    let o = '';
    for (let i=0; i<s.length; i++) {
        let code = s.charCodeAt(i);
        console.log(code);
        code = code + step;
        console.log(code);
        o += String.fromCharCode(code);
    }
    document.getElementById('output').innerHTML = o;
}