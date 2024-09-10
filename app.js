function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value 

    if (!campoPesquisa){
        section.innerHTML = "<p>Ainda não temos essa informação!"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let descricao = "";
    
    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
    //se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank"> ${dado.titulo} </a>
            </h2>
                <p class="descricao-meta"> ${dado.descricao} </p>
                <a href=${dado.link} target="_blank" >Mais informações</a>
        </div>
            `;
        }
    }    
    
    if (!resultados) {
        resultados = "<p>Ainda não sabemos sobre isso!<p>"
    }

    section.innerHTML = resultados
}


