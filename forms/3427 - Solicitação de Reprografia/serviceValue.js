function calc03(){
    var tbodyChild  = document.getElementById('dados').children[1]

    for(y = 1; y < tbodyChild.childElementCount; y++){
        var arrayField1  = tbodyChild.children[y].getElementsByTagName('input')
        var arrayField2  = tbodyChild.children[y].getElementsByTagName('select')

        var arrayConcat  = Object.assign({}, arrayField1, arrayField2)//{ ...arrayField1, ...arrayField2 };//arrayField1.concat(arrayField2);

        for(i = 0; i < 6; i++){
            if(arrayConcat[i].id != null && arrayConcat[i].id.indexOf("cbk_encadern___") != -1 || arrayConcat[i].id != null && arrayConcat[i].id.indexOf("slc_TipoImpressao___") != -1){
                console.log(arrayConcat[i].id)
                if(document.getElementById(arrayConcat[i].id).mark == undefined){
                    document.getElementById(arrayConcat[i].id).mark = 1
                    document.getElementById(arrayConcat[i].id).addEventListener("change", function(){
                        mark(this)
                    }); 
                }
            }
            if(arrayConcat[i].id != null && arrayConcat[i].id.indexOf("txt_Quantidade___") != -1 || arrayConcat[i].id != null && arrayConcat[i].id.indexOf("txt_NPaginas___") != -1){
                console.log(arrayConcat[i].id)
                if(document.getElementById(arrayConcat[i].id).mark == undefined){
                    document.getElementById(arrayConcat[i].id).mark = 1
                    document.getElementById(arrayConcat[i].id).addEventListener("keyup", function(){
                        mark(this)
                    }); 
                }
            }
        }
    }
    
    function mark(elem){
        if(elem.id != null && elem.id.indexOf("slc_TipoImpressao___") != -1){
            /************************************** */
            
            if(elem.selectedIndex == 0) { 
                encard(elem) 
            } else { 
                var ind     = elem.name.split('___')
                ind         = ind[1]
                document.getElementById('txt_NPaginas___'+ind).readOnly = false
                document.getElementById('cbk_encadern___'+ind).disabled = false
                calc02(elem) 
            }


            /************************************** */
        }else{ 
            
             
                var ind     = elem.name.split('___')
                ind         = ind[1]
                var slc     = document.getElementById('slc_TipoImpressao___'+ind).selectedIndex
                if(slc == 0){
                encard(elem) 
                } else { 
                    document.getElementById('txt_NPaginas___'+ind).readOnly = false
                    document.getElementById('cbk_encadern___'+ind).disabled = false
                    calc01(elem) 
                } 
        
        }
        var ind     = elem.name.split('___')
        ind         = ind[1]
        var cbk     = document.getElementById('cbk_encadern___'+ind).checked
        var qnt     = document.getElementById('txt_Quantidade___'+ind).value
        var valEnc  = 3*qnt
        var valor1   = document.getElementById('txt_Valor___'+ind).value
        var valor2 = moeda.desformatar(valor1)
        console.log(valor1)
        if(cbk){ 
            let valFinal = parseFloat(valEnc) + parseFloat(valor2)
            console.log(parseFloat(valEnc) +'   '+ parseFloat(valor2))
            console.log(valFinal)
            document.getElementById('txt_Valor___'+ind).value = moeda.formatar(Math.abs(valFinal))
            document.getElementById('txt_Valor___'+ind).mark = 1;
        }else{
            if(document.getElementById('txt_Valor___'+ind).mark != undefined){
                let valFinal = parseFloat(valEnc) - parseFloat(valor2)
                console.log(parseFloat(valEnc) +'   '+ parseFloat(valor2))
                console.log(valFinal)
                document.getElementById('txt_Valor___'+ind).value = moeda.formatar(Math.abs(valFinal))
            }
        }
        verifc()
    }
}
window.addEventListener('load', calc03)

function calc01(elem) {
    var id = elem.id;
    var xx = id.split("___")
    
    if(xx[0] == "txt_Quantidade"){
    var id2 = "txt_NPaginas___"+xx[1];
    }else {
    var id2 = "txt_Quantidade___"+xx[1];    
    }
    if(xx[0] != "cbk_encadern"){
        validateInputDigit(elem)
    var valor1 = elem.value.split('_')[0]; /******************************************************************** */
    var valor2 = document.getElementById(id2).value;
    var multiplicar = valor1 * valor2;
    if (multiplicar == 'NaN') {
        document.getElementById('txt_TotalCopias___'+xx[1]).value = 0;
    } else {
        document.getElementById('txt_TotalCopias___'+xx[1]).value = multiplicar;
        var valor1 = document.getElementById('slc_TipoImpressao___'+xx[1]).value.split('_')[0]; /******************************************************************** */
        var mult = parseFloat(valor1) * parseFloat(multiplicar)

        if (mult == 'NaN') {
            document.getElementById('txt_Valor___'+xx[1]).value = "0,00";
        } else {
            document.getElementById('txt_Valor___'+xx[1]).value = moeda.formatar(mult);
        }
    }
    }
}
function validateInputDigit(elem){
    valor = elem.value.split('_')[0]; /******************************************************************** */
    valor = valor.replace(/\D/g,"")
    document.getElementById(elem.id).value = valor
}

function calc02(elem){
    var id = elem.id;
    var xx = id.split("___")
    document.getElementById("hdn_TipoImpressao___"+xx[1]).value = elem.value.split('_')[0]; /******************************************************************** */
    var id2 = "txt_TotalCopias___"+xx[1]
    var valor1 = elem.value.split('_')[0]; /******************************************************************** */
    var valor2 = document.getElementById(id2).value
    var multiplicar = parseFloat(valor1) * parseFloat(valor2)
console.log(valor1)
console.log(valor2)
console.log(multiplicar)

    if (multiplicar == 'NaN') {
        document.getElementById('txt_Valor___'+xx[1]).value = "0,00";
    } else {
        document.getElementById('txt_Valor___'+xx[1]).value = moeda.formatar(multiplicar);
    }
}

function verifc() {
	var tabela_itens = document.getElementById("dados");
	var itens = tabela_itens.getElementsByTagName("input");
	var valorTotal = 0;
	for (var i = 0; i < itens.length; i++){
		if (itens[i].id != null && itens[i].id.indexOf("txt_Valor___") != -1){
			valorTotal += parseFloat(moeda.desformatar(itens[i].value));
		}		
	}
    var Total = document.getElementById("txt_saldo").value;
    document.getElementById("txt_ValorTotal").value = moeda.formatar(valorTotal); 
    Total = parseFloat(moeda.desformatar(Total))

	if(Total >= valorTotal){ 
        document.getElementById("txt_saldo").style = "background-color:#86dc9c";
        document.getElementById("hdn_validateOrcamento").value = 1
        document.getElementById("Msg_GuiaErro").style.display = "none";
	}
    else{
        document.getElementById("txt_saldo").style = "background-color:#ea8989";
        document.getElementById("hdn_validateOrcamento").value = 0
        document.getElementById("Msg_GuiaErro").style.display = "block";
    }
    styleFormatDisable()
}

function encard(elem){
    var ind     = elem.name.split('___')
    ind         = ind[1]
    var qnt     = document.getElementById('txt_Quantidade___'+ind).value
    document.getElementById('txt_NPaginas___'+ind).readOnly = true
    document.getElementById('cbk_encadern___'+ind).disabled = true
    var valEnc  = 3*qnt
    console.log(valEnc)
    document.getElementById('txt_Valor___'+ind).value = moeda.formatar(Math.abs(valEnc))
}