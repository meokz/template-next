import type { NextPage } from "next";
import { DefaultLayout } from "@/design/layout/DefaultLayout";
import Second from "@/features/second/Second";

const SecondPage: NextPage = () => {
  return (
    <DefaultLayout title="Second screen">
      <Second></Second>
    </DefaultLayout>
  );
};

export default SecondPage;
