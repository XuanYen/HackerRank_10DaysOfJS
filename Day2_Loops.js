/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
//Cach1
function vowelsAndConsonants(s) {
    let str='';
    for(let i=0;i<s.length;i++){
        if(['a','e','i','o','u'].includes(s[i])){
            console.log(s[i]);
        } else{
            str+=s[i];
        }
    }
    for(let i=0;i<str.length;i++){
        console.log(str[i]);
    }
}
//Cach2
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consonants += s[i] + '\n';
       }
    }
    
    console.log(consonants.trim());
}