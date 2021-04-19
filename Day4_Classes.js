/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
function Polygon(arr){
    this.arr=arr;
    this.perimeter=function(){
        let sum=0;
        for(let i in this.arr){
            sum+=arr[i];
        }
        return sum;
    }
}