class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];
            result += str.length + "#" + str;
        }
        return result;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j), 10);
            i = j + 1;
            let word = str.substring(i, i + length);
            result.push(word);
            i += length;
        }

        return result;
    }
}
