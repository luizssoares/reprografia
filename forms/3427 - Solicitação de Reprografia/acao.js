function idxInp(elem){
    var dataset = DatasetFactory.getDataset("dsc_TT", null, null, null);
    inp_vlue = elem.value
    console.log(inp_vlue)
    var arr = []
    for(i = 0; i < dataset.values.length; i++){
        var cd = dataset.values[i].CODIGO
        if(cd.indexOf(inp_vlue) != -1 && cd.length == 12){
            console.log(arr)
            arr.push(dataset.values[i])
        }    
    }
    divAll = document.getElementById('acaov')
    if(divAll.childNodes.length == 2){
        for(j = 0; j < 2; j++){
            divAll.removeChild(divAll.lastElementChild);
        }
    }
    slcArr(arr)
    insertINPun()
    document.getElementById('codProjeto').value = inp_vlue
}

function insertINP(){
    inp = document.getElementsByTagName('select')
    console.log('dasd')
    for(i = 0; i < inp.length; i++){
        if(inp[i].id.indexOf('txt_codprojeto1') != -1){
            inp[i].onchange = function (){ idxInp(this) }
        }
    }
}

function slcArr(arr, ind){
    var divaAll = document.getElementById('acaov')
    var idA = 'txt_codacao1'

    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codacao1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Ação'

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
    att.value = idA
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = idA
    vselect.setAttributeNode(att)

    console.log("3")
    
    if(obju.state != 4){    
        var arrayOption = showDados1()              
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
        for(j = 0; j < arr.length; j++){
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value = arr[j].CODIGO
            voption.setAttributeNode(att)
            voption.innerText = arr[j].NOME
            vselect.appendChild(voption)
        }
    }

    divaAll.appendChild(vselect)
}
function showDados1(){
    var inpGet1 = []
    if(obju.state != 0 || obju.state != 4){
        var arrInps = ['codProjeto', 'codAcao', 'codRecurso']
        var arrdivs = ['projetov', 'acaov', 'unidadev']

        var inpNow = document.getElementById('codAcao')
        var inpAux = document.getElementById('codProjeto')

        if(inpNow.value != null || inpNow.value != ''){
            for(j = 0; j < arrdivs.length; j++){
                var dataset = DatasetFactory.getDataset("dsc_TT", null, null, null);
                var datasett =  dataset.values
                for(i = 0; i < datasett.length; i++){
                    var cod = datasett[i].CODIGO
                    var codInp = inpNow.value
                    if(cod.indexOf(codInp) != -1 && cod.length == 12){
                        inpGet1[0] = cod
                        inpGet1[1] = datasett[i].NOME
                        console.log(cod)
                    }
                }
            }
        } 
    }
    return inpGet1
}
function verifyIten1(){
    /*var item = document.getElementById('_txt_acao')
    var divV = item.parentElement
    console.log(item)
    console.log(divV)
    if(item.value != null && item.value != undefined){
        divV.style.display = 'block'
    }else if(item.innerHTML != '' && item.innerHTML != undefined && item.innerHTML != null){
        divV.style.display = 'block'
    }else{slcArr()}
*/
    var item = ['_txt_acao', 'txt_acao']

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
window.addEventListener('load', verifyIten1)
//window.addEventListener('load', slcArr)

