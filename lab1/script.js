const search = document.forms['search']
const txt = document.getElementById('txt_search')
txt.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') 
    sent_data(event)
    
})

const sent_data = (event) => {
     if (txt.value.length > 0) {
            search.submit()
        }
        else {
            event.preventDefault()
        }
}

let emailReg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
let passReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*-]).{8,}/

const checkMail = (mail) => {
    if (!emailReg.test(mail.value)){
        alert('Email khong hop le')
        return false
    }

    return true
}

const checkPass = (pass) => {
    if (!passReg.test(pass.value)){
        alert('passs khong hop le')
        return false
    }

    return true
}

const loginCheck = (login) => {
    if (checkMail(login.email) && checkPass(login.password))
    {
        return true
    }
    else {
        return false
    }
}

const logonCheck = (logon) => {
    if (checkMail(logon.email) && checkPass(logon.password) && checkPass(passwordagain))
    {
        return true
    }
    else {
        return false
    }
}
