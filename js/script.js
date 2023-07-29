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
    let arr = JSON.parse(localStorage.getItem('id'))
    let login = document.getElementById("login")
    let pass = document.getElementById("pass")
    let permissao;// 0 = permissao de login ok, 1 = permissao negada (login/senha incorreta)

    for(let i = 0 ; i < arr.length; i++){
        if(login.value == arr[i].login && pass.value == arr[i].password ){
            permissao = 0
            break
        }else{
            permissao = 1
        }
    }

    if(permissao == 0){
        window.location.href = "dashboard.html"
        alert('Login realizado com sucesso')
        login.value = ""
        pass.value = ""
    }else if(permissao == 1){
        alert('Login/senha incorretos')
    }

}

registrar = () => {
    
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let login = document.getElementById("login") 
    let pass = document.getElementById("pass")
    let cpass = document.getElementById("cpass")
    let confirm;


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