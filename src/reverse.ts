export const reverseSentence = (
  sentence: string,
  reverseWords: boolean,
  reverseLetters: boolean
): string => {
  
  if (!reverseWords && !reverseLetters) {
    return sentence;
  }


  // Two pointer apprache
  // Time Complexity - 0(n + m) n is number character and m is the number of words
  // Space complexity - 0(n)
  
  const reverseString = (str: string): string => {
    let chars = str.split('');
    let left = 0;
    let right = chars.length - 1;
    while (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
    return chars.join('');
  };

 
  let words = sentence.split(' ');

  if (reverseWords) {
    let left = 0;
    let right = words.length - 1;
    while (left < right) {
      [words[left], words[right]] = [words[right], words[left]];
      left++;
      right--;
    }
  }

  if (reverseLetters) {
    words = words.map(word => reverseString(word));
  }

 
  return words.join(' ');
};
