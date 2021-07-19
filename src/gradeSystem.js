class gradeSystem{
    
    constructor(Json_job){
        this.buildNumber=Json_job.buildNumber;
        this.total=Json_job.total;
        this.passed=Json_job.passed;
        this.failed=Json_job.failed;
        this.skipped=Json_job.skipped;
        this.aborted=Json_job.aborted;
    }
    calculateBuildGrade (){
        let grade="";
        try{
                if(this.total<=0) throw "total testCases are not less than 0";
                if(this.passed<=0) throw "passed test cases are not less than 0";
                if(this.failed<=0) throw "failed test cases are not less than 0";
                if(this.skipped<=0) throw "skipped test cases are not less than 0";
                if(this.aborted<=0) throw "aborted test cases are not less than 0";
                if(this.passed>this.total) throw "passed test cases are not greater than to  total test cases";
                if(this.skipped>this.total) throw "total skipped test cases are not greater than total  test cases";
        }
        catch(err)
        {
            return err;
        }
       
        let percentage= this.passed/(this.total- this.skipped+this.aborted);
        
        percentage=parseInt(percentage*100);
        var grades = {
            'A': {
                'upper': 100,
                'lower': 90
            },
            'B': {
                'upper': 90,
                'lower': 80
            },
            'C': {
                'upper': 80,
                'lower': 70
            },
            'D':{
            
                    'upper': 70,
                    'lower': 60
            },
        
            'F':{
                'upper': 60,
                'lower': 0

            }
        }
        
    Object.keys(grades).forEach(function(key){
        var value = grades[key];
        if(percentage < value['upper'] && percentage > value['lower'])
            grade=key;      
    });
    return grade;
    }
}

module.exports={
    
    gradeSystem
    
  }
//   "scripts": {
//     "start": "node index.js",
//     "test": "nyc mocha test/**/*.spec.js"
//   },

