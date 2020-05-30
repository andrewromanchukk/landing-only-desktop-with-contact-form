<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$check_msg='';
foreach($_POST['connect'] as $value){
    $check_msg .=$value.' ';
}

$formcontent = "Від: $name \n Повідомлення: $message";
$recipient = "readythomasgo@gmail.com";
$subject = "Форма зворотнього звязку";
$mailheader = "Відправник: $email \r \n";
$info = mail($recipient, $subject, $formcontent, $mailheader, "Content-type:text/plain; Content-type:text/plain; charset = UTF-8\r\n") or die ("Ошибка!");
echo "Thank You!" - "<a href='index.html' style='text-decoration:none;font-size:16px;color:#ff0099;'> Back to Main Page</a>";
?>