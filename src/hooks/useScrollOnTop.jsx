import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useScrollOnTop() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [navigate]);
}