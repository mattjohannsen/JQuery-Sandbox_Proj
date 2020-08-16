$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "data.xml",
    dataType: "xml",
    success: xmlParser
  });
});

function 