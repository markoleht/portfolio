<?php 
if(isset($_POST['submit'])){
    $to = "marko.leht@khk.ee";
    $email = $_POST['email']; 
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];
    $formattedMessage = $name . "\n\n". $phone . "\n\n". $email . "\n\n". $msg ;
    
   //  echo  $message = $name . " wrote the following:" . "\n\n" . $msg;
    
    mail($to,$name,$formattedMessage);
    
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>



