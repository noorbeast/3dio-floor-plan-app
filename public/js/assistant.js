
//build dom stuff
for (var i=0;i<3;i++) {
  var li = document.createElement('li');
  li.setAttribute('data-page', i);
  document.querySelector(".order-navigator").appendChild(li);
}

//we need to remember which inputs are actually required because he hide some of them
//and trigger the browsers' form valiation with <button type='submit'>, but this doesnt
//work properly unless we remove the required attribute from the hidden ones
document.querySelectorAll('input:required').forEach(function(input){
  input.setAttribute('data-required', 'true');
});

//hides inputs on other pages
function setInputsRequired(pageNr) {
  document.querySelectorAll("input").forEach(function(input){
    input.removeAttribute('required');
  });

  var pageSelector = ".order-content[data-page='"+(pageNr-1)+"']";
  document.querySelectorAll(pageSelector+" input[data-required='true']").forEach(function(input){
    input.setAttribute('required','required');
  });
}

//returns true if <input required='required'> inside parentSelector have a value
function requiredInputsFull(parentSelector) {
  var result=true;
  document.querySelectorAll(parentSelector).forEach(function(el){
    console.log(parentSelector)
    var input=el.querySelectorAll("input:required").forEach(function(input){
      console.log(input)
      if ( ! input.value) {
        result=false;
      }
    });
  });
  return result;
}

//functions
function navigateTo(pageNr) {

  /*
  //navigation to page -1 resets the input fields
  if (pageNr==-1) {
    pageNr=0
    $("input").val("");
  }
  */

  var pageSelector = ".order-content[data-page='"+(pageNr-1)+"']";
  if ( (pageNr!==0) && ( ! requiredInputsFull(pageSelector) ) ) {
    //cancel navigation
    return;
  }

  setInputsRequired(pageNr);

  $(".order-navigator li").removeClass('active');
  $(".order-navigator li[data-page="+pageNr+"]").addClass('active');
  $(".order-navigator li").each(function(i,e){
    $(".order-content").addClass('hidden');
  });
  $(".order-content[data-page='"+pageNr+"']").removeClass('hidden');
}


//events
$(".order-navigator li").each(function(i,e){
  $(e).click(function(){
    navigateTo(i);
  });
});

$(".order-btn").click(function(){
  //if ($(this).hasClass("disabled")) return;
  navigateTo($(this).attr("data-page") );
});

//init
navigateTo(0);
