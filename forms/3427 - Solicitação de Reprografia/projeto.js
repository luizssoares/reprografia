
function a(){
    var dataset = DatasetFactory.getDataset("dsprojeto", null, null, null);
    return dataset.values
}
function inp_slc(){
    var divaAll = document.getElementById('projetov')
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codprojeto1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Projeto'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'
    
    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll.appendChild(vlabel)
    /*****************select******************** */
    var vselect = document.createElement('select')
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'txt_codprojeto1'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'txt_codprojeto1'
    vselect.setAttributeNode(att)
    
    console.log("3")
    if(obju.state != 4){    
        var arrayOption = showDados()              
        var voption = document.createElement('option')
        att = document.createAttribute('value')
        att.value = arrayOption[0]
        voption.setAttributeNode(att)
        voption.innerText = arrayOption[1]
        vselect.appendChild(voption)

        att = document.createAttribute('disabled')
        att.value = true
        vselect.setAttributeNode(att)
    }else{
        var arrayOption =   a()  
        for(i = 0; i < arrayOption.length; i++){
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value = arrayOption[i].CODCCUSTO
            voption.setAttributeNode(att)
            voption.innerText = arrayOption[i].NOME
            vselect.appendChild(voption)
        }
    }

    divaAll.appendChild(vselect)
    insertINP()
}
var obju = {
    state: window.parentOBJ.ECM.workflowView.sequence
} 
function showDados(){
    var inpGet = []
    console.log(obju.state)
    if(obju.state != 0 && obju.state != 4){
        var arrInps = ['codProjeto', 'codAcao', 'codRecurso']
        var arrdivs = ['projetov', 'acaov', 'unidadev']

        var inpNow = document.getElementById('codProjeto')

        if(inpNow.value != null || inpNow.value != ''){
            for(j = 0; j < arrdivs.length; j++){
                var dataset =   a()
                for(i = 0; i < dataset.length; i++){
                    var cod = dataset[i].CODCCUSTO
                    var codInp = inpNow.value
                    if(cod.indexOf(codInp) != -1 && cod.length == 5){
                        inpGet[0] = cod
                        inpGet[1] = dataset[i].NOME
                        console.log(cod)
                    }
                }
            }
        } 
    }
    return inpGet
}
function verifyIten(){
    /*var item = document.getElementById('_txt_projeto')
    var divV = item.parentElement
    console.log(item)
    console.log(divV)
    if(item.value != null && item.value != undefined){
        divV.style.display = 'block'
    }else if(item.innerHTML != '' && item.innerHTML != undefined && item.innerHTML != null){
        divV.style.display = 'block'
    }else{inp_slc()}
    */
    var item = ['_txt_projeto', 'txt_projeto']

    for(i = 0; i < item.length; i++){
        var itemNow = document.getElementById(item[i])
        if(itemNow != null){
            var divV = itemNow.parentElement
            if(itemNow.value != null && itemNow.value != undefined){
                divV.style.display = 'block'
            }else if(itemNow.innerHTML != '' && itemNow.innerHTML != undefined && itemNow.innerHTML != null){
                divV.style.display = 'block'
            }else{slcArr()}
        }
    }
}
window.addEventListener('load', verifyIten)
//window.addEventListener('load', inp_slc)