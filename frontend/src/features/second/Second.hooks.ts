import { useEffect, useState } from "react";
import { sandboxMemory } from "@/domain/datasource/SandboxMemory";

export const useHooks = () => {
  const [localCounter, setLocalCounter] = useState<number>(0);
  const [globalCounter, setGlobalCounter] = useState<number>(0);

  const incrementCounter = () => {
    setLocalCounter((count) => count + 1);
    setGlobalCounter((count) => count + 1);
    sandboxMemory.counter = globalCounter + 1;
  };

  useEffect(() => {
    setGlobalCounter(sandboxMemory.counter);
  }, []);

  return { localCounter, globalCounter, incrementCounter };
};
