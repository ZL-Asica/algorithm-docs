---
title: '724. Find Pivot Index (寻找数组的中心下标)'
description: 'Given an array of integers nums, calculate the pivot index of this array.'
keywords:
  - algorithms
  - leetcode
  - array
  - prefix sum
slug: /problems/find-pivot-index
---

题目链接：
[724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)

> Difficulty: Easy
>
> Topics: Array, Prefix Sum

## Question

Given an array of integers $nums$, calculate the **pivot index** of this array.

The **pivot index** is the index where the sum of all the numbers **strictly** to the left of the index is equal to the sum of all the numbers **strictly** to the index's right.

If the index is on the left edge of the array, then the left sum is $0$ because there are no elements to the left. This also applies to the right edge of the array.

Return \*the **leftmost pivot index\***. If no such index exists, return $-1$.

**Example 1:**

```javascript
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
```

**Example 2:**

```javascript
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
```

**Example 3:**

```javascript
Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
```

**Constraints:**

- $1 \leq nums.length \leq 10^4$
- $-1000 \leq nums[i] \leq 1000$

**相同题目**

[1991. Find the Middle Index in Array](https://leetcode.com/problems/find-the-middle-index-in-array/)

## 解题思路

### 方法1:

#### 思路

我们需要找到给定数组$nums$中的一个位置，以这个位置往左的和与这个位置往右的和相等（不包含这个位置的值）。那我们可以分别保存左侧合和右侧的合并且进行比较即可。

那我们按照常规思路从左往右来进行检测，考虑到test case中右结果为0的情况，我们也从0开始，也就是左侧合为0，右侧合为整个列表所有数据的合剪掉第一个元素的值。然后使用for循环向右侧挪动。

- 如果在当前位置左侧合与右侧合相等，那就返回当前位置。
- 否则把当前的值赋值给左侧的总和，并且检测当前位置是否溢出（$i$是否到达了最后一个元素的位置$n-1$，若溢出则让右侧合等于0，否则将右侧合减去当前元素的值。
- 如果for循环走完也没有找到，就$return$ $-1$。

#### 代码

```python
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        n = len(nums)
        leftSum = 0
        rightSum = sum(nums) - nums[0]
        for i in range(0, n):
            if leftSum == rightSum:
                return i
            leftSum += nums[i]
            if i != n - 1: # 避免溢出
                rightSum -= nums[i + 1]
            else:
                rightSum = 0
        return -1
```

#### 时间复杂度

- 因为我们进行了一次$sum$，时间消耗为$O(n)$（此处的$n$为数组$nums$的总长度），之后进行了一轮长度为$n$的$for$循环，这里的最欢时间消耗也是$O(n)$，总时间长度就为$O(n)$。

### 方法2:

#### 思路

使用Python List自带的的enumerate方法，并且进行early stopping判断。

- 保存列表的元素值总和为$total$，并且初始化$left\_sum$为0。
- 在for循环中使用enumerate直接获取索引和对应的元素值。
- 判断左侧合的两倍加上当前的元素值（如果右侧有机会大于左侧，当前值更新过后必然是不可能超过总和的一半的$leftSum + rightSum = total$）

#### 代码

```python
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        total = sum(nums)
        left_sum = 0

        for i, num in enumerate(nums):
            if left_sum * 2 + num == total:
                return i
            left_sum += num

        return -1
```

#### 时间复杂度

- 依旧是$O(n)$，时间上是一样的没有区别，只是部分情况中会优化。
