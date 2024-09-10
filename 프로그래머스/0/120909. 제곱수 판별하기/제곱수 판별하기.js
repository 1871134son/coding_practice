function solution(n) {
    var answer = 0;
    const root = Math.floor(Math.sqrt(n));
    if(root * root === n)
        answer = 1;
    else
        answer = 2;
    return answer;
}