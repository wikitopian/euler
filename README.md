# 100 Project Euler Solutions

This is an attempt to test and showcase my javascript development skills by
solving the first hundred Euler Project problems.

My solutions are intended to be concise but not terse, passing a standard
eslint/prettier check.

1.

I used a procedural for loop in the inner iteration instead of a functional-style
array iteration because the body of the loop contained side effects.
Refactoring it to be entirely functional would have sacrificed readability in
favor of cleverness and performance, neither of which are typically the priorities
in real world javascript tasks.

Rather than hard coding the numbers in, I added a rules array as an argument,
which makes the code more modular and extensible.
