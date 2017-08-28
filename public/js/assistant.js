$(function(){

  //build dom stuff
  for (var i=0;i<3;i++) {
    var li = $("<li>");
    li.attr('data-page', i);
    $(".order-navigator").append(li);
  }

  $(".order-content").each(function(i,e){
    console.log($(e).find("input"))
    $(e).find("input").attr("data-page", $(e).attr("data-page") )
  })


  //functions
  function navigateTo(pageNr, inputRequired) {
    if (inputRequired===undefined) {
      inputRequired=true;
    }
    //navigation to page -1 resets the input fields
    if (pageNr==-1) {
      pageNr=0
      $("input").val("");
    }

    var filledOutInputsCount = $("input[data-page="+(pageNr-1)+"]").filter(function() {
      return this.value;
    }).length;

    console.log(pageNr + "," + filledOutInputsCount + "," + inputRequired+ " = " + ((filledOutInputsCount===0) && inputRequired && (pageNr!==0)) )
    if ( (filledOutInputsCount===0) && inputRequired && (pageNr!==0) ) {
      console.log("no input")
      return
      //TODO display error
    }

    $(".order-navigator li").removeClass('active');
    $(".order-navigator li[data-page="+pageNr+"]").addClass('active');
    $(".order-navigator li").each(function(i,e){
      $(".order-content").addClass('hidden');
    });
    $(".order-content[data-page="+pageNr+"]").removeClass('hidden');
  }


  //events
  $(".order-navigator li").each(function(i,e){
    $(e).click(function(){
      navigateTo(i);
    });
  });

  $(".order-btn").click(function(){
    //if ($(this).hasClass("disabled")) return;
    navigateTo($(this).attr("data-page"), $(this).attr("data-required")=='true' );
  });

  //init
  navigateTo(0);


});
