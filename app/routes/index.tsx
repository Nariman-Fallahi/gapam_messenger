import { redirect } from "react-router";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  if (url.pathname === "/") {
    return redirect("/app");
  }
}

export default function Index() {
  return null;
}
