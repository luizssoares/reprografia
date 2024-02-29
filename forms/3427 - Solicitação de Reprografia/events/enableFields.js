function enableFields(form){ 
	var Now_State = parseInt(getValue("WKNumState"));

	if(Now_State == 0 || Now_State == 31){
		form.setEnabled("slc_NomeSolicitante", false);
	}
	if(Now_State == 8){
		disableAllFields(form);
		fields = ["hdn_gerAprv"]
		enableFieldsFromList(form, fields) 
		/*fields = ["txt_ValorTotal", "txt_saldo", "hdn_validateOrcamento", "Msg_GuiaErro"]
		enableFieldsFromList(form, fields) 
		var IdDados = form.getChildrenIndexes("dados");
		for (var i = 0; i < IdDados.length; i++) { 	
			form.setEnabled("txt_TipoDemanda___" + IdDados[i],false);
			form.setEnabled("slc_TipoImpressao___" + IdDados[i],false);
			form.setEnabled("hdn_TipoImpressao___" + IdDados[i],true);
			form.setEnabled("txt_Quantidade___" + IdDados[i],true);
			form.setEnabled("txt_NPaginas___" + IdDados[i],true); 	
			form.setEnabled("txt_TotalCopias___" + IdDados[i],true); 
			form.setEnabled("txt_Valor___" + IdDados[i],true); 
		}*/
	}
	if(Now_State == 6 || Now_State == 14 || Now_State == 46 || Now_State == 47 || Now_State == 59){
		disableAllFields(form); 
		fields = ["hdn_gerAprv"]
		enableFieldsFromList(form, fields) 	
		var IdDados = form.getChildrenIndexes("dados");
		for (var i = 0; i < IdDados.length; i++) { 	
			form.setEnabled("txt_TipoDemanda___" + IdDados[i],false);
			form.setEnabled("slc_TipoImpressao___" + IdDados[i],false);
			form.setEnabled("txt_Quantidade___" + IdDados[i],false);
			form.setEnabled("txt_NPaginas___" + IdDados[i],false); 	 
		}
	}
	if(Now_State == 19){
		disableAllFields(form);
		fields = ["slc_Tipo", "dt_DataEnvio", "dt_DataChegada", "txt_Informacoes"]
		enableFieldsFromList(form, fields) 	
		var IdDados = form.getChildrenIndexes("dados");
		for (var i = 0; i < IdDados.length; i++) { 	
			form.setEnabled("txt_TipoDemanda___" + IdDados[i],false);
			form.setEnabled("slc_TipoImpressao___" + IdDados[i],false);
			form.setEnabled("txt_Quantidade___" + IdDados[i],false);
			form.setEnabled("txt_NPaginas___" + IdDados[i],false); 	
		}
	}
	if(Now_State == 25){
		disableAllFields(form);
		fields = ["rating_numbers1", "rating_numbers2", "rating_numbers3", "txt_Comentario", "dt_recebment"]
		enableFieldsFromList(form, fields) 	
		var IdDados = form.getChildrenIndexes("dados");
		for (var i = 0; i < IdDados.length; i++) { 	
			form.setEnabled("txt_TipoDemanda___" + IdDados[i],false);
			form.setEnabled("slc_TipoImpressao___" + IdDados[i],false);
			form.setEnabled("txt_Quantidade___" + IdDados[i],false);
			form.setEnabled("txt_NPaginas___" + IdDados[i],false); 	
		}
    }
}




function disableAllFields(form) {
	var fields = form.getCardData();
	var iterare = fields.keySet().iterator();
	while (iterare.hasNext()) {
		var key = iterare.next();
		form.setEnabled(key, false, false);
	}
}

function enableFieldsFromList(form, fields) {
	for (var i = 0; i < fields.length; i++) {
		form.setEnabled(fields[i], true);
	}
}

function disableFieldsFromList(form,fields){
	for(var i = 0; i<fields.length; i++){
		form.setEnabled(fields[i], false);
	}
}
