$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "data.xml",
    dataType: "xml",
    success: xmlParser
  });
});

function xmlParser(xml){
  $('#load').fadeOut();
  $(xml).find("fish").each(function(){
    $("container").append('<div class="fish"><img src"images/ ' + $
    (this).find("image").text() + '" width="400" alt="' + $
    (this).find("name").text() + '"/><br/><div>' + $
    (this).find("name").text() + '<br/>' + $
    (this).find("record").text() + '</div></div>');
    $("fish").fadeIn(1000);
  });
}