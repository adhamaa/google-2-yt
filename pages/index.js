import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicropphoneIcon, ViewGridIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon />
          {/* Avatar */}
          <Avatar url="https://coaching.papareact.com/ai9" />
        </div>
      </header>
      {/* body */}
      <main></main>
      {/* footer */}
      <footer></footer>
    </div>
  );
}
