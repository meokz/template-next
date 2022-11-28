import type { NextPage } from "next";
import { DefaultLayout } from "@/design/layout/DefaultLayout";
import Sandbox from "@/features/sandbox/Sandbox";

const SandboxPage: NextPage = () => {
  return (
    <DefaultLayout title="Sandbox screen">
      <Sandbox></Sandbox>
    </DefaultLayout>
  );
};

export default SandboxPage;
