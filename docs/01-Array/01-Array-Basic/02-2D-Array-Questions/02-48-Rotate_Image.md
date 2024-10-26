---
title: '48. Rotate Image (旋转图像)'
description: You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
keywords:
  - algorithms
  - leetcode
  - array
  - matrix
  - math
  - Rotate Image
slug: /problems/rotate-image
---

题目链接：
[48. Rotate Image](https://leetcode.com/problems/rotate-image/)

> Difficulty: Medium
>
> Topics: Array, Matrix, Math

## Question

You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90** degrees (clockwise).

You have to rotate the image [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm), which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

**Example 1:**

![Rotate Image - Example 1](/img/problems/48-1.jpg)

```javascript
Input: matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
Output: [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
```

**Example 2:**

![Rotate Image - Example 2](/img/problems/48-2.jpg)

```javascript
Input: matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
Output: [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
];
```

**Constraints:**

- $n == matrix.length == matrix[i].length$
- $1 \le n \le 20$
- $-1000 \le matrix[i][j] \le 1000$

## 解题思路

### 方法1:

#### 思路

题目要求顺时针转动90度，也就是把之前每一个二维数组的第0位元素按照顺序拿出来组成第0个二维数组；同理原来每一个二维数组中的第1位按照顺序拿出来组成第1个二维数组。

1.  那第一步就是把整个数组翻转。

2.  翻转后原来的数组就变成了如下:

    ```python
    [[7,8,9],
    [4,5,6],
    [1,2,3]]
    ```

3.  对比一下和我们的目标会发现$(4,8),(1,9),(2,6)$位置反了（就是转置矩阵啊喂Transpose），那我们对矩阵进行转置就行了。

#### 代码

```python
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        # Step 1: 上下翻转
        matrix[:] = matrix[::-1]

        # Step 2: 转置
        n = len(matrix)
        for i in range(n):
            for j in range(i + 1, n):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
```

#### 复杂度

- 时间：因为我们对原来的矩阵进行了翻转（使用了$[::-1]$），这部分的时间复杂度为$O(n^2)$。然后进行了两层for循环，总共遍历了$\sum\limits_{i=0}^{n-1} (n - i - 1) = \frac{n(n-1)}{2}$次，时间消耗可以写为$O(n^2)$，总和为$O(n^2) + O(n^2) = O(n^2)$。
- 空间：因为都是按照题目的要求进行了**in place**替换，所以空间复杂度仅为$O(1)$。
