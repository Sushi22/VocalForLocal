     
        var x=[1,2,3,4]

        misc();

        function misc()
        {
            $.ajax({
                url: "http://localhost:5000/details",
                async: "false",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({"url": window.location.toString()})
            }).done(function(data) {
                console.log("POST"+data);
            });
    
            setTimeout(function(){
                obj1={name:"sush"};
                $.ajax({
                    url: "http://localhost:5000/details",
                    type: "GET",
                    dataType: "json",
                }).done(function(data)
                {
                        console.log(data);
                        obj=JSON.parse(data);
                        console.log(obj);
                        console.log(obj.headquarters);
                        localStorage.setItem("my_data",obj.headquarters)
                        
                });
    
            },3000)

        }
