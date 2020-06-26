function contar() {
var ini =  document.getElementById('txti')
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')
if( ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0){
    alert('erro')
} else {
    res.innerHTML = "contando"
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
if (i < f) {
    for(var d = i; d <= f;d += p) {
       res.innerHTML += ` ${d} \u{1F449}`
    }
 } else {
        for(var d = i; d >= f; d -= p) {
        res.innerHTML += ` ${d} \u{1F449}`
        }
    }
    res.innerHTML += ` \u{1F3C1}`
}
}