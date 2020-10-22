

header

# this is a C++ page

[go back](../../)

[C++ objects](cpp_dataStruc)
[C++ 4300 Material](cpp_class)
I coded in c++11 and c++14, and I'm currently trying to get into c++20.
What's listed here is some references for myself, if its a new feature of C++20, then it will be acompanied with an asteris(*)


Table of contents:
- [c++14](#cpp14)
  - [i++ vs ++i](#plusPlus)
  - [signed vs unsigned](#signed)
  - [raw pointers](#pointers)
  - [data structures: linked list, doubly linked list stacks, queue, etc](dataStruc)
  - [class vs struc](#classes)
    - [object templates](#templates)
- [c++20](#cpp20)
  - iterators
  -

---
<a id = "cpp14"></a>

## C++ 14


<a id = "plusPlus"></a>

### i++ vs ++i:

Is there a difference?
Short answer: not really
Technical answer: yes, there is a difference in terms of semantics and it's recommended to use ++i in most cases. performance wise, there's no difference (exceptions do exists).The difference is i++ returns the value **before** the increment, and ++i returns the value **after** the increment. There are 2 main reasons to use ++i over i++: If the increment operator is used inside a for loop to increment integer, or if the operator is used on a simple data type, modern compliers are smart enough to return the same object [ref](https://stackoverflow.com/a/24887/8528241).
Below are examples of understandable uses of the ++ operators that show cases the differences:
- Example 1 (incrementing inside an array):
  """c++
  \\ assume arr1, arr2, and arrLen are defined, and len(arr1) = len(arr2)
    int i = 0, j = 0;
    while (i<arrLen){
    \\ semantic differences between i++ and ++i
    \\ the position, where we assign the "someValue" differs because of what it returns
    arr1[i++] = someValue
    arr2[++j] = someValue
    }
  """

<a id = "signed"></a>

### signed vs Unsigned

signed and unsigned are keywords that can be placed preceding the type keyword.
Signed and unsigned are used for  for numerical variable types



# not finished yet, Ill get back after my exam





<a id = "cpp14"></a>

