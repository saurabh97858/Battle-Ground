export const FALLBACK_PROBLEMS = [
    { _id: "650000000000000000000001", title: "Two Sum", difficulty: "easy", tags: ["Array", "Hash Table"] },
    { _id: "650000000000000000000002", title: "Reverse Linked List", difficulty: "easy", tags: ["Linked List"] },
    { _id: "650000000000000000000003", title: "Valid Anagram", difficulty: "easy", tags: ["String", "Hash Table"] },
    { _id: "650000000000000000000004", title: "Binary Search", difficulty: "easy", tags: ["Binary Search", "Array"] },
    { _id: "650000000000000000000005", title: "3Sum", difficulty: "medium", tags: ["Array", "Two Pointers"] },
    { _id: "650000000000000000000006", title: "Longest Substring Without Repeating Characters", difficulty: "medium", tags: ["Sliding Window", "String"] },
    { _id: "650000000000000000000007", title: "Container With Most Water", difficulty: "medium", tags: ["Two Pointers", "Array"] },
    { _id: "650000000000000000000008", title: "Coin Change", difficulty: "medium", tags: ["Dynamic Programming"] },
    { _id: "650000000000000000000009", title: "Trapping Rain Water", difficulty: "hard", tags: ["Two Pointers", "Stack"] },
    { _id: "650000000000000000000010", title: "LRU Cache", difficulty: "hard", tags: ["Linked List", "Hash Table"] }
];

export const FALLBACK_FULL_PROBLEMS = {
    "650000000000000000000001": {
        _id: "650000000000000000000001",
        title: "Two Sum",
        description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\n### Example 1:\n- **Input**: `nums = [2,7,11,15], target = 9`\n- **Output**: `[0,1]`\n- **Explanation**: Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.",
        difficulty: "easy",
        tags: ["Array", "Hash Table"],
        startCode: [
            { language: "javascript", initialCode: "function twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const diff = target - nums[i];\n        if (map.has(diff)) return [map.get(diff), i];\n        map.set(nums[i], i);\n    }\n    return [];\n}" },
            { language: "cpp", initialCode: "#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> mp;\n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        if (mp.count(complement)) return {mp[complement], i};\n        mp[nums[i]] = i;\n    }\n    return {};\n}" },
            { language: "python", initialCode: "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []" }
        ],
        visibleTestCases: [
            { input: "[2, 7, 11, 15], 9", output: "[0, 1]" },
            { input: "[3, 2, 4], 6", output: "[1, 2]" },
            { input: "[3, 3], 6", output: "[0, 1]" }
        ]
    },
    "650000000000000000000002": {
        _id: "650000000000000000000002",
        title: "Reverse Linked List",
        description: "Given the head of a singly linked list, reverse the list, and return the reversed list.\n\n### Example 1:\n- **Input**: `head = [1,2,3,4,5]`\n- **Output**: `[5,4,3,2,1]`",
        difficulty: "easy",
        tags: ["Linked List"],
        startCode: [
            { language: "javascript", initialCode: "function reverseList(head) {\n    let prev = null, curr = head;\n    while (curr) {\n        let next = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}" }
        ],
        visibleTestCases: [
            { input: "[1, 2, 3, 4, 5]", output: "[5, 4, 3, 2, 1]" }
        ]
    },
    "650000000000000000000003": {
        _id: "650000000000000000000003",
        title: "Valid Anagram",
        description: "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
        difficulty: "easy",
        tags: ["String", "Hash Table"],
        startCode: [
            { language: "javascript", initialCode: "function isAnagram(s, t) {\n    if (s.length !== t.length) return false;\n    const count = {};\n    for (let char of s) count[char] = (count[char] || 0) + 1;\n    for (let char of t) {\n        if (!count[char]) return false;\n        count[char]--;\n    }\n    return true;\n}" }
        ],
        visibleTestCases: [
            { input: '"anagram", "nagaram"', output: "true" }
        ]
    },
    "650000000000000000000004": {
        _id: "650000000000000000000004",
        title: "Binary Search",
        description: "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.",
        difficulty: "easy",
        tags: ["Binary Search", "Array"],
        startCode: [
            { language: "javascript", initialCode: "function search(nums, target) {\n    let left = 0, right = nums.length - 1;\n    while (left <= right) {\n        const mid = Math.floor((left + right) / 2);\n        if (nums[mid] === target) return mid;\n        if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}" }
        ],
        visibleTestCases: [
            { input: "[-1, 0, 3, 5, 9, 12], 9", output: "4" }
        ]
    },
    "650000000000000000000005": {
        _id: "650000000000000000000005",
        title: "3Sum",
        description: "Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.",
        difficulty: "medium",
        tags: ["Array", "Two Pointers"],
        startCode: [
            { language: "javascript", initialCode: "function threeSum(nums) {\n    nums.sort((a, b) => a - b);\n    const res = [];\n    for (let i = 0; i < nums.length - 2; i++) {\n        if (i > 0 && nums[i] === nums[i - 1]) continue;\n        let left = i + 1, right = nums.length - 1;\n        while (left < right) {\n            const sum = nums[i] + nums[left] + nums[right];\n            if (sum === 0) {\n                res.push([nums[i], nums[left], nums[right]]);\n                while (left < right && nums[left] === nums[left + 1]) left++;\n                while (left < right && nums[right] === nums[right - 1]) right--;\n                left++; right--;\n            } else if (sum < 0) left++;\n            else right--;\n        }\n    }\n    return res;\n}" }
        ],
        visibleTestCases: [
            { input: "[-1, 0, 1, 2, -1, -4]", output: "[[-1, -1, 2], [-1, 0, 1]]" }
        ]
    }
};

export const getFallbackProblem = (id) => {
    return FALLBACK_FULL_PROBLEMS[id] || FALLBACK_FULL_PROBLEMS["650000000000000000000001"];
};

export const generateRevisionReply = (query = '') => {
    const q = query.toLowerCase();
    if (q.includes('mistake') || q.includes('weak')) {
        return "### 🧠 Key Revision Insights:\n\n1. **Off-by-one errors in Binary Search**: Always double check `left <= right` boundary condition.\n2. **Hash Table Key Overwrites**: Ensure keys are unique before writing, or use frequency map counts.\n3. **Space Complexity Optimization**: Prefer Two Pointers over nested loops to keep Space Complexity at `O(1)`.";
    }
    if (q.includes('dp') || q.includes('dynamic')) {
        return "### 💡 Dynamic Programming Revision:\n\n- Define your **State**: What does `dp[i]` represent?\n- Formulate **Transition**: How does `dp[i]` relate to `dp[i-1]` or `dp[i-2]`?\n- Establish **Base Cases**: What are `dp[0]` and `dp[1]`?";
    }
    return `### 🚀 BattleGround AI Revision Coach\n\nGreat question about **${query}**! \n\nHere is your step-by-step revision strategy:\n1. Break down the problem into sub-problems.\n2. State time & space complexity upfront.\n3. Verify edge cases (empty input, single element, negative numbers).`;
};

export const FALLBACK_MOCK_SESSION = {
    token: "mock-interview-session-demo",
    sessionId: "demo-interview-101",
    interviewerName: "Sarah (AI Tech Lead)",
    techStack: "JavaScript, React, Node.js",
    topic: "Sliding Window / Two Pointers",
    difficulty: "Medium",
    instructions: "Explain your thought process out loud before writing code."
};

export const FALLBACK_ARENA_ROOM = {
    roomId: "BG-ARENA-9999",
    status: "waiting",
    maxPlayers: 2,
    durationMinutes: 60,
    problem: FALLBACK_PROBLEMS[0]
};
