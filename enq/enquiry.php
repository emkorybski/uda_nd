<?php

    class Enquiry {

        var $posted_name;
        var $posted_email;
        var $posted_area;

        public function validate_data(){
            $posted_name  = $_POST['name'];
            $posted_email = $_POST['email'];

            $errors = array();
            $name_error ='';

            if($posted_email === '' || $posted_email === '' || !(preg_match('/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/', $posted_email))){
                $name_error = "Sorry, all fields are mandatory!";
                //$errors[] = $name_error;
            }
            return $name_error; // possibly return also a HTTP status for AJAX call
        }

        public function email_posted_data(){
            $posted_name  = filter_var($_POST['name'], FILTER_SANITIZE_STRING);

            $posted_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
            $posted_area  = filter_var($_POST['area'], FILTER_SANITIZE_STRING);
            $to = "emkorybski@gmail.com";


            $subject = "emkorybski.info: message from " . $posted_name;
            $headers = "From email: " . $posted_email;
            $message = "Enquiry topic: " . $posted_area;

            mail($to, $subject, $message, $headers);

        }

        public function insert_posted_data(){

            $db = new PDO('sqlite:sidekx.sqlite3');
            $db->setAttribute(PDO::ATTR_ERRMODE,
                PDO::ERRMODE_EXCEPTION);

            $posted_name  = filter_var($_POST['name'], FILTER_SANITIZE_STRING);

            $posted_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
            $posted_area  = filter_var($_POST['area'], FILTER_SANITIZE_STRING);

            // Prepare INSERT statement to SQLite3 file db
            if(isset($_POST)){
                $insert = "INSERT INTO `sidekx_enq` (enq_name, enq_email, enq_area)
                    VALUES (:enqname, :enqemail, :enqarea)";
                $stmt = $db->prepare($insert);

                // Bind parameters to statement variables
                $stmt->bindParam(':enqname', $posted_name);
                $stmt->bindParam(':enqemail', $posted_email);
                $stmt->bindParam(':enqarea', $posted_area);

                $stmt->execute();
            }
        }
    }