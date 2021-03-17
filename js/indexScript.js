function refObj(s) {
  if (document.getElementById) return document.getElementById(s);
  else return eval('document.all.' + s);
}

function onStart() {
  name0 = refObj("name").value;
  name1 = encodeURIComponent(name0);
  email0 = refObj("email").value;
  email1 = encodeURIComponent(email0);
  phone0 = refObj("phone").value;
  phone1 = encodeURIComponent(phone0);
  $.ajax({
    url: "send.php",
    data: "name0=" + name1 + "&email0=" + email1 + "&phone0=" + phone1,
    success: function (msg) {
      updatePage(msg);
    },
    error: function (xhr, str) {
      alert('error: ' + xhr.responseCode);
    }
  });
}

function updatePage(msg) {
  rr = new String(msg);
  while (rr.charCodeAt(0) < 32) {
    rr = rr.substr(1);
  }
  console.log(" rr= " + rr);
  if (!rr) {
    return;
  }
  if (rr.substr(0, 5) == "error") { // ошибка
    alert("Error!: " + rr.substr(6, rr.length));
    return;
  }
  if (rr.substr(0, 5) == "data=") { // итог
    alert("Ok! " + rr.substr(5, rr.length));
    //     refObj("all").innerHTML=rr.substr(5,rr.length);
    return;
  }
}
