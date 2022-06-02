import Head from "next/head";

import MainMenu from "./mainMenu";
import Footer from "./Footer/index";

const Layout = ({ children }) => (
  /*<Head>
        <title>Test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Europejskie Centrum Rehabilitacji i Psychologii</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.ecr-rehabilitacja.com.pl/css/jquery.bxslider.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.ecr-rehabilitacja.com.pl/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.ecr-rehabilitacja.com.pl/css/animate.css"
        />
      </Head>*/

  <>
    <MainMenu />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
