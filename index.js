$(document).ready(function(){
    $("button").click(()=>{
        getMarks();
    });

    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $( "#tags" ).autocomplete({
        source: availableTags
      });   
});

let getMarks = ()=>{
    $.ajax({
        type : "Get",
        dataType : "jsonp",
        url : "https://graph.facebook.com/me?fields=id,name,email,address,birthday,location,gender&access_token=EAADDWZBS15cYBAGFIZAEfvQsWkm5iMQPPoTZAJfecEyM7duxppJ643ygCboR5uLIzG323ZBnNkYPqUWHyaOCAeejOKdrjolx6J18WC2vAwemCYPbb3EAxoNCIsyiOeBx2tZA6rstn8hZBMy8JR2b8coWEwavmdJrV3lIWkrxaZBMpP3CpeM4PEZCOZAmZCdvXCrh0ZD",
        success : function(data){
            console.log(data.id);
            console.log(data.name);
            console.log(data.email);
            console.log(data.birthday);
            console.log(data.location.name);
            console.log(data.gender);
        },
        error : function(data){
            console.log("Something went wrong");
        },
        beforeSend : ()=>{
            alert("bye do whatever you want to I bet you cant do anything more");
        },
        complete : ()=>{
            $("table").css("background","yellow");  
        }
    });
};