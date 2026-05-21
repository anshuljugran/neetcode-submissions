class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map();
        let len = s.length
        if (len != t.length) return false
        for (let i = 0; i < len; i++) {
            if (map.has(s[i])) {
                map.set(s[i], map.get(s[i] || 0) + 1);
            }
            else if (!map.has(s[i])) {
                map.set(s[i], 1);
            }
        }
        for (let i = 0; i < len; i++) {
            if (map.has(t[i]) && map.get(t[i]) > 1) {
                map.set(t[i], map.get(t[i]) - 1);
            }
            else {
                map.delete(t[i])
            }
        }
        return map.size == 0 ? true : false
    }
}
