// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

//Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Solution

function tailSwap(arr) {
    let a0 = '';
    let a1 = '';
    let b0 = '';
    let b1 = '';
    for (let i = 0; i < arr[0].indexOf(':'); i++) {
      if (arr[0][i] != ':') {
        a0 += arr[0][i];
      } 
    }
    for (let i = arr[0].indexOf(':'); i < arr[0].length; i++) {
      if (arr[0][i]) {
        a1 += arr[0][i];
      } 
    }
     for (let i = 0; i < arr[1].indexOf(':'); i++) {
      if (arr[1][i] != ':') {
        b0 += arr[1][i];
      } 
    }
    for (let i = arr[1].indexOf(':'); i < arr[1].length; i++) {
      if (arr[1][i]) {
        b1 += arr[1][i];
      } 
    }
    return [a0 + b1, b0 + a1]
}

// Another

function tailSwap(arr) {
    let newArr = arr
    .map(string => string.split(':'))
    return [newArr[0][0]+':'+newArr[1][1], newArr[1][0]+':'+newArr[0][1]];
}

// Another

function tailSwap(arr) {
    const [aa, ab] = arr[0].split(":")
    const [ba, bb] = arr[1].split(":")
    return [`${aa}:${bb}`, `${ba}:${ab}`]
}

// Another

function tailSwap(arr) {
    const [[a,b],[c,d]] = arr.map(x => x.split(':'))
    return [`${a}:${d}`, `${c}:${b}`]
}

// Another 

function tailSwap(arr) {
    let a = arr[0].split(':')
    let b = arr[1].split(':')
    
    return [`${a[0]}:${b[1]}`, `${b[0]}:${a[1]}`]
    
}

// Another

function tailSwap(arr) {
    let matriz = arr.join(':').split(':')
    return [matriz[0] + ':' + matriz[3], matriz[2] + ':' + matriz[1]]
}