# data structures in C++

[home page]()
[back to c++ page](cpp)

Table of contents:
- templates with constructors, destructors and other relevant functions:
  - [Array](#arr)
  - [linked list](#linkedList)
  - [doubly linked list](#doubly)
  - [Stacks](#stacks)
  - [trees](#trees)
    - [balanced trees](#balancedTrees)
- [From standard lib:](#std)
- [Vector](#vec)
- [Queue + deque](#que)
- [Stack](#stacksSTD)
- [Set](#sets)
- [Map](#maps)

---
<a id="templateClass"></a>

# simple class declaration

Change class to struc to chnage it into a structure( only difference is if the attributes defaults to private or public members)

"""c++
#include<iostream>

class MyClass{
  private:
    int attribute1;
    std::string attribute2;

  public:

    // default constructor
    MyClass();

    // copy and move constructor
    MyClass(const MyClass &);
    MyClass(MyClass &&);

    // overloading operators
    void opperator=(const MyClass &);
    void opperator=(MyClass &&);

    // public methods
    int method1(int);
    void method2(std::string);

    // destructor
    ~MyClass();
};


class SetOfFractions{
private:
    TNode *root;
public:
    SetOfFractions();
    SetOfFractions(const SetOfFractions &);
    SetOfFractions(SetOfFractions &&);
    void operator=(const SetOfFractions &);
    void operator=(SetOfFractions &&);
    long isElement(const Frac &) const;
    long insertInS(const Frac &);
    void printAllFractions() const;
    ~SetOfFractions();
};
SetOfFractions::SetOfFractions(){
    root = std::set<Frac> c;
}
SetOfFractions::SetOfFractions(const SetOfFractions & copyFrom){
    root = std::set<Frac> c(copyFrom);
}
"""

<a id = "linkedList"></a>

# Single Linked List

"""c++
class ListNode{
  int val;
  listNode* pNext;
}
# deconstructor
clearLinkedList(ListNode* runner){
  if(runner!=nullptr){
    clearLinkedList((*runner).pNext);
    delete runner;
  }
}

# adding values to
append(ListNode* head){

}

insert(ListNode* head, int value, int index){
  while(runner != nullptr){

  }

}

"""
simple Linked list object

Linked List with methods:
"""C++
class ListNode{
  int val;
  listNode* pNext;
}



"""



<a id = "doubly"></a>

# doubly linked list

"""C++
class doublyNode{
  doublyNode* pPrev;
  doublyNode* pNext;
  int value;
}


"""