import type { ActionFunction } from "@remix-run/node";
import { auth } from "~/utils/providers/auth.github.server";

export const action: ActionFunction = async ({ request }) => {
  return await auth.authenticate("github", request, {
    successRedirect: "/private",
    failureRedirect: "/",
  });
};