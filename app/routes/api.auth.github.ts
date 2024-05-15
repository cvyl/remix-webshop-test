// app/routes/auth.discord.callback.tsx
import type { LoaderFunction } from "@remix-run/node";
import { auth } from "~/utils/providers/auth.github.server";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
    if(await auth.isAuthenticated(request)) {
        return json({ message: "You are authenticated" });
    } else {
        return json({ message: "You are not authenticated" });
    }
    
};