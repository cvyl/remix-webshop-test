import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, json, useLoaderData } from "@remix-run/react";
import type { GitHubProfile } from "remix-auth-github";
import { auth } from "~/utils/providers/auth.github.server";

type LoaderData = { profile: GitHubProfile };

export const action: ActionFunction = async ({ request }) => {
  await auth.logout(request, { redirectTo: "/" });
};

export const loader: LoaderFunction = async ({ request }) => {
  const { profile } = await auth.isAuthenticated(request, {
    failureRedirect: "/",
  });

  return json<LoaderData>({ profile });
};

export default function Screen() {
  const { profile } = useLoaderData<LoaderData>();
  return (
    <>
      <Form method="post">
        <button>Log Out</button>
      </Form>

      <hr />

    <h1>{profile.displayName}</h1>
        <img src={profile.photos[0].value} alt={profile.displayName} />

      <pre>
        <code>{JSON.stringify(profile, null, 2)}</code>
      </pre>
    </>
  );
}