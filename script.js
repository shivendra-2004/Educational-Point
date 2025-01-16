//setting up firebase with our website//
const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyDFpnZ_bYMlJZ3K08Ff6Ip8m3Bdy7ibeG0",
  authDomain: "educational-point-4b19e.firebaseapp.com",
  projectId: "educational-point-4b19e",
  storageBucket: "educational-point-4b19e.appspot.com",
  messagingSenderId: "81182574704",
  appId: "1:81182574704:web:01791524b4e37316528cb5",
  measurementId: "G-H7SFFWNYD0"

});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//sign up Function
const signUp = ()=>{

  const signupName = document.getElementById("signupName").Value;
  const signupEmail = document.getElementById("signupEmail").Value;
  const signupPassword = document.getElementById("signupPassword").Value;
  const signupPhone = document.getElementById("signupPhone").Value;

  console.log(signupName,signupEmail,signupPassword,signupPhone)

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
     document.write("You are Signed up")
     console.log(result)
    // ...
  })
  .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    // ..
  });

}

//login function

const login = ()=>{

  const signupEmail = document.getElementById("signupEmail").Value;
  const signupPassword = document.getElementById("signupPassword").Value;
  console.log(signupEmail,signupPassword)


firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    document.write("You are Login")
     console.log(result)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}


//new code 

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const loadingIndicator = document.getElementById("loading");
  loadingIndicator.style.display = "block";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const db = firebase.firestore();

  db.collection("contactMessages").add({
      name: name,
      email: email,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
      loadingIndicator.style.display = "none";
      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      document.getElementById("contactForm").reset();
  })
  .catch((error) => {
      loadingIndicator.style.display = "none";
      console.error("Error sending message: ", error);
      alert("There was an error sending your message. Please try again.");
  });
});



function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
      alert("Please enter your name.");
      return false;
  }
  if (!email || !emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }
  if (!message) {
      alert("Please enter your message.");
      return false;
  }
  return true;
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  if (!validateForm()) {
      event.preventDefault();
  }
});


