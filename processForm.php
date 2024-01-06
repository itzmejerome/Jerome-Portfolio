<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"];
    $email = $_POST["email"];
    $mobileNumber = $_POST["mobileNumber"];
    $emailSubject = $_POST["emailSubject"];
    $message = $_POST["message"];

    
    $to = "jerome.porcado11@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $emailContent = "Full Name: $fullName\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Mobile Number: $mobileNumber\n";
    $emailContent .= "Subject: $emailSubject\n\n";
    $emailContent .= "Message:\n$message";

   
    mail($to, $subject, $emailContent, $headers);
}
?>
