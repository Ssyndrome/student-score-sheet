function isCorrect(student) {
    let rev = /^([\u4e00-\u9fa5]+[，]+\d+[，]+[\u4e00-\u9fa5]+[，]+[\u4e00-\u9fa5]+\d+[，])([\u4e00-\u9fa5]+[：]+\d+[，]+){3}[\u4e00-\u9fa5]+[：]+\d+$/;
    return rev.test(student);
}
module.exports = isCorrect;