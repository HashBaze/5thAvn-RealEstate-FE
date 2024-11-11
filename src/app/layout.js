"use client";

import { League_Spartan } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "../app/assets/scss/style.scss";
import "../app/assets/css/materialdesignicons.min.css";
import { AuthProvider } from "./context/authContext";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apolloClient";

const league = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league",
});

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <html lang="en">
          <head>
            <link rel="icon" href="/images/logo/logo.png" />
            <head>
              <title>5th Avenue</title>
              <meta
                name="description"
                content="5th Avenue is a modern and stylish e-commerce template. It is built on top of Bootstrap 4 and it is fully responsive."
              />
            </head>
          </head>
          <body className={league.variable}>{children}</body>
        </html>
      </ApolloProvider>
    </AuthProvider>
  );
}
