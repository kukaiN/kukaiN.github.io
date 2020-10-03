# This page is for my friends struggling with C++

# concepts and syntax:

[data structures with C++](cpp_dataStruc)





Questions:

given numbers a, b, c, which represents the number of 1\`s, 2\`s, and 3\`s respectively.  create a sequence using the 1\`s, 2\`s and 3\`s, s.t. the same number is not used consecutively.  If a sequence is not possible, print "no sequence", otherwise print one example of a sequence.

Bonus: print out the number of possible sequences

"""C++
#inculde<iostream>

int nextValue(int previousTerm, int a, int b, int c){
    // this gives you the index of the leftover, we wont use an array,
    // but if there is an array that stored the counts: [a, b, c]
    // if the previous term is 2 (ie B), then by modding it and the previous term +1
    // we can get the indices that corresponds to the values we need to check

    int left_leftover = previousTerm % 3;
    int right_leftover = (previousTerm+1) % 3;

    int leftVal = 0;
    int rightVal = 0;

    if (left_leftover == 0){leftVal = a;}
    else (if left_leftover == 1){leftVal = b;}
    else {}

    if (left_leftover > right_leftover ){}


}

int nextValue_array(int previousTerm, int* intSequnece){

}


int main(){


return 0;
}



"""