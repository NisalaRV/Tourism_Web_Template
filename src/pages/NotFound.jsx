import { Compass } from "lucide-react";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="bg-emerald-glow flex min-h-[80svh] items-center py-32">
      <div className="container-x text-center">
        <Compass className="mx-auto text-gold" size={44} aria-hidden="true" />
        <p className="gold-text mt-6 font-display text-8xl font-semibold">404</p>
        <h1 className="mt-4 font-display text-4xl text-ivory">This page has wandered off</h1>
        <p className="mx-auto mt-4 max-w-md text-ivory/70">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/">Back to home</Button>
          <Button to="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
