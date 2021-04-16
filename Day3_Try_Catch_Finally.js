/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        let arr=s.split("").reverse();
        s=arr.join('');
    } catch(e){
        console.log(e.message);
    } console.log(s);
}
