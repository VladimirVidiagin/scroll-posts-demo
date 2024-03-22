import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import FeedPage from "../pages/feedPage";
import PostPage from "../pages/postPage";
import { Header } from "../widgets/header/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
