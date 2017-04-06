(function () {
	{
		let b = 5;
		console.log('b = ' + b);
		const c = { didi: 'coucou' };
		c.didi = 'hello';

		let input = [1, 2];
		let [first, second] = input;
		console.log(first); // outputs 1
		console.log(second); // outputs 2
		[first, second] = [second, first];
		console.log(first); // outputs 1
		console.log(second); // outputs 2
	}

	function f([first, second]: [number, number]) {
		console.log(first);
		console.log(second);
	}
	f([1, 2]);

	let [first, ...rest] = [1, 2, 3, 4];
	console.log(first); // outputs 1
	console.log(rest); // outputs [ 2, 3, 4 ]

	let o = {
		a: "foo",
		b: 12,
		c: "bar"
	}
	let { a, b } = o;
})();

