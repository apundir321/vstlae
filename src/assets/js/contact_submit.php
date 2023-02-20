<?php

$name = $_REQUEST["name"];
$companyname = $_REQUEST["companyname"];
$email = $_REQUEST["email"];
$message = $_REQUEST["message"];

$to = "ps1089124@gmail.com";
$subject = "Contact Us - " . $name;
$txt = "User Name : " . $name . " \r\n";
$txt .= "Company Name : " . $companyname . " \r\n";
$txt .= "Email Address : " . $email . " \r\n";
$txt .= "Message\n" . $message . "";

$headers = "From: " . $email . "\r\n" .
"CC: somebodyelse@example.com";

mail($to,$subject,$txt,$headers);
?>