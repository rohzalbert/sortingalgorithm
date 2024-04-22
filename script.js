function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
      // Choosing the first unsorted element.
      let current = arr[i];
      // The last index of the sorted section.
      let j = i-1; 
      // Compare the current element with the sorted part of the array and shift elements if necessary.
      while (j >= 0 && arr[j] > current) {
          arr[j + 1] = arr[j];
          j--;
      }
      // Insert the element at the correct position.
      arr[j + 1] = current;
  }
  return arr;
}

// Example:
const sampleArray = [5, 3, 8, 4, 2];
console.log("Sorted Array:", insertionSort(sampleArray));
