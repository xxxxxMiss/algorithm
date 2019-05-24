/* 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。

示例 1:

输入: [2, 6, 4, 8, 10, 9, 15]
输出: 5
解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
说明 :

输入的数组长度范围在 [1, 10,000]。
输入的数组可能包含重复元素 ，所以升序的意思是<=。 */

function findUnsortedSubarray(nums) {
  const len = nums.length
  const duplicated = nums.slice()
  const sorted = quicklySort(nums)
  let i = 0
  let j = len - 1

  while (i < len && duplicated[i] === sorted[i]) i++
  while (j >= 0 && duplicated[j] === sorted[j]) j--

  if (i >= j) return 0

  return j - i + 1

  // 非常浪费空间，如果要排序的数组非常大
  /* FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
  1: 0x8db900 node::Abort() [nodejs run]
  2: 0x8db94c  [nodejs run]
  3: 0xad6c1e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [nodejs run]
  4: 0xad6e54 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [nodejs run]
  5: 0xec44e2  [nodejs run]
  6: 0xed3cff v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [nodejs run]
  7: 0xe9d0e4 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [nodejs run]
  8: 0x113c88e v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [nodejs run]
  9: 0x3edb4f0dbe1d */
  function quicklySort(a) {
    if (a.length < 2) return a

    const less = []
    const greater = []
    const pivot = a.splice(Math.floor(a.length / 2), 1)[0]

    for (let i = 0; i < a.length; i++) {
      if (pivot > a[i]) {
        less.push(a[i])
      } else {
        greater.push(a[i])
      }
    }

    return quicklySort(less).concat(pivot, quicklySort(greater))
  }
}
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
