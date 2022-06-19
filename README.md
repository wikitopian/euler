# 100 Project Euler Solutions

This is an attempt to test and showcase my javascript development skills by
solving the first hundred Euler Project problems.

My solutions are intended to be concise but not terse, balancing readability
and performance with well-written ES6 code.

1.

I used a procedural for loop in the inner iteration instead of a functional-style
array iteration because the body of the loop contained side effects.
Refactoring it to be entirely functional would have sacrificed readability in
favor of cleverness and performance, neither of which are typically the priorities
in real world javascript tasks.

Rather than hard coding the numbers in, I added a rules array as an argument,
which makes the code more modular and extensible.

2.

An old-fashioned for loop is the most performant and readable way to populate
a fibonnaci series, with functional filter and reduce calls to sum all the even
results.

3.

While I was able to brute force a solution, it was not performant. I found and
adapted a performant solution. It contains two distinct functions, as finding
all of the prime numbers could be beneficial beyond the scope of the task. As an
aside, I am not a mathematician and while I don't consider it done unless and
until I understand the math, my goal with these exercises is to practice my
ability to deliver clean solutions to problems. Besides, being able to find and
adapt the hard work of others is a core competency!

4.

I generated a brute force solution that arrived at the correct answer, but it was
prohibitively slow. I figured out how to use node's native performance profiling
tools to identify the bottlenecks and refactored the code so that it runs much
faster while remaining concise and readable.

5.

I work my way down from the worst case scenario, doing my best to separate
concerns with performance in mind.

6.

Solved it procedurally and then quickly refactored with arrow functions,
eliminated repetition, and added appropriate guard clauses.

7.

We do two things (find the nth prime and find out if numbers are prime), so we
have two functions. Two optimizations are introduced, using the array of
previously confirmed primes to test against the next candidate and not bothering
to test against primes higher than the square root of the number for fancy math
reasons.

8.

I had misread the challenge, thinking that I need to find the 13th highest
four digit combination. After failing the challenge, re-reading it, and identifying the error, I was relieved that I'm in the habit of not hardcoding the
arguments like the others in the forum are doing. I changed the chunkSize
parameter from 4 to 13, grabbed the first rather than 13th result, and was
good to go.
