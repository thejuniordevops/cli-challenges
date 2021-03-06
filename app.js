/*
app.js 
cli-challenges using caporal 
*/ 

const prog = require('caporal');
const helmet = require('helmet');
prog
  .version('1.0.0')

  .command('lowercase', 'input string')
  .argument('str', "string")
  .action((args, options, logger) => {

        console.log(args.str.toLowerCase()); 



  })

  .command('uppercase', 'input string')
  .argument('str', "string")
  .action((args, options, logger) => {
        console.log(args.str.toUpperCase()); 



  })

  .command('capitalize', 'input string')
  .argument('str', "string")
  .action((args, options, logger) => {
        let newResult = args.str.replace(/\w\S*/g, function(newString){

            return newString.charAt(0).toUpperCase() + newString.substr(1).toLowerCase();


        });

        return console.log(newResult); 



  })

  .command('add', 'input value')
  .argument('[env...]', "array")
  .action((args, options, logger) => {
        var number = 0;
        for(var i=0; i<args.env.length; i++){

            number += parseInt(args.env[i]); 

        }

        

        console.log(number); 



  })


  .command('substract', 'input value')
  .argument('[env...]', "array")
  .action((args, options, logger) => {
        let firstNumb = parseInt(args.env[0]);  
        
        for(let i=0; i<args.env.length-1; i++){
              
           firstNumb -= parseInt(args.env[i+1]);
           

        }

        

        console.log(firstNumb); 



  })

  .command('multiply', 'input value')
  .argument('[env...]', "array")
  .action((args, options, logger) => {
        let firstNumb = parseInt(args.env[0]);  
        
        for(let i=0; i<args.env.length-1; i++){
              
           firstNumb *= parseInt(args.env[i+1]);
           

        }

        

        console.log(firstNumb); 



  })


  .command('divide', 'input value')
  .argument('[env...]', "array")
  .action((args, options, logger) => {
        let firstNumb = parseInt(args.env[0]);  
        
        for(let i=0; i<args.env.length-1; i++){
              
           firstNumb /= parseInt(args.env[i+1]);
           

        }

        

        console.log(firstNumb); 



  })

  .command('palindrome', 'input value')
  .argument('str', "array")
  .action((args, options, logger) => {
        //split the words using a split() method 
        let splitWords = args.str.split(""); 
        //reverse the words using a reverse() method 
        let reverseTheArray = splitWords.reverse();
        
        //combine all characters using a join() method 
        let joinTheArray = reverseTheArray.join("");


        //return the new value which has been modified 
        console.log(`String: ${args.str}`);
        let bool = ""; 
        if(args.str == joinTheArray){

            bool = "yes"; 


        }else{

            bool = "no"; 

        }

        console.log(`Is palindrome? ${bool}`);  

        

        



  })

  .command('obfuscate', 'input value')
  .argument('str', "array")
  .action((args, options, logger) => {
        

      var bytes = [];
      for (var i = args.str.length-1; i >= 0; i--) {
          bytes.unshift(['&#', args.str[i].charCodeAt(), ';' ].join(''));
         


          
      }

      console.log(bytes.join());
     

        



  })

  .command('random', 'input value')
  .option('--length <length>' ,'the number', prog.INT)
  .option('--letters <letter>', 'the boolean value')
  .option('--numbers <numbers"', 'the number')
  .option('--uppercase', 'the uppercase')
  .option('--lowercase', 'the lower')
  .action((args, options, logger) => {

    let randomChar = ""; 
    let alphabetList = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
    
   if(options.length && options.numbers && options.lowercase){
            if(options.numbers==="false"){

                  let newRandom = "abcdefghijklmnopqrstuvwxyz";
                  for(let i = 0; i<options.length; i++ ){
                        randomChar += newRandom.charAt(Math.floor(Math.random()* newRandom.length));    
                           
                  
                          
                  }

            }
         
           


      
   }else if(options.length){
    for(let i = 0; i<options.length; i++ ){
      randomChar += alphabetList.charAt(Math.floor(Math.random()* alphabetList.length));    
         

        
    }



   }else if(options.letters){
         if(options.letters === "false"){



            let randomNumber="0123456789";
            for(let i = 32; i>0; --i ){
                  randomChar += randomNumber[Math.round( Math.random()* (randomNumber.length-1) ) ];   
                   
          
          
            }
       


         }
      
      
   }else if(options.numbers){
           if(options.numbers==="false"){
              
                  let randomLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                  for(let i = 32; i>0; --i ){
                        randomChar += randomLetters[Math.round( Math.random()* (randomLetters.length-1) ) ];   
                         
                
                
                  }




           } 
      
      
   }else if(options.uppercase){
         let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
         for(let i = 32; i>0; --i ){
            randomChar += upperLetters[Math.round( Math.random()* (upperLetters.length-1) ) ];   
             
    
    
      }
      
      
      
   }else{
      for(let i = 32; i>0; --i ){
            randomChar += alphabetList[Math.round( Math.random()* (alphabetList.length-1) ) ];   
             
    
    
      }



   } 
    console.log(randomChar);

  })


  .command('ip', 'get the ip address')
  .description('Display the IP Address')
  .action((args, options, logger) => {

      let os = require("os"); 
       
      let ipaddr = os.networkInterfaces(os);
      console.log(ipaddr.lo[0].address); 


  })

  .command('ip-external', 'get the external ip')
  .description('Display an external IP')
  .action((args, options, logger) => {

      let os = require("os");

      let ipAddrExternal = os.networkInterfaces(os); 

      console.log(ipAddrExternal.wlp3s0[0].address); 


  })

  .command('headlines', 'get the headlines')
  .description('Display the headline from websites')
  .action((args, options, logger) => {

      //get modules 
      
      let request = require('request');
      let cheerio = require('cheerio'); 
      let fs = require('fs'); 

      //prepare to reverse those strings 
      function reverseString(str){
            return str.split('').reverse().join(''); 




      }; 

      //grab the url of a website 
      request("https://www.kompas.com/", 
                  function(error, response, body){
                        //display error messages 
                        if(error){

                              console.log(`Error : ${error}`); 

                        }
                        //display the status code 
                        console.log(`Status Code : ${response.statusCode} `); 

                        //load the website 
                        let q = cheerio.load(body);
                       
                        
                        q("div.headline").each(function(index){
                              let title = q(this).find(".headline__big__item .headline__big__title").text().trim(); 
                              console.log(title);
                              let url = q(this).find(".headline__big__item .headline__big__link").attr("href");
                              //display the result 
                              console.log(url);
                              
                        }); 

                        







                  }); 










  })

prog.parse(process.argv);
