function* fibonacciGenerator() {
	let a = 0,
		b = 1;
	while (true) {
		yield a;
		[a, b] = [b, a + b];
	}
}

const fibonacciSequence = fibonacciGenerator();

for (let i = 0; i < 10; i++) {
	console.log(fibonacciSequence.next().value);
}
