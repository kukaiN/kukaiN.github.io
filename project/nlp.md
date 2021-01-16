[go back](../)
[go to Inprogress](inprogress.md)
[apache Server](apacheserver.md)

# Big project: my personal NLP

## notes:

### table of contents:
- [bag of words](#)
- [N-gram](#)
- [Word2Vec](#)
- [ways to calculate or classify](#)
  - [Naive Bayes](#)
  - [Multinomial Naive bayes](#)
- [lemmitization](#)
- [part of speech](#)
- [punctuation](#)
- [Ideas](#ideas)





## Bag of words

## N-gram

## Word2Vec

## calculations and methods of classification

## Naive Bayes

## Multinomial Naive Bayes

## ideas
1st idea: use N-gram to get each n consecutive tuple of words, but also apply a function to deconstruct the sentence to apply actions and negations (like did vs didn't).  if theres a lot of modifier between the verb and subject (ex: "I threw the big, red, bouncy, rubber, ball") , then if the n is small, 2 or 3, then it fails to include a tuple that includes both "threw" and "ball" in the list of inputs.  So maybe make a langauge parser that collects words that are far apart that have some subject-verb relation (punctuation matters in this case)

add support for gerunds:
gerunds are verbs (action words) that ends in -ing, but instead of being an action associated to the subject, it modifies the noun that follows.
Ex: swimming
swimming is an action word: "I'm swimming in a lake"
swimming can also be used as a gerund: "my swimming schedule is organized"

in the second sentence, the word swimming is modifying "schedules" and it's not an action associated with the subject, it became a modifier for the subject
