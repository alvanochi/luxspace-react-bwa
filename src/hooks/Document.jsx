import { useScrollAchor } from "./useScrollAchor";
import { useScrollOnTop } from "./useScrollOnTop";

export default function Document({children}) {
    useScrollAchor()
    useScrollOnTop()
    return children
    
}
