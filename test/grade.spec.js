const assert =require('assert');
const { expect } = require('chai');
const{gradeSystem}=require('../src/gradeSystem.js')

describe("PercentageCalculation And Grade",()=>{
   
    it("The percentage is between 90 and 100",() =>{
        
        let Json_job1= {
            'buildNumber': '123456',
            'total': 800,
            'passed': 790,
            'failed': 5,
            'skipped': 3,
            'aborted': 2
           }
        var gradeSystem1= new gradeSystem(Json_job1);
        var result= gradeSystem1.calculateBuildGrade();
        assert(result=="A", 'the result is not A grade');

    });

    it("The percentage is between 80 and 90",() =>{
        
       var Json_job2= {
            'buildNumber': '123456',
            'total': 900,
            'passed': 750,
            'failed': 5,
            'skipped': 3,
            'aborted': 2
           }
           
           let gradeSystem1= new gradeSystem(Json_job2);
           var result= gradeSystem1.calculateBuildGrade();
           assert(result=="B", 'the result is not B grade');

    });

    it("The percentage is between 70 and 80",() =>{
        var Json_job3= {
            'buildNumber': '123456',
            'total': 900,
            'passed': 650,
            'failed': 20,
            'skipped': 13,
            'aborted': 23
           }
           
           var gradeSystem1= new gradeSystem(Json_job3);
           var result=gradeSystem1.calculateBuildGrade();
           assert(result=="C", 'the result is not C grade');

    });

    it("The percentage is between 60 and 70",() =>{
        var Json_job4= {
            'buildNumber': '123456',
            'total': 1000,
            'passed': 650,
            'failed': 40,
            'skipped': 23,
            'aborted': 13
           }

        var gradeSystem1= new gradeSystem(Json_job4);
        var result= gradeSystem1.calculateBuildGrade();
        assert(result=="D", 'the result is not D grade');

    });
    
    it("The percentage is between 0 and 60 ",() =>{
        var  Json_job5= {
            'buildNumber': '123456',
            'total': 1000,
            'passed': 450,
            'failed': 40,
            'skipped': 63,
            'aborted': 17
           }
         var gradeSystem1= new gradeSystem(Json_job5);
         var result= gradeSystem1.calculateBuildGrade();
         assert(result=="F", 'the result is not F grade')
    });

    it("Total No of testcases are zero ",()=>{
        var Json_job6= {
            'buildNumber': '123456',
            'total': 0,
            'passed': 450,
            'failed': 40,
            'skipped': 63,
            'aborted': 17
           }
         var  gradeSystem1= new gradeSystem(Json_job6);
         var result= gradeSystem1.calculateBuildGrade();
         assert(result!='total testCases are not less than 0 ',"total testCases are not less than 0");

    });

    it("When the passed test case is negative",()=>{
        var Json_job7= {
            'buildNumber': '123456',
            'total': 800,
            'passed': -450,
            'failed': 40,
            'skipped': 63,
            'aborted': 17
           }
           var gradeSystem1= new gradeSystem(Json_job7);
           var result= gradeSystem1.calculateBuildGrade();
           assert(result!='passed test cases are not less than 0 ',"passed test cases are not less than 0");
    });

    it("when passed test cases are not greater than to  total test cases",()=>{
        var  Json_job8= 
    {
        'buildNumber': '123456',
        'total': 100,
        'passed': 600,
        'failed': 1200,
        'skipped': 24,
        'aborted': 19
       }
    var gradeSystem1= new gradeSystem(Json_job8);
    
    var result= gradeSystem1.calculateBuildGrade();
   
    assert(result!=="passed test cases are not greater than to  total test cases ","passed test cases are not greater than to  total test cases");
});

it("when all values are zero",()=>{
    var  Json_job9= {
        'buildNumber': '123456',
        'total': 0,
        'passed': 0,
        'failed': 0,
        'skipped': 0,
        'aborted': 0
    }
    var gradeSystem1= new gradeSystem(Json_job9);
    
    var result= gradeSystem1.calculateBuildGrade();
   
   
     assert(result!=="Divide by zero error","Divide by zero error");
    
});
 

    it("When failed test cases are negative",()=>{
        var Json_job10= {
            'buildNumber': '123456',
            'total': 800,
            'passed': 450,
            'failed': -1,
            'skipped': 63,
            'aborted': 17
           }
         var  gradeSystem1= new gradeSystem(Json_job10);
         var result= gradeSystem1.calculateBuildGrade();
         assert(result!=="failed test cases are not less than 0 ","failed test cases are not less than 0");

    });

   
    
    it("When  skipped test cases are negative",()=>{
        var Json_job11= {
            'buildNumber': '123456',
            'total': 800,
            'passed': 450,
            'failed': 3,
            'skipped': -63,
            'aborted': 17
           }
         var  gradeSystem1= new gradeSystem(Json_job11);
         var result= gradeSystem1.calculateBuildGrade();
         assert(result!=="skipped test cases are not less than 0 ","skipped test cases are not less than 0");

    });

    it("When aborted test cases are negative",()=>{
        var Json_job12= {
            'buildNumber': '123456',
            'total': 800,
            'passed': 450,
            'failed': 3,
            'skipped': 63,
            'aborted': -17
           }
         var  gradeSystem1= new gradeSystem(Json_job12);
         var result= gradeSystem1.calculateBuildGrade();
         assert(result!=="aborted test cases are not less than 0 ","aborted test cases are not less than 0");
    });

});

