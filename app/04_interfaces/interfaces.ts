(function () {
	function printLabel(labelledObj: { label: string }) {
		console.log(labelledObj.label);
	}

	interface LabelledValue {
		label: string;
		name?: string;
		readonly y: number;
	}

	function printLabel2(labelledObj: LabelledValue) {
		console.log(labelledObj.label);
		if (labelledObj.name) {
			console.log('name', labelledObj.name);
		}
	}

	let myObj = { size: 10, label: "Size 10 Object", name: 'hello', y: 12 };
	myObj.y = 5;
	let myObj2: LabelledValue;
	myObj2 = { label: 'coucou', y: 34 };
	printLabel(myObj);
	printLabel2(myObj);

	interface Someone {
		lastname?: string
	}

	function sayHello(p: Someone) {
		if (p.lastname) {
			console.log('Hey, my name is ' + p.lastname);
		}
	}

	let a = { lastname: 'GUÉNÉGO', firstname: 'Jean-Louis' };
	sayHello(a);

	sayHello({ lastname: 'GUÉNÉGO', firstname: 'Jean-Louis' } as Someone);

	interface BinaryOperationFunc {
		(first: number, second: number): number;
	}

	function plus(a: number, b: number): number {
		return a + b;
	}

	function doOperation(func: BinaryOperationFunc, a: number, b: number) {
		return func(a, b);
	}
	var c: number = doOperation(plus, 2, 3);
	console.log('c', c);

	interface ClockInterface {
		currentTime: Date;
	}

	class Clock implements ClockInterface {
		currentTime: Date;
		constructor(h: number, m: number) {
			let today = new Date();
			this.currentTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), h, m, 0);
		}
	}

	let c1: Clock;
	c1 = new Clock(13, 43);
	console.log('c1', c1.currentTime);



})();
