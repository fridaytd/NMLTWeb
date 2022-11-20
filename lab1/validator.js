function Validator (Object) {
    formElement = document.querySelector(Object.form);
    var allRules = {};
    if (formElement) {
        Object.rules.forEach(rule => {
            if (Array.isArray(allRules[rule.selector])) {
                allRules[rule.selector].push(rule.test);
            }
            else {
                allRules[rule.selector] = [rule.test];
            }

        })
    }
    console.log(allRules)
    var validate = (inputElement, rule) => {
        if (inputElement) {
            for (let i = 0; i < rule.length; i++) {
                var message = rule[i](inputElement.value)
                console.log(message);
                if (message){
                    alert(message);
                    return false;
                }
                    
            }

        }
        return true;
    }

    let isValidForm = true

    // if (formElement) {
    //     Object.rules.forEach(rule => {
    //         var inputElement = formElement.querySelector(rule.selector)
    //         inputElement.onblur = () => {
    //             var t = setTimeout(()=>{
    //                 validate(inputElement, allRules[rule.selector])
    //             }, 1000)
    //         }
    //         inputElement.onfocus = () => {
                
    //         }
    //     })
    // }

    formElement.onsubmit = (e) => {
        e.preventDefault();
        for(let rule of Object.rules) {
            var inputElement = formElement.querySelector(rule.selector)
            isValidForm =  validate(inputElement, allRules[rule.selector])
            if (!isValidForm)
                break;
        }
        if (isValidForm) {
            formElement.submit();
        }
    }

}

Validator.isRequired = (selector) => {
    return {
        selector: selector,
        test: (value)=>{
            return value ? undefined: `Vui lòng nhập !!!`;
        }
    }
}

Validator.isEmail = (selector) => {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return {
        selector: selector,
        test: (value) =>{
            return regex.test(value) ? undefined : `Vui lòng nhập địa chỉ mail phù hợp`
        }
    }
}

Validator.isPassword = (selector) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return {
        selector: selector,
        test: (value) =>{
            return regex.test(value) ? undefined : `Vui lòng nhập password phù hợp`
        }
    }
}

Validator.isComfirmPassword = (selector, confirmText) => {
    return {
        selector: selector,
        test : (value) => {
            return value === document.getElementById('password').value ? undefined : "Vui lòng nhập mật khẩu trùng khớp"
        }
    }
}