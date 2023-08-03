import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuth(shouldRedirect: boolean): boolean {
    const { data: session } = useSession();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (session === null) {
            if (router.route !== '/auth/login') {
                router.replace('/auth/login');
            }
            setIsAuthenticated(false);
        } else if (session !== undefined) {
            if (router.route === '/auth/login') {
                router.replace('/auth/login');
            }
            setIsAuthenticated(true);
        }
    }, [session, router, shouldRedirect]);

    return isAuthenticated;
}
