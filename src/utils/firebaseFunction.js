import {  collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"
// Enregistrement d'un new product
export const saveItem = async (data) =>{
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
        merge : true,
    });
};
// FOOD items
export const getAllFoodItems = async () => {
    const items = await  getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))

    );
    return items.docs.map((doc) =>doc.data())
}

