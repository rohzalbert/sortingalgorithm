Algorithm: Insertion Sort
Input:
arr: An array of integers that needs to be sorted.
Output:
A sorted array where the elements are sorted in ascending order.

Steps:

Initialize:
n := length of arr (Number of elements in the array).
For each element in the array starting from the second element to the last:
Let i be the current position starting from 1 to n-1.
current := arr[i] (The element in the array at position i).
j := i - 1 (Start comparing with the element just before i).
While j is greater than or equal to 0 and arr[j] is greater than current:
Move arr[j] one position to the right: arr[j + 1] = arr[j].
Decrement j by 1 (Move backwards in the array).

Insert the current element:
arr[j + 1] := current (Place the current element at its correct position).
Repeat steps 2-4 until the entire array is iterated through.
Return arr (The sorted array).

Explanation:
The algorithm starts by considering the second element of the array, assuming the first element (index 0) is in a sorted position.
It then picks each element sequentially and inserts it into the correct position in the already sorted part of the array, which extends from the start of the array up to the element just before the current one.
This is done by shifting all elements that are greater than the current element one position to the right, making room to insert the current element into its correct sorted position.
The process continues until the last element of the array has been positioned correctly.
