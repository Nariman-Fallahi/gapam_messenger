import Header from "~/components/home/header";
import type { Route } from "./+types/home";
import ChatItem from "~/components/home/chatItem";
import ChatScreen from "~/components/home/chatScreen/chatScreen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gapam" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  return { userID: params.userID };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="w-full ">
      {!loaderData.userID ? (
        <div className="w-full h-screen md:w-[45%] lg:w-1/3 md:border-l md:pl-3">
          <Header />
          <div className="flex flex-col">
            <ChatItem />
            <ChatItem />
          </div>
        </div>
      ) : (
        <ChatScreen />
      )}
    </div>
  );
}
