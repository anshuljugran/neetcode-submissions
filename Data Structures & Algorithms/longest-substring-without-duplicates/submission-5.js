class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(str) {

         let set = new Set();
    let max = 0;
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        while (set.has(str[i])) {
            set.delete(str[j]);
            j++;
        }
        set.add(str[i]);
        max = Math.max(max, i - j + 1);
    }
    return max;
    }
}
