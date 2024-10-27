---
title: Array Two Pointers（数组双指针）
slug: ./
---

## a. 对撞指针题目

| 题号 | 标题                                                                                                 | 题解         | 难度 |
| :--- | :--------------------------------------------------------------------------------------------------- | :----------- | :--- |
| 0167 | [Two Sum II - Input Array Is Sorted（两数之和 II - 输入有序数组）][two-sum-ii-input-array-is-sorted] | [Python](./) | 中等 |
| 0344 | [Reverse String（反转字符串）][reverse-string]                                                       | [Python](./) | 简单 |
| 0345 | [Reverse Vowels of a String（反转字符串中的元音字母）][reverse-vowels-of-a-string]                   | [Python](./) | 简单 |
| 0125 | [Valid Palindrome（验证回文串）][valid-palindrome]                                                   | [Python](./) | 简单 |
| 0011 | [Container With Most Water（盛最多水的容器）][container-with-most-water]                             | [Python](./) | 中等 |
| 0611 | [Valid Triangle Number（有效三角形的个数）][valid-triangle-number]                                   | [Python](./) | 中等 |
| 0015 | [3Sum（三数之和）][3sum]                                                                             | [Python](./) | 中等 |
| 0016 | [3Sum Closest（最接近的三数之和）][3sum-closest]                                                     | [Python](./) | 中等 |
| 0018 | [4Sum（四数之和）][4sum]                                                                             | [Python](./) | 中等 |
| 0259 | [3Sum Smaller（较小的三数之和）][3sum-smaller]                                                       | [Python](./) | 中等 |
| 0658 | [Find K Closest Elements（找到 K 个最接近的元素）][find-k-closest-elements]                          | [Python](./) | 中等 |
| 1099 | [Two Sum Less Than K（小于 K 的两数之和）][two-sum-less-than-k]                                      | [Python](./) | 简单 |
| 0075 | [Sort Colors（颜色分类）][sort-colors]                                                               | [Python](./) | 中等 |
| 0360 | [Sort Transformed Array（有序转化数组）][sort-transformed-array]                                     | [Python](./) | 中等 |
| 0977 | [Squares of a Sorted Array（有序数组的平方）][squares-of-a-sorted-array]                             | [Python](./) | 简单 |
| 0881 | [Boats to Save People（救生艇）][boats-to-save-people]                                               | [Python](./) | 中等 |
| 0042 | [Trapping Rain Water（接雨水）][trapping-rain-water]                                                 | [Python](./) | 困难 |
| 0443 | [String Compression（压缩字符串）][string-compression]                                               | [Python](./) | 中等 |

## b. 快慢指针题目

| 题号          | 标题                                                                                                          | 题解         | 难度 |
| :------------ | :------------------------------------------------------------------------------------------------------------ | :----------- | :--- |
| 0026          | [Remove Duplicates from Sorted Array（删除有序数组中的重复项）][remove-duplicates-from-sorted-array]          | [Python](./) | 简单 |
| 0080          | [Remove Duplicates from Sorted Array II（删除有序数组中的重复项 II）][remove-duplicates-from-sorted-array-ii] | [Python](./) | 中等 |
| 0027          | [Remove Element（移除元素）][remove-element]                                                                  | [Python](./) | 简单 |
| 0283          | [Move Zeroes（移动零）][move-zeroes]                                                                          | [Python](./) | 简单 |
| 0845          | [Longest Mountain in Array（数组中的最长山脉）][longest-mountain-in-array]                                    | [Python](./) | 中等 |
| 0088          | [Merge Sorted Array（合并两个有序数组）][merge-sorted-array]                                                  | [Python](./) | 简单 |
| 0719          | [Find K-th Smallest Pair Distance（找出第 K 小的数对距离）][find-k-th-smallest-pair-distance]                 | [Python](./) | 困难 |
| 0334          | [Increasing Triplet Subsequence（递增的三元子序列）][increasing-triplet-subsequence]                          | [Python](./) | 中等 |
| 0978          | [Longest Turbulent Subarray（最长湍流子数组）][longest-turbulent-subarray]                                    | [Python](./) | 中等 |
| 剑指 Offer 21 | [调整数组顺序使奇数位于偶数前面][diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof]           | [Python](./) | 简单 |

## c. 分离双指针题目

| 题号 | 标题                                                                                | 题解         | 难度 |
| :--- | :---------------------------------------------------------------------------------- | :----------- | :--- |
| 0350 | [Intersection of Two Arrays II（两个数组的交集 II）][intersection-of-two-arrays-ii] | [Python](./) | 简单 |
| 0925 | [Long Pressed Name（长按键入）][long-pressed-name]                                  | [Python](./) | 简单 |
| 0844 | [Backspace String Compare（比较含退格的字符串）][backspace-string-compare]          | [Python](./) | 简单 |
| 1229 | [Meeting Scheduler（安排会议日程）][meeting-scheduler]                              | [Python](./) | 中等 |
| 0415 | [Add Strings（字符串相加）][add-strings]                                            | [Python](./) | 简单 |
| 0392 | [Is Subsequence（判断子序列）][is-subsequence]                                      | [Python](./) | 简单 |

<!-- 对撞指针题目 -->

[two-sum-ii-input-array-is-sorted]: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
[reverse-string]: https://leetcode.com/problems/reverse-string/
[reverse-vowels-of-a-string]: https://leetcode.com/problems/reverse-vowels-of-a-string/
[valid-palindrome]: https://leetcode.com/problems/valid-palindrome/
[container-with-most-water]: https://leetcode.com/problems/container-with-most-water/
[valid-triangle-number]: https://leetcode.com/problems/valid-triangle-number/
[3sum]: https://leetcode.com/problems/3sum/
[3sum-closest]: https://leetcode.com/problems/3sum-closest/
[4sum]: https://leetcode.com/problems/4sum/
[3sum-smaller]: https://leetcode.com/problems/3sum-smaller/
[find-k-closest-elements]: https://leetcode.com/problems/find-k-closest-elements/
[two-sum-less-than-k]: https://leetcode.com/problems/two-sum-less-than-k/
[sort-colors]: https://leetcode.com/problems/sort-colors/
[sort-transformed-array]: https://leetcode.com/problems/sort-transformed-array/
[squares-of-a-sorted-array]: https://leetcode.com/problems/squares-of-a-sorted-array/
[boats-to-save-people]: https://leetcode.com/problems/boats-to-save-people/
[trapping-rain-water]: https://leetcode.com/problems/trapping-rain-water/
[string-compression]: https://leetcode.com/problems/string-compression/

<!-- 快慢指针题目 -->

[remove-duplicates-from-sorted-array]: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
[remove-duplicates-from-sorted-array-ii]: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
[remove-element]: https://leetcode.com/problems/remove-element/
[move-zeroes]: https://leetcode.com/problems/move-zeroes/
[longest-mountain-in-array]: https://leetcode.com/problems/longest-mountain-in-array/
[merge-sorted-array]: https://leetcode.com/problems/merge-sorted-array/
[find-k-th-smallest-pair-distance]: https://leetcode.com/problems/find-k-th-smallest-pair-distance/
[increasing-triplet-subsequence]: https://leetcode.com/problems/increasing-triplet-subsequence/
[longest-turbulent-subarray]: https://leetcode.com/problems/longest-turbulent-subarray/
[diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof]: https://leetcode.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/

<!-- 分离双指针题目 -->

[intersection-of-two-arrays-ii]: https://leetcode.com/problems/intersection-of-two-arrays-ii/
[long-pressed-name]: https://leetcode.com/problems/long-pressed-name/
[backspace-string-compare]: https://leetcode.com/problems/backspace-string-compare/
[meeting-scheduler]: https://leetcode.com/problems/meeting-scheduler/
[add-strings]: https://leetcode.com/problems/add-strings/
[is-subsequence]: https://leetcode.com/problems/is-subsequence/
