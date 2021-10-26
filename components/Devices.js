import { db } from "../firebase";

import { onSnapshot, collection, orderBy, query } from "firebase/firestore";

import { useEffect, useState } from "react";

const DeviceList = () => {
    const [devices, setDevices] = useState([])

    useEffect(() =>{
        const collectionRef = collection(db,"beonphones")

        const q = query(collectionRef, orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) =>{
            setDevices(querySnapshot.docs.map(doc => ({ ...doc.data(),
            id: doc.id,
            timestamp: doc.data().timestamp?.toDate().getTime()
            })))
        });
        return unsubscribe;
    }, [])

    return (
        <div>
            {devices.map(device => <p key={device.id}>{device.campus}</p>)}
        </div>
    )
}
export default DeviceList