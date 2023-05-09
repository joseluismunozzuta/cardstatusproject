import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3_J2vQvxX771Its0ZtwfjuHT-VwUlSMY",
    authDomain: "cardstatus-34c3e.firebaseapp.com",
    databaseURL: "https://cardstatus-34c3e-default-rtdb.firebaseio.com",
    projectId: "cardstatus-34c3e",
    storageBucket: "cardstatus-34c3e.appspot.com",
    messagingSenderId: "576489543950",
    appId: "1:576489543950:web:29bc11597bfc889a08df5f"
};

const firebaseapp = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseapp);

const Card = () => {

    const [joseCheck, setJosechecked] = useState(false);
    const [andreCheck, setAndrechecked] = useState(false);

    useEffect(() => {
        const cardstatusRef = ref(database, '1/status');
        onValue(cardstatusRef, (snapshot) => {
            const data = snapshot.val();
            setJosechecked(data);
        });
    }, []);

    useEffect(() => {
        const cardstatusRef = ref(database, '2/status');
        onValue(cardstatusRef, (snapshot) => {
            const data = snapshot.val();
            setAndrechecked(data);
        });
    }, []);

    const handleJoseCheck = () => {
        setJosechecked(!joseCheck);
        set(ref(database, '1/status'), !joseCheck);
    }

    const handleAndreCheck = () => {
        setAndrechecked(!andreCheck);
        set(ref(database, '2/status'), !andreCheck);
    }


    return (

        <>
            <div className='md:flex md:flex-row md:justify-center md:m-16 max-sm:flex-col max-sm:py-8 sm:gap-8'>
                <div className="card md:h-96 md:w-96 bg-base-100 shadow-xl md:m-16 max-sm:m-auto max-sm:h-96 max-sm:w-80 max-sm:my-8
                sm:m-auto sm:h-72 sm:w-80 sm:my-8">
                    <figure><img src="https://firebasestorage.googleapis.com/v0/b/static-images-ee67c.appspot.com/o/jose.jpg?alt=media&token=4c53d5d2-0c0d-4006-aba8-9b85c3cdb22c" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>Extrañándote a montones!</p>
                        <div className="card-actions justify-end">
                            <span>Status</span>
                            <input type="checkbox" className=" toggle toggle-success" checked={joseCheck} onChange={() => handleJoseCheck()} />
                        </div>
                    </div>

                </div>

                <div className="card md:h-96 md:w-96 bg-base-100 shadow-xl md:m-16 max-sm:m-auto max-sm:h-96 max-sm:w-80 max-sm:my-8
                sm:m-auto sm:h-72 sm:w-80 sm:my-8">
                    <figure><img src="https://firebasestorage.googleapis.com/v0/b/static-images-ee67c.appspot.com/o/IMG-20230503-WA0025.jpg?alt=media&token=f4acca6b-d54d-4b7f-ac34-6d87f834b58d" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p></p>
                        <div className="card-actions justify-end">
                            <span>Status</span>
                            <input type="checkbox" className=" toggle toggle-info" checked={andreCheck} onChange={() => handleAndreCheck()} />
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Card;