              
        
        $.ajax({
            url: "http://localhost:5000/details",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({"url": window.location.toString()})
        }).done(function(data) {
            console.log(data);
        });

        setTimeout(function(){

            $.ajax({
                url: "http://localhost:5000/details",
                type: "GET",
                dataType: "json",
            }).done(function(data)
            {
                    console.log(data);
                    var obj=JSON.parse(data);
                    console.log(obj);
                    console.log(obj.headquarters);
                    // return [obj.headquarters] 
                    
            });


        },3000)
   
