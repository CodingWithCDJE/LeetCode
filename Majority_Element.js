 const hashNums = {}

    for (let num of nums){
        hashNums[num] ? hashNums[num]++ : hashNums[num] = 1
    }
    let counter = -Infinity;
    let keyIndex;
    for(const [key, value] of Object.entries(hashNums)){
        if(value > counter) {
            counter = value;
            keyIndex = key;
        }
    }
    return keyIndex;
