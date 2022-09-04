import dynamic from "next/dynamic";
import { Suspense } from "react";

const DotOne = dynamic(() => import("../components/dotOne"), {
  suspense: true,
  ssr: false,
});

const Dots = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <DotOne />
    </Suspense>
  );
};

export default Dots;
