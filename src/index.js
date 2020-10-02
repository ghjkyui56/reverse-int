module.exports = function reverse (n) {
    if(n<0){
        n = n*(-1);
    }
    n = n.toString();
    n = n.split("").reverse().join("");
    return n;
}
