function displayFields(form,customHTML){ 

    var Now_State = parseInt(getValue("WKNumState"));
    var NumProcesso = getValue("WKNumProces");
    var usuario = getValue("WKUser");
    var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
  

    switch(Now_State){

        //RM - Cadastro do Usuário no DP
        case 0:

            form.setValue("slc_NomeSolicitante",usuario);
            form.setValue("dt_DataSolicita",data.format(new Date()));
            form.setVisibleById("Logistica",false);
            form.setVisibleById("Avaliacao",false);
            var state = 'var state = \"'+Now_State+'\";'
            customHTML.append('<script>');
            customHTML.append(state);  
            customHTML.append('</script>'); 
            /*var matricula = getValue("WKUser");
            var f1 = new Array(matricula);
        		
        	datasetsuperior = DatasetFactory.getDataset("dsSuperior", f1, null, null);
            numerosuperior = datasetsuperior.getValue(0, "CHAPASUPERIOR");
            nomesuperior = datasetsuperior.getValue(0, "NOMESUPERIOR");
            descricao = datasetsuperior.getValue(0, "DESCRICAO");
            nome = datasetsuperior.getValue(0, "NOME");
            form.setValue("hd_numSuperior",numerosuperior);
        	form.setValue("cmb_GerenteSolicitante",nomesuperior);
            form.setValue("zm_UnidadeSolicitante",descricao);
            
            var exterior = descricao.search("ESCRITÓRIO")
            if(exterior == 0){
                form.setValue("hdn_Destino",0)
            }else {
                form.setValue("hdn_Destino",1)
            }
            */
            break;

        case 4:

            form.setValue("slc_NomeSolicitante",usuario);
            form.setVisibleById("Logistica",false);
            form.setVisibleById("Avaliacao",false);
            form.setValue("hdn_gerAprv",Now_State);
            
            /*var matricula = getValue("WKUser");
            var f1 = new Array(matricula);
        		
        	datasetsuperior = DatasetFactory.getDataset("dsSuperior", f1, null, null);
            numerosuperior = datasetsuperior.getValue(0, "CHAPASUPERIOR");
            nomesuperior = datasetsuperior.getValue(0, "NOMESUPERIOR");
            descricao = datasetsuperior.getValue(0, "DESCRICAO");
            nome = datasetsuperior.getValue(0, "NOME");
            form.setValue("hd_numSuperior",numerosuperior);
        	form.setValue("cmb_GerenteSolicitante",nomesuperior);
            form.setValue("zm_UnidadeSolicitante",descricao);
            
            var exterior = descricao.search("ESCRITÓRIO")
            if(exterior == 0){
                form.setValue("hdn_Destino",0)
            }else {
                form.setValue("hdn_Destino",1)
            }
            */
            break;

        //Autorização do Gerente - Cadastro do Usuário
        case 6:
            form.setValue("txt_NumProc",NumProcesso);
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
            form.setVisibleById("Logistica",false);
            form.setVisibleById("Avaliacao",false);
            var state = 'var state = \"'+Now_State+'\";'
            customHTML.append('<script>');
            customHTML.append(state);  
            customHTML.append('</script>'); 

            break;

        case 59:
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
            form.setVisibleById("Logistica",false);
            form.setVisibleById("Avaliacao",false);
        break;
        //Cadastro do Usuário na Rede SEBRAE
        case 8:
            var IdDados = form.getChildrenIndexes("dados");
            for (var i = 0; i < IdDados.length; i++) { 	
                Quantidade = "txt_Quantidade___"+IdDados[i];
                naoHabilitarInput(customHTML, Quantidade)
            }
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
            form.setVisibleById("Logistica",false);
            form.setVisibleById("Avaliacao",false);
 
            break;


        case 31:
            form.setVisibleById("Logistica",false);
            form.setVisibleById("Avaliacao",false);

            break;

        case 14:
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
            form.setVisibleById("Logistica",false);
            form.setVisibleById("Avaliacao",false);
            var state = 'var state = \"'+Now_State+'\";'
            customHTML.append('<script>');
            customHTML.append(state);  
            customHTML.append('</script>'); 
            break;


        case 46:
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
            form.setVisibleById("Logistica",false);
            form.setVisibleById("Avaliacao",false);
            
            break;
        
        case 47:
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
            form.setVisibleById("Logistica",false);
            form.setVisibleById("Avaliacao",false);
            
            break;
            
        case 19:
            form.setValue("slc_NomeResponsavel",usuario);
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
            form.setVisibleById("Avaliacao",false);
            

            break;

        case 25:
            ocultarCampo(customHTML, "addRateio");
            ocultarCampo(customHTML, "delRateio");
            form.setVisibleById("Logistica",false);
            

            break;

        default:    
    }
}