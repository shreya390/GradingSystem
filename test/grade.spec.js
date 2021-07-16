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
        expect(result).to.equal("A");

    });

    it("The percentage is between 80 and 90",() =>{
        
       var Json_job2= {
            'buildNumber': '123456',
            'total': 900,
            'passed': 750,
            'failed': 50,
            'skipped': 3,
            'aborted': 2
           }
           
           let gradeSystem1= new gradeSystem(Json_job2);
           var result= gradeSystem1.calculateBuildGrade();
           expect(result).to.equal("B");

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
           expect(result).to.equal("C");

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
        expect(result).to.equal("D");

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
         expect(result).to.equal("F");
        
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
         expect(result).to.equal("InvalidGrade");

    });

    it("When the passed test case is negative",()=>{
        var Json_job7= {
            'buildNumber': '123456',
            'total': 0,
            'passed': -450,
            'failed': 40,
            'skipped': 63,
            'aborted': 17
           }
           var gradeSystem1= new gradeSystem(Json_job7);
           var result= gradeSystem1.calculateBuildGrade();
           expect(result).to.equal("InvalidGrade");
    });

    it("when all the values are zero",()=>{
        var Json_job8= {
            'buildNumber': '123456',
            'total': 0,
            'passed': 0,
            'failed': 0,
            'skipped': 0,
            'aborted': 0
           }
           var gradeSystem1= new gradeSystem(Json_job8);
           var result= gradeSystem1.calculateBuildGrade();  
           expect(result).to.equal("InvalidGrade");

    });

    it("when skipped test cases are more than total test cases",()=>{
        var Json_job9= {
            'buildNumber': '123456',
            'total': 1000,
            'passed': 600,
            'failed': 10,
            'skipped': 1200,
            'aborted': 0
           }
           var gradeSystem1= new gradeSystem(Json_job9);
           var result= gradeSystem1.calculateBuildGrade();
           expect(result).to.equal("InvalidGrade");
    });


    it("when failed test cases are more than total test cases",()=>{
        var  Json_job10= {
            'buildNumber': '123456',
            'total': 1000,
            'passed': 600,
            'failed': 1200,
            'skipped': 24,
            'aborted': 19
           }
           var gradeSystem1= new gradeSystem(Json_job10);
           var result= gradeSystem1.calculateBuildGrade();
           expect(result).to.equal("InvalidGrade");
    });

    it("When failed test cases are negative",()=>{
        var Json_job11= {
            'buildNumber': '123456',
            'total': 800,
            'passed': 450,
            'failed': -1,
            'skipped': 63,
            'aborted': 17
           }
         var  gradeSystem1= new gradeSystem(Json_job11);
         var result= gradeSystem1.calculateBuildGrade();
         expect(result).to.equal("InvalidGrade");

    });

    it("When  skipped test cases are negative",()=>{
        var Json_job12= {
            'buildNumber': '123456',
            'total': 800,
            'passed': 450,
            'failed': 3,
            'skipped': -63,
            'aborted': 17
           }
         var  gradeSystem1= new gradeSystem(Json_job12);
         var result= gradeSystem1.calculateBuildGrade();
         expect(result).to.equal("InvalidGrade");

    });

    it("When aborted test cases are negative",()=>{
        var Json_job13= {
            'buildNumber': '123456',
            'total': 800,
            'passed': 450,
            'failed': 3,
            'skipped': 63,
            'aborted': -17
           }
         var  gradeSystem1= new gradeSystem(Json_job13);
         var result= gradeSystem1.calculateBuildGrade();
         expect(result).to.equal("InvalidGrade");

    });

});

