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

### 方法2:

#### 思路

选择最大n个数的时候，除了会想到冒泡排序，当然也会想到堆排序（[Heap Sort](https://en.wikipedia.org/wiki/Heapsort)），那我们就通过堆排序来做这个题。

#### 代码

```python
class Solution:
    def findKthLargest(self, nums: [int], k: int) -> int:
        n = len(nums)
        # 入堆
        for i in range(n // 2, -1, -1):
            self.heapify(nums, n, i)

        # 排序
        for i in range(n - 1, n - 1 - k, -1):
            nums[i], nums[0] = nums[0], nums[i]
            self.heapify(nums, i, 0)

        return nums[-k]


    def heapify(self, arr, n, i):
        largest = i # 初始化largest作为根节点
        l = 2 * i + 1
        r = 2 * i + 2

        # 检查是否有左子节点，并且是否比根节点大
        if l < n and arr[i] < arr[l]:
            largest = l

        # 然后检查右子节点，是否比左和根都大
        if r < n and arr[largest] < arr[r]:
            largest = r

        # 如果有交换，更换根节点
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]

            # 递归
            self.heapify(arr, n, largest)
```

#### 复杂度

- 时间：虽然我们进行了early stoping，但本质上最坏情况就是把堆排序走完，也就是$O(n \log{n})$。
- 空间：因为我们是直接对元素组进行排序，并没有使用新的数组，空间为$O(1)$。

### 方法3:

#### 思路

还有一种会考虑到的去取**最大**的k个数的方法，就是快速排序（[Quick Sort](https://en.wikipedia.org/wiki/Quicksort)），快速排序采用的分治策略（[Divide-and-conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)），每一次分组的两个子数组，右侧的所有元素都比左侧的（准确说是中间被挑选出来的基准数）要小，这样我们就可以快速的找到第k大的数了。

#### 代码

#### 复杂度
