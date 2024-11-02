/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */

function generateHashtag (str) {
    if (str.trim().length === 0) return false;
    let result = str.replace(/\b\w/g, char => char.toUpperCase()).replace(/\s+/g, '');
    return result.length > 139 ? false : '#' + result;
}

/* 
const generateHashtag=(s,f=`#`+s.replace(/\b./g,a=>a.toUpperCase``).replace(/ /g,``))=>f>`#`&&!f[140]&&f;
 */