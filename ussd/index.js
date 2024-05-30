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
        "Welcome To ..... Choose a service:" +
          "\n1. Health Services" +
          "\n2. Identification Services" +
          "\n3. Education Services"
      );
    },
    // next object links to next state based on user input
    next: {
      1: "Health Services",
      2: "Identification Services",
      3: "Education Services"
    },
  });  

  menu.state("Health Services", {
    run: function () {
      menu.con(
        "Choose a health Service:" +
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

  menu.state("National Hospital Insurance Fund(NHIF)", {
    run: function () {
      menu.con(
        "Choose a Service:" +
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


  app.post("/ussd", function (req, res) {
    menu.run(req.body, (ussdResult) => {
      res.send(ussdResult);
    });
  });

const PORT =4001;
app.listen(PORT, (req, res) => {
  console.log(`Ussd server listening on port ${PORT}`);
});