<?php
$from = "teachmru@vh6.sweb.ru";
$subject = "Claim from site";
if (isset($_GET['name0'])){   // запрос на авторизацию
  $name=trim($_GET['name0']);
  if(!preg_match('/^[A-Za-zА-Яа-яЁё\s]{4,}/', $name)) {
    echo "error: Имя $name указано неверно (может содержать только буквы и цифры, не менее 4).\n";
    return;
}
  $email=trim($_GET['email0']);
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "error: E-mail адрес '$email' указан неверно.\n";
    return;
}
$to = $email;//"alexey.ovs.97@gmail.com";//"dka@csu.ru";//
  $phone=trim($_GET['phone0']);
  if (!preg_match('/((8|\+7)-?)?\(?\d{3,5}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}((-?\d{1})?-?\d{1})?/', $phone)){
    echo "error: номер телефона '$phone' указан неверно.\n";
    return;
  }
  $name= iconv("UTF-8","windows-1251",$name);
   $message='email: '.$email.' Phone:'.$phone;
  $check = @mail($to, "Claim from site", "Author: ".$name." message: $message"." from: ".$from); //отправка сообщения
  if($check) echo 'data=Спасибо! Ваше сообщение получено и мы свяжемся с Вами!';
  else echo "error: Ваше письмо не отправлено!";
}
?>
