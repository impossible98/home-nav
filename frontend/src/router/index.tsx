// import third-party modules
import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import local modules
import Spinner from "@/components/Common/spinner";
const Home = lazy(() => import("@/pages/Home"));

function Router() {
  // return
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
