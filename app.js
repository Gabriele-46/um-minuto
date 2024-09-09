function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value
    //se campo pesquisa for uma string sem nada
    if(!campoPesquisa){
section.innerHTML = <p>Nada foi encontrado. Você 
precisa digitar um filme</p>
return
    }

    // Supondo que 'dados' seja um array de objetos com as propriedades 'titulo' e 'descricao'
    for (let dado of dados) {
              // cria um novo elemento HTM para cada resultado
        resultados += `
        <div class="intem-resultado">
            <h2>${dado.titulo}</h2>
            <p>${dado.descricao}</p>
        </div>
    `;
        // se titulo includes campoPesquisa
        if (dado.titulo.includes(campoPesquisa)){

        }
        
      
    }

    section.innerHTML = resultados;
}

