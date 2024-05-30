const express = require("express");
const app = express();
const UssdMenu = require("ussd-menu-builder");

let menu = new UssdMenu();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/api/test", (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    res.send("Testing the requests");
    const number = phoneNumber;
  });


  menu.startState({
    run: () => {
      // use menu.con() to send response without terminating session
      menu.con(
        "Welcome To Huduma Centre: Choose a location:" +
          "\n1. GPO Huduma Centre" +
          "\n2. Baringo Huduma Centre" +
          "\n3. Bomet Huduma Centre" +
          "\n4. Bungoma Huduma Centre" +
          "\n5. Busia Huduma Centre"
      );
    },
    // next object links to next state based on user input
    next: {
      1: "GPO Huduma Centre",
      2: "Baringo Huduma Centre",
      3: "Bomet Huduma Centre",
      4: "Bungoma Huduma Centre",
      5: "Busia Huduma Centre"
    },
  });  

  menu.state("GPO Huduma Centre", {
    run: function () {
      menu.con(
        "Choose a Service:" +
          "\n1. Health Service" +
          "\n2. Identification Services And Childhood Services" +
          "\n3. Education Services"
      );
    },
    next: {
        1: "Health Services",
        2: "Identification Services And Childhood Services",
        3: "Education Services"
      },
    defaultNext: "invalidOption",
  });

  menu.state("Baringo Huduma Centre", {
    run: function () {
      menu.con(
        "Choose a Service:" +
          "\n1. Health Service" +
          "\n2. Identification Services And Childhood Services" +
          "\n3. Education Services"
      );
    },
    next: {
        1: "Health Services",
        2: "Identification Services And Childhood Services",
        3: "Education Services"
      },
    defaultNext: "invalidOption",
  });

  menu.state("Bomet Huduma Centre", {
    run: function () {
      menu.con(
        "Choose a Service:" +
          "\n1. Health Service" +
          "\n2. Identification Services And Childhood Services" +
          "\n3. Education Services"
      );
    },
    next: {
        1: "Health Services",
        2: "Identification Services And Childhood Services",
        3: "Education Services"
      },
    defaultNext: "invalidOption",
  });

  menu.state("Bungoma Huduma Centre", {
    run: function () {
      menu.con(
        "Choose a Service:" +
          "\n1. Health Service" +
          "\n2. Identification Services And Childhood Services" +
          "\n3. Education Services"
      );
    },
    next: {
        1: "Health Services",
        2: "Identification Services And Childhood Services",
        3: "Education Services"
      },
    defaultNext: "invalidOption",
  });

  menu.state("Busia Huduma Centre", {
    run: function () {
      menu.con(
        "Choose a Service:" +
          "\n1. Health Service" +
          "\n2. Identification Services And Childhood Services" +
          "\n3. Education Services"
      );
    },
    next: {
      1: "Health Services",
      2: "Identification Services And Childhood Services",
      3: "Education Services"
    },
  });  

  menu.state("Health Services", {
    run: function () {
      menu.con(
        "Choose a Service:" +
          "\n1. National Hospital Insurance Fund(NHIF)" +
          "\n2. National Aids Control Council" +
          "\n3. Ministry Of Health"
      );
    },
    next: {
      1: "National Hospital Insurance Fund(NHIF)",
      2: "National Aids Control Council",
      3: "Ministry Of Health",
    },
    defaultNext: "invalidOption",
  });

  menu.state("Identification Services And Childhood Services", {
    run: function () {
      menu.con(
        "Choose a Service:" +
          "\n1. Civil Registration Services" +
          "\n2. Higher Education Loans Board(HELB)" +
          "\n3. National Registration Bureau"
      );
    },
    next: {
      1: "Civil Registration Services",
      2: "Higher Education Loans Board(HELB)",
      3: "National Registration Bureau",
    },
    defaultNext: "invalidOption",
  });

  menu.state("Education Services", {
    run: function () {
      menu.con(
        "Choose a Service:" +
          "\n1. Kenya Universities and Colleges Central Placement Service(KUCCPS)" +
          "\n2. Ministry of Education-Directorate of Adult and Continuing Education" +
          "\n3. Kenya Accountants & Secretaries National Examination Board(KASNEB)"
      );
    },
    next: {
      1: "Kenya Universities and Colleges Central Placement Service(KUCCPS)",
      2: "Ministry of Education-Directorate of Adult and Continuing Education",
      3: "Kenya Accountants & Secretaries National Examination Board(KASNEB)",
    },
    defaultNext: "invalidOption",
  });

  menu.state("Kenya Universities and Colleges Central Placement Service(KUCCPS)", {
    run: function () {
      menu.con(
        "Rate the Service Offered:" +
          "\n1. Placement to universities and colleges" +
          "\n2. Career Guidance" 
      );
    },
    next: {
      1: "Placement to universities and colleges",
      2: "Career Guidance",
    },
    defaultNext: "invalidOption",
  });

  menu.state("Placement to universities and colleges", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Career Guidance", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });
  menu.state("Ministry of Education-Directorate of Adult and Continuing Education", {
    run: function () {
      menu.con(
        "Rate the Service Offered:" +
          "\n1. Registration Of Candidates" 

      );
    },
    next: {
      1: "Registration Of Candidates",

    },
    defaultNext: "invalidOption",
  });

  menu.state("Registration Of Candidates", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Kenya Accountants & Secretaries National Examination Board(KASNEB)", {
    run: function () {
      menu.con(
        "Rate the Service Offered:" +
          "\n1. Examination Booking" +
          "\n2. Application for A student Id" 
      );
    },
    next: {
      1: "Examination Booking",
      2: "Application for A student Id",
    },
    defaultNext: "invalidOption",
  });

  menu.state("Examination Booking", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Application for A student Id", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });




  menu.state("National Hospital Insurance Fund(NHIF)", {
    run: function () {
      menu.con(
        "Rate the Service Offered:" +
          "\n1. Register & Add Dependants" +
          "\n2. Pay Contributions And Penalities" +
          "\n3. Change My Hospital"
      );
    },
    next: {
      1: "Register & Add Dependants",
      2: "Pay Contributions And Penalities",
      3: "Change My Hospital",
    },
    defaultNext: "invalidOption",
  });

  menu.state("Register & Add Dependants", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Pay Contributions And Penalities", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Change My Hospital", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("National Aids Control Council", {
    run: function () {
      menu.con(
        "Rate the Service Offered:" +
          "\n1. HIV Awareness Education" +
          "\n2. HIV Post councelling" +
          "\n3. Referalls for HIV Positives"
      );
    },
    next: {
      1: "HIV Awareness Education",
      2: "HIV Post councelling",
      3: "Referalls for HIV Positives",
    },
    defaultNext: "invalidOption",
  });

  menu.state("Ministry Of Health", {
    run: function () {
      menu.con(
        "Rate the Service Offered:" +
          "\n1. Body Mass Index" +
          "\n2. Counselling and health promotion" +
          "\n3. Blood Pressure"
      );
    },
    next: {
      1: "Body Mass Index",
      2: "Counselling and health promotion",
      3: "Blood Pressure",
    },
    defaultNext: "invalidOption",
  });

  menu.state("Civil Registration Services", {
    run: function () {
      menu.con(
        "Rate the Service Offered:" +
          "\n1. Issuance of Birth Certificate" +
          "\n2. Issuance of Death Certificate" 
      );
    },
    next: {
      1: "Issuance of Birth Certificate",
      2: "Issuance of Death Certificate"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Higher Education Loans Board(HELB)", {
    run: function () {
      menu.con(
        "Rate the Service Offered:" +
          "\n1. Student Loan Application" +
          "\n2. HELB Compliance Certificate" 
      );
    },
    next: {
      1: "Student Loan Application",
      2: "HELB Compliance Certificate"
    },
    defaultNext: "invalidOption",
  });
  
  menu.state("National Registration Bureau", {
    run: function () {
      menu.con(
        "Rate the Service Offered:" +
          "\n1. Issuance of Initial Identity Card" +
          "\n2. Issuance of Duplicate Identity Card" 
      );
    },
    next: {
      1: "Issuance of Initial Identity Card",
      2: "Issuance of Duplicate Identity Card"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Issuance of Birth Certificate", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Issuance of Death Certificate", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Student Loan Application", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("HELB Compliance Certificate", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Issuance of Initial Identity Card", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Issuance of Duplicate Identity Card", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  
  menu.state("Body Mass Index", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Counselling and health promotion", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Blood Pressure", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("HIV Awareness Education", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("HIV Post Councelling", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

    menu.state("Referalls for HIV Positives", {
    run: function () {
      menu.con(
        "Rate Service From 1-5:" +
        "\n1. Very Poor" +
        "\n2. Poor" +
        "\n3. Good" +
        "\n4. Very Good" +
        "\n5. Excellent" 
      );
    },
    next: {
      1: "Very Poor",
      2: "Poor",
      3: "Good",
      4: "Very Good",
      5: "Excellent"
    },
    defaultNext: "invalidOption",
  });

  menu.state("Very Poor", {
    run: function () {
      menu.con(
        "Leave us a comment (optional):" 
      );
    },
    next: {
        '*[a-zA-Z0-9]+': 'Very Poor.comment'
    },
    // If the user doesn't input anything, also proceed to the end state
    defaultNext: "Very Poor.comment"
  });

  menu.state("Poor", {
    run: function () {
      menu.con(
        "Leave us a comment (optional):" 
      );
    },
    next: {
        '*[a-zA-Z0-9]+': 'Very Poor.comment'
    },
    // If the user doesn't input anything, also proceed to the end state
    defaultNext: "Very Poor.comment"
  });

  menu.state("Good", {
    run: function () {
      menu.con(
        "Leave us a comment (optional):" 
      );
    },
    next: {
        '*[a-zA-Z0-9]+': 'Very Poor.comment'
    },
    // If the user doesn't input anything, also proceed to the end state
    defaultNext: "Very Poor.comment"
  });

  menu.state("Very Good", {
    run: function () {
      menu.con(
        "Leave us a comment (optional):" 
      );
    },
    next: {
        '*[a-zA-Z0-9]+': 'Very Poor.comment'
    },
    // If the user doesn't input anything, also proceed to the end state
    defaultNext: "Very Poor.comment"
  });

  menu.state("Excellent", {
    run: function () {
      menu.con(
        "Leave us a comment (optional):" 
      );
    },
    next: {
        '*[a-zA-Z0-9]+': 'Very Poor.comment'
    },
    // If the user doesn't input anything, also proceed to the end state
    defaultNext: "Very Poor.comment"
  });

  menu.state('Very Poor.comment', {
    run: () => {
        menu.end('Thankyou for your feedback');
    }
});


  app.post("/ussd", function (req, res) {
    menu.run(req.body, (ussdResult) => {
      res.send(ussdResult);
    });
  });

const PORT =4001;
app.listen(PORT, (req, res) => {
  console.log(`Ussd server listening on port ${PORT}`);
});