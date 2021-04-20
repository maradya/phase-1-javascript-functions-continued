// Your code here
function saturdayFun(target =  'roller-skate') {
    return `This Saturday, I want to ${target}!`
}

const mondayWork = function (work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(idk = '*') {
    return function (word = 'special') {
        return `You are ${idk}${word}${idk}!`
    }
}