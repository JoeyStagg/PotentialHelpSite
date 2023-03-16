//Author Joey Stagg
//This program makes the SUU Help Site dynamic
//March 2023

//This function unhides certain text when something is checked
function findResources() {
    var registerDrop = document.getElementById("register-drop").checked;
    var registerDropText = document.getElementById("register-text");
    var suuOnlineCheck = document.getElementById("suu-online-check").checked;
    var suuVideoText = document.getElementById("suu-online-video-text");
    var suuPdfText = document.getElementById("suu-online-pdf-text");
    var speedwayCheck = document.getElementById("speedway-check").checked;
    var speedwayVideoText = document.getElementById("speedway-video-text");
    var speedwayPdfText = document.getElementById("speedway-pdf-text");
    var acceleratedCheck = document.getElementById("accelerated-check").checked;
    var acceleratedVideoText = document.getElementById("accelerated-video-text");
    var acceleratedPdfText = document.getElementById("accelerated-pdf-text");
    var dropCoursePdfText = document.getElementById("drop-course-pdf");
    var onlineOutreachNumberText = document.getElementById("online-outreach-number-text");
    var whenRegisterCheck = document.getElementById("when-register").checked;
    var whenRegisterText = document.getElementById("registration-dates-text");
    var semesterStartDatesCheck = document.getElementById("start-dates").checked;
    var semesterStartDatesText = document.getElementById("semester-start-dates-text");
    var planCheck = document.getElementById("plan").checked;
    var degreeWorksInfoText = document.getElementById("degree-works-info-text");
    var degreePlanRequestText = document.getElementById("degree-plan-request-text");
    var onlineOutreachNumberText2 = document.getElementById("online-outreach-number-text-2");
    var appointment = document.getElementById("appointment").checked;
    var appointmentText = document.getElementById("schedule-appointment-text");


    //Shows header if register is checked
    if (registerDrop == true) {
        registerDropText.style.display = "block";
        dropCoursePdfText.style.display = "block";
        onlineOutreachNumberText.style.display = "block";
    } else {
        registerDropText.style.display = "none";
        dropCoursePdfText.style.display = "none";
        onlineOutreachNumberText.style.display = "none";
    }

    //Shows resources if you're a SUU Online student
    if (suuOnlineCheck == true) {
        suuVideoText.style.display = "block";
        suuPdfText.style.display = "block";
    } else {
        suuVideoText.style.display = "none";
        suuPdfText.style.display = "none";
    }
    
    //Shows resources if you're a Speedway Student
    if (speedwayCheck == true) {
        speedwayVideoText.style.display = "block";
        speedwayPdfText.style.display = "block";
    } else {
        speedwayVideoText.style.display = "none";
        speedwayPdfText.style.display = "none";
    }

    //Shows resources if you're an accelerated student
    if (acceleratedCheck == true) {
        acceleratedVideoText.style.display = "block";
        acceleratedPdfText.style.display = "block";
    } else {
        acceleratedVideoText.style.display = "none";
        acceleratedPdfText.style.display = "none";
    }

    //Shows resource if when can I register is checked
    if (whenRegisterCheck == true) {
        whenRegisterText.style.display = "block";
    } else {
        whenRegisterText.style.display = "none";
    }

    //Shows resource if when are semester start dates is checked
    if (semesterStartDatesCheck == true) {
        semesterStartDatesText.style.display = "block";
    } else {
        semesterStartDatesText.style.display = "none";
    }

    //Shows resource if planning for semesters is checked
    if (planCheck == true) {
        degreeWorksInfoText.style.display = "block";
        degreePlanRequestText.style.display = "block";
        onlineOutreachNumberText2.style.display = "block";
    } else {
        degreeWorksInfoText.style.display = "none";
        degreePlanRequestText.style.display = "none";
        onlineOutreachNumberText2.style.display = "none";
    }

    //Shows resource if schedule appointment is checked
    if (appointment == true) {
        appointmentText.style.display = "block";
    } else {
        appointmentText.style.display = "none";
    }

    
}

//This function shows other check options when register for or drop course is checked
function studentType() {
    var registerDrop = document.getElementById("register-drop");
    var hiddenText = document.getElementById("hidden-register");
    var suuOnlineCheck = document.getElementById("suu-online-check");
    var speedwayCheck = document.getElementById("speedway-check");
    var acceleratedCheck = document.getElementById("accelerated-check");

    if (registerDrop.checked == true) {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }

    if (registerDrop.checked == false) {
        suuOnlineCheck.checked = false;
        speedwayCheck.checked = false;
        acceleratedCheck.checked = false;
    }
}