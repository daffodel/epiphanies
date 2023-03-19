    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
    import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
    import { getStorage } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js";


    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDoKdYRj51PgwDBlydEswnP8IplZqhIisQ",
        authDomain: "epiphanies-ff207.firebaseapp.com",
        databaseURL: "https://epiphanies-ff207-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "epiphanies-ff207",
        storageBucket: "epiphanies-ff207.appspot.com",
        messagingSenderId: "468261085273",
        appId: "1:468261085273:web:f7c516b0511374beafd148"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    const storage = getStorage(app);


signUp.addEventListener('click',(e) =>{
    e.preventDefault()

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var username = document.getElementById("username").value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Save to database
        // Save the user data to the database
        set(ref(database, 'users/' + user.uid),{
            email: email,
            username: username
        })
        .then(() => {
          // Redirect the user to the next page
          window.location.href = "index.html";
        })

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        alert(errorMessage);
    });
    })

   /* login.addEventListener('click',(e) =>{

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            const dt = new Date();
            update(ref(database, 'users/' + user.uid),{
                lastLogin: dt
            })
            .then(() => {
              // Redirect the user to the next page
              window.location.href = "index.html";
            })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            alert(errorMessage);
        });

    })

}) */

/* var usernameRef = database.ref('users/');

usernameRef.once('value').then(function(snapshot){
    var username = snapshot.val();
    var usernameElement = document.getElementById("nameDisplay");
    usernameElement.innerHTML = username;
}) */

// Audio Input
