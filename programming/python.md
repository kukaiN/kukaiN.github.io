# Notes on Multiple Python Libaries


[go back](../../)



[go to pip page](#pipPage)

notes on Libraries:
  - [variables:](#variables)
  - [this is a variable](#this-is-a-variable)
  - [chnaging the value to a different type is also valid](#chnaging-the-value-to-a-different-type-is-also-valid)
    - [Loops:](#loops)
  - [Pip](#pip)
  - [Numpy](#numpy)
    - [Numpy Lin. Alg](#numpy-lin-alg)
  - [Scipy](#scipy)
  - [matplotlib](#matplotlib)
    - [networkX](#networkx)
    - [seaborn](#seaborn)
  - [pandas](#pandas)
  - [pygame](#pygame)
  - [openCV](#opencv)
  - [pillow](#pillow)
  - [tensorFlow](#tensorflow)
  - [pytorch](#pytorch)
  - [sklearn](#sklearn)


Basics:

## variables:

In python, unlike other langauges, variables are dynamic and doesn't require type settings:
"""Python
## this is a variable
a = 10
## chnaging the value to a different type is also valid
a = "hello"
"""

### Loops:
"""Python
for condition:
    # indent to be in scope of loop

while condition:
    # in scope
"""


---
<a id = "pipPage"></a>

## Pip

Useful commands:
pip list --outdated


---
<a id = "numpy"></a>

## Numpy

<a id = "numpylin"></a>

### Numpy Lin. Alg


---
<a id = "scipy"></a>

## Scipy

---
<a id = "matplotlib"></a>

## matplotlib

on jupyter notebook  use the command  """%matplotlib inline """ to display images inside the notebook

---
<a id = "networkx"></a>

### networkX

---
<a id = "seaborn"></a>

### seaborn

---
<a id = "pandas"></a>

## pandas

- delete duplicate rows:
"""python
  df["row_name"] = df["row_name"].drop_duplicate()
  # or
  df["row_name"].drop_duplicate(inplace=True)
"""
- Random forest

- vectorizor
Vectorizer.transform
vectorizor.


---
<a id = "pygame"></a>

## pygame


---
<a id = "openCV"></a>

## openCV

---
<a id = "pillow"></a>

## pillow

---
<a id = "tensorflow"></a>

## tensorFlow

---
<a id = "pytorch"></a>

## pytorch


<a id="sklearn"></a>

## sklearn

