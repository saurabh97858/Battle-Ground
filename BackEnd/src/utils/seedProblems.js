import Problem from "../models/problem.js";

export const FULL_PROBLEMS_SEED = [
    {
        _id: "650000000000000000000001",
        title: "Two Sum",
        description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\n### Example 1:\n- **Input**: `nums = [2,7,11,15], target = 9`  \n- **Output**: `[0,1]`  \n- **Explanation**: Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.",
        difficulty: "easy",
        tags: ["Array", "Hash Table"],
        problemSignature: {
            functionName: "twoSum",
            returnType: "array",
            parameters: [
                { name: "nums", type: "array" },
                { name: "target", type: "number" }
            ]
        },
        startCode: [
            { language: "javascript", initialCode: "function twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const diff = target - nums[i];\n        if (map.has(diff)) return [map.get(diff), i];\n        map.set(nums[i], i);\n    }\n    return [];\n}" },
            { language: "cpp", initialCode: "#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> mp;\n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        if (mp.count(complement)) return {mp[complement], i};\n        mp[nums[i]] = i;\n    }\n    return {};\n}" },
            { language: "python", initialCode: "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []" },
            { language: "java", initialCode: "import java.util.HashMap;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        HashMap<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int diff = target - nums[i];\n            if (map.containsKey(diff)) {\n                return new int[]{map.get(diff), i};\n            }\n            map.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n}" }
        ],
        visibleTestCases: [
            { input: "[2, 7, 11, 15], 9", output: "[0, 1]" },
            { input: "[3, 2, 4], 6", output: "[1, 2]" },
            { input: "[3, 3], 6", output: "[0, 1]" }
        ],
        hiddenTestCases: [
            { input: "[1, 5, 8, 3], 8", output: "[1, 3]" }
        ]
    },
    {
        _id: "650000000000000000000002",
        title: "Reverse Linked List",
        description: "Given the head of a singly linked list, reverse the list, and return the reversed list.\n\n### Example 1:\n- **Input**: `head = [1,2,3,4,5]`\n- **Output**: `[5,4,3,2,1]`",
        difficulty: "easy",
        tags: ["Linked List"],
        problemSignature: {
            functionName: "reverseList",
            returnType: "array",
            parameters: [{ name: "head", type: "array" }]
        },
        startCode: [
            { language: "javascript", initialCode: "function reverseList(head) {\n    let prev = null, curr = head;\n    while (curr) {\n        let next = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}" }
        ],
        visibleTestCases: [
            { input: "[1, 2, 3, 4, 5]", output: "[5, 4, 3, 2, 1]" },
            { input: "[1, 2]", output: "[2, 1]" }
        ],
        hiddenTestCases: []
    },
    {
        _id: "650000000000000000000003",
        title: "Valid Anagram",
        description: "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
        difficulty: "easy",
        tags: ["String", "Hash Table"],
        problemSignature: {
            functionName: "isAnagram",
            returnType: "boolean",
            parameters: [{ name: "s", type: "string" }, { name: "t", type: "string" }]
        },
        startCode: [
            { language: "javascript", initialCode: "function isAnagram(s, t) {\n    if (s.length !== t.length) return false;\n    const count = {};\n    for (let char of s) count[char] = (count[char] || 0) + 1;\n    for (let char of t) {\n        if (!count[char]) return false;\n        count[char]--;\n    }\n    return true;\n}" }
        ],
        visibleTestCases: [
            { input: '"anagram", "nagaram"', output: "true" },
            { input: '"rat", "car"', output: "false" }
        ],
        hiddenTestCases: []
    },
    {
        _id: "650000000000000000000004",
        title: "Binary Search",
        description: "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.",
        difficulty: "easy",
        tags: ["Binary Search", "Array"],
        problemSignature: {
            functionName: "search",
            returnType: "number",
            parameters: [{ name: "nums", type: "array" }, { name: "target", type: "number" }]
        },
        startCode: [
            { language: "javascript", initialCode: "function search(nums, target) {\n    let left = 0, right = nums.length - 1;\n    while (left <= right) {\n        const mid = Math.floor((left + right) / 2);\n        if (nums[mid] === target) return mid;\n        if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}" }
        ],
        visibleTestCases: [
            { input: "[-1, 0, 3, 5, 9, 12], 9", output: "4" },
            { input: "[-1, 0, 3, 5, 9, 12], 2", output: "-1" }
        ],
        hiddenTestCases: []
    },
    {
        _id: "650000000000000000000005",
        title: "3Sum",
        description: "Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",
        difficulty: "medium",
        tags: ["Array", "Two Pointers"],
        problemSignature: {
            functionName: "threeSum",
            returnType: "array",
            parameters: [{ name: "nums", type: "array" }]
        },
        startCode: [
            { language: "javascript", initialCode: "function threeSum(nums) {\n    nums.sort((a, b) => a - b);\n    const res = [];\n    for (let i = 0; i < nums.length - 2; i++) {\n        if (i > 0 && nums[i] === nums[i - 1]) continue;\n        let left = i + 1, right = nums.length - 1;\n        while (left < right) {\n            const sum = nums[i] + nums[left] + nums[right];\n            if (sum === 0) {\n                res.push([nums[i], nums[left], nums[right]]);\n                while (left < right && nums[left] === nums[left + 1]) left++;\n                while (left < right && nums[right] === nums[right - 1]) right--;\n                left++; right--;\n            } else if (sum < 0) left++;\n            else right--;\n        }\n    }\n    return res;\n}" }
        ],
        visibleTestCases: [
            { input: "[-1, 0, 1, 2, -1, -4]", output: "[[-1, -1, 2], [-1, 0, 1]]" },
            { input: "[0, 1, 1]", output: "[]" }
        ],
        hiddenTestCases: []
    },
    {
        _id: "650000000000000000000006",
        title: "Longest Substring Without Repeating Characters",
        description: "Given a string `s`, find the length of the longest substring without repeating characters.\n\n### Example 1:\n- **Input**: `s = \"abcabcbb\"`  \n- **Output**: `3` (`\"abc\"`)",
        difficulty: "medium",
        tags: ["Sliding Window", "String"],
        problemSignature: {
            functionName: "lengthOfLongestSubstring",
            returnType: "number",
            parameters: [{ name: "s", type: "string" }]
        },
        startCode: [
            { language: "javascript", initialCode: "function lengthOfLongestSubstring(s) {\n    let set = new Set(), maxLen = 0, left = 0;\n    for (let right = 0; right < s.length; right++) {\n        while (set.has(s[right])) {\n            set.delete(s[left]);\n            left++;\n        }\n        set.add(s[right]);\n        maxLen = Math.max(maxLen, right - left + 1);\n    }\n    return maxLen;\n}" }
        ],
        visibleTestCases: [
            { input: '"abcabcbb"', output: "3" },
            { input: '"bbbbb"', output: "1" }
        ],
        hiddenTestCases: []
    },
    {
        _id: "650000000000000000000007",
        title: "Container With Most Water",
        description: "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
        difficulty: "medium",
        tags: ["Two Pointers", "Array"],
        problemSignature: {
            functionName: "maxArea",
            returnType: "number",
            parameters: [{ name: "height", type: "array" }]
        },
        startCode: [
            { language: "javascript", initialCode: "function maxArea(height) {\n    let left = 0, right = height.length - 1, maxWater = 0;\n    while (left < right) {\n        const water = Math.min(height[left], height[right]) * (right - left);\n        maxWater = Math.max(maxWater, water);\n        if (height[left] < height[right]) left++;\n        else right--;\n    }\n    return maxWater;\n}" }
        ],
        visibleTestCases: [
            { input: "[1, 8, 6, 2, 5, 4, 8, 3, 7]", output: "49" },
            { input: "[1, 1]", output: "1" }
        ],
        hiddenTestCases: []
    },
    {
        _id: "650000000000000000000008",
        title: "Coin Change",
        description: "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.",
        difficulty: "medium",
        tags: ["Dynamic Programming"],
        problemSignature: {
            functionName: "coinChange",
            returnType: "number",
            parameters: [{ name: "coins", type: "array" }, { name: "amount", type: "number" }]
        },
        startCode: [
            { language: "javascript", initialCode: "function coinChange(coins, amount) {\n    const dp = new Array(amount + 1).fill(Infinity);\n    dp[0] = 0;\n    for (let i = 1; i <= amount; i++) {\n        for (let coin of coins) {\n            if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    return dp[amount] === Infinity ? -1 : dp[amount];\n}" }
        ],
        visibleTestCases: [
            { input: "[1, 2, 5], 11", output: "3" },
            { input: "[2], 3", output: "-1" }
        ],
        hiddenTestCases: []
    },
    {
        _id: "650000000000000000000009",
        title: "Trapping Rain Water",
        description: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\n\n### Example 1:\n- **Input**: `height = [0,1,0,2,1,0,1,3,2,1,2,1]`  \n- **Output**: `6`",
        difficulty: "hard",
        tags: ["Two Pointers", "Stack"],
        problemSignature: {
            functionName: "trap",
            returnType: "number",
            parameters: [{ name: "height", type: "array" }]
        },
        startCode: [
            { language: "javascript", initialCode: "function trap(height) {\n    let left = 0, right = height.length - 1;\n    let leftMax = 0, rightMax = 0, total = 0;\n    while (left < right) {\n        if (height[left] < height[right]) {\n            if (height[left] >= leftMax) leftMax = height[left];\n            else total += leftMax - height[left];\n            left++;\n        } else {\n            if (height[right] >= rightMax) rightMax = height[right];\n            else total += rightMax - height[right];\n            right--;\n        }\n    }\n    return total;\n}" }
        ],
        visibleTestCases: [
            { input: "[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]", output: "6" },
            { input: "[4, 2, 0, 3, 2, 5]", output: "9" }
        ],
        hiddenTestCases: []
    },
    {
        _id: "650000000000000000000010",
        title: "LRU Cache",
        description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the `LRUCache` class:\n- `LRUCache(int capacity)` Initialize the LRU cache with positive size `capacity`.\n- `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.\n- `void put(int key, int value)` Update the value of the `key` if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the `capacity` from this operation, evict the least recently used key.",
        difficulty: "hard",
        tags: ["Linked List", "Hash Table"],
        problemSignature: {
            functionName: "LRUCache",
            returnType: "object",
            parameters: [{ name: "capacity", type: "number" }]
        },
        startCode: [
            { language: "javascript", initialCode: "class LRUCache {\n    constructor(capacity) {\n        this.capacity = capacity;\n        this.cache = new Map();\n    }\n    get(key) {\n        if (!this.cache.has(key)) return -1;\n        const val = this.cache.get(key);\n        this.cache.delete(key);\n        this.cache.set(key, val);\n        return val;\n    }\n    put(key, value) {\n        if (this.cache.has(key)) this.cache.delete(key);\n        else if (this.cache.size >= this.capacity) {\n            const firstKey = this.cache.keys().next().value;\n            this.cache.delete(firstKey);\n        }\n        this.cache.set(key, value);\n    }\n}" }
        ],
        visibleTestCases: [
            { input: '["LRUCache", "put", "put", "get", "put", "get"], [[2], [1, 1], [2, 2], [1], [3, 3], [2]]', output: "[null, null, null, 1, null, -1]" }
        ],
        hiddenTestCases: []
    }
];

export const seedProblems = async () => {
    try {
        const count = await Problem.countDocuments();
        if (count === 0) {
            console.log("No problems found in DB. Seeding 10 curated DSA problems...");
            await Problem.insertMany(FULL_PROBLEMS_SEED);
            console.log("Successfully seeded 10 DSA problems into MongoDB Atlas!");
        } else {
            console.log(`Database currently contains ${count} problems.`);
        }
    } catch (err) {
        console.error("Error seeding problems:", err?.message || err);
    }
};
