<?php include('process.php'); ?>
<html>
<head>
  <title>Quiz Register</title>
  <link rel="stylesheet" href="style.css">
  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
  <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
 <form id="register_form">

   <div id="login-grid">

     <div id="login-inner-grid">
       <div></div>
       <div>
         <img src="images/yoga_logo.png" alt="">
       </div>
       <div></div>
       <!-- <div></div>
       <div>
          <h3 id="register">Register</h3>
       </div>

       <div></div> -->


       <div id="error_msg">

        </div>


       <div></div>
       <div>
         <div>
     	 	<input type="text" name="username" placeholder="Username" id="username" class="input_box" required>		<span class="taken"></span>
     	  </div>
       </div>
       <div></div>
       <!-- <div id="isTaken">
         <span  class="taken"></span>
       </div> -->
       <div></div>

       <div>
         	  <div>
       	    <input type="text" name="fullName" placeholder="Full Name" id="fullName" class="input_box" required>
		<span class="taken"></span>
       	  </div>

       </div>
       <div></div>

        <!-- <div id="isTaken">
            <span class="taken"></span>
        </div> -->

       <div></div>
       <div>
	        <input type="password" name="userPassword" placeholder="Password" id="userPassword" class="input_box" required onkeyup='checkMatch(); checkLength();'>
       </div>

       <div></div>

       <div></div>
       <div>
	        <input type="password" name="confirmPassword" placeholder="Confrim" id="confirmPassword" class="input_box" required onkeyup='checkMatch(); checkLength();'>
       </div>
       <div></div>

       <div id="isTaken">
         <span id='message'></span><br>
         <span id="message2"></span>
       </div>
       <div></div>
       <div>
         <button type="button" onclick="regDetails(); setCookie(); PersonFactory();" id="reg_btn">Register/Login</button>
       </div>
       <div></div>
        <!-- <div>3</div>
       <div>4</div>
       <div>5</div> -->

     </div>
   </div>

   <!-- <h3 id="register">Register</h3>
	   <div id="error_msg"></div> -->
     <!-- <div>
 	 	<input type="text" name="username" placeholder="Username" id="username" class="input_box" required>
 	    <span class="taken"></span>
 	  </div>

	  <div>
	    <input type="text" name="fullName" placeholder="Full Name" id="fullName" class="input_box" required>
		<span class="taken"></span>
	  </div>

	  <div>
	   <input type="password" name="userPassword" placeholder="Password" id="userPassword" class="input_box" required onkeyup='check();'>
	  </div>
    <div>
	   <input type="password" name="confirmPassword" placeholder="Confrim" id="confirmPassword" class="input_box" required onkeyup='check();'>

	  </div>
       <span id='message'></span>
	  <div>
	 	<button type="button" onclick="regDetails(); setCookie(); PersonFactory();" id="reg_btn">Register/Login</button>

    </div> -->
	</form>

</body>
</html>

<!-- scripts -->
<script src="jquery-3.2.1.min.js"></script>
<script src="script.js"></script>
