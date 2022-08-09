import { Euro } from "@mui/icons-material";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

export const signupAPI = (data) => {
    // console.log(data);
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
                            resolve({ payload: "Email secessfull" });
                        } else {
                            resolve({ payload: "Your Email Sucessfull" });
                        }
                    } else {
                        reject({ payload: "wrong verify" });
                    }
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;


                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "already RagistarEmail" });
                } else {
                    reject({ payload: errorCode });
                }
            });
    })
}

export const signinAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((user)=>{
            if (user.user.emailVerified) {
                resolve({payload: user.user});
            }else {
                reject({payload: "Your Email Sucessfull"})
            }     
            console.log(user)
        })
        .catch((error)=>{
            if (error.code.localeCompare("auth/user-not-found") === 0) {
                reject({payload: "Please Your Email Register"})
            } else if (error.code.localeCompare("auth/wrong-password") === 0) {
                reject({payload: "Wrong email or password"})  
            } else {
                reject({payload: error})
            }         
        })
    })
}

