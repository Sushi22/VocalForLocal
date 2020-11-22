

        function postData(ajaxurl) { 
            return $.ajax({
              url: ajaxurl,
              type: "POST",
            contentType: "application/json",
            data: JSON.stringify({"url": window.location.toString()})
            });
          };

        function getData(ajaxurl) { 
            return $.ajax({
              url: ajaxurl,
              type: 'GET',
              dataType: "json",
            });
          };
          
          async function test() {
            try {
                
                const data = await postData("http://localhost:5000/details")
                const res = await getData("http://localhost:5000/details")
                obj=JSON.parse(res);
                console.log(obj);
                localStorage.setItem('origin', obj.headquarters);
                fetched=obj.headquarters.toString();
                chrome.runtime.sendMessage({todo:"notify",fetch: fetched});
              
            } catch(err) {
              console.log(err);
            }
          }
          
          test();