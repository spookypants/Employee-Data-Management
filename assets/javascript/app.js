  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBTemqNSEfdp9LrPc2uB5Oa_RKVwquc46s",
    authDomain: "employee-tracker-aa369.firebaseapp.com",
    databaseURL: "https://employee-tracker-aa369.firebaseio.com",
    projectId: "employee-tracker-aa369",
    storageBucket: "",
    messagingSenderId: "51820322465",
    appId: "1:51820322465:web:c87e94b710c01d1e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Create a variable to reference the database.
  var database = firebase.database();

  // Initial Values
  var name = "";
  var role = "";
  var startDate = "";
  var monthsWorked = 0;
  var monthRate = "";
  var totalBilled = 0;
  
  // Capture Button Click
  $("#add-employee").on("click", function(event) {
    event.preventDefault();
  
    // Grabbed values from text boxes
    name = $("#name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#date").val().trim();
    monthRate = parseInt($("#rate").val().trim());

  
    // Code for handling the push
    database.ref().push({
      name: name,
      role: role,
      startDate: date,
      monthRate: rate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  
    });

    // Firebase watcher
    database.ref().on("child_added", function(snapshot) {
        var sv = snapshot.val();

        console.log(sv.name);
        console.log(sv.role);
        console.log(moment(sv.startDate).format("M-D-YY"));
        console.log(sv.monthRate);

        $("#all-display").html("<tr>");
    })

