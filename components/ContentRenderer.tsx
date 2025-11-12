import React from "react";

interface ContentBlock {
  component:
    | "heading1"
    | "heading2"
    | "heading3"
    | "paragraph"
    | "quote"
    | "list"
    | "image";
  content: string;
  props?: { alt?: string; caption?: string };
}

interface ContentComponentProps {
  block: ContentBlock;
}

/* Headings */
function Heading1({ block }: ContentComponentProps) {
  return (
    <h1 className="mb-6 text-4xl font-bold leading-tight text-white font-heading">
      {block.content}
    </h1>
  );
}

function Heading2({ block }: ContentComponentProps) {
  return (
    <h2 className="mt-12 mb-4 text-3xl font-semibold leading-snug text-white font-heading">
      {block.content}
    </h2>
  );
}

function Heading3({ block }: ContentComponentProps) {
  return (
    <h3 className="mt-10 mb-3 text-2xl font-semibold leading-snug text-white font-heading">
      {block.content}
    </h3>
  );
}

/* Paragraphs */
function Paragraph({ block }: ContentComponentProps) {
  return (
    <p className="mb-[1.2em] font-serif text-[1.06rem] leading-[1.8] text-white">
      {block.content}
    </p>
  );
}

/* Quotes */
function Quote({ block }: ContentComponentProps) {
  return (
    <blockquote className="my-8 border-l-4 border-gray-600 pl-5 italic text-gray-300">
      {block.content}
    </blockquote>
  );
}

/* Lists */
function List({ block }: ContentComponentProps) {
  const items = block.content.split("\n").filter(Boolean);
  return (
    <ul className="mb-[1.2em] ml-6 list-disc space-y-2 text-white">
      {items.map((item, index) => (
        <li key={index} className="leading-relaxed">
          {item.trim()}
        </li>
      ))}
    </ul>
  );
}

/* Images */
function Image({ block }: ContentComponentProps) {
  const { alt = "", caption = "" } = block.props || {};
  return (
    <figure className="my-10">
      <img
        src={block.content}
        alt={alt}
        className="w-full rounded-xl shadow-md"
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* Component Map */
const componentMap: Record<
  ContentBlock["component"],
  React.FC<ContentComponentProps>
> = {
  heading1: Heading1,
  heading2: Heading2,
  heading3: Heading3,
  paragraph: Paragraph,
  quote: Quote,
  list: List,
  image: Image,
};

/* Renderer */
interface BlogRendererProps {
  content: ContentBlock[];
  className?: string;
}

export default function ContentRenderer({
  content,
  className = "",
}: BlogRendererProps) {
  return (
    <article className="prose mx-auto max-w-2xl px-6 py-12">
      {content.map((block, i) => {
        const Component = componentMap[block.component];
        return <Component key={i} block={block} />;
      })}
    </article>
  );
}
