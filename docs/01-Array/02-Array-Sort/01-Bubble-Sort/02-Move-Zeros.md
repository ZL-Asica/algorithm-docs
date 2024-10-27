---
title: '283. Move Zeroes（移动零）'
description: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
keywords:
  - algorithms
  - leetcode
  - array
  - two pointers
  - Move Zeroes
slug: /problems/move-zeroes
---

题目链接：
[283. Move Zeroes](https://leetcode.com/problems/move-zeroes/)

> Difficulty: Easy
>
> Topics: Arrary, Two Pointers

## Question

Given an integer array $nums$, move all $0$'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

**Example 1:**

```javascript
Input: nums = [0, 1, 0, 3, 12];
Output: [1, 3, 12, 0, 0];
```

**Example 2:**

```javascript
Input: nums = [0];
Output: [0];
```

**Constraints:**

- $1 < nums.length \le 10^4$
- $-2^{31} \le nums[i] \le 2^{31} - 1$

**Follow up:**

- Could you minimize the total number of operations done?

## 解题思路

### 方法1:

#### 思路

我们需要把所有的数组中原有的所有0都挪到这个数组的最末尾去，而且要求不创建新的数组原地修改。那么最直接的想法就是遍历一遍，出现0就在末尾添加一个，然后把原有位置的删掉。

#### 代码

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zero_count = 0 # 记录0的个数
        for i in range(len(nums)):
            if nums[i - zero_count] == 0:
                nums.append(0) # 末尾添加0
                del nums[i - zero_count] # 删掉中间出现的0
                zero_count += 1
```

#### 复杂度

- 时间：我们进行了一次从头到位的遍历，时间为$O(n)$。但在这其中我们使用了$del$，消耗时间也是$O(n)$（因为数组本身的性质导致删除一位数的这种操作，实际上就是把后面所有的数都每一个往前挪动了一位。总计就是$O(n^2)$，可以说非常糟糕了。
- 空间：在原有位置操作，只记录了zero_count，空间消耗为$O(1)$。

### 方法2:

#### 思路

根据题目的标签提示，有**双指针**这个关键词，那我们也来个双指针。我们这个时候的双指针使用一慢一快同时从头开始，慢的记录非0的元素需要填充的位置（出现一波0的第一个0的位置），或者说就是我们之前算法的i - zero_count。快就是我们之前的i。

#### 代码

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        slow = 0

        for fast in range(len(nums)):
            if nums[fast] != 0:
                nums[slow], nums[fast] = nums[fast], nums[slow]
                slow += 1
```

#### 复杂度

- 时间：我们只进行了一次从头到位的遍历，总时间复杂度为$O(n)$。
- 空间：在原有位置操作，只记录了slow指针，空间消耗为$O(1)$。
