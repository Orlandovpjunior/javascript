
function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = window.document.getElementById('txt1');
    let res = window.document.getElementById('res');
    if(fano.value.length === 0 || fano.value > ano){
        window.alert('ERRO');
    }else{
        let fsex = window.document.getElementsByName('radsex')
        let idade = ano - Number(fano.value);
        let genero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade <= 10){
                //criança
                genero = 'Criança';
                img.setAttribute('src', 'img/criancah.png')
            }else if(idade < 18){
                //Jovem
                genero = 'Jovem';
                img.setAttribute('src', 'img/adolecenh.png')
            }else if(idade < 50){
                //adulto
                genero = 'Adulto';
                img.setAttribute('src', 'img/adultoh.png')
            }else{
                //idoso
                genero = 'Idoso';
                img.setAttribute('src', 'img/idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade <= 10){
                //criança
                genero = 'Criança';
                img.setAttribute('src', 'img/crianca.png')
            }else if(idade < 18){
                //Jovem
                genero = 'Adolescente';
                img.setAttribute('src', 'img/adolecenm.png')
             }else if(idade < 50){
                //adulto
                genero = 'Adulta';
                img.setAttribute('src', 'img/adultom.png')
            }else{
                //idoso
                genero = 'Idosa';
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`   
        res.appendChild(img);   
    }
}