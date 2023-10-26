import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loading from "./components/Loading";
import tabsData from "./public/tabs.json";

const DummyTable = lazy(() => import("./tabs/DummyTable"));
const DummyChart = lazy(() => import("./tabs/DummyChart"));
const DummyList = lazy(() => import("./tabs/DummyList"));
const DummyForm = lazy(() => import("./tabs/DummyForm"));

const App = () => (
  <Router>
    <div>
      {tabsData.map((tab) => (
        <Link key={tab.id} to={`/${tab.path}`}>
          {tab.title}
        </Link>
      ))}

      <hr />

      <Suspense fallback={<Loading />}>
        <Routes>
          {tabsData.map((tab) => (
            <Route
              key={tab.id}
              path={`/${tab.path}`}
              element={getComponent(tab.id)}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  </Router>
);

const getComponent = (tabId) => {
  switch (tabId) {
    case "dummyTable":
      return <DummyTable />;
    case "dummyChart":
      return <DummyChart />;
    case "dummyList":
      return <DummyList />;
    case "dummyForm":
      return <DummyForm />;
    default:
      return null;
  }
};

export default App;
