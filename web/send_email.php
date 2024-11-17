<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['lname'];
    $phone = $_POST['lphone'];
    $email = $_POST['lemail'];
    $interest = $_POST['lselect'];

    $to = "rhanzjeks014@gmail.com"; // Replace with your email address
    $subject = "New Booking Request";
    $message = "Name: $name\nPhone: $phone\nEmail: $email\nInterested in: $interest";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Your booking request has been sent successfully.";
    } else {
        echo "There was a problem sending your booking request.";
    }
}
?>