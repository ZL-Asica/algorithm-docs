---
title: '75. Sort Colors（颜色分类）'
description: 'Given an array `nums` with `n` objects colored red, white, or blue, sort them [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, with the colors in the order red, white, and blue.'
keywords:
  - algorithms
  - leetcode
  - array
  - sorting
  - Two Pointers
  - Sort Colors
slug: /problems/sort-colors
---

题目链接：
[75. Sort Colors](https://leetcode.com/problems/sort-colors/)

> Difficulty: Medium
>
> Topics: Arrary, Sorting, Two Pointers.

## Question

Given an array `nums` with `n` objects colored red, white, or blue, sort them [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

**Example 1:**

```plaintext
Input: nums = [2, 0, 2, 1, 1, 0]
Output: [0, 0, 1, 1, 2, 2]
```

**Example 2:**

```plaintext
Input: nums = [2,0,1]
Output: [0,1,2]
```

**Constraints:**

- $n == nums.length$
- $1 \le n \le 300$
- $nums[i]$ is either $0$, $1$, or $2$.

**Follow up:**

Could you come up with a one-pass algorithm using only constant extra space complexity?

## 解题思路

### 方法1:

#### 思路

看到排序，而且是原地的，优先考虑快速排序。快速排序的思想是选取一个基准值，然后将数组分为两部分，左边的元素都小于基准值，右边的元素都大于基准值。然后递归地对左右两部分进行排序。

因为在这种情况下我们会有一个数字出现好几次的情况，可以直接在 partition 的时候把本来是当前点小于 pivot 才往左边放，我们可以直接小于等于 pivot 的都往左边放，大于 pivot 的都往右边放。这样可以节省一次遍历。

#### 代码

```python
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def quicksort(arr, low, high):
            if low < high:
                # 分区点索引
                pivot_index = partition(arr, low, high)
                # 递归地排序左侧和右侧子数组
                quicksort(arr, low, pivot_index - 1)
                quicksort(arr, pivot_index + 1, high)

        def partition(arr, low, high):
            pivot = arr[high]  # 选择最右边的元素作为基准
            i = low - 1  # 指针 i 指向小于 pivot 的区域的末尾

            for j in range(low, high):
                if arr[j] <= pivot:
                    i += 1
                    arr[i], arr[j] = arr[j], arr[i]  # 交换元素位置
            # 将 pivot 放置在正确的位置
            arr[i + 1], arr[high] = arr[high], arr[i + 1]
            return i + 1

        quicksort(nums, 0, len(nums) - 1)
```

#### 复杂度

- 时间：$O(n \log{n})$，因为我们是快速排序，最坏情况下时间复杂度是$O(n^2)$，平均情况下是$O(n \log{n})$。
- 空间：$O(\log{n})$，因为我们是递归调用，空间复杂度是递归栈的深度，最坏情况下是$O(n)$，平均情况下是$O(\log{n})$。

### 方法2:

#### 思路

因为我们只有 3 种颜色，所以自然会想到把 0 都放到最左边去，2 都放到最右边去。想要实现这样的思路我们就需要使用双指针。

一个指向 0 的位置，一个指向 2 的位置，只要我们的当前值撞上这两个数，就进行交换。但要注意的是 2 的位置在右边（也就本来是接下来要处理的），我们交换过来的这个元素有可能是 0, 1, 2 中的任何一个数字，所以我们需要在当前位置多停留一次（实际上就是处理这个新交换过来的元素）。

#### 代码

```python
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zero_position = 0  # 0 的位置
        two_position = len(nums) - 1  # 2 的位置

        current = 0  # 当前位置

        while current <= two_position:  # 只要当前位置比 2 的位置更往左
            if nums[current] == 0:
                # 交换 0 和当前位置的元素
                nums[current], nums[zero_position] = nums[zero_position], nums[current]
                # 更新当前位置和 0 的位置
                zero_position += 1
                current += 1
            elif nums[current] == 2:
                # 交换 2 和当前位置的元素
                nums[current], nums[two_position] = nums[two_position], nums[current]
                # 因为我们并没有处理交换过来的新元素，我们只更新 2 的位置
                two_position -= 1
            else:
                # 1 的情况不用管继续处理下一个就行
                current += 1
```

#### 复杂度

- 时间：$O(n)$，因为我们只遍历了一次数组。
- 空间：$O(1)$，因为我们只使用了常数个额外空间，也就是我们的 3 个指针。
