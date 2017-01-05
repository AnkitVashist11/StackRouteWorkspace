function addSquares(a,b) {
	function square(x){
		return x*x;

	}
	return square(a)+square(b);
}
var x=addSquares(2,3);
var y=addSquares(4,5);
console.log(x);