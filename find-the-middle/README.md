# Code Wars Code 10 Kata: Find the Middle
**The challenge**
as a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

**the process**
Due to bad-timing on my lunch, most people had already completed whiteboarding when I got back from lunch, except for Karen and Mariah, who I had been working with too often already. I ended up discussing strategies with Ryan but did not whiteboard. The solution seemed simple, just sort the array and get the middle element. Of course, we needed the **index** of the middle element which added a bit of complexity, clearly would require making a copy of the array.

**the solution**
Copied the array, sorted the copy and then queried for the index of element [1] in the original array. This shold have been easier than it was - turns out I had to use some methods I had not planned on, such as splice. Code is in the solution.js file.
