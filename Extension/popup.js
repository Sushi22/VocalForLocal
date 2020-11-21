
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
                success: function (data) {
                    console.log(data);
                }
                });
        },4000)

       