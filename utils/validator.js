export function validEmail(string){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(string);

}
export function validPassword(string){
    return string.length >= 3
}