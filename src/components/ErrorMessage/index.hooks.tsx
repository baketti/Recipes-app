import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spa/redux-store";

export const useErrorMessage = () => {
    const errorMessage = useSelector(selectors.getErrorText);
    console.log("errorMessage ", errorMessage);
    
    return {
        errorMessage
    };
}