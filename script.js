const form = document.getElementById('form');
const fname = document.getElementById('fname');
const fnameErr = document.getElementById('fnameErr')
const lname = document.getElementById('lname');
const lnameErr = document.getElementById('lnameErr')
const email = document.getElementById('email');
const emailErr = document.getElementById('emailErr')
const pword = document.getElementById('pword');
const pwordErr = document.getElementById('pwordErr')
const input = document.getElementsByTagName('input')



form.addEventListener('submit', (e) =>{

    e.preventDefault();
    changeClass()

});

function changeClass(){
    const fnameVal = fname.value.trim();
    const lnameVal = lname.value.trim();
    const emailVal = email.value.trim();
    const pwordVal = pword.value.trim();

    if (fnameVal == ""){
        fnameErr.className = 'show'
        input[0].className = 'empty'
    } else{
        console.log(fnameVal)
    }
    if (lnameVal == ""){
        lnameErr.className = 'show'
        input[1].className = 'empty'
    } 
    if (emailVal == ""){
        emailErr.className = 'show'
        input[2].className = 'empty'
    } 
    if (pwordVal == ""){
        pwordErr.className = 'show'
        input[3].className = 'empty'
    } 
   
}




