let listaAmigos = [];

function agregarAmigo() {
    const amigo = document.getElementById('amigo').value.trim();
    if (amigo === ''){
        alert('No se agrego ningun amigo');
    }   else {
        listaAmigos.push(amigo);
        document.getElementById('amigo').value = '';
        
        const listaVisual = document.getElementById('listaAmigos');
        listaVisual.innerHTML = '';
        listaAmigos.forEach((amigo) => {
            const li = document.createElement('li');
            li.textContent = amigo;
            listaVisual.appendChild(li);
    });
         alert('Amigo agregado');    
    }
}

function mostrarResultado(resultado){
    const resultadoVisual = document.getElementById('resultado');
    resultadoVisual.innerHTML ="";

    const li = document.createElement(li);
    li.textContent = resultado;
    resultadoVisual.appendChild(li);
}

function sortearAmigo(){
    const amigo = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    alert(`Tu amigo secreto es: ${amigo}`);
}       






