var idDeletar;

const showModalDeletar = function (id){
    $('#modalDeletar').modal('show')
    idDeletar = id;
}



const deletar = function(path){
    if(idDeletar !== 0){
        window.location.href='/' + path + '/delete/' + idDeletar
    }
}


const verificar = function(){
    var senha1 = document.getElementById("senha1").value;
    var senha2 = document.getElementById("senha2").value;
    if(senha1!==senha2){
        $("#alertSenha").slideDown(400);
        $("#salvar").prop('disabled', true);
    }else{
        $("#salvar").prop('disabled', false);
        $("#alertSenha").slideUp(200);
    }
}

const traduzirSenha = function(){
    var senha = document.getElementById("senha").value;
    console.log(senha)
    
    document.getElementById("senha2").value = senha;
}