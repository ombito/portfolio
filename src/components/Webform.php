<?php
$message_sent = false;
if (isset($_POST['email']) && $_POST['email'] != '') {

    if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $message_sent = true;
    }

    $email_from = 'alvinombito09@gmail.com';

    $email_subject = "Contact Form Inquiry";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";


    $to = "alvinombito09@gmail.com";

    $headers = "From: ".$visitor_email;

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: Form.js?mailsend");

}
?>