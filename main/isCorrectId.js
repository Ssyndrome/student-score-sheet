function isCorrectId(ids) {
    let rev = /^(\d+[，]+)*\d+$/;
    return rev.test(ids);
}
//console.log(isCorrectId('12，12'));
module.exports = isCorrectId;
