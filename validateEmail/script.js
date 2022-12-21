class ValidateEmail{
    constructor(email) {
        this.email = email;
    }
    validateMail(){
        let regex = /\S+@\S+.\S+$/;

                let result = regex.test(this.email);


                if(result){
                    alert("Email validation ok.")
                }else{
                    alert("Please enter correct email!")
                }
    }
}

let email = prompt("Enter your email");
let obj = new ValidateEmail(email);
obj.validateMail();