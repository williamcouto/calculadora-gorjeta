function clickTip(element){
    const taxa = Number(element.getAttribute('data-gorj'))
    calcGorjeta(taxa)
}

function calcGorjeta(taxa){
    let valor_conta = Number(document.getElementById("value_conta").value)
    //let taxa = Number(document.getElementById("sel_gorjeta").value)
    let num_pessoas = Number(document.getElementById("qtd_pessoas").value)
    let result_gorjet = document.getElementById("result")
    let resultcont = document.getElementById("result_conta")
    let result_pessoas = document.getElementById("result_qtd_num")

        if(valor_conta == ''){
            window.alert("Campo vazio! Insira um valor válido")
        }
        //valor da gorjeta
        let valor_gorj = valor_conta * taxa
        result_gorjet.textContent = `Valor da gorjeta: R$ ${valor_gorj.toFixed(2)}`
        
        //total da conta
        let totalconta = valor_conta + valor_gorj
        resultcont.innerHTML = `Total: R$ ${totalconta.toFixed(2)}`
    
        //divisão por pessoa
        let valor_qtd_pessoas = totalconta / num_pessoas
        result_pessoas.innerHTML = `Valor p/ pessoas: R$ ${valor_qtd_pessoas.toFixed(2)}`
}
