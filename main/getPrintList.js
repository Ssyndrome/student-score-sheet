function getPrintList(ids_, students) {
    let ids= ids_.split('，');
    let print_list = `成绩单
姓名|数学|语文|英语|编程|平均分|总分
==================================
`;
    let student_1, student_2, student_3, student_4, student_sum, students_sum = 0, student_arr = [];
    students.map((student) => {
        if(ids.includes(student.split('，')[1])){
            student_1 = parseInt(student.split('，')[4].replace(/[^0-9]/ig,""));
            student_2 = parseInt(student.split('，')[5].replace(/[^0-9]/ig,""));
            student_3 = parseInt(student.split('，')[6].replace(/[^0-9]/ig,""));
            student_4 = parseInt(student.split('，')[7].replace(/[^0-9]/ig,""));
            student_sum = student_1 + student_2 + student_3 + student_4;
            student_arr.push(student_sum);
            students_sum += student_sum;
            print_list += `${student.split('，')[0]}|${student_1}|${student_2}|${student_3}|${student_4}|${student_sum/4}|${student_sum}
`;
        }
    });
    print_list += `==================================
全班总分平均数：${student_sum/student_arr.length}
全班总分中位数：${getMedian(student_arr)}`;
    return print_list;
}



function getMedian(arr) {
    let al = arr.length;
    if(al % 2 === 0){
        return (arr[al/2 - 1]+arr[al/2])/2;
    }else{
        return arr[parseInt(al/2)];
    }
}

module.exports = getPrintList;
