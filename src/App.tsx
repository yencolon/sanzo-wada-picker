import { Route, Routes } from "react-router";
import ColorList from "./pages/color-list";
import ColorDetail from "./pages/color-detail";
import ColorCombination from "./pages/color-combination";
import MainLayout from "./layouts/main-layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ColorList />} />
        <Route path=":colorSlug" element={<ColorDetail />} />
        <Route
          path=":colorSlug/:colorCombinationId"
          element={<ColorCombination />}
        />
      </Route>
    </Routes>
  );
}

export default App;
