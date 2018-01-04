let requestCounter = 0;

let q = (a, b) => { 
    return([1e15]+a).slice(-b) 
};

let length = 10;

let next = () => {
    //magic from https://gist.github.com/aemkei/1180489#file-index-js
    let p = requestCounter++;
    return q(p + 1, length);
}

let current = () => {
	return q(requestCounter, length);
}

module.exports = {next, current};