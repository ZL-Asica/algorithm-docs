---
title: '215. Kth Largest Element in an Array（数组中的第K个最大元素）'
description: Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
keywords:
  - algorithms
  - leetcode
  - array
  - Divide and Conquer
  - sorting
  - heap
  - priorit queue
  - quick select
  - Move Zeroes
slug: /problems/kth-largest-element-in-an-array
---

题目链接：
[215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)

> Difficulty: Medium
>
> Topics: Arrary, Divide and Conquer, Sorting, Heap (Priority Queue), Quickselect

## Question

Given an integer array $nums$ and an integer $k$, return _the_ $k^{th}$ _largest element in the array_.

Note that it is the $k^{th}$ largest element in the sorted order, not the $k^{th}$ distinct element.

Can you solve it without sorting?

**Example 1:**

```javascript
Input: (nums = [3, 2, 1, 5, 6, 4]), (k = 2);
Output: 5;
```

**Example 2:**

```javascript
Input: (nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]), (k = 4);
Output: 4;
```

**Constraints:**

- $1 \le k \le nums.length \le 10^5$
- $-10^{4} \le nums[i] \le 10^{4}$

## 解题思路

### 方法1:

#### 思路

看到选最大的n个数的时候，下意识就会想冒泡排序。我确实试了，直接超时。然后我就想到了计数排序（[Counting Sort](https://en.wikipedia.org/wiki/Counting_sort)），但我们都知道，这种方法无法对于负数使用。但我们需要的不是完全排序好的那个版本，我们实际上只需要计数排序里的前半部分，也就是记录每个元素出现的频次，而这部分恰好对负值也适用。

于是我们的算法思路就是，先根据数组的最大和最小值去开辟counts用于记录数组nums中每个元素出现的频次。然后反向对这个频次进行检测，每次在k中减去这个对应遍历位置的值，直到k变成0或负值（也就是k所对应的位置）。然后返回这个对应的值即可。

#### 代码

```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        nums_min, nums_max = min(nums), max(nums)
        # 定义计数用的 counts，大小为 最大值元素 - 最小值元素 + 1
        size = nums_max - nums_min + 1
        counts = [0 for _ in range(size)]

        # 统计值为 num 的元素出现的次数
        for num in nums:
            counts[num - nums_min] += 1

        # 反向减去每个元素的出现次数
        for i in range(-1, -size - 1, -1):
            k -= counts[i]
            if k <= 0: # 直到达到或超过k
                return size + i + nums_min
```

#### 复杂度

- 时间：获取list最大最小值分别是$O(n)$，开辟空间的时候用了$O(m)$（此处的$m$是最大和最小值的差）。之后我们对给定的数组nums进行了一次从头到位的遍历，时间为$O(n)$。最后我们对计数数组进行反向遍历，依旧是$O(m)$。总计就是$O(n + m)$，和计数排序本身的时间复杂度是一样的。
- 空间：因为我们创建了一个计数数组，长度为$m$，空间消耗为$O(m)$。
