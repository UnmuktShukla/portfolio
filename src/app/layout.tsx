import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const text = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm",
  display: "swap",
});

const description =
  "SDE-1 at Neurality Health. Production AI with guardrails, and the bridges between legacy clinic software and the cloud. Lucknow.";

export const metadata: Metadata = {
  title: "Unmukt Shukla, systems engineer",
  description,
  authors: [{ name: "Unmukt Shukla", url: "https://github.com/UnmuktShukla" }],
  openGraph: {
    title: "Unmukt Shukla",
    description,
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Unmukt Shukla",
  jobTitle: "SDE-1",
  worksFor: {
    "@type": "Organization",
    name: "Neurality Health",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "VIT Chennai",
  },
  email: "unmukt2003shukla@gmail.com",
  sameAs: [
    "https://github.com/UnmuktShukla",
    "https://www.linkedin.com/in/unmukt-shukla-216841217",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${text.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
