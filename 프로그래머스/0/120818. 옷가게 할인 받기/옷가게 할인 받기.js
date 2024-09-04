function solution(answer) {
    if(answer >= 500000)
        answer = answer * .8;
    else if(answer >= 300000)
        answer = answer * .9;
    else if(answer >= 100000)
        answer = answer * .95;
    return Math.floor(answer);
}