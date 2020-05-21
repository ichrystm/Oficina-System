
document.querySelector("#btn-cancel").addEventListener('click', function() {
    document.querySelector(".bg-client").style.display = 'none'
    document.getElementById("client_name").value = ""
    document.getElementById("client_cep").value = ""
    document.getElementById("client_cpf").value = ""
    document.getElementById("client_tel").value = ""
    document.getElementById("client_street").value = ""
    document.getElementById("client_number").value = ""
    document.getElementById("client_neighbourhood").value = ""
})









document.getElementById("client_cep").addEventListener("blur", () => {
    let usercep = document.getElementById("client_cep").value
    getCep(usercep)
})

const getCep = (usercep) => {
    fetch(`https://viacep.com.br/ws/${usercep}/json/ `)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(data) {
        let street = data.logradouro
        let neighbourhood = data.bairro
        fillFields(street, neighbourhood)
    })
    .catch(function(error) {
        console.log('error')
    })
}

const fillFields = (street, neighbourhood) => {
    document.getElementById("client_street").value = street
    document.getElementById("client_neighbourhood").value = neighbourhood
}