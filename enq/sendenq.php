<?php

    ini_set('SMTP','localhost' );
    ini_set('sendmail_from', 'admin@emkorybski');

    require_once("enquiry.php");

    $post_obj = new Enquiry();

    $errors_var = $post_obj->validate_data();
    //$errors_var = array_filter($errors_var);

    if( !empty($errors_var)){
        exit(json_encode($errors_var));
    }

    $post_obj->insert_posted_data();
    $post_obj->email_posted_data();

