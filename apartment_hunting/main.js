function func(block, data, reqs) {
    for (let j = 0; j < reqs.length; j++) {
        if (block[reqs[j]] == true)
            data[j] = true;
    }
    return data
}

blocks = [{
    "gym": false,
    "school": true,
    "store": false,
}, {
    "gym": true,
    "school": false,
    "store": false,
}, {
    "gym": true,
    "school": true,
    "store": false,
}, {
    "gym": false,
    "school": true,
    "store": false,
}, {
    "gym": false,
    "school": true,
    "store": true,
}]
reqs = ["school", "store", "gym"]
var count;
var index;
for (let i = 0; i < blocks.length; i++) {
    var data = []
    for (let i = 0; i < reqs.length; i++)
        data.push(false);

    var c = 0;
    data = func(blocks[i], data, reqs)
    matched = true
    for (let k = 0; k < data.length; k++) {
        if (data[k] != true)
            matched = false
    }
    if (matched) {
        index = i;
        break
    }
    c = 1;
    for (let j = 1; j < blocks.length; j++) {
        if (i - j >= 0)
            data = func(blocks[i - j], data, reqs);
        if (i + j < blocks.length)
            data = func(blocks[i + j], data, reqs);

        matched = true
        for (let k = 0; k < data.length; k++) {
            if (data[k] != true)
                matched = false
        }
        if (matched)
            break

        c++;
    }
    if (!count || c <= count) {
        count = c;
        index = i;
    }
}
console.log(index);