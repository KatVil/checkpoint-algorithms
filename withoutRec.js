/* залание 2 без рекурсии
const twoSum = (arr, target) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([i,j])
            }
        }
    }
    return result;
};*/