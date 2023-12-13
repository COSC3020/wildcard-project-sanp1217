function pancakeSort(arr) {
	for (let end = arr.length - 1; end > 0; end--) {
		let maxIndex = findMaxIndex(arr, end);

		if (maxIndex !== end) {
			flip(arr, maxIndex);

			flip(arr, end);
		}
	}

	return arr;
}

function findMaxIndex(arr, end) {
	let maxIndex = 0;
	for (let i = 1; i <= end; i++) {
		if (arr[i] > arr[maxIndex]) {
			maxIndex = i;
		}
	}
	return maxIndex;
}

function flip(arr, k) {
	let start = 0;
	while (start < k) {
		let temp = arr[start];
		arr[start] = arr[k];
		arr[k] = temp;
		start++;
		k--;
	}
}
