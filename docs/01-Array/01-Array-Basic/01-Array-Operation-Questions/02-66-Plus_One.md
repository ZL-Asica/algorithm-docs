---
title: '66. Plus One (加一)'
description: 'You are given a large integer represented as an integer array digit, where each digits[i] is the i^{th} digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0'
keywords:
  - algorithms
  - leetcode
  - array
  - math
slug: /problems/plus-one
---

题目链接：
[66. Plus One](https://leetcode.com/problems/plus-one/)

> Difficulty: Easy
>
> Topics: Array, Math

## Question

You are given a **large integer** represented as an integer array $digit$, where each $digits[i]$ is the $i^{th}$ digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading $0$'s.

Increment the large integer by one and return _the resulting array of digits_.

**Example 1:**

```javascript
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
```

**Example 2:**

```javascript
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
```

**Example 3:**

```javascript
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
```

**Constraints:**

- $1 \leq digits.length \leq 100$
- $0 \leq digits[i] \leq 9$
- $digits$ does not contain any leading $0$'s'

## 解题思路

### 方法1:

#### 思路

加1的本质就是把数组$digits$看作为一个统一的数字整体加1，并且首位不含有0（$digits[0] \ne 0$），返回加一后的数组。

思路就是从最后一位检测，是否为9（因为9才会进位），循环判断，如果当前位置是9，更改为0并往前挪。若当前位置不是9，更新当前位置+1。当然最后我们还需要检测第一位（$digits[0]$）是不是0，防止数据溢出（因为for循环的逻辑会在$digits$所有位数都为9的情况下将整个$digits$变成同等长度的全是0的list。

#### 代码

```python
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        for i in range((len(digits)), 0, -1):
            if digits[i - 1] == 9:  # 检测是否为9
                digits[i - 1] = 0  # 如果是，更新为0
            else:
                digits[i - 1] += 1  # 否则，当前位置+=1
                break  # 并且跳出循环

        if digits[0] == 0: # 检测边界值，判断是否溢出
            digits.insert(0, 1) # 溢出后往前插入单个1

        return digits
```

#### 时间复杂度

- 时间消耗在for循环和最后可能出现的溢出插入部分，这两个步骤的时间复杂度都是$O(2 \cdot len(digits))$，我们假设$n=len(digits)$，那么这里就可以简化为$O(2 \cdot n)$，也就是$O(n)$。
