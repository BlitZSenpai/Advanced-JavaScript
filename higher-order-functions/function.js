function arrayManipulation(array, instruction) {
	const output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(instruction(array[i]));
	}
	return output;
}

const multiplyBy2 = (input) => {
	return input * 2;
};

const result = arrayManipulation([1, 2, 3], multiplyBy2);
