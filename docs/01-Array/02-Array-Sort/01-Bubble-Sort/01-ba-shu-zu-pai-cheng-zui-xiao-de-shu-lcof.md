---
title: '剑指 Offer 45. 把数组排成最小的数'
description: 闯关游戏需要破解一组密码，闯关组给出的有关密码的线索是：一个拥有密码所有元素的非负整数数组 password；密码是 password 中所有元素拼接后得到的最小的一个数。请编写一个程序返回这个密码。"
keywords:
  - algorithms
  - leetcode
  - array
  - greedy
  - string
  - sorting
  - 把数组排成最小的数
slug: /problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof
---

题目链接：
[剑指 Offer 45. 把数组排成最小的数](https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/)

> Difficulty: Medium
>
> Topics: Greedy, String, Sorting

## Question

闯关游戏需要破解一组密码，闯关组给出的有关密码的线索是：

- 一个拥有密码所有元素的非负整数数组$password$
- 密码是$password$中所有元素拼接后得到的最小的一个数

请编写一个程序返回这个密码。

**Example 1:**

```javascript
Input: password = [15, 8, 7];
Output: '1578';
```

**Example 2:**

```javascript
Input: password = [0, 3, 30, 34, 5, 9];
Output: '03033459';
```

**Constraints:**

- $0 < password.length \le 100$

**Follow up:**

- 输出结果可能非常大，所以你需要返回一个字符串而不是整数
- 拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0

## 解题思路

### 方法1:

#### 思路

这里我们需要做的是把给定的list中所有元素拿出来进行组合形成一个最小的（数值最小，开头可以是0）的字符串。

通过观察我们可以发现在例子2中出现了$3, 30, 34$，但排序为$30334$。这意味着多位数字的排序会考虑它们组合后的大小，确保最终结果是字典序最小的组合。也就是我们可以通过$a + b < b + a$的算法来进行判断。

#### 代码

```python
from functools import cmp_to_key

class Solution:
    def crackPassword(self, password: List[int]) -> str:
        # cmp_to_key是让Python根据这个函数进行排序。
        sorted_password = sorted(password, key=cmp_to_key(self.compare))
        return ''.join(str(i) for i in sorted_password)

    def compare(self, a: int, b: int) -> int:
        # 根据条件进行判断：a + b < b + a
        if int(str(a) + str(b)) < int(str(b) + str(a)):
            return -1
        return 1
```

#### 复杂度

- 时间：我们使用了python内置的sorted，时间为$O(n \log{n})$。然后将所有排序后的元素组合成一个字符串，消耗时间是$O(n)$。总计就是$O(n \log{n})$。
- 空间：除了本来就有的password，我们就设置了一个额外的排序后的sorted_password，空间消耗为$O(n)$(n为password的总长度)。
