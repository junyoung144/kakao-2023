$("#ord_receiver_memo").keyup(function (e) {
  //console.log("키업!");
  var content = $(this).val();
  $("#textLengthCheck").text("(" + content.length + "/20)"); //실시간 글자수 카운팅
  if (content.length > 20) {
    alert("최대 20자까지 입력 가능합니다.");
    $(this).val(content.substring(0, 20));
    $("#textLengthCheck").text("(20/20)");
  }
});
