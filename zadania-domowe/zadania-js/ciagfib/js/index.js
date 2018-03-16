function ciagFibbonacci(n){
    if (n <= 0) {
        return 0;} else if
        (n == 1) {
        return 1;} else
            {
    return ciagFibbonacci(n - 1) + ciagFibbonacci(n - 2)
            }
}

console.log(ciagFibbonacci(6));