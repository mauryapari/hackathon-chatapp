import Link from "next/link";

const hoverLinkStyles =
  "hover:underline underline-offset-2 hover:text-red-light";

export default function Footer() {
  return (
    <footer className="border-muted border-t-2">
      <article className="container flex flex-col py-6 gap-x-8 gap-y-4 lg:flex-row lg:justify-between lg:py-4">
        <section className="flex flex-col lg:flex-row gap-x-2 gap-y-4 lg:items-center">
          <p>
            The source code is available on&nbsp;
            <Link
              href="https://github.com/ThatGuyJamal/hackathon-chatapp"
              target="_blank"
              rel="noreferrer"
              className={`font-medium text-primary ${hoverLinkStyles}`}
            >
              Github.
            </Link>
          </p>
        </section>

        <section
          data-name="legal-links"
          className="flex flex-row flex-wrap gap-4 text-sm lg:items-center"
        >
          <Link
            href={"/privacy"}
            title="See our privacy policy."
            className={hoverLinkStyles}
          >
            Privacy
          </Link>
          <Link
            href={"/terms"}
            title="See our terms & conditions"
            className={hoverLinkStyles}
          >
            Terms
          </Link>
          <Link
            href={"/about"}
            title="See what this website is about"
            className={hoverLinkStyles}
          >
            About
          </Link>
        </section>
      </article>
    </footer>
  );
}
