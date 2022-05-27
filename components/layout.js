import MainMenu from "./mainMenu";
import Footer from "./Footer/index";

export default function Layout({ children }) {
  return (
    <>
      <head>
        <title>Test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Europejskie Centrum Rehabilitacji i Psychologii</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:400,300|Raleway:300,400,900,700italic,700,300,600"
        />
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
      </head>
      <MainMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
