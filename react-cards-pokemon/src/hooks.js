import {useState, useEffect} from "react";
import axios from "axios";


const useFlip = () => {
    const [flipValue, setFlipValue] = useState(true);
    const flip = () => {
        setFlipValue((isUp) => !isUp);
    };
    return [flipValue, flip];    
}


const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);
    
    const getData = async (formatter = (data) => data, path="") => {
        const response = await axios.get(baseUrl + path);
        setData((data) => [...data, formatter(response.data)]);
    };

    return [data, getData];
}


// const useLocalStorageState = (key, initialValue = []) => {
//     if (localStorage.getItem(key)) {
//         initialValue = JSON.parse(localStorage.getItem(key));
//     }
//     const [state, setState] = useState(initialValue);
        

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(state));
//     }, [state, key]);

//     return [state, setState];
//}


//export default useLocalStorageState;

export {useFlip, useAxios};