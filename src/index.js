const{gradeSystem}=require('../src/gradeSystem.js');
var Json_job={
    'buildNumber': '123456',
    'total': 800,
    'passed': 790,
    'failed': 5,
    'skipped': 3,
    'aborted': 2
}
let gradesystem1=new gradeSystem(Json_job);
console.log(gradesystem1.calculateBuildGrade());
