$("document").ready(function(){
        $.ajax({
            url: "http://localhost:5000/details",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({"url": window.location.toString()})
        }).done(function(data) {
            console.log(data);
        });
});