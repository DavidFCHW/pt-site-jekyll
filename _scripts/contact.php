<?php
/**
 * Created by PhpStorm.
 * User: David
 * Date: 23/08/2019
 * Time: 17:52
 */

if(isset($_POST['submit'])){
    $message = $_POST['message'];
    $subject = $_POST['subject'];
    $from = $_POST['email'];
    $headers = "From: ". $from;
    mail("contactus@pilgrimtabernacle.co.uk", $subject, $message, $headers);
//    mail("contactus@pilgrimtabernacle.co.uk", "Test subject", "Hello testing...", "From: contactus@pilgrimtabernacle.co.uk");
//    header("Location: contact.html?mailsent");
}
