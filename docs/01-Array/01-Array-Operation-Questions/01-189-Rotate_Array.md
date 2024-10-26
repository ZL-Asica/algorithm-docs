---
title: '189. Rotate Array (轮转数组)'
description: 'Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.'
keywords:
  - algorithms
  - leetcode
  - array
  - rotate array
  - math
slug: /problems/rotate-array
---

题目链接：
[189. Rotate Array](https://leetcode.com/problems/rotate-array/)

> Difficulty: Medium
>
> Topics: Array, Math, Two Pointers

## Question

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

**Example 1:**

```javascript
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

**Example 2:**

```javascript
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

**Constraints:**

- $1 \leq nums.length \leq 10^5$
- $-2^{31} \leq nums[i] \leq 2^{31} - 1$
- $0 \leq k \leq 10^5$

**Follow up:**

- Could you do it in-place with $O(1)$ extra space?

## 解题思路

### 方法1:

#### 思路

虽然题目叫做翻转，但实际上就是在进行把最后的$k$个数据挪动到这个list的最前面。那么问题就变成了**如何把最后的$k$个元素挪动到最前面来？**

#### 代码

```python
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        k = k % n
        if k == 0 or n <=1:
            return
        nums[:0] = nums[-k:]
        del nums[-k:]
```

#### 时间复杂度

- 时间消耗在插入部分，Array的插入是每个元素消耗$O(1)$，这里我们插入了从倒数$k$个元素开始到$nums$结束的所有元素到$nums$的$0$索引之前，所以时间复杂度为$O(k)$

### 方法2:

#### 思路

和前一个思路基本一样，除了插入到0之前，还有没有别的方法呢？当然是有的，python的list支持原位置直接换数据，这样我们便有了如下的方式。

#### 代码

```python
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        k = k % n
        nums[:] = nums[-k:] + nums[:-k]
```

#### 时间复杂度

- 和前一个基本一样，但因为这里总共操作插入了$n$个元素，总时间复杂度为$O(n)$。
