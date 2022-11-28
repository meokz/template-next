import type { NextPage } from "next";
import { DefaultLayout } from "@/design/layout/DefaultLayout";
import Top from "@/features/top/Top";

const TopPage: NextPage = () => {
  return (
    <>
      <DefaultLayout title="First screen">
        <Top></Top>
      </DefaultLayout>
    </>
  );
};

export default TopPage;
