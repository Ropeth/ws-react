<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '/kunden/homepages/4/d692303330/htdocs/PHPMailer/src/Exception.php';
require '/kunden/homepages/4/d692303330/htdocs/PHPMailer/src/PHPMailer.php';
require '/kunden/homepages/4/d692303330/htdocs/PHPMailer/src/SMTP.php';

// if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check that data was sent to the mailer.
    if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Set a 400 (bad request) response code and exit.
    http_response_code(400);
    echo "Oops! pp There was a problem with your submission. Please complete the form and try again.";
    exit;
    }
    //echo $name;
    //echo $email;
    //echo $message;

    
    $debug = false;
    try {
        
    $mail = new PHPMailer($debug);  // Enable exceptions
    if ($debug) {
        // issue a detailed log
       $mail->SMTPDebug = SMTP::DEBUG_SERVER; 
   }
        // Server settings
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host = 'smtp.ionos.co.uk';  // Set your SMTP server
        $mail->SMTPAuth = true;                                   // Enable SMTP authentication
        $mail->Username = 'sender@romneya.co.uk';  // SMTP username 
        $mail->Password = '2CBNV9c6uC8c';  // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;                                    // TCP port to connect to
    
        // Recipients
        $mail->setFrom('sender@waterschools.org', 'website');
        $mail->addAddress('romneya@hotmail.com', 'admin');
    
    
        // Content
        $mail->isHTML(false);                                  // Set email format to plain text
        $mail->Subject = 'Contact Form Submission';
        $mail->Body = "Name: $name\nEmail: $email\nMessage: $message";
    
        $mail->send();
    
    
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';
        $mail->isHTML(true);
        //$mail->AltBody = 'The text as a simple text element';
    
    
        echo 'Thank you, your message has been sent.';
    } catch (Exception $e) {
        echo "Mailer Error: ".$e->getMessage();
    }   
//}
?>