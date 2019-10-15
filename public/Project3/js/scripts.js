$(document).ready(function(){
            $("#submit").on("click",function(){
                let city = $("#cname").val();
                let latitude = $("#clat").val();
                let longitude = $("#clong").val();
                let zip = $("#czip").val();
                if(city != "" && latitude == "" && longitude == "" && zip == ""){
                    citySearch(city);
                    
                }
                else if(city == "" && latitude != "" && longitude != "" && zip == ""){
                    coordinateSearch(latitude,longitude);
                    
                }
                else if(city == "" && latitude == "" && longitude == "" && zip != ""){
                    zipSearch(zip);
                }
                else if(city == "" && latitude == "" && longitude != "" && zip == ""){
                    $("#feedback").html("To use coordinate search latitude and longitude need to be filled");
                    
                }
                else if(city == "" && latitude != "" && longitude == "" && zip == ""){
                    $("#feedback").html("To use coordinate search latitude and longitude need to be filled");
                    
                }
                else if(city == "" && latitude == "" && longitude == "" && zip == ""){
                    $("#feedback").html("Please fill at least one field");
                    
                }
                else{
                    $("#feedback").html("Please only fill one field");
                }
            });//submit
            function citySearch(city){
                let api = "b243f93e04e9fbe8e1091ddd883d6670";
                let apiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api;
                $.ajax({
                    
                    method: "GET",
                    url: apiCall,
                    dataType: "json",
                    success: function(result,status){
                        $("#weatherIcon").html("<img src = http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png>");
                        $("#weather").html("The current weather in " + result.name + " is " + result.weather[0].description);
                        let kelvin = result.main.temp;
                        let farenheit = (kelvin - 273.15) *(9/5)+32;
                        $("#temp").html("The current temperature is " + farenheit.toFixed(0) + ' F\xB0');
                        tempIcon(farenheit);
                    }
                });//ajax
            }
            function coordinateSearch(latitude,longitude){
                let api = "b243f93e04e9fbe8e1091ddd883d6670";
                let apiCall = "https://api.openweathermap.org/data/2.5/weather?lat=" +latitude +"&lon=" + longitude + "&appid=" + api;
                $.ajax({
                    
                    method: "GET",
                    url: apiCall,
                    dataType: "json",
                    success: function(result,status){
                        $("#weatherIcon").html("<img src = http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png>");
                        $("#weather").html("The current weather in " + result.name + " is " + result.weather[0].description);
                        let kelvin = result.main.temp;
                        let farenheit = (kelvin - 273.15) *(9/5)+32;
                        $("#temp").html("The current temperature is " + farenheit.toFixed(0) + ' F\xB0');
                        tempIcon(farenheit)
                    }
                });//ajax
            }
            function zipSearch(zip){
                let api = "b243f93e04e9fbe8e1091ddd883d6670";
                let apiCall = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=" + api;
                $.ajax({
                    
                    method: "GET",
                    url: apiCall,
                    dataType: "json",
                    success: function(result,status){
                        $("#weatherIcon").html("<img src = http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png>");
                        $("#weather").html("The current weather in " + result.name + " is " + result.weather[0].description);
                        let kelvin = result.main.temp;
                        let farenheit = (kelvin - 273.15) *(9/5)+32;
                        $("#temp").html("The current temperature is " + farenheit.toFixed(0) + ' F\xB0');
                        tempIcon(farenheit);
                        
                    }
                });//ajax
            }
            function tempIcon(temp){
                if(temp > 100){
                    $("#tempIcon").html("<img src = img/hellahot.jpg>");
                    
                }
                else if(temp < 100 && temp > 79){
                    $("#tempIcon").html("<img src = img/hot.png>");
                }
                else if(temp < 80 && temp > 59){
                    $("#tempIcon").html("<img src = img/nice.png>");
                }
                else if(temp < 60 && temp > 39){
                    $("#tempIcon").html("<img src = img/cool.png>");
                }
                else if(temp < 40 && temp > 0){
                    $("#tempIcon").html("<img src = img/snowing.png>");
                }
                else if(temp < 0){
                    $("#tempIcon").html("<img src = img/hellacold.png>");
                }
                
            }
            
        });//ready