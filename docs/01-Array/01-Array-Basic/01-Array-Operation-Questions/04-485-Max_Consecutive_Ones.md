---
title: '485. Max Consecutive Ones (最大连续 1 的个数)'
description: Given a binary array nums, return the maximum number of consecutive 1's in the array.
keywords:
  - algorithms
  - leetcode
  - array
  - max consecutive ones
slug: /problems/max-consecutive-ones
---

题目链接：
[485. Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/)

> Difficulty: Easy
>
> Topics: Array

## Question

Given a binary array $num$, return *the maximum number of consecutive*1*'s in the array*.

**Example 1:**

```javascript
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
```

**Example 2:**

```javascript
Input: nums = [1, 0, 1, 1, 0, 1];
Output: 2;
```

**Constraints:**

- $1 \leq nums.length \leq 10^5$
- $nums[i]$ is either $0$ or $1$

## 解题思路

### 方法1:

#### 思路

我们需要找最大的连续是1的个数，那么我们就需要找到所有连续的1分别有多少，并且留下最多的是多少个。

- 首先初始化最大的计数和当前计数均为0
- for循环遍历，检测当前值为1的话就对$current\_count$进行$+1$的更新
  - 否则就看$current\_count$和我们记录的$max\_count$，保留最大计数，并重置$current\_count$的值为0
- 最后返回的时候也要返回$current\_count$和$max\_count$里最大的那个，因为最长的那段1可能直接到结尾，在for循环里就没有走到过$else$的部分。

#### 代码

```python
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        max_count = current_count = 0
        for num in nums:
            if num == 1:
                current_count += 1
            else:
                max_count = max(current_count, max_count)
                current_count = 0
        return max(current_count, max_count)
```

#### 时间复杂度

- 这种方法的时间复杂度出现在for循环中，只进行了一遍遍历，也就是$O(n)$。
