import { useEffect } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setAuthUser, clearAuthUser } from "./slices/authSlice";

export function useClerkSync() {
    const { isLoaded, isSignedIn, user } = useUser();
    const { userId } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoaded) return;

        if (isSignedIn && user) {
            const email = user.primaryEmailAddress?.emailAddress || "";
            const formattedUser = {
                _id: user.id,
                firstName: user.firstName || user.username || "Coder",
                lastName: user.lastName || "",
                emailId: email,
                role: user.publicMetadata?.role || "user",
                verified: true,
                profilePicture: user.imageUrl || "",
                rank: "Bronze",
                rating: 1200,
                mockInterviewUseLeft: 2,
                aiChatMsgsLeft: 10,
                revisionMsgsLeft: 5
            };
            dispatch(setAuthUser(formattedUser));
        } else if (!isSignedIn) {
            dispatch(clearAuthUser());
        }
    }, [isLoaded, isSignedIn, user, userId, dispatch]);
}
