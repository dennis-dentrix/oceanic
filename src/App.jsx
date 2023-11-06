import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import News from "./pages/News";
import Events from "./pages/Events";
import AppLayout from "./ui/AppLayout";
import PageNotfound from "./pages/PageNotfound";
import Resources from "./features/Resources/Resources";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Post from "./pages/Post/";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Homepage />} />
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route path="news" element={<News />} />
            <Route path="events" element={<Events />} />
            <Route path="resources" element={<Resources />} />
            <Route path="post" element={<Post />} />

            <Route path="*" element={<PageNotfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
