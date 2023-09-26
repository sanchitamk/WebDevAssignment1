//Part1
let hospital = {
   
    name : "Max Hospital",
    patients :[
 
       { 
         
       PatientId : "1", 
       PatientName:"Mark Kay",
       PatientDOB:"12 September 1990",
       Symptoms: ["RunnyNose", "Headache", "Fever"]
       },


       { 
         
        PatientId : "2", 
        PatientName:"Grace Goldman",
        PatientDOB:"4 June 2000",
        Symptoms:["Sore Throat", "Bodyache", "Fatigue"]
        },


        { 
         
            PatientId : "3", 
            PatientName:"Jay Hart",
            PatientDOB:"23 Februrary 2005",
            Symptoms:["RunnyNose", "Headache", "Fever"]
            }
 
     ]
 
    };

    //Part 2
let showPatients= function (hospital){
    let hospitaldata = "<h1>"+ hospital.name + "</h1>\n\n";
            
    for (let i =0; i<hospital.patients.length; i++){

        hospitaldata += "<h2>"+ hospital.patients[i].PatientName + ", " +  hospital.patients[i].PatientDOB + "</h2>\n";
        hospitaldata += "<ul>\n"

        for (let s =0; s<hospital.patients[i].Symptoms.length; s++){

            hospitaldata += "<li>"+ hospital.patients[i].Symptoms[s] + "</li>\n";
        }
        hospitaldata += "</ul>\n\n"
    }

    return hospitaldata 
}

let patientInfo = showPatients(hospital);
console.log(patientInfo);




    




