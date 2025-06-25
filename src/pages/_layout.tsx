import "../styles.css";

import type { ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <title>Grant Custer</title>
      <meta property="og:title" content="Index - Grant Custer" />
      <meta
        property="og:description"
        content="Designer and engineer focused on new and alternative interfaces."
      />
      <meta property="og:url" content="http://grantcuster.com" />
      <meta
        property="og:image"
        content="http://grantcuster.com/images/constraint-systems.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" type="image/png" href="/images/sloth-favicon.png" />
      {children}
    </>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
