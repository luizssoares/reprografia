function idxInpUn(elem){
    var dataset = DatasetFactory.getDataset("dsc_TT", null, null, null);
    inp_vlue = elem.value
    console.log(inp_vlue)
    var arr = []
    for(i = 0; i < dataset.values.length; i++){
        var cd = dataset.values[i].CODIGO
        if(cd.indexOf(inp_vlue) != -1 && cd.length == 16){
            console.log(arr)
            arr.push(dataset.values[i])
        }    
    }
    divAll = document.getElementById('unidadev')
    if(divAll.childNodes.length == 2){
        for(j = 0; j < 2; j++){
            divAll.removeChild(divAll.lastElementChild);
        }
    }
    slcArrUn(arr)
    document.getElementById('codAcao').value = inp_vlue
}

function insertINPun(){
    inp = document.getElementsByTagName('select')
    console.log(inp)
    for(i = 0; i < inp.length; i++){
        if(inp[i].id.indexOf('txt_codacao1') != -1){
            inp[i].onchange = function (){ idxInpUn(this) }
        }
    }
}

function slcArrUn(arr){ 
    var divaAll = document.getElementById('unidadev') 
    var idA = 'txt_codunidade1'
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codacao1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Unidade'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'
    
    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    /*****************select******************** */
    var vselect = document.createElement('select')
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = idA
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = idA
    vselect.setAttributeNode(att)

    console.log("3")
    var inptest = document.getElementById('codRecurso')
    if(obju.state != 4 && inptest.value == '' || inptest.value == null){    
        document.getElementById('unin').style.display = 'block'
    }else if(obju.state != 4){
        divaAll.appendChild(vlabel)  
        var arrayOption = showDados2()              
        var voption = document.createElement('option')
        att = document.createAttribute('value')
        att.value = arrayOption[0]
        voption.setAttributeNode(att)
        voption.innerText = arrayOption[1]
        vselect.appendChild(voption)

        att = document.createAttribute('disabled')
        att.value = true
        vselect.setAttributeNode(att)

        divaAll.appendChild(vselect)
    }else{ 
        divaAll.appendChild(vlabel)  
        for(j = 0; j < arr.length; j++){
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value = arr[j].CODIGO
            voption.setAttributeNode(att)
            voption.innerText = arr[j].NOME
            vselect.appendChild(voption)
        }
        divaAll.appendChild(vselect)
        inp = document.getElementById(idA)
        if(inptest.value == '' || inptest.value == null){
            document.getElementById('codRecurso').value = inp.value
        }
        inp.onchange = function (){ document.getElementById('codRecurso').value = this.value }
    }
}
function showDados2(){
    var inpGet2 = []
    if(obju.state != 0 || obju.state != 4){
        var arrInps = ['codProjeto', 'codAcao', 'codRecurso']
        var arrdivs = ['projetov', 'acaov', 'unidadev']

        var inpNow1 = document.getElementById('codRecurso')
        var inpAux = document.getElementById('codProjeto')

        if(inpNow1.value != null || inpNow1.value != ''){
            for(j = 0; j < arrdivs.length; j++){
                var dataset1 = DatasetFactory.getDataset("dsc_TT", null, null, null);
                var datasett1 =  dataset1.values
                for(i = 0; i < datasett1.length; i++){
                    var cod = datasett1[i].CODIGO
                    var codInp1 = inpNow1.value
                    if(cod.indexOf(codInp1) != -1 && cod.length == 16){
                        inpGet2[0] = cod
                        inpGet2[1] = datasett1[i].NOME
                        console.log(cod)
                    }
                }
            }
        } 
    }
    return inpGet2
}
function verifyIten2(){
    var item = ['_txt_recursos', 'txt_recursos']

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
window.addEventListener('load', verifyIten2)
//window.addEventListener('load', slcArrUn)

