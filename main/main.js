let readline = require('readline');
let isCorrect = require('./isCorrect.js');
let getName = require('./getName.js');
let isCorrectId = require('./isCorrectId');
let getPrintList = require('./getPrintList');

var students = [];

function main() {
    let totalList = readline.createInterface(process.stdin, process.stdout);

    totalList.question('******主菜单******\n' +
        '1. 添加学生\n' + '2. 生成成绩单\n' + '3. 退出\n******主菜单******\n请输入你的选择（1～3）： \n', function(firstInput) {

        switch (firstInput){
            case '1':
                totalList.close();
                getInputStudent();
                break;
            case '2':
                totalList.close();
                getStudentId();
                break;
            case '3':
                console.log(`--·--您已退出系统--(｀・ω・´)--祝绩点飙五--·--`);
                totalList.close();
                break;
            default:
                console.log('------\n请重新输入您的选择（1~3）： \n------\n');
                totalList.close();
                main();
        }

        /*if(firstInput = '1'){
            totalList.close();
            getInputStudent();
        }else if(firstInput = '2'){
            totalList.question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n', function(studentIdInput) {
                studentId = studentIdInput;
                console.log(`你输入了${studentId}然并卵。`);
                totalList.close();main();
            });
        }else if(firstInput = '3'){
            console.log(`拜拜咯您内`);
            totalList.close();
        }else{
            console.log('请重新输入您的选择（1~3）： \n');
            totalList.close();main();
        }*/
        //totalList.prompt();
    });
}
main();

function getInputStudent() {
    let getInputStudentF = readline.createInterface(process.stdin, process.stdout);
    let student ;
    getInputStudentF.question('------\n请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：\n------\n', (inputStudent) => {
        student = getName(inputStudent);
        //students.push(inputStudent);
        if(isCorrect(inputStudent)){
            students.push(inputStudent);
            //getStudent(inputStudent,students);
            console.log(`-·-·-·-·-·-学生【${student}】的成绩被添加-·-·-·-·-·-`);
            getInputStudentF.close();
            main();
        }else{
            //students.pop();
            getInputStudentF.close();
            notCorrect();
        }
    });
}

function notCorrect() {
    let notCorrectF = readline.createInterface(process.stdin, process.stdout);

    notCorrectF.question(`------\n请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：\n------\n`, (inputStudent) => {
        let student = getName(inputStudent);
        if(isCorrect(inputStudent)){
            students.push(inputStudent);
            console.log(`-·-·-·-·-·-\n学生【${student}】的成绩被添加\n-·-·-·-·-·-\n`);
            notCorrectF.close();
            main();
        }else{
            notCorrectF.close();
            notCorrect();
        }
    });
}

function getStudentId() {
    let getStudentIdF = readline.createInterface(process.stdin, process.stdout);

    getStudentIdF.question('------\n请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n------\n' , (inputStudentIds) => {
            if (isCorrectId(inputStudentIds)) {
                console.log(getPrintList(inputStudentIds, students));
                getStudentIdF.close();
                main();
            }else{
                getStudentIdF.close();
                notCorrectId();
            }

    }
    );
}

function notCorrectId() {
    let notCorrectIdF = readline.createInterface(process.stdin, process.stdout);

    notCorrectIdF.question(`------\n请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：
\n------\n`, (inputStudentIds) => {
        if(isCorrectId(inputStudentIds)){
            console.log(getPrintList(inputStudentIds, students));
            notCorrectIdF.close();
            main();
        }else{
            notCorrectIdF.close();
            notCorrectId();
        }
    });
}