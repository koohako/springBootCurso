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
