let slideIndex = 1; // slide counter
let limit = 3;
let remain = 0;
let clickCount = 0;
let result = 0;
let firstAttempt = 0;
let attempt = 0;
let name = 0;
let identityNumber = 1;
let loginDetails = "";
let submissionDate = new Date(); //get new date info
let storageSplitter = 0;
let breakdown = 0;
let userDetailsCookie = "john joe";
let ham = "hamstring";
let pigeon = "flow";
let rowLimit = 0;
let fullName ="placeholder name";
let username = "aUsername";

let welcomeBack = false;
let helloReturn = "";

let fullNameReg = "fullnameRegAssignMeSomething";

let savedUserName = "John Smith";

let confirmPassword = document.getElementById('userPassword');
let userPassword = document.getElementById('confirmPassword');




function checkMatch() {

  if (document.getElementById('userPassword').value != document.getElementById('confirmPassword').value)
    {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Not matching';
    }

  if (document.getElementById('userPassword').value === document.getElementById('confirmPassword').value)
  {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = '';
  }

  console.log("The user password length is " + document.getElementById('userPassword').value.length);
}

let lengthChecker = 0;

function checkLength() {

  if(lengthChecker < 6) {
    document.getElementById('message2').style.color = 'red';
    document.getElementById('message2').innerHTML = 'Password is too short';
  }
  else {
    document.getElementById('message2').style.color = 'green';
    document.getElementById('message2').innerHTML = '';
  }
  lengthChecker++;
}

function validatePassword(){
  if(userPassword.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords don't match");
  }
  if(userPassword.length > 6) {
    confirmPassword.setCustomValidity("Password is too short and unsafe");
  }

   else {
    confirmPassword.setCustomValidity('');
  }
}

userPassword.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;



$('document').ready(function(){

  let username_state = false;
  let fullName_state = false;



  $('#username').on('blur', function(){
    let username = $('#username').val();

    if (username == '') {
      username_state = false;
      return;
    }

    $.ajax({
      url: 'register.php',
      type: 'post',
      data: {
        'username_check' : 1,
        'username' : username,
      },
      success: function(response){
        if (response == 'taken' ) {
          username_state = false;
          $('#username').parent().removeClass();
          $('#username').parent().addClass("form_error");
          $('#username').siblings("span").text('Sorry, username already taken');
        }else if (response == 'not_taken') {
          username_state = true;
          $('#username').parent().removeClass();
          $('#username').parent().addClass("form_success");
          $('#username').siblings("span").text('Username available');
        }
      }
    });
  });

  $('#fullName').on('blur', function(){
    fullName = $('#fullName').val();

    if (fullName == '') {
      fullName_state = false;
      return;
    }

    $.ajax({
      url: 'register.php',
      type: 'post',
      data: {
        'fullName_check' : 1,
        'fullName' : fullName,
      },
      success: function(response){
        if (response == 'taken' ) {
          fullName_state = false;
          $('#fullName').parent().removeClass();
          $('#fullName').parent().addClass("form_error");
          $('#fullName').siblings("span").text('Sorry... full name already taken');
        }else if (response == 'not_taken') {
          fullName_state = true;
          $('#fullName').parent().removeClass();
          $('#fullName').parent().addClass("form_success");
          $('#fullName').siblings("span").text('Full name available');
        }
      }
    });
  });

  $('#reg_btn').on('click', function(){
    username = $('#username').val();
    fullName = $('#fullName').val();
    userPassword = $('#userPassword').val();


    if (username_state == false || fullName_state == false) {
      $('#error_msg').text('Unable to proceed');

    }else{
      // proceed with form submission
      $.ajax({
        url: 'register.php',
        type: 'post',
        data: {
          'save' : 1,
          'fullName' : fullName,
          'username' : username,
          'userPassword' : userPassword,
        },
        success: function(response){
          // alert('user saved');
          //$('#username').val('');
          //$('#fullName').val('');
          //$('#userPassword').val('');
          console.log("username_state is " + username_state);
          console.log("fullName_state is " + fullName_state);
          console.log("Username is " + username);
          console.log("FullName is " + fullName);
          console.log("UserPassword is " + userPassword);

        }
      });
           window.location.href = "app.php";
    }
  });


  $('#login_btn').on('click', function(){
    username = $('#username').val();
    fullName = $('#fullName').val();
    userPassword = $('#userPassword').val();


    if (username_state == false || fullName_state == false) {
      $('#error_msg').text('Fix the errors in the form first');

    }else{
      // proceed with form submission
      $.ajax({
        url: 'register.php',
        type: 'post',
        data: {
          'save' : 1,
          'fullName' : fullName,
          'username' : username,
          'userPassword' : userPassword,
        },
        success: function(response){
          alert('user saved using login button');
          //$('#username').val('');
          //$('#fullName').val('');
          //$('#userPassword').val('');
          console.log("username_state is " + username_state);
          console.log("fullName_state is " + fullName_state);
          console.log("Username is " + username);
          console.log("FullName is " + fullName);
          console.log("UserPassword is " + userPassword);

        }
      });
           window.location.href = "app.php";
    }
  });

});




showSlides(slideIndex);

function plusSlides(n) {
  console.log("slide index number is " + slideIndex);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log("n is " + n);
  slides = document.getElementsByClassName("mySlides");
  console.log("slides length is " + slides);
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
    console.log(slides.length);
  }
  if (n < 1) {
    slideIndex = slides.length;

  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none", "block";
  }
  slides[slideIndex - 1].style.display = "block";


  if (slideIndex === 1) {
    document.getElementById('quizzes').style.display = 'block';
    document.querySelector("#dot1").style.backgroundColor = "lime";
    document.querySelector("#dot1").style.border = "3px solid #9dff9d";
    document.querySelector('#num1').style.display = 'block';
    document.querySelector('#name1').style.display = 'block';
  }
  if (slideIndex !== 1) {
    document.getElementById('quizzes').style.display = 'none';
    document.querySelector("#dot1").style.backgroundColor = "#ccc";
    document.querySelector("#dot1").style.border = "none";
    document.querySelector('#num1').style.display = 'none';
    document.querySelector('#name1').style.display = 'none';
  }
  if (slideIndex === 2) {
    document.getElementById('quiz2').style.display = 'block';
    document.querySelector("#dot2").style.backgroundColor = "lime";
    document.querySelector("#dot2").style.border = "3px solid #9dff9d";
    document.querySelector('#num2').style.display = 'block';
    document.querySelector('#name2').style.display = 'block';
  }
  if (slideIndex !== 2) {
    document.getElementById('quiz2').style.display = 'none';
    document.querySelector("#dot2").style.backgroundColor = "#ccc";
    document.querySelector("#dot2").style.border = "none";
    document.querySelector('#num2').style.display = 'none';
    document.querySelector('#name2').style.display = 'none';
  }
  if (slideIndex === 3) {
    document.getElementById('quiz3').style.display = 'block';
    document.querySelector("#dot3").style.backgroundColor = "lime";
    document.querySelector("#dot3").style.border = "3px solid #9dff9d";
    document.querySelector('#num3').style.display = 'block';
    document.querySelector('#name3').style.display = 'block';
  }
  if (slideIndex !== 3) {
    document.getElementById('quiz3').style.display = 'none';
    document.querySelector("#dot3").style.backgroundColor = "#ccc";
    document.querySelector("#dot3").style.border = "none";
    document.querySelector('#num3').style.display = 'none';
    document.querySelector('#name3').style.display = 'none';
  }
  if (slideIndex === 4) {
    document.getElementById('quiz4').style.display = 'block';
    document.querySelector("#dot4").style.backgroundColor = "lime";
    document.querySelector("#dot4").style.border = "3px solid #9dff9d";
    document.querySelector('#num4').style.display = 'block';
    document.querySelector('#name4').style.display = 'block';
  }
  if (slideIndex !== 4) {
    document.getElementById('quiz4').style.display = 'none';
    document.querySelector("#dot4").style.backgroundColor = "#ccc";
    document.querySelector("#dot4").style.border = "none";
    document.querySelector('#num4').style.display = 'none';
    document.querySelector('#name4').style.display = 'none';
  }
  if (slideIndex === 5) {
    document.getElementById('quiz5').style.display = 'block';
    document.querySelector("#dot5").style.backgroundColor = "lime";
    document.querySelector("#dot5").style.border = "3px solid #9dff9d";
    document.querySelector('#num5').style.display = 'block';
    document.querySelector('#name5').style.display = 'block';
  }
  if (slideIndex !== 5) {
    document.getElementById('quiz5').style.display = 'none';
    document.querySelector("#dot5").style.backgroundColor = "#ccc";
    document.querySelector("#dot5").style.border = "none";
    document.querySelector('#num5').style.display = 'none';
    document.querySelector('#name5').style.display = 'none';
  }
  if (slideIndex === 6) {
    document.getElementById('quiz6').style.display = 'block';
    document.querySelector("#dot6").style.backgroundColor = "lime";
    document.querySelector("#dot6").style.border = "3px solid #9dff9d";
    document.querySelector('#num6').style.display = 'block';
    document.querySelector('#name6').style.display = 'block';
  }
  if (slideIndex !== 6) {
    document.getElementById('quiz6').style.display = 'none';
    document.querySelector("#dot6").style.backgroundColor = "#ccc";
    document.querySelector("#dot6").style.border = "none";
    document.querySelector('#num6').style.display = 'none';
    document.querySelector('#name6').style.display = 'none';
  }
  if (slideIndex === 7) {
    document.getElementById('quiz7').style.display = 'block';
    document.querySelector("#dot7").style.backgroundColor = "lime";
    document.querySelector("#dot7").style.border = "3px solid #9dff9d";
    document.querySelector('#num7').style.display = 'block';
    document.querySelector('#name7').style.display = 'block';
  }
  if (slideIndex !== 7) {
    document.getElementById('quiz7').style.display = 'none';
    document.querySelector("#dot7").style.backgroundColor = "#ccc";
    document.querySelector("#dot7").style.border = "none";
    document.querySelector('#num7').style.display = 'none';
    document.querySelector('#name7').style.display = 'none';
  }
  if (slideIndex === 8) {
    document.getElementById('quiz8').style.display = 'block';
    document.querySelector("#dot8").style.backgroundColor = "lime";
    document.querySelector("#dot8").style.border = "3px solid #9dff9d";
    document.querySelector('#num8').style.display = 'block';
    document.querySelector('#name8').style.display = 'block';
  }
  if (slideIndex !== 8) {
    document.getElementById('quiz8').style.display = 'none';
    document.querySelector("#dot8").style.backgroundColor = "#ccc";
    document.querySelector("#dot8").style.border = "none";
    document.querySelector('#num8').style.display = 'none';
    document.querySelector('#name8').style.display = 'none';
  }
  if (slideIndex === 9) {
    document.getElementById('quiz9').style.display = 'block';
    document.querySelector("#dot9").style.backgroundColor = "lime";
    document.querySelector("#dot9").style.border = "3px solid #9dff9d";
    document.querySelector('#num9').style.display = 'block';
    document.querySelector('#name9').style.display = 'block';
  }
  if (slideIndex !== 9) {
    document.getElementById('quiz9').style.display = 'none';
    document.querySelector("#dot9").style.backgroundColor = "#ccc";
    document.querySelector("#dot9").style.border = "none";
    document.querySelector('#num9').style.display = 'none';
    document.querySelector('#name9').style.display = 'none';
  }
  if (slideIndex === 10) {
    document.getElementById('quiz10').style.display = 'block';
    document.querySelector("#dot10").style.backgroundColor = "lime";
    document.querySelector("#dot10").style.border = "3px solid #9dff9d";
    document.querySelector('#num10').style.display = 'block';
    document.querySelector('#name10').style.display = 'block';
  }
  if (slideIndex !== 10) {
    document.getElementById('quiz10').style.display = 'none';
    document.querySelector("#dot10").style.backgroundColor = "#ccc";
    document.querySelector("#dot10").style.border = "none";
    document.querySelector('#num10').style.display = 'none';
    document.querySelector('#name10').style.display = 'none';
  }

  if (slideIndex === 11) {
    document.getElementById('quizA1').style.display = 'block';
    document.querySelector("#dit1").style.backgroundColor = "lime";
    document.querySelector("#dit1").style.border = "3px solid #9dff9d";
    document.querySelector('#numA1').style.display = 'block';
    document.querySelector('#nameA1').style.display = 'block';
  }
  if (slideIndex !== 11) {
    document.getElementById('quizA1').style.display = 'none';
    document.querySelector("#dit1").style.backgroundColor = "#ccc";
    document.querySelector("#dit1").style.border = "none";
    document.querySelector('#numA1').style.display = 'none';
    document.querySelector('#nameA1').style.display = 'none';
  }

  if (slideIndex === 12) {
    document.getElementById('quizA2').style.display = 'block';
    document.querySelector("#dit2").style.backgroundColor = "lime";
    document.querySelector("#dit2").style.border = "3px solid #9dff9d";
    document.querySelector('#numA2').style.display = 'block';
    document.querySelector('#nameA2').style.display = 'block';
  }
  if (slideIndex !== 12) {
    document.getElementById('quizA2').style.display = 'none';
    document.querySelector("#dit2").style.backgroundColor = "#ccc";
    document.querySelector("#dit2").style.border = "none";
    document.querySelector('#numA2').style.display = 'none';
    document.querySelector('#nameA2').style.display = 'none';
  }
  if (slideIndex === 13) {
    document.getElementById('quizA3').style.display = 'block';
    document.querySelector("#dit3").style.backgroundColor = "lime";
    document.querySelector("#dit3").style.border = "3px solid #9dff9d";
    document.querySelector('#numA3').style.display = 'block';
    document.querySelector('#nameA3').style.display = 'block';
  }
  if (slideIndex !== 13) {
    document.getElementById('quizA3').style.display = 'none';
    document.querySelector("#dit3").style.backgroundColor = "#ccc";
    document.querySelector("#dit3").style.border = "none";
    document.querySelector('#numA3').style.display = 'none';
    document.querySelector('#nameA3').style.display = 'none';
  }
  if (slideIndex === 14) {
    document.getElementById('quizA4').style.display = 'block';
    document.querySelector("#dit4").style.backgroundColor = "lime";
    document.querySelector("#dit4").style.border = "3px solid #9dff9d";
    document.querySelector('#numA4').style.display = 'block';
    document.querySelector('#nameA4').style.display = 'block';
  }
  if (slideIndex !== 14) {
    document.getElementById('quizA4').style.display = 'none';
    document.querySelector("#dit4").style.backgroundColor = "#ccc";
    document.querySelector("#dit4").style.border = "none";
    document.querySelector('#numA4').style.display = 'none';
    document.querySelector('#nameA4').style.display = 'none';
  }
  if (slideIndex === 15) {
    document.getElementById('quizA5').style.display = 'block';
    document.querySelector("#dit5").style.backgroundColor = "lime";
    document.querySelector("#dit5").style.border = "3px solid #9dff9d";
    document.querySelector('#numA5').style.display = 'block';
    document.querySelector('#nameA5').style.display = 'block';
  }
  if (slideIndex !== 15) {
    document.getElementById('quizA5').style.display = 'none';
    document.querySelector("#dit5").style.backgroundColor = "#ccc";
    document.querySelector("#dit5").style.border = "none";
    document.querySelector('#numA5').style.display = 'none';
    document.querySelector('#nameA5').style.display = 'none';
  }
  if (slideIndex === 16) {
    document.getElementById('quizA6').style.display = 'block';
    document.querySelector("#dit6").style.backgroundColor = "lime";
    document.querySelector("#dit6").style.border = "3px solid #9dff9d";
    document.querySelector('#numA6').style.display = 'block';
    document.querySelector('#nameA6').style.display = 'block';
  }
  if (slideIndex !== 16) {
    document.getElementById('quizA6').style.display = 'none';
    document.querySelector("#dit6").style.backgroundColor = "#ccc";
    document.querySelector("#dit6").style.border = "none";
    document.querySelector('#numA6').style.display = 'none';
    document.querySelector('#nameA6').style.display = 'none';
  }
  if (slideIndex === 17) {
    document.getElementById('quizA7').style.display = 'block';
    document.querySelector("#dit7").style.backgroundColor = "lime";
    document.querySelector("#dit7").style.border = "3px solid #9dff9d";
    document.querySelector('#numA7').style.display = 'block';
    document.querySelector('#nameA7').style.display = 'block';
  }
  if (slideIndex !== 17) {
    document.getElementById('quizA7').style.display = 'none';
    document.querySelector("#dit7").style.backgroundColor = "#ccc";
    document.querySelector("#dit7").style.border = "none";
    document.querySelector('#numA7').style.display = 'none';
    document.querySelector('#nameA7').style.display = 'none';
  }
  if (slideIndex === 18) {
    document.getElementById('quizA8').style.display = 'block';
    document.querySelector("#dit8").style.backgroundColor = "lime";
    document.querySelector("#dit8").style.border = "3px solid #9dff9d";
    document.querySelector('#numA8').style.display = 'block';
    document.querySelector('#nameA8').style.display = 'block';
  }
  if (slideIndex !== 18) {
    document.getElementById('quizA8').style.display = 'none';
    document.querySelector("#dit8").style.backgroundColor = "#ccc";
    document.querySelector("#dit8").style.border = "none";
    document.querySelector('#numA8').style.display = 'none';
    document.querySelector('#nameA8').style.display = 'none';
  }
  if (slideIndex === 19) {
    document.getElementById('quizA9').style.display = 'block';
    document.querySelector("#dit9").style.backgroundColor = "lime";
    document.querySelector("#dit9").style.border = "3px solid #9dff9d";
    document.querySelector('#numA9').style.display = 'block';
    document.querySelector('#nameA9').style.display = 'block';
  }
  if (slideIndex !== 19) {
    document.getElementById('quizA9').style.display = 'none';
    document.querySelector("#dit9").style.backgroundColor = "#ccc";
    document.querySelector("#dit9").style.border = "none";
    document.querySelector('#numA9').style.display = 'none';
    document.querySelector('#nameA9').style.display = 'none';
  }
  if (slideIndex === 20) {
    document.getElementById('quizA10').style.display = 'block';
    document.querySelector("#dit10").style.backgroundColor = "lime";
    document.querySelector("#dit10").style.border = "3px solid #9dff9d";
    document.querySelector('#numA10').style.display = 'block';
    document.querySelector('#nameA10').style.display = 'block';
  }
  if (slideIndex !== 20) {
    document.getElementById('quizA10').style.display = 'none';
    document.querySelector("#dit10").style.backgroundColor = "#ccc";
    document.querySelector("#dit10").style.border = "none";
    document.querySelector('#numA10').style.display = 'none';
    document.querySelector('#nameA10').style.display = 'none';
  }

}

let correct;

function percentageScore() {
  let percentage;
  let totalScore = 0;

  if (document.getElementById("correct1").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct2").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct3").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct4").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct5").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct6").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct7").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct8").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct9").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct10").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("hamstring").value.toLowerCase() === ham) {

    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  console.log("The value is " + document.getElementById("hamstring").value);
  if (document.getElementById("correct12").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct13").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct14").value.toLowerCase() == "flow") {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct15").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct16").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct17").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct18").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct19").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }
  if (document.getElementById("correct20").checked) {
    totalScore = totalScore + 1;
    console.log(totalScore);
  }


  percentage = (totalScore * 5) + "%";
  console.log(percentage);

  let questionTotal = 20;
  let check = 0;

  let ch1 = document.getElementById("correct1").checked;
  let ch2 = document.getElementById("correct2").checked;
  let ch3 = document.getElementById("correct3").checked;
  let ch4 = document.getElementById("correct4").checked;
  let ch5 = document.getElementById("correct5").checked;
  let ch6 = document.getElementById("correct6").checked;
  let ch7 = document.getElementById("correct7").checked;
  let ch8 = document.getElementById("correct8").checked;
  let ch9 = document.getElementById("correct9").checked;
  let ch10 = document.getElementById("correct10").checked;


  let ch11 = document.getElementById("wrong1").checked;
  let ch12 = document.getElementById("wrong2").checked;
  let ch13 = document.getElementById("wrong3").checked;
  let ch14 = document.getElementById("wrong4").checked;
  let ch15 = document.getElementById("wrong5").checked;
  let ch16 = document.getElementById("wrong6").checked;
  let ch17 = document.getElementById("wrong7").checked;
  let ch18 = document.getElementById("wrong8").checked;
  let ch19 = document.getElementById("wrong9").checked;
  let ch20 = document.getElementById("wrong10").checked;
  let ch21 = document.getElementById("wrong11").checked;
  let ch22 = document.getElementById("wrong12").checked;
  let ch23 = document.getElementById("wrong13").checked;
  let ch24 = document.getElementById("wrong14").checked;
  let ch25 = document.getElementById("wrong15").checked;
  let ch26 = document.getElementById("wrong16").checked;
  let ch27 = document.getElementById("wrong17").checked;
  let ch28 = document.getElementById("wrong18").checked;
  let ch29 = document.getElementById("wrong19").checked;
  let ch30 = document.getElementById("wrong20").checked;
  let ch31 = document.getElementById("wrong21").checked;
  let ch32 = document.getElementById("wrong22").checked;
  let ch33 = document.getElementById("wrong23").checked;
  let ch34 = document.getElementById("wrong24").checked;
  let ch35 = document.getElementById("wrong25").checked;
  let ch36 = document.getElementById("wrong26").checked;
  let ch37 = document.getElementById("wrong27").checked;
  let ch38 = document.getElementById("wrong28").checked;
  let ch39 = document.getElementById("wrong29").checked;
  let ch40 = document.getElementById("wrong30").checked;
  let ch41 = document.getElementById("wrong31").checked;

  let ch52 = document.getElementById("wrong32").checked;
  let ch53 = document.getElementById("wrong33").checked;
  let ch54 = document.getElementById("wrong34").checked;
  let ch55 = document.getElementById("wrong35").checked;
  let ch56 = document.getElementById("wrong36").checked;
  let ch57 = document.getElementById("wrong37").checked;
  let ch58 = document.getElementById("wrong38").checked;
  let ch59 = document.getElementById("wrong39").checked;
  let ch60 = document.getElementById("wrong40").checked;
  let ch61 = document.getElementById("wrong41").checked;
  let ch62 = document.getElementById("wrong42").checked;
  let ch63 = document.getElementById("wrong43").checked;
  let ch64 = document.getElementById("wrong44").checked;
  let ch65 = document.getElementById("wrong45").checked;
  let ch66 = document.getElementById("wrong46").checked;
  let ch67 = document.getElementById("wrong47").checked;
  let ch68 = document.getElementById("wrong48").checked;



  let ch42 = document.getElementById("hamstring").value;
  let ch43 = document.getElementById("correct12").checked;
  let ch44 = document.getElementById("correct13").checked;
  let ch45 = document.getElementById("correct14").value;
  let ch46 = document.getElementById("correct15").checked;
  let ch47 = document.getElementById("correct16").checked;
  let ch48 = document.getElementById("correct17").checked;
  let ch49 = document.getElementById("correct18").checked;
  let ch50 = document.getElementById("correct19").checked;
  let ch51 = document.getElementById("correct20").checked;


  if (ch1) {
    questionTotal = questionTotal - 1;
  }
  if (ch2) {
    questionTotal = questionTotal - 1;
  }
  if (ch3) {
    questionTotal = questionTotal - 1;
  }
  if (ch4) {
    questionTotal = questionTotal - 1;
  }
  if (ch5) {
    questionTotal = questionTotal - 1;
  }
  if (ch6) {
    questionTotal = questionTotal - 1;
  }
  if (ch7) {
    questionTotal = questionTotal - 1;
  }
  if (ch8) {
    questionTotal = questionTotal - 1;
  }
  if (ch9) {
    questionTotal = questionTotal - 1;
  }
  if (ch10) {
    questionTotal = questionTotal - 1;
  }
  if (ch11) {
    questionTotal = questionTotal - 1;
  }
  if (ch12) {
    questionTotal = questionTotal - 1;
  }
  if (ch13) {
    questionTotal = questionTotal - 1;
  }
  if (ch14) {
    questionTotal = questionTotal - 1;
  }
  if (ch15) {
    questionTotal = questionTotal - 1;
  }
  if (ch16) {
    questionTotal = questionTotal - 1;
  }
  if (ch17) {
    questionTotal = questionTotal - 1;
  }
  if (ch18) {
    questionTotal = questionTotal - 1;
  }
  if (ch19) {
    questionTotal = questionTotal - 1;
  }
  if (ch20) {
    questionTotal = questionTotal - 1;
  }
  if (ch21) {
    questionTotal = questionTotal - 1;
  }
  if (ch22) {
    questionTotal = questionTotal - 1;
  }
  if (ch23) {
    questionTotal = questionTotal - 1;
  }
  if (ch24) {
    questionTotal = questionTotal - 1;
  }
  if (ch25) {
    questionTotal = questionTotal - 1;
  }
  if (ch26) {
    questionTotal = questionTotal - 1;
  }
  if (ch27) {
    questionTotal = questionTotal - 1;
  }
  if (ch28) {
    questionTotal = questionTotal - 1;
  }
  if (ch29) {
    questionTotal = questionTotal - 1;
  }
  if (ch30) {
    questionTotal = questionTotal - 1;
  }
  if (ch31) {
    questionTotal = questionTotal - 1;
  }
  if (ch32) {
    questionTotal = questionTotal - 1;
  }
  if (ch33) {
    questionTotal = questionTotal - 1;
  }
  if (ch34) {
    questionTotal = questionTotal - 1;
  }
  if (ch35) {
    questionTotal = questionTotal - 1;
  }
  if (ch36) {
    questionTotal = questionTotal - 1;
  }
  if (ch37) {
    questionTotal = questionTotal - 1;
  }
  if (ch38) {
    questionTotal = questionTotal - 1;
  }
  if (ch39) {
    questionTotal = questionTotal - 1;
  }
  if (ch40) {
    questionTotal = questionTotal - 1;
  }
  if (ch41) {
    questionTotal = questionTotal - 1;
  }
  if (ch42) {
    questionTotal = questionTotal - 1;
  }
  if (ch43) {
    questionTotal = questionTotal - 1;
  }
  if (ch44) {
    questionTotal = questionTotal - 1;
  }
  if (ch45) {
    questionTotal = questionTotal - 1;
  }
  if (ch46) {
    questionTotal = questionTotal - 1;
  }
  if (ch47) {
    questionTotal = questionTotal - 1;
  }
  if (ch48) {
    questionTotal = questionTotal - 1;
  }
  if (ch49) {
    questionTotal = questionTotal - 1;
  }
  if (ch50) {
    questionTotal = questionTotal - 1;
  }
  if (ch51) {
    questionTotal = questionTotal - 1;
  }
  if (ch52) {
    questionTotal = questionTotal - 1;
  }
  if (ch53) {
    questionTotal = questionTotal - 1;
  }
  if (ch54) {
    questionTotal = questionTotal - 1;
  }
  if (ch55) {
    questionTotal = questionTotal - 1;
  }
  if (ch56) {
    questionTotal = questionTotal - 1;
  }
  if (ch57) {
    questionTotal = questionTotal - 1;
  }
  if (ch58) {
    questionTotal = questionTotal - 1;
  }
  if (ch59) {
    questionTotal = questionTotal - 1;
  }
  if (ch60) {
    questionTotal = questionTotal - 1;
  }
  if (ch61) {
    questionTotal = questionTotal - 1;
  }
  if (ch62) {
    questionTotal = questionTotal - 1;
  }
  if (ch63) {
    questionTotal = questionTotal - 1;
  }
  if (ch64) {
    questionTotal = questionTotal - 1;
  }
  if (ch65) {
    questionTotal = questionTotal - 1;
  }
  if (ch66) {
    questionTotal = questionTotal - 1;
  }
  if (ch67) {
    questionTotal = questionTotal - 1;
  }
  if (ch68) {
    questionTotal = questionTotal - 1;
  }


  document.getElementById('remain').innerText = questionTotal;

  if(questionTotal < 16) {
    //NOTE: Add in when table is made and working correctly
    document.getElementById('submitButton1').style.display = 'block';
    document.getElementById('details').style.display = 'block';
  }

  return totalScore;
}

function score() {
  result = percentageScore();

  if (result == 0) {
    document.getElementById('noTry').style.display = 'block';
    document.getElementById('poor').style.display = 'none';
    document.getElementById('fair').style.display = 'none';
    document.getElementById('okay').style.display = 'none';
    document.getElementById('good').style.display = 'none';
    document.getElementById('veryGood').style.display = 'none';
    document.getElementById('excellent').style.display = 'none';
    document.getElementById('perfect').style.display = 'none'
  } else if (result <= 4) {
    document.getElementById('poor').style.display = 'block';
    document.getElementById('noTry').style.display = 'none';
    document.getElementById('fair').style.display = 'none';
    document.getElementById('okay').style.display = 'none';
    document.getElementById('good').style.display = 'none';
    document.getElementById('veryGood').style.display = 'none';
    document.getElementById('excellent').style.display = 'none';
    document.getElementById('perfect').style.display = 'none';

  } else if (result <= 7) {
    document.getElementById('fair').style.display = 'block';
    document.getElementById('poor').style.display = 'none';
    document.getElementById('noTry').style.display = 'none';
    document.getElementById('okay').style.display = 'none';
    document.getElementById('good').style.display = 'none';
    document.getElementById('veryGood').style.display = 'none';
    document.getElementById('excellent').style.display = 'none';
    document.getElementById('perfect').style.display = 'none'

  } else if (result <= 12) {
    document.getElementById('okay').style.display = 'block';
    document.getElementById('poor').style.display = 'none';
    document.getElementById('fair').style.display = 'none';
    document.getElementById('noTry').style.display = 'none';
    document.getElementById('good').style.display = 'none';
    document.getElementById('veryGood').style.display = 'none';
    document.getElementById('excellent').style.display = 'none';
    document.getElementById('perfect').style.display = 'none'

  } else if (result <= 14) {
    document.getElementById('good').style.display = 'block';
    document.getElementById('poor').style.display = 'none';
    document.getElementById('fair').style.display = 'none';
    document.getElementById('okay').style.display = 'none';
    document.getElementById('noTry').style.display = 'none';
    document.getElementById('veryGood').style.display = 'none';
    document.getElementById('excellent').style.display = 'none';
    document.getElementById('perfect').style.display = 'none'

  } else if (result <= 16) {
    document.getElementById('veryGood').style.display = 'block';
    document.getElementById('poor').style.display = 'none';
    document.getElementById('fair').style.display = 'none';
    document.getElementById('okay').style.display = 'none';
    document.getElementById('good').style.display = 'none';
    document.getElementById('noTry').style.display = 'none';
    document.getElementById('excellent').style.display = 'none';
    document.getElementById('perfect').style.display = 'none'

  } else if (result <= 18) {
    document.getElementById('excellent').style.display = 'block';
    document.getElementById('poor').style.display = 'none';
    document.getElementById('fair').style.display = 'none';
    document.getElementById('okay').style.display = 'none';
    document.getElementById('good').style.display = 'none';
    document.getElementById('veryGood').style.display = 'none';
    document.getElementById('noTry').style.display = 'none';
    document.getElementById('perfect').style.display = 'none'

  } else if (result <= 20) {
    document.getElementById('perfect').style.display = 'block';
    document.getElementById('poor').style.display = 'none';
    document.getElementById('fair').style.display = 'none';
    document.getElementById('okay').style.display = 'none';
    document.getElementById('good').style.display = 'none';
    document.getElementById('veryGood').style.display = 'none';
    document.getElementById('excellent').style.display = 'none';
    document.getElementById('noTry').style.display = 'none'
  }
}

function clickLimiter() {
  clickCount++;

  if (clickCount === 1) {
    console.log("clickCount value is " + clickCount);
    document.querySelector("#attempt1").style.display = 'none';
    document.querySelector("#attempt2").style.display = 'block';
    document.getElementById('details').style.display = 'block';
  }
  if (clickCount === 2) {
    console.log("clickCount value is " + clickCount);
    document.querySelector("#attempt1").style.display = 'none';
    document.querySelector("#attempt2").style.display = 'none';
    document.getElementById('submitButton1').style.display = 'none';
  }

  if (clickCount >= limit) {
    document.getElementById('perfect').style.display = 'none';
    document.getElementById('poor').style.display = 'none';
    document.getElementById('fair').style.display = 'none';
    document.getElementById('okay').style.display = 'none';
    document.getElementById('good').style.display = 'none';
    document.getElementById('veryGood').style.display = 'none';
    document.getElementById('excellent').style.display = 'none';
    document.getElementById('noTry').style.display = 'none'
  }
}

function hideHello() {
  userName = document.getElementById("User").style.display = "none";
}

function yogaLink() {
  let link = alert("The images and information for this quiz have been generously provided by www.yogacards.com");
}

function showPercentageBar() {

  if (clickCount === 1) {
    resultPer = (result * 5) + "%";
    document.querySelector('#resultBar1').style.width = resultPer;
    document.querySelector('#barPercentage').innerText = resultPer;
    document.querySelector('#barPercentage').style.display = 'block';
    attempt = 1;
  }
  if (clickCount === 2) {
    resultPer = (result * 5) + "%";
    document.querySelector('#resultBar1').style.width = resultPer;
    document.querySelector('#barPercentage').innerText = resultPer;
    document.querySelector('#barPercentage').style.display = 'block';
    attempt = 2;

  }
}

let isRegistering = false;
// Password confirm
function passwordConfirm() {

  if(userPassword !== confirmPassword && userPassword.length < 7) {
    isRegistering === false;
  } else {
    isRegistering === true;
  }
}


function regDetails() {
    fullName = document.getElementById("fullName").value;
    userPassword = document.getElementById('userPassword').value;
    username = document.getElementById('username').value;
    console.log("fullnameReg is " + fullNameReg);
    console.log("username is " + username);
    console.log("userPassword is " + userPassword);
}

function setCookie()
{
      let cookieFullName = document.getElementById('fullName').value;
      console.log("cookieFullName is " + cookieFullName);
      // Transfer the string data into a cookie
      userDetailsCookie = document.cookie = "userName=" + cookieFullName;
      console.log(userDetailsCookie);
}

function getCookie()
{
    let wholeUserNameCookie = document.cookie.split("=");
    console.log(wholeUserNameCookie);
    let savedUserName = wholeUserNameCookie[1];
    console.log("cookie savedusername " + savedUserName);

      userName = savedUserName;
      console.log("userName is " + userName);
}

// Player constructor
function Player(fullName = 'Harry Arter', username = "Harry Boy") {
  this.fullName = fullName;
  this.username = username;
}

function PersonFactory() {
  //attempt += 1;
  let PlayerID = "Person" + attempt;
  PlayerID = new Player(fullName, username);
  let PlayerRegistered;
  console.log(PlayerID);

  //Place Player objects to localStorage
  if (localStorage.getItem('PlayerID') === null) {
    PlayerRegistered = [];
  } else {
    PlayerRegistered = JSON.parse(localStorage.getItem('PlayerID'));
  }
  PlayerRegistered.push(PlayerID);

  localStorage.setItem('PlayerID', JSON.stringify(PlayerRegistered));
}



function getLoginDetails() {

  let fullNames;

  loginDetails = JSON.parse(localStorage.getItem('PlayerID'));
  let last = loginDetails.length;
  console.log("login details length is " + last);
  console.log(loginDetails[last - 1]);

  lastArrayObject = loginDetails[last - 1];
  fullNameReg = lastArrayObject.fullName;
  console.log(fullNameReg);

  // the welcome back message doesn't quite work
  for(i = 0; i <(last - 1); ++i) {

    console.log("full names are " + loginDetails[i].fullName);
    if(fullNameReg === loginDetails[i].fullName) {
      //alert("Welcome back " + fullNameReg);
      welcomeBack = true;

    }
  }

}


function getName() {

    if(welcomeBack == false){
      helloReturn = "Hello";
    }
    if(welcomeBack){
      helloReturn = "Welcome back";
    }

    let message = helloReturn + " " + fullNameReg + ", best of luck in the quiz!"

    document.getElementById("User").innerText = message;
    setTimeout(hideHello, 6000);
    document.getElementById("Name1").innerText = fullNameReg;
    document.getElementById("Name2").innerText = fullNameReg;
    document.getElementById("Name3").innerText = fullNameReg;
    document.getElementById("Name4").innerText = fullNameReg;
    document.getElementById("Name5").innerText = fullNameReg;
    document.getElementById("Name6").innerText = fullNameReg;
    document.getElementById("Name7").innerText = fullNameReg;
    document.getElementById("Name8").innerText = fullNameReg;
    document.getElementById("fName").innerText = fullNameReg;
    // fullName === userName;
    console.log("fullname is " + fullNameReg);
    // alert(message);
}

function tableRowGenerator() {

  if(rowLimit < 2){
    let mySQLDate;
    date = new Date();
    submissionDate = date.getUTCFullYear() + '-' +
        ('00' + date.getUTCMonth()).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' +
        ('00' + date.getUTCHours()).slice(-2) + ':' +
        ('00' + date.getUTCMinutes()).slice(-2) + ':' +
        ('00' + date.getUTCSeconds()).slice(-2);

    let table = document.getElementById("scoreBoard");

    document.querySelector("#scoreBoard").style.width = 'relative';
    document.querySelector("#scoreBoard").style.opacity = 'block';

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    tr.setAttribute("id", "rowSpawn");
    td1.setAttribute("id", "table_id");
    td2.setAttribute("class", "player_table");
    td3.setAttribute("id", "table_attempt");
    td4.setAttribute("class", "player_table");
    td5.setAttribute("id", "login_date");

    let id_Text = document.createTextNode(identityNumber);
    let Name_Text = document.createTextNode(fullNameReg);
    let Attempt_No = document.createTextNode(attempt);
    let Score_Per = document.createTextNode(resultPer);
    let Date_Time = document.createTextNode(submissionDate);

    console.log("the stored fullNameReg is" +fullNameReg);
    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5)
    td1.appendChild(id_Text);
    td2.appendChild(Name_Text);
    td3.appendChild(Attempt_No);
    td4.appendChild(Score_Per);
    td5.appendChild(Date_Time);

    td2.innerHTML = '<input type="text" name="Name" placeholder="" class="input_box2" value="' + fullNameReg + '" readonly>';
    td3.innerHTML = '<input name="Attempt" class="input_box2" value="' + attempt + '" readonly>';
    td4.innerHTML = '<input type="text" name="Score" placeholder="" class="input_box2" value="' + resultPer + '" readonly>';
    td5.innerHTML = '<input type="text" name="dates"class="input_box3" placeholder="none" value="'+ submissionDate +'" readonly>';

    identityNumber++;
    rowLimit++;
  }
}

// function fullNameReg() {
//     let name = savedUserName;
//     console.log("savedUserName is " + name);
//     //alert("Getting the " +userName);
// }


// function getCookie(cookieName)
// {
//   var table = document.getElementById("dataTable");
//   var lastColC = (table.rows[0].cells.length);
//   var lastRowC = (table.rows.length);
//
//   var joy = 0;
//
//   var length = document.getElementById("dataTable").rows[0].cells.length;
//
//   // Split up all the cookie data using the ":" character.
//   var divider = document.cookie.split(":");
//
//   // Substrings
//   var el, ro, co, tableContents;
//
//   // When the "=" character is used, store the substrings into variables
//   var rowSplit, colSplit, elementSplit;
//
//   // Break up the string into desired pieces using arrays and .split
//   for(i = 0; i < length ; i++)
//   {
//     ro = divider[0]; console.log(ro);
//     co = divider[1];
//     el = divider[2];
//
//     for(j = 0; j < el.length - 1; ++j)
//     {
//       rowSplit = ro.split("="); rowCount = rowSplit[1]; console.log(rowCount);
//       colSplit = co.split("="); colCount = colSplit[1];
//       elementSplit = el.split("="); tableContents = elementSplit[1];
//
//       // Splite up the table contents use the "," character
//       for(i = 0; i < tableContents.length; i++)
//       {
//           tableConSplit = tableContents.split(",");
//       }
//     }
//     assignmentNew--;
//     maxAssignment--;
//     var dynamicRow = (lastRowC + assignmentNew) + 1; console.log("dynamicRow number is " + dynamicRow);
//     var dynamicColumn;
//     console.log(tableConSplit);
//     console.log(lastColC);
//
//     // tableConSplit is made up of the saved cookie data for the table and is passed in using a nested for loop
//     for(i = 0; i < dynamicRow; i++)
//     {
//       for(j = 0; j < lastColC; j++)
//       {
//
//         document.getElementById("dataTable").rows[i].cells[j].innerText = tableConSplit[joy++];
//       }
//     } console.log(joy);
//   }
// }


// function popUp() {
//   firstName = prompt("Please enter your first name:");
//   surName = prompt("Please enter your last name:");
//   if (firstName == null || firstName == "") {
//     popUp();
//   } else {
//     let userName = "Hello " + firstName + ", best of luck in the quiz";
//     document.getElementById("User").innerText = userName;
//     setTimeout(hideHello, 6000);
//   }
//   document.getElementById("Name1").innerText = firstName;
//   document.getElementById("Name2").innerText = firstName;
//   document.getElementById("Name3").innerText = firstName;
//   document.getElementById("Name4").innerText = firstName;
//   document.getElementById("Name5").innerText = firstName;
//   document.getElementById("Name6").innerText = firstName;
//   document.getElementById("Name7").innerText = firstName;
//   document.getElementById("Name8").innerText = firstName;
//   document.getElementById("fName").innerText = firstName;
//   document.getElementById("lName").innerText = surName;
//
//   // let lN;
//   // let fN;
//   // console.log(firstName + " " + surName);
//   //
//   // if(localStorage.getItem('FirstName') === null || localStorage.getItem('Surname') === null) {
//   //   fN = [];
//   //   lN = [];
//   //   console.log("array for " + fN + " exists" );
//   //   console.log("array for " + lN + " exists" );
//   // } else {
//   //   fN = JSON.parse(localStorage.getItem('FirstName'));
//   //   lN = JSON.parse(localStorage.getItem('Surname'));
//   // }
//   // fN.push(firstName);
//   // lN.push(surName);
//   //
//   // localStorage.setItem('FirstName', JSON.stringify(fN));
//   // localStorage.setItem('Surname', JSON.stringify(lN));
//
//   name = firstName + " " + surName;
// }
