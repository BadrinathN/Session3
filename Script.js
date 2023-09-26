
let xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all',true)

 xhr.onload = function(){
     if(xhr.status===200){ //checking if server has send proper request
         let response = JSON.parse(xhr.responseText); //parse the json
         console.log(response) 
         let filteredarray = []
         let Countryname = []
         let region = []
         let Population = []
         let subregion =[]

         for (i=0; i<response.length; i++)
         {
          filteredarray.push(response[i].flag)  
          Countryname.push(response[i].name.official)
          region.push(response[i].region)
          subregion.push[response[i].subregion]
          Population.push(response[i].population)
         }
         
         for (i=0; i<response.length; i++)
         {
            console.log("The Countryname is " +Countryname[i] +", region is " + region[i]  +" and population is  " + Population[i] )
         }
         
         console.log(filteredarray)

         let newarray = []

      
           }
     else{
         console.log("Error") 
     }
 }

//send the request
 xhr.send()
