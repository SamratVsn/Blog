/**
 * Renders schema.org JSON-LD structured data as a script tag.
 *
 * JSON.stringify does not sanitize malicious strings, so we scrub the
 * characters that could escape the script context (see the Next.js
 * JSON-LD guide). A native <script> tag is used on purpose — structured
 * data is not executable code, so next/script is not appropriate.
 */
type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
