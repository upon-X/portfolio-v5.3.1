import { BtnsLinks } from "../components/Landing/BtnsLinks";
import Presentation from "../components/Landing/Presentation";

export default function Landing() {
  return (
    <section className="flex flex-col justify-center h-[100vh] w-screen gap-60 sm:gap-40 bg-[url('/bglanding.webp')] bg-no-repeat bg-cover">
      <Presentation />
      <BtnsLinks />
    </section>
  );
}
