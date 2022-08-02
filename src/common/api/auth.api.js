import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase";

export const signupAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        sendEmailVerification(user)
                        const uid = user.uid;
                    } else {

                    }
                })
                //..
            })
            .then((addwdqd) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        if (user.emailVerified) {
                            console.log("Email secessfull");
                        } else {
                            console.log("Plese verify your email");
                        }
                    } else {
                        console.log("wrong verify");
                    }
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                // ..
            });
    })
}