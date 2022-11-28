import Head from "next/head";
import type { ReactNode } from "react";
import Footer from "@/design/components/footer/Footer";
import Header from "@/design/components/header/Header";

type Props = {
  title: String;
  children: ReactNode;
};

export function DefaultLayout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </>
  );
}
