<?php
    header("Access-Control-Allow-Origin: *");
    
    function sanitizeInput($userInput){
        $userInput = trim($userInput);
        $userInput = strip_tags($userInput);
        return $userInput;
    }

    $errors = array();
    
    $from = sanitizeInput($_POST["full_name"]);
    $email = sanitizeInput($_POST["email"]);
    $message = sanitizeInput($_POST["message"]);

    if( !isset($_POST["company"]) ){
        $company = 'N/A';
    } else $company = sanitizeInput($_POST["company"]);
    
    
    $to = "email@gmail.com";
    $subject = "Job Inquiry";

    $emailTemplate = "
    <html>
        <head>
            <title>Job Inquiry</title>
        </head>
        <body>
            <table>
                <tr>
                    <td><b>Name</b></td>
                </tr>
                <tr>
                    <td>$from</td>
                </tr>
                <tr>
                    <td><b>Email</b></td>
                </tr>
                <tr>
                    <td>$email</td>
                </tr>
                <tr>
                    <td><b>Company</b></td>
                </tr>
                <tr>
                    <td>$company</td>
                </tr>
            </table>
            <p>$message</p>
        </body>
    </html>
    ";
    


    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= "From: $from" . "\r\n";

    mail($to,$subject,$emailTemplate,$headers);
    echo 'Success';
?>