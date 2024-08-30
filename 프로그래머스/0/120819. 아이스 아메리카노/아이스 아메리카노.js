function solution(money) {
    var answer = [];
    jan = Math.floor(money/5500);
    rem = money%5500;
    answer = [jan, rem];
    return answer;
}