
class Usuario{
    constructor(name, email, login, password){
        this.name = name
        this.email = email
        this.login = login
        this.password = password
    }
}

let usuarios = []

redirect = (value) =>{
    window.location.href = value
}

logar = () =>{
    let storageData = JSON.parse(localStorage.getItem('id'))
    let login = document.getElementById("login")
    let pass = document.getElementById("pass")
    let permissao = 0// 0 = permissao de login ok, 1 = permissao negada (login/senha incorreta)
    let userLogado = ""

    for(let i = 0; i < storageData.length; i++){
        if(login.value == storageData[i].login && pass.value == storageData[i].password){
            permissao = 2
            userLogado = storageData[i].login
            console.log
        }else{
            permissao = 1
        }
    }

    if(permissao == 2){
        window.location.href = 'dashboard.html'
        
    }else if(permissao = 1){
        alert("Login/senha incorretos")
        login.value = ""
        pass.value = ""
    }
}

registrar = () => {
    
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let login = document.getElementById("login") 
    let pass = document.getElementById("pass")
    let cpass = document.getElementById("cpass")

    if(pass.value !== cpass.value){
        alert("As senhas nao conferem")
    }else if(name.value !== "" && email.value !== "" && login.value !== ""){
        let user = new Usuario(name.value, email.value, login.value, pass.value)
        usuarios.push(user)
        localStorage.setItem('id', JSON.stringify(usuarios))
        name.value = ""
        email.value = ""
        login.value = ""
        pass.value = ""
        cpass.value = ""
    }else{
        alert("Preencha os campos corretamente")
    }
}