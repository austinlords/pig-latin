# Pig Lat translator

Write a Pig Latin translator or should we say an "igPay atinLay anslatorTray"? Read all instructions carefully before beginning.

## How Pig Latin Works
First, here are the rules of Pig Latin:

1) For words beginning with a vowel, add "way" to the end.

2) For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

3) If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

4) For words beginning with "y", treat "y" as a consonant.

## Instructions
Before writing any code, make a list of specs detailing each behavior your program will have. Start with the simplest possible behavior, and slowly move up in complexity. To get you started, the first two specs are provided below.

Have at least two other pairs check your specs before you begin coding. Ensure that each possible behavior is represented by a spec, and that they are ordered from simplest to most complex.

Place your specs (and their example inputs and outputs) in your project's README.

Create a basic user interface that allows your application to accept user input, and display output. This will allow us to manually test each spec.

Slowly add business logic. Begin by focusing on the behavior outlined in your first, most simple spec. Implement the least amount of logic necessary to create this behavior.

Manually test this behaviour by inputting the example input described by the spec into your application, and confirm you receive the correct output.

Once behavior outlined by the first spec is successfully implemented, repeat steps 5 - 7 for each subsequent spec. Do not move onto the next spec until the previous one passes.

## Helpful Hints
When you get to consonants, don't try to solve it all at once. Instead, start with an example of a word that only has one consonant; then a word with two consonants; then a word with three; and then tackle the exceptions to the rule, like "qu" and "y". Once your application can successfully translate single words, work on translating entire sentences.

Although you're welcome to solve the problem however you'd like, there are a few methods that would be handy:

String.prototype.slice()

String.prototype.includes()

String.prototype.indexOf()

Take a look at this and other documentation to gather the tools you'll need before you try to fulfill your specs.

## Specs

The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.

Example Input: 3

Example Output: 3

The program adds "way" to single-letter words beginning with a vowel.

Example Input: i

Example Output: iway

The program adds "way" to single-letter words beginning with a vowel, regardless of capitalization.

Example Input: I

Example Output: Iway

The program adds "way" to the end of words that begin with a vowel, regardless of capitalization.

Example Input: English

Example Output: Englishway

If word begins with a consonant, move the consonant to the end and add "ay".

Example Input: Start

Example Output: tartSay

Move all consecutive consonants at the beginning of the word to the end and add "ay". 

Example Input: Start

Example Output: artStay

Move all consecutive consonants at the beginning of the word to the end and add "ay", including qu & y. 

Example Input: Squeal

Example Output: ealSquay

Program can identify separate words of input

Example Input: heaven pig earth

Example Output: [heaven, pig, earth]






## 
