function gcd(a, b) {
    // 최대공약수(GCD)를 계산하는 유클리드 호제법
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    // 최소공배수(LCM)를 계산
    return (a * b) / gcd(a, b);
}

function solution(numer1, denom1, numer2, denom2) {
    // 공통 분모 계산
    const commonDenom = lcm(denom1, denom2);
    
    // 분자 변환
    const newNumer1 = numer1 * (commonDenom / denom1);
    const newNumer2 = numer2 * (commonDenom / denom2);
    
    // 분자 더하기
    const finalNumer = newNumer1 + newNumer2;
    
    // 결과 분수를 기약 분수로 변환
    const commonDivisor = gcd(finalNumer, commonDenom);
    return [finalNumer / commonDivisor, commonDenom / commonDivisor];
}
