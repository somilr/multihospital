import { Euro } from "@mui/icons-material";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase";

export const signupAPI = (data) => {
    // console.log(data);
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);

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
                            resolve({ payload: "Your Email Verify" });
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
            .then((user) => {
                if (user.user.emailVerified) {
                    resolve({ payload: user.user });
                } else {
                    reject({ payload: "Your Email Sucessfull" })
                }
                // console.log(user)
            })
            .catch((error) => {
                if (error.code.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "Please Your Email Register" })
                } else if (error.code.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: "Wrong email or password" })
                } else {
                    reject({ payload: error })
                }
            })
    })
}

export const googalelodinAPI = () => {
    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                resolve({ payload: user })

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                reject({ payload: errorCode })
            });

    })
}

export const logauAPI = () => {
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then((user) => {
                resolve({ payload: "Logout successfully" })
            })
            .catch((e) => {
                reject({ payload: "Somthing Went Wrong" })
            })
    })
}

export const forgotsAPI = (data) => {

    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, data.email)
            .then((user) => {
                resolve({ payload: "Please check your email" })
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                // console.log(errorMessage);
                if (error.code.localeCompare("auth/missing-email") === 0) {
                    reject({ payload: "Please Your Email Register" })
                }
                reject({ payload: errorCode })
            })
    })
}