function f2(arr, i) {
	if (i < arr.length) {
		process.stdout.write(arr[i].toString() + ' ');
		f2(arr, i + 1);
	}
}

function f1(arr, i) {
	if (i < arr.length) {
		f2(arr[i], 0);
		console.log();
		f1(arr, i + 1);
	}
}

arr = [
	[ 8, 4, 2 ,10 ],
	[ 12, 8, 4 ,9 ],
	[ -4, 9, 3 ,5 ]
];

f1(arr, 0);
