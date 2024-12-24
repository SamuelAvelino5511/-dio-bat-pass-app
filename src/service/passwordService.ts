export default function generatePass(qtdPass:number){
    let password: string = ''
    let charecters:string = 'Aa@#123456789abcdefghijfghijklmnop!'
    let chrSpecial:string = '!@#$%^&*⨃⨆⨁⨂⨘⨙⨜⨞⨡⨤⨧⨭Φἁάᾰω⨮πνξ'
    let chrUppercase:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let passwordLength = qtdPass

    if(passwordLength>4){
        for(let index = 0; index < (passwordLength - 2); index++){
            password += charecters.charAt(
                Math.floor(Math.random() * charecters.length)
            )
        }
        password += chrSpecial.charAt(Math.random() * chrSpecial.length)
        password += chrUppercase.charAt(Math.random() * chrUppercase.length)
    }else{
        alert('Password too short to generate!')
    }
    

    return password
}