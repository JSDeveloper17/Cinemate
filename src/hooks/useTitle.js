
import useFetch from './useFetch';

export const useTitle = (title)=> {
    useFetch(()=>{
        document.title = `${title}/Cinemate`;
    },)

    return null;
}
