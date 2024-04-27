function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0; 
  let start = 0; 
  const map: Map<string, number> = new Map(); 

  for (let end = 0; end < s.length; end++) {
      const char = s[end];
      if (map.has(char) && map.get(char)! >= start) {
          start = map.get(char)! + 1; 
      }
      map.set(char, end);
      maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen; 
}

// Exemplos de teste
console.log(lengthOfLongestSubstring("bvnjiodsfviusdfhviufdshvucvhxuchvuxchvrkejvhkdsflvhjkcdvhdfvhuivohfeduvhsdfuiovbbb")); //* Output: 9  
console.log(lengthOfLongestSubstring("abcabcbb")); //* Output: 3
console.log(lengthOfLongestSubstring("pwwkew"));   //* Output: 3
console.log(lengthOfLongestSubstring("bbbb"));     //* Output: 1
console.log(lengthOfLongestSubstring(""));         //* Output: 0
