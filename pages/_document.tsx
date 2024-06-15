import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
      console.log("Document COMPONENT - PAGES ROUTER");

  return (
    <Html lang="en">
      <Head />
      <meta charSet="UTF-8" />
      <meta name="title" content="Nestar demo" />
      <meta name="robots" content="index,follow" />
      <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

      {/**SEO **/}
      <meta
        name="keyword"
        content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"}
      />
      <meta
        name="description"
        content={
          "Buy and sell properties anyware anytime in South Korea. | " +
          "Купить и продать недвижимость в любое время в Южной Корее. | " +
          "대한민국 어디에서나 언제든지 부동산을 사고 팔 수 있습니다."
        }
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
