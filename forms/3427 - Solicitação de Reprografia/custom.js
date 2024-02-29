function printP(){
    var ck = document.getElementById('hdn_gerAprv')
    var state   = window.state;
    console.log(state)
    console.log(ck)
    if(state == 14){
        ck.value = '1';console.log(ck) 
    }else if(state == 8){
        if(ck.value == 1){
            ck.value = '0'
            console.log(ck)
        }
    }
}
window.addEventListener('load', printP)

function enviarStop(){
    var buttomNext = window.parentOBJ.document.getElementsByTagName("button")[3].onclick = function () {
        console.log("b");   
        doctrine()
    }
    var x = window.parentOBJ.document.getElementsByTagName("ul")[3].children[0].onclick = function () {
        console.log("b");   
        doctrine()
    }
}
function doctrine(){
    var ini = setInterval(nextActivitys, 100);
    var ck = document.getElementById('hdn_gerAprv').value

    function nextActivitys(){ 
        var selected    = window.parentOBJ.document.getElementById('nextActivity')
        if(selected != null){//&& flow != undefined
            var buttonsControl = window.parentOBJ.document.getElementsByClassName('modal-footer')[0]
            buttonsControl.style.display = 'none'
            var state   = window.state;
            var options     = selected.children
            console.log(state)
            console.log(options.length)
            if(state == 6 && ck == 1){
                var din_length = options.length;
                while(options.length != 1){
                    for(i=0; i < din_length; i++){
                        var ant = options[i].value
                        if(ant == 14){
                        options[i].selected = true;
                        console.log(options[i])
                        console.log(ant)
                        }else {
                            console.log(options[i])
                            console.log(ant)
                            selected.removeChild(options[i])
                            din_length--
                            console.log(din_length)
                        }
                    }
                }console.log(options.length)
            }else if(state == 6 && ck == ""){
                var din_length = options.length;
                for(i=0; i < din_length; i++){
                    var ant = options[i].value
                    if(ant == 14){
                        selected.removeChild(options[i])
                        din_length--
                        console.log(options[i])
                        console.log(ant)
                    }
                }
                }console.log(options.length)
            }
            buttonsControl.style.display = 'block'
            clearInterval(ini);
        }
}
    
window.addEventListener('load', enviarStop)

function dirVal(){
    document.getElementById('addIns').addEventListener("click", function(){
    var tbodyChild  = document.getElementById('dados').children[1]
    for(y = 1; y < tbodyChild.childElementCount; y++){
        var arrayField  = tbodyChild.children[y].getElementsByTagName('select')
        document.getElementById(arrayField[0].id).addEventListener("change", function(){
            if(this.value == '1.50' || this.value == '2.00'){
                document.getElementById('hdn_dirAprv').value = 1
                console.log('crivo')
            }else{ document.getElementById('hdn_dirAprv').value = 0 }
        });
        console.log(arrayField)
    } 
});
}
window.addEventListener('load', dirVal)
/*
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
        }*/
    
    /*
    for(i=1 ;i < n; i++){
        for(j=0; j < array.length; j++){
            if(array[j] == 'cbk_encadern___' || array[j] == 'slc_TipoImpressao___'){
                if(document.getElementById(array[j]+i).mark == undefined){
                    document.getElementById(array[j]+i).mark = 1
                    document.getElementById(array[j]+i).addEventListener("change", function(){
                        mark(this)
                    }); 
                }
            }else if(array[j] == 'txt_Quantidade___' || array[j] == 'txt_NPaginas___'){
                if(document.getElementById(array[j]+i).mark == undefined){
                    document.getElementById(array[j]+i).mark = 1
                    document.getElementById(array[j]+i).addEventListener("keyup", function(){
                        mark(this)
                    }); 
                } 
            }
        }
*/
  /*  }
    function mark(elem){
        if(elem.id != null && elem.id.indexOf("slc_TipoImpressao___") != -1){
            calc02(elem)
        }else{ calc01(elem) }
        var ind     = elem.name.split('___')
        ind         = ind[1]
        var cbk     = document.getElementById('cbk_encadern___'+ind).checked
        var qnt     = document.getElementById('txt_Quantidade___'+ind).value
        var valEnc  = 3*qnt
        var valor1   = document.getElementById('txt_Valor___'+ind).value
        var valor2 = moeda.desformatar(valor1)
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
*/

function providedType(){  
    var destin = document.getElementById('hdn_Destino')
    if(destin.value == ''){
        destin.value = '0';
    } 
    document.getElementById('cbk_Tipo').onchange = function () {
        var box     = document.getElementById('cbk_Tipo').checked
        var destin  = document.getElementById('hdn_Destino')
        if(box == true){
            destin.value = '1' 
        }else{destin.value = '0'}
    }
}window.addEventListener('load', providedType)

function styleFormatDisable(){
    let arrayInput      = document.getElementsByTagName("input");
    let arraySpan       = document.getElementsByTagName("span");
    let arraySelect     = document.getElementsByTagName("select");
    let arrayP          = document.getElementsByTagName("p");
    let arrayTextA      = document.getElementsByTagName("textarea");
    //let arrayStrong     = document.getElementsByTagName("strong");
    let arrayTotal  = [arrayInput, arraySpan, arraySelect, arrayP, arrayTextA/*, arrayStrong*/];
    for(i = 0; i < arrayTotal.length; i++){
        let arrayGo = arrayTotal[i];
        for(y = 0; y < arrayGo.length; y++){
            if(arrayGo[y].getAttribute("class") != "fluigicon fluigicon-zoom-in" && arrayGo[y].getAttribute("class") != "input-group-addon"
            && arrayGo[y].getAttribute("class") != "select2-selection__choice__remove" && arrayGo[y].getAttribute("class") != "Obrigatorio"){
                //console.log(arrayGo[y].getAttribute("class"))
                arrayGo[y].style.color = "black";
            }
        }
    }
}
function controllerTime(){ setTimeout(styleFormatDisable, 200); }
window.addEventListener("load", controllerTime);


function setSuper(){
    document.getElementById("cmb_GerenteSolicitante").onchange = function () { getSuper() }
}
function getSuper(){
    var hdn_Super   = document.getElementById("numSuperior")
    console.log(DatasetFactory.getDataset("dsc_Unidades", null, null, null))
    setTimeout(hdn_Super.value = document.getElementById("cmb_GerenteSolicitante").value, 6000);
    var dataset     = DatasetFactory.getDataset("dsc_Unidades", null, null, null)
    for(i = 0; i < dataset.values.length; i++){
        var mat     = dataset.values[i].Matricula
        if(mat == hdn_Super.value){
            var un  = dataset.values[i].NomeUnidade
            document.getElementById("zm_UnidadeSolicitante").value = un 
            dir = dataset.values[i].MatSuperior
            if(dir == "00000428"){
                document.getElementById("hdn_diretoria").value =  'Pool:Role:DISUP'
            }else if(dir == "80000318"){
                document.getElementById("hdn_diretoria").value =  'Pool:Role:DIRAF'
            }else if(dir == "00000656"){  document.getElementById("hdn_diretoria").value =  'Pool:Role:DITEC' }
        }
    }
} 
window.addEventListener("load", setSuper)

/*function calc01(elem) {
    var id = elem.id;
    var xx = id.split("___")
    
    if(xx[0] == "txt_Quantidade"){
    var id2 = "txt_NPaginas___"+xx[1];
    }else {
    var id2 = "txt_Quantidade___"+xx[1];    
    }
    if(xx[0] != "cbk_encadern"){
        validateInputDigit(elem)
    var valor1 = elem.value;
    var valor2 = document.getElementById(id2).value;
    var multiplicar = valor1 * valor2;
    if (multiplicar == 'NaN') {
        document.getElementById('txt_TotalCopias___'+xx[1]).value = 0;
    } else {
        document.getElementById('txt_TotalCopias___'+xx[1]).value = multiplicar;
        var valor1 = document.getElementById('slc_TipoImpressao___'+xx[1]).value
        var mult = parseFloat(valor1) * parseFloat(multiplicar)

        if (mult == 'NaN') {
            document.getElementById('txt_Valor___'+xx[1]).value = "0,00";
        } else {
            document.getElementById('txt_Valor___'+xx[1]).value = moeda.formatar(mult);
        }
    }
    }
}

function calc02(elem){
    var id = elem.id;
    var xx = id.split("___")
    document.getElementById("hdn_TipoImpressao___"+xx[1]).value = elem.value
    var id2 = "txt_TotalCopias___"+xx[1]
    var valor1 = elem.value
    var valor2 = document.getElementById(id2).value
    var multiplicar = parseFloat(valor1) * parseFloat(valor2)

    if (multiplicar == 'NaN') {
        document.getElementById('txt_Valor___'+xx[1]).value = "0,00";
    } else {
        document.getElementById('txt_Valor___'+xx[1]).value = moeda.formatar(multiplicar);
    }
}
*/
function fnCustomDelete(elem){
    fnWdkRemoveChild(elem);	
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

function setSelectedZoomItem(selectedItem) 
{
	
	//ok
	if(selectedItem.inputId == "txt_projeto")
	{
		$('#codProjeto').val(selectedItem.CODCCUSTO);
		atualizaZoomFilterAcao(selectedItem.CODCCUSTO);
	}

	//ok
	if(selectedItem.inputId == "txt_acao")
	{
		$('#codAcao').val(selectedItem.CODACAO);
		var codProjeto = $('#codProjeto').val();
        atualizaZoomFilterRecursos(codProjeto, selectedItem.CODACAO);
        
        buscaSaldo(document.getElementById("codProjeto"),document.getElementById("codAcao"))
        verifc()
        //styleFormatDisable()
        var recuso = $('#txt_recursos').val()
        $('#codRecurso').val(recuso)
	}
    if(selectedItem.inputId == "txt_recursos")
	{
        $('#codRecurso').val(selectedItem.CODUNIDADE);
    }
	
}

function removedZoomItem(removedItem) 
{
	if(removedItem.inputId == 'txt_projeto')
	{
        window['txt_acao'].clear();
        window['txt_recursos'].clear();
        $("#codProjeto").val(0);
        $("#codAcao").val(0);
        $("#codRecurso").val(0);
        $("#txt_saldo").val("0,00");
        
	}
}	

function atualizaZoomFilterAcao(codProjeto)
{
    reloadZoomFilterValues("txt_acao", "txt_projeto,"+codProjeto);
}

function atualizaZoomFilterRecursos(codProjeto, codAcao)
{
    reloadZoomFilterValues("txt_recursos", "txt_projeto,"+codProjeto+",txt_acao,"+codAcao);
}


function buscaSaldo(projeto,acao){
        
        var campo = acao;
        
        if(campo.value != ""){ 
            var cc1 = new Array(projeto.value+"."+acao.value);
            datasetsaldo = DatasetFactory.getDataset("dssaldo", cc1, null, null);
            if (datasetsaldo.values.length > 0){	
                var record = datasetsaldo.values[0];
                saldo = eval("record[\"SALDO\"]");
            }
            document.getElementById("txt_saldo").value = moeda.formatar(parseFloat(saldo));

        }
    }

function addDado(){
    wdkAddChild("dados");
    calc03()
}

var moeda = {
	desformatar: function(num) {
		num = num.replace(/\./g, "");
		num = num.replace(/\,/g, ".");
		return parseFloat(num);
	},
	formatar: function(num) {
		x = 0;
		if (num<0) {
			num = Math.abs(num);
			x = 1;
		}
		if (isNaN(num)) num = "0";
		cents = Math.floor((num*100+0.5)%100);
		num = Math.floor((num*100+0.5)/100).toString();
		if (cents < 10) cents = "0" + cents;
		for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
			num = num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
		ret = num + ',' + cents;
		if (x == 1) ret = ' – ' + ret;
		return ret;
	},
	arredondar: function(num) {
		return Math.round(num*Math.pow(10,2))/Math.pow(10,2);
	}
}

function PrevisaoEntrega(){// Não utilizado
    var dataEnvio = document.getElementById("dt_DataEnvio").value
    var dataEnvio = new String(dataEnvio);
    var dataEnvio = new Date(dataEnvio);
    dataEnvio.setDate(dataEnvio.getDate() +11);
    var dia_N_Util = new String(dataEnvio);
    var patt1 = /Sat+/g;
    var patt2 = /Sun+/g; 
    if(dia_N_Util.match(patt1)){
        dataEnvio.setDate(dataEnvio.getDate() + 2);
    }
    if(dia_N_Util.match(patt2)){
        dataEnvio.setDate(dataEnvio.getDate() + 1);
    }
 
    var Ano = dataEnvio.getFullYear();
    var mes = new Array();
        mes[0] = "01"
        mes[1] = "02"
        mes[2] = "03"
        mes[3] = "04"
        mes[4] = "05"
        mes[5] = "06"
        mes[6] = "07"
        mes[7] = "08"
        mes[8] = "09"
        mes[9] = "10"
        mes[10] = "11"
        mes[11] = "12"
    var dia = new Array();
        dia[1] = "01"
        dia[2] = "02"
        dia[3] = "03"
        dia[4] = "04"
        dia[5] = "05"
        dia[6] = "06"
        dia[7] = "07"
        dia[8] = "08"
        dia[9] = "09"
    var Mes = mes[dataEnvio.getMonth()];
    if(dataEnvio.getDate() <= 9){
    var Dia = dia[dataEnvio.getDate()];
    }else{
    var Dia = dataEnvio.getDate()
    }
    var dataFinal = [Ano+"-"+Mes+"-"+Dia];
    document.getElementById("dt_DataChegada").value = dataFinal;
}

function HabilitarTipo(){
    var tipo = document.getElementById("slc_Tipo").value
    if(tipo == "Selecione"){
        document.getElementById("txt_InfoEmba").style.display = "none";
        document.getElementById("txt_InfoVeic").style.display = "none";
        document.getElementById("txt_InfoVoo").style.display = "none";
        document.getElementById("txt_Informacoes").style.display = "none";
        document.getElementById("dt_DataEnvio").style.display = "block";
        document.getElementById("dt_DataChegada").style.display = "block";
    }
    if(tipo == "Terrestre"){
        document.getElementById("txt_InfoEmba").style.display = "none";
        document.getElementById("txt_InfoVeic").style.display = "block";
        document.getElementById("txt_InfoVoo").style.display = "none";
        document.getElementById("txt_Informacoes").style.display = "block";
        document.getElementById("dt_DataEnvio").style.display = "block";
        document.getElementById("dt_DataChegada").style.display = "block";
    }
    if(tipo == "Aereo"){
        document.getElementById("txt_InfoEmba").style.display = "none";
        document.getElementById("txt_InfoVeic").style.display = "none";
        document.getElementById("txt_InfoVoo").style.display = "block";
        document.getElementById("txt_Informacoes").style.display = "block";
        document.getElementById("dt_DataEnvio").style.display = "block";
        document.getElementById("dt_DataChegada").style.display = "block";
    }
    if(tipo == "Fluvial"){
        document.getElementById("txt_InfoEmba").style.display = "block";
        document.getElementById("txt_InfoVeic").style.display = "none";
        document.getElementById("txt_InfoVoo").style.display = "none";
        document.getElementById("txt_Informacoes").style.display = "block";
        document.getElementById("dt_DataEnvio").style.display = "block";
        document.getElementById("dt_DataChegada").style.display = "block";
    }
    if(tipo == "Retirar"){
        document.getElementById("txt_InfoEmba").style.display = "none";
        document.getElementById("txt_InfoVeic").style.display = "none";
        document.getElementById("txt_InfoVoo").style.display = "none";
        document.getElementById("txt_Informacoes").style.display = "none";
        document.getElementById("dt_DataEnvio").style.display = "none";
        document.getElementById("dt_DataChegada").style.display = "none";
    }
}

/*
function validateInputText(elem){
    valor = elem.value
    if(valor.match(/\W/g)){

    }
    valor = valor.replace(/\W/g,"")
    document.getElementById(elem.id).value = valor
}
*/
/*function validateInputDigit(elem){
    valor = elem.value
    valor = valor.replace(/\D/g,"")
    document.getElementById(elem.id).value = valor
}*/

/*function calcular() {
    var valor1 = document.getElementById('txt_Quantidade').value;
    var valor2 = document.getElementById('txt_NPaginas').value;
    var multiplicar = valor1 * valor2;
    if (multiplicar == 'NaN') {
        document.getElementById('txt_TotalCopias').value = 0;
    } else {
        document.getElementById('txt_TotalCopias').value = multiplicar;
    }
}*/