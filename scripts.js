function open_side_bar() {
  $('#sidebar-btn').hide();
  $('#main').css("margin-left","255px");
  $('#sidebar').css("width","250px");
  $('#header-td1').css("width","0px");
}

function close_side_bar() {
  $('#sidebar-btn').show();
  $('#main').css("margin-left","0px");
  $('#sidebar').css("width","0px");
  $('#header-td1').css("width","50px");

}



$("body").removeClass("preload");

