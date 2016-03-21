# Objectives

* Be able to break down a sorting algorithm into smaller steps and psuedo code those steps
* Be able to use recursion to sort an array
* Understand what a base case is
* Be able to write a simple unit test
* Gain a high level understanding of "Big O" notation

## Approaching the problem

__DON'T LOOK UP THE ANSWER ONLINE. We value process over product. It's about learning, not finishing.__

Research online about a particular sorting algorithm. Reason about this specific
approach to sorting.

__Ask yourself a few questions:__

* What smaller steps are happening to acheive the sorting?
* How is this sorting algorithm different from others?
* How efficient is this algorithm?

__THEN:__

* Write pseudo code to help you understand and organize the problem
* Use the included tests to help you approach the problem in small steps.
* What other scenarios might you want to test for? Go write a new test for that scenario.

__RUNNING TESTS:__

* RED - watch a test fail
* GREEN - write the code to pass the test
* REFACTOR - Ask yourself if you can do it better. Cleaner code. Well named functions and variables.
```sh
mocha test/name_of_file.test.js
```
You should work through tests one at a time. When you have passed the first test,
delete the `x` from the next `xit` statement and run the tests again.

Rinse and repeat until all tests are passing.

__Consider what additional scenarios you might want to test for and then write a test
for that scenario__


__Good developer habits:__

When you get your first test passing, `git status`, `git add` and `git commit` before
moving on to the next test. Do this for each passing test.

## Submit
Submit a PR with your solution.

# Sorting Algorithms

## Bubble Sort
The least efficient of sorting algorithms.

#### [WATCH Bubble Sort](https://www.youtube.com/watch?v=lyZQPjUT5B4)

* __Write your solution in `lib/bubble_sort.js`__
* __Run tests `mocha test/bubble_sort.test.js`__
* __think of at least one more scenario you might want to test for and then write a test for that__

## Selection Sort
The selection sort algorithm is similar to Bubble Sort in that it shares O(n²) complexity.
What's that?? [Big O Notation](https://github.com/gSchool/computer-science-curriculum/blob/master/Unit-1/02-big-o-notation.md)

#### [WATCH Selection Sort](https://www.youtube.com/watch?v=Ns4TPTC8whw)

* __Write your solution in `lib/selection_sort.js`__
* __Run tests `mocha test/selection_sort.test.js`__
* __think of at least one more scenario you might want to test for and then write a test for that__
