# Code 09: Disemvowel Trolls
I whiteboarded this out with Karen, Robyn and Robert. Karen suggested using a filter method on the array - I suggested there was probably a regex we could use for the actual filter function. We pseudo-coded it out and split up to investigate methods. This one was fast, it's been about 20 minutes.

**The Challenge**
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

**The Solution**
This one had Regex written all over it. I knew there was a way to select the vowels in a regex expression, but when investigating the syntax I discovered the replace method and realized that if this worked on the string, we could strip out all the rest of the function and do this in one line. It worked!