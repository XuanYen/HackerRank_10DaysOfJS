/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray=(nums)=>{
    return nums.map(ele=>{
        if(ele%2==0){
            return ele*2;
        } else return ele*3;
    })
}