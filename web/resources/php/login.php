<?php
   include("config.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($db,$_POST['loginEmail']);
      $mypassword = mysqli_real_escape_string($db,$_POST['loginPass']); 
      
      $sql = "SELECT iduser FROM user WHERE email = '$myusername' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row

      $error = "";
      if($count == 1) {
         if(!isset($_SESSION['myusername'])){
         // go to login page code here.
         // in login page, store data into session, use following:
            $_SESSION['login_user'] = $myusername;
         }
         else{
            $username=$_SESSION['myusername'];// get previous session and go your project page
         }
         
         header("location: ../home/index.html");
      }else {
         $error = "Your Login Name or Password is invalid";
      }
   }
?>