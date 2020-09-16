recursion:


find the number of unique sequences comprized of perfect N-th power positive integers that sums to X.

input:
X, N
Solution:
this can be solved with recursion:

# C++ code

```
int power(int X, int N):
    if (N == 0){return 1;}
    // if odd, change expo to 2x+1 and divide exp by two when it's even
    if (N%2==1){
        return power(X, N-1) * X;
        }
    return power(X*X, N/2);

int recursiveFinder(int X, int N, int previousTerm){
    if (X < 0 || previousTerm<0){
        return 0;
        }
    if (X == 0){
        return 1;
        }

    // left is if the number is a part of the sequence
    leftBranch = recursiveFinder(X-power(X, N), N, previousTerm-1);
    // right is if the number is not a part of the sequence
    rightBranch = recursiveFinder(X, N, previousTerm-1);

    return leftBranch + rightBranch;
}

int main(){
    int X, N, upperbound;
    int numBool = 1;
    // ask for X and N
    while(numBool){
        if (power(i, N) > upperbound){
            upperbound = i;
            numBool = 0;
        }
        i++;
    }
    return recursiveFinder(X, N, upperbound);
}
```