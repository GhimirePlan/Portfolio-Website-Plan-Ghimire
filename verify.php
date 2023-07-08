<?php
if(isset($_POST['submit']) && !empty($_POST['submit'])){
  if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){
    //your site secret key
    $secret = '6LemZwgnAAAAAM1-lsq1YeS_z9C5I3whNXc-Rlmt';
    //get verify response data
    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
    $responseData = json_decode($verifyResponse);
    if($responseData->success){
        //contact form submission code goes here

        $succMsg = 'Your contact request have submitted successfully.';
    }else{
        $errMsg = 'Robot verification failed, please try again.';
    }
  }else{
    $errMsg = 'Please click on the reCAPTCHA box.';
  }
}
?>
