
function colorador (){
    let valor = document.getElementById('color').value;
    
    document.body.style.backgroundColor = valor;
    document.getElementById('res').style.color = valor;
    document.getElementById('res').innerHTML = valor;

}


document.getElementById('mudar').addEventListener('click', colorador);