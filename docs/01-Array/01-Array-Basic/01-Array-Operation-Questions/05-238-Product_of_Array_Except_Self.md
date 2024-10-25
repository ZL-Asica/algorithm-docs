---
title: '238. Product of Array Except Self (除自身以外数组的乘积)'
description: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].'
keywords:
  - algorithms
  - leetcode
  - array
  - prefix sum
  - Product of Array Except Self
slug: /problems/product-of-array-except-self
---

题目链接：
[238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

> Difficulty: Medium
>
> Topics: Array, Prefix Sum

## Question

Given an integer array $nums$, return _an array_ $answer$ _such that_ $answer[i]$ _is equal to the product of all the elements of_ $nums$ _except_ $nums[i]$.

The product of any prefix or suffix of $nums$ is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in $O(n)$ time and without using the division operation.

**Example 1:**

```javascript
Input: nums = [1, 2, 3, 4];
Output: [24, 12, 8, 6];
```

**Example 2:**

```javascript
Input: nums = [-1, 1, 0, -3, 3];
Output: [0, 0, 9, 0, 0];
```

**Constraints:**

- $2 \leq nums.length \leq 10^5$
- $-30 \le nums[i] \le 30$
- The product of any prefix or suffix of $nums$ is **guaranteed** to fit in a **32-bit** integer.

**Follow up:**

- Can you solve the problem in $O(1)$ extra space complexity? (The output array **does not** count as extra space for space complexity analysis.)

## 解题思路

### 方法1:

#### 思路

非常直接的想法，先求出list中所有元素的积，然后除掉当前位置的值。但这样的思路会有一个问题，如果元素中存在0将会让整个积为0（除了0本身，因为$answer$的一个位置是所有其他元素的积）；如果0的数量大于1，整个answer所有元素都为0。

- 初始化$product$为1（肯定不是0啊喂），初始化一个叫做$zero$的$boolean$值用来记录是否有超过1个的0。
- $for$循环遍历整个$nums$列表，如果不是0就乘以到$product$去；如果是0且$zero$已经被标记为$True$的话，直接$return$一个和$nums$一样长的只有0的$list$；如果是0但是$zero$没有被标记的话，标记下来。
- 初始化一个$answer$空数组。
- $for$循环再次遍历$nums$，如果$zero$被标记了（只可能是1个0），也就是我们之前说过的除了0这位是product，其他位置都是0。
  - 如果$zero$没被标记，把当前位置记录为总$product$除以当前位置的值。

#### 代码

```python
from functools import reduce

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        product = 1
        zero = False
        for num in nums:
            if num != 0:
                product *= num
            elif zero:
                return [0] * len(nums)
            else:
                zero = True

        answer = []
        for num in nums:
            if zero:
                if num != 0:
                    answer.append(0)
                else:
                    answer.append(product)
            else:
                answer.append(int(product / num))
        return answer

```

#### 复杂度

- 时间：因为遍历了两遍$nums$，每一次均为$O(n)$，总计时间复杂度为$O(n)$。
- 空间：除了本来要返回的结果$answer$数组空间为$O(n)$以外，额外消耗的空间只有$product$，也就是$O(1)$的额外空间。

### 方法2:

#### 思路

使用前缀积（Prefix Product）和后缀积（Suffix Product）进行计算。

首先先补充一下背景知识什么是前缀积。对于我们有的一个$array$比如说是$arr$，第1位的前缀积就是1；对于第2位就是第一位的值；对于第3位就是前两位元素的积；以此类推。每一个元素的前缀积都是前面所有元素的乘积。后缀积也是同理，每一位元素的后缀积就是后面所有元素的积。

那么对于我们这个问题，我们没个元素都需要计算除了它自己以外所有元素的乘积，实际上就是这位元素的前缀积$\times$这位元素的后缀积。

这样就可以忽略0的存在，因为没有除法的介入，逻辑上会更简单。

#### 代码

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        answer = [1] * n

        # 计算前缀积
        prefix = 1
        for i in range(n):
            answer[i] = prefix
            prefix *= nums[i]

        # 计算后缀积，并且乘以到已经计算好的前缀积上
        suffix = 1
        for i in range(n - 1, -1, -1):
            answer[i] *= suffix
            suffix *= nums[i]

        return answer
```

#### 复杂度

- 时间和空间都和之前一样，没有区别。
