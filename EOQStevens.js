function EOQ (U, O, H, C){
	return Math.sqrt((2*U*O)/(H*C));
}

console.log(EOQ(240, 5, 0.3, 7));
