
var unCheck = 0;
//first load the json file using link and insert values to table,
//Lets create AJAX file for load opeartion
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200 ){
      var res = JSON.parse(this.responseText)
        var out = "<tr><th>USER ID</th><th>ID</th><th>TITLE</th><th>COMPLETED</th></tr>"
        for(i=0;i<res.length;i++){
         
            out += "<tr>"
            out += "<td >" +res[i].userId+ "</td>"
            out += "<td>" +res[i].id+ "</td>"
            out += `<td>` +res[i].title+ `</td>`
           
            //check box
            if(res[i].completed == true){
                out += `<th><input type="checkbox" checked disabled  onChange = "check()"></th>`;
            }
            else{               
                out += `<th><input type = "checkbox" class="strik" id="checkbox${unCheck}" oninput = "check()"></th>`;
               
                unCheck += 1
            }
            
            out += "</tr>"

        }
     
       document.getElementById("progress").setAttribute("hidden",true)
        document.getElementById("tbdata").innerHTML = out;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true)
xhttp.send();




function check(){
    var checkValid =new Promise(function(resolve,reject){
         var Count = 0;
        // loop through all check box and count checked
        for(var i=0;i<unCheck;i++){
            if((document.getElementById("checkbox" +i)).checked == true){
         Count += 1;
            }
        }
     //when 5 checkbox is checked alert  “ Congrats. 5 Tasks have been Successfully Completed ”  
        if(Count == 5 ){
            resolve();
        }
   
    });
    checkValid.then(function(){
       setTimeout(function(){
           alert( " Congrats.✨ 5 Tasks have been Successfully Completed ✔️");
       },20)
    });
}