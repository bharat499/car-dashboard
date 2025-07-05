import { BrowserRouter as Router, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
const Dashboard =lazy(()=>import("./features/dashboard/Dashboard"));


function App() {
  return (
    <>
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
    </>
  );
}

export default App;
