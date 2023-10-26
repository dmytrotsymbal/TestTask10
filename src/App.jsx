import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Loading from "./components/Loading";
import tabsData from "./src/tabs.json";
import { Container } from "@mui/material";
import Header from "./components/Header";

const DummyTable = lazy(() => import("./tabs/DummyTable"));
const DummyChart = lazy(() => import("./tabs/DummyChart"));
const DummyList = lazy(() => import("./tabs/DummyList"));
const NotFound = lazy(() => import("./tabs/NotFound"));

const sortedTabsData = tabsData.sort((a, b) => a.order - b.order);

const App = () => (
  <Router>
    <Header sortedTabsData={sortedTabsData} />
    <br />

    <main>
      <Container>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/tabs/DummyList" replace />}
            />
            {sortedTabsData.map((tab) => (
              <Route
                key={tab.id}
                path={`/${tab.path}`}
                element={getComponent(tab.id)}
              />
            ))}
          </Routes>
        </Suspense>
      </Container>
    </main>
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
    case "error":
      return <NotFound />;
    default:
      return null;
  }
};

export default App;
