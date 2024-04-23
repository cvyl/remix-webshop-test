// app/routes/auth.discord.callback.tsx
import type { LoaderFunction } from "@remix-run/node";
import { auth } from "~/utils/providers/auth.github.server";

export const loader: LoaderFunction = ({ request }) => {
  return auth.authenticate("github", request, {
    successRedirect: "/private",
    failureRedirect: "/login",
  });
};