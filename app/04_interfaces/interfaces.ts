function printLabel(labelledObj: { label: string }) {
	console.log(labelledObj.label);
}

interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
	console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
printLabel2(myObj);
