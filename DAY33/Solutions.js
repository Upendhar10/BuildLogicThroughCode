//*  Factorial of a Number Using Recursion

function FactorialRecursion(N) {
  if (N === 1) {
    return 1;
  }

  return N * FactorialRecursion(N - 1);
}

console.log(FactorialRecursion(5));

// --------------------------------------------------------------------

//*  Calculates the Power of a Number Using Recursion

function PowerOfNum(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * PowerOfNum(base, exponent - 1);
}

console.log(PowerOfNum(2, 3));

// ---------------------------------------------------------------------

//*  Fibonacci Series Using Recursion

function FibonacciSeriesRecursion(n, series = []) {
  // Base case: Series starts with 0
  if (n == 0) {
    return [0];
  }

  // Base case: Series for n = 1 is [0, 1]
  if (n == 1) {
    return [0, 1];
  }

  let prevSeries = FibonacciSeriesRecursion(n - 1, series);
  let nextNum =
    prevSeries[prevSeries.length - 1] + prevSeries[prevSeries.length - 2];
  prevSeries.push(nextNum);

  return prevSeries;
}

console.log(FibonacciSeriesRecursion(5));
