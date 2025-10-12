import Image from "next/image";

export default function AboutMe() {
  return (
    <main className="flex min-h-screen min-w-screen w-full justify-between p-12">
      <div className=" w-[60ch] flex flex-col justify-between">
        <article>
          <p className="mb-12 text-xl font-bold font-serif italic">About Me</p>
          <p className="geistSans mb-12">
            Uhh... I don’t know what to put here yet. I started this whole
            programming thing because I wanted to learn how to make games, and I
            thought it would be fun to make a game for myself. Later, I started
            making websites and music. I don’t know, I was confused, I guess.
            Then I focused on web apps, learned React, and yeah here I am with
            this{" "}
            <a
              className="underline"
              target="blank"
              href="https://github.com/aswin-haridas"
            >
              Github!
            </a>
          </p>
          <a href="/blogs">{"you can checkout my blogs if you want :)"}</a>
        </article>
        <a href="/blogs">Blogs</a>
      </div>
      <Image src="/vectorfloral.jpg" alt="About Me" width={500} height={500} className="mix-blend-darken" />
    </main>
  );
}
