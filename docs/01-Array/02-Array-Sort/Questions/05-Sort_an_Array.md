---
title: '912. Sort an Array（排序数组）'
description: 'Given an array of integers nums, sort the array in ascending order and return it.'
keywords:
  - algorithms
  - leetcode
  - array
  - sorting
  - Sort an Array
  - Divide and Conquer
  - Heap (Priority Queue)
  - Merge Sort
  - Bucket Sort
  - Radix Sort
  - Counting Sort
slug: /problems/sort-an-array
---

题目链接：
[912. Sort an Array](https://leetcode.com/problems/sort-an-array/)

> Difficulty: Medium
>
> Topics: Arrary, Sorting, Divide and Conquer, Heap (Priority Queue), Merge Sort, Bucket Sort, Radix Sort, Counting Sort.

## Question

Given an array of integers `nums`, sort the array in ascending order and return it.

You must solve the problem **without using any built-in** functions in `O(nlog(n))` time complexity and with the smallest space complexity possible.

**Example 1:**

```plaintext
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
```

**Example 2:**

```plaintext
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
```

**Constraints:**

- $1 \le nums.length \le 5 \times 10^4$
- $-5 \times 10^4 \le nums[i] \le 5 \times 10^4$

## 解题思路

### 方法1:

#### 思路

看到排序，优先考虑快速排序。但这道题我用快速排序超时了，所以我就想试一下 [希尔排序（shell sort）](https://en.wikipedia.org/wiki/Shellsort)。

希尔排序是基于插入排序的改进算法，引入了 gap 的概念，每次都对 gap 进行缩小，直到回归到 1 也就是传统的插入排序。

#### 代码

```python
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        gap = n // 2  # 初始步长

        # 不断缩小步长，直到为 1
        while gap > 0:
            for i in range(gap, n):
                temp = nums[i]  # 暂存当前元素
                j = i
                # 对当前子序列进行插入排序
                while j >= gap and nums[j - gap] > temp:
                    nums[j] = nums[j - gap]
                    j -= gap
                nums[j] = temp  # 插入到正确位置
            gap //= 2  # 缩小步长
        return nums
```

#### 复杂度

- 时间：$O(n\log{n})$，因为希尔排序的时间复杂度是 $O(n\log{n})$。
- 空间：$O(1)$，因为我们只使用了常数个额外空间。这点比快速排序要好（因为那个要递归）。

### 方法2:

#### 思路

排序的话因为我看到示例中有很多重复出现的元素，就想到了[记数排序（Counting Sort）](https://en.wikipedia.org/wiki/Counting_sort)。

那么在这里我们可以先开一个 `defaultdict` 来统计每个元素出现的次数，然后再根据这个次数来构建排序后的数组。

#### 代码

```python
from collections import defaultdict


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        nums_min, nums_max = min(nums), max(nums)

        # 记录每个元素出现的次数
        size = nums_max - nums_min + 1  # 最大计数长度
        counts = defaultdict(int)
        for num in nums:
            counts[num - nums_min] += 1

        # 计算每个元素的位置（index/下标）
        for i in range(1, size):
            counts[i] += counts[i - 1]

        # 构建排序后的数组（空的，都是 0）
        res = [0 for _ in range(len(nums))]

        # 反向遍历原数组，根据 counts 数组来确定元素的位置
        for i in range(len(nums) - 1, -1, -1):
            num = nums[i]
            res[counts[num - nums_min] - 1] = num
            # 放到 res 数组中，这个元素的位置就要往前移动一位
            counts[nums[i] - nums_min] -= 1

        return res
```

#### 复杂度

- 时间：$O(n + k)$，其中 $n$ 是数组的长度，$k$ 是数组中元素的范围。
- 空间：$O(n + k)$，我们需要额外的空间来存储计数数组和排序后的数组。

### 方法3:

#### 思路

我们再换一个思路，这次我们用[桶排序（Bucket Sort）](https://en.wikipedia.org/wiki/Bucket_sort)。

桶排序的基本思想就是将整个 `nums` 数组分割到若干个大小为 `bucket_size` （在我们这里用的5）的桶中，然后对每个桶进行插入排序，最后将所有的桶合并起来。当然，在分配的时候是按照元素的范围来分配的（也就是当前元素与最小元素的差值整除 `bucket_size`）。这样的话，我们就可以保证每个桶中的区间范围都比较小，从而可以使用插入排序。

#### 代码

```python
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        def insertionSort(nums):  # 插入排序，对每个桶进行排序
            for i in range(1, len(nums)):
                temp = nums[i]
                j = i
                while j > 0 and nums[j - 1] > temp:
                    nums[j] = nums[j - 1]
                    j -= 1
                nums[j] = temp

        # 获取最大值和最小值
        nums_min, nums_max = min(nums), max(nums)

        # 每个桶的大小
        bucket_size = 5

        # 桶的个数，总范围 / 桶的大小
        bucket_count = (nums_max - nums_min) // bucket_size + 1
        buckets = [[] for _ in range(bucket_count)]

        # 根据元素的范围分配到不同的桶中
        for num in nums:
            buckets[(num - nums_min) // bucket_size].append(num)

        res = []
        for bucket in buckets:
            insertionSort(bucket)  # 对每个桶进行插入排序
            res.extend(bucket)  # 合并所有的桶

        return res
```

#### 复杂度

- 时间：$O(n)$，当输入元素个数为 `n` 时，桶的个数为 `m` 时，每个桶里的数据个数就是 $k = \frac{n}{m}$，每个桶内部使用插入排序，时间复杂度为 $O(k \log{k})$，所以总的时间复杂度为 $O(n + m \cdot k \log{k})$，当桶的个数 `m` 接近 `n` 时，时间复杂度就是 $O(n)$。
- 空间：$O(n + m)$，我们需要额外的空间来存储桶和排序后的数组。
