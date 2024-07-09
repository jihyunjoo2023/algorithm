function solution(numer1, denom1, numer2, denom2) {
    let numers = numer1* denom2 + numer2* denom1;
    let denoms = denom1*denom2;
    const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
    const gcd = getGCD(numers, denoms);
    numers /= gcd;
    denoms /= gcd;
    return [numers,denoms];
}