function validateForm(form){
  var Now_State = parseInt(getValue("WKNumState"));
  var completTask = getValue("WKCompletTask");
  var errorMsg = "";
  var endofline = "</br>";

  String.prototype.isEmpty = function(){ 
      return (!this || 0 === this.length); 
  };
	
  //var Projeto 		= form.getValue("txt_projeto");
	//var Acao 			= form.getValue("txt_acao");
	//var Unidade 		= form.getValue("txt_recursos");
	var Projeto 		= form.getValue("codProjeto");
	var Acao  			= form.getValue("codAcao");
	var Unidade 		= form.getValue("codRecurso");
  var Saldo       = form.getValue("txt_saldo");
  var ValorTotal  = form.getValue("hdn_validateOrcamento");
  var Superior    = form.getValue("cmb_GerenteSolicitante");

  fields = [Superior, Projeto, Acao, Unidade]
  names  = ["Superior para Aprovação", "Projeto", "Ação", "Unidade"]

  if(Now_State == 0 || Now_State == 4 || Now_State == 31 &&(completTask == "true")){
    SolicitacaoValidate()
    for(var i = 0; i < fields.length; i++){
        if(fields[i] == null || fields[i] == '' || fields[i] == 0 || fields[i] == "0,00" || fields[i] == "Selecione"){
        errorMsg += "Favor preencher campo " +'<b>'+ names[i] +'</b>'+ endofline;
        }
    }
    /*if(Saldo == 0 || Saldo == null || Saldo == "0,00"){
      errorMsg += "O campo <b>Saldo</b> do painel <b>Dotação Orçamentária</b> não pode estar zerado" + endofline;
    }
    if(ValorTotal == 0){
      errorMsg += "<b>Saldo</b> de orçamento não pode ser inferior ao <b>valor total</b> de demanda" + endofline;
    }*/
    if (errorMsg.trim().isEmpty() == false) throw "\n"+errorMsg;
  }

  if(Now_State == 8 &&(completTask == "true")){
    /*var idxSolicitacao = form.getChildrenIndexes("dados");
        for (var i = 0; i < idxSolicitacao.length; i++) {
            if(form.getValue("txt_Quantidade___" + idxSolicitacao[i]) == "" || form.getValue("txt_Quantidade___" + idxSolicitacao[i]) == null
            || form.getValue("txt_Quantidade___" + idxSolicitacao[i]) == 0){
            errorMsg += "Campo <b>Quantidade</b> é obrigatório." +endofline;
            }
        }*/
        /*if(ValorTotal == 0){
          errorMsg += "<b>Saldo</b> de orçamento não pode ser inferior ao <b>valor total</b> de demanda" + endofline;
        }*/
        if (errorMsg.trim().isEmpty() == false) throw "\n"+errorMsg;
  }

  if(Now_State == 25 &&(completTask == "true")){
      if(form.getValue("rating_numbers1") == 0 || form.getValue("rating_numbers2") == 0 || form.getValue("rating_numbers3") == 0){
        errorMsg += "É necessário completar o preenchimento do painel <b>Avaliação do Serviço</b>." +endofline;
      }
      if(form.getValue("dt_recebment") == null || form.getValue("dt_recebment")  == ''){
        errorMsg += "Favor preencher campo " +'<b>Data de recebimento</b>.'+ endofline;
      }
      if (errorMsg.trim().isEmpty() == false) throw "\n"+errorMsg;
  }

  if(Now_State == 19 &&(completTask == "true")){
    var Tipo          = form.getValue("slc_Tipo");
    var dataEnvio     = form.getValue("dt_DataEnvio");
    var info    = form.getValue("txt_Informacoes");
  
    fields = [Tipo, dataEnvio]
    names  = ["Tipo", "Data de Envio"]

    if(Tipo != 'Retirar'){
      for(var i = 0; i < fields.length; i++){
        if(fields[i] == null || fields[i] == '' || fields[i] == 0 || fields[i] == "0,00" || fields[i] == "Selecione"){
        errorMsg += "Favor preencher campo " +'<b>'+ names[i] +'</b>'+ endofline;
        }
      }
    }
    
    if(Tipo == 'Terrestre' && info == ''){
      errorMsg += "Favor preencher campo " +'<b>Informações do Veículo</b>'+ endofline;
    }else if(Tipo == 'Aereo' && info == ''){
      errorMsg += "Favor preencher campo " +'<b>Informações do Vôo</b>'+ endofline;
    }else if(Tipo == 'Fluvial' && info == '') errorMsg += "Favor preencher campo " +'<b>Informações da Embarcação</b>'+ endofline;

    if (errorMsg.trim().isEmpty() == false) throw "\n"+errorMsg;
  }

  function SolicitacaoValidate(){
    var idxSolicitacao = form.getChildrenIndexes("dados");

        if(idxSolicitacao.length <= 0){
        errorMsg += "Favor adicionar <b>demanda de impressão</b> no painel <b>Solicitação</b>"  +endofline;	
        }
        for (var i = 0; i < idxSolicitacao.length; i++) {

          var tipoDeman = form.getValue("txt_TipoDemanda___" + idxSolicitacao[i])
          var tipoImpr  = form.getValue("slc_TipoImpressao___" + idxSolicitacao[i])
          var quant     = form.getValue("txt_Quantidade___" + idxSolicitacao[i])
          var Npag      = form.getValue("txt_NPaginas___" + idxSolicitacao[i])
          
          if(tipoImpr != 3.00){
            if (tipoDeman == "" || tipoDeman == null || tipoDeman == '0'){
            errorMsg += "Campo Tipo de Demanda é obrigatório." +endofline;
            }
            if(tipoImpr == "" || tipoImpr == null || tipoImpr == '0'){	
            errorMsg += "Campo Tipo de Impressão é obrigatório." +endofline;	
            }
            if(quant == "" || quant == null || quant == '0'){
            errorMsg += "Campo Quantidade é obrigatório." +endofline;
            }
           /* if(Npag == "" || Npag == null || Npag == '0'){
            errorMsg += "Campo N° de Páginas é obrigatório." +endofline;
            }*/
          }else{
            if(quant == "" || quant == null || quant == '0'){
            errorMsg += "Campo Quantidade é obrigatório." +endofline;
            }
          }
        }
    }


}




