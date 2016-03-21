# Objectives

* Be able to break down a sorting algorithm into smaller steps and psuedo code those steps
* Be able to use recursion to sort an array
* Understand what a base case is
* Gain a high level understanding of "Big O" notation

## Approaching the problem

Research online about a particular sorting algorithm. Reason about this speciic
approach to sorting.

__Ask yourself a few questions:__

* What smaller steps are happening to acheive the sorting?
* How is this sorting algorithm different from others?
* How efficient is this algorithm?
* When might this algorithm be appropriate? Inappropriate? Why?

__THEN:__

* Write pseudo code to help you understand and organize the problem
* Use the included tests to help you approach the problem in small steps.

__RUNNING TESTS:__
```sh
mocha
```
You should work through tests one at a time. When you have passed the first test,
delete the `x` from the next `xit` statement.

Rinse and repeat until all tests are passing.

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

## Selection Sort
The selection sort algorithm is similar to Bubble Sort in that it shares O(n²) complexity.
What's that?? [Big O Notation](https://github.com/gSchool/computer-science-curriculum/blob/master/Unit-1/02-big-o-notation.md)

#### [WATCH Selection Sort](https://www.youtube.com/watch?v=Ns4TPTC8whw)

* __Write your solution in `lib/selection_sort.js`__

* __Run tests `mocha test/selection_sort.test.js`__
