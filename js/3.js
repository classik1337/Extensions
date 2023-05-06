a=[1,-2,3,-4,5]

let result = a.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(result);
