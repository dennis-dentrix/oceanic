import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Events from "./pages/Events";
import AppLayout from "./ui/AppLayout";
import PageNotfound from "./pages/PageNotfound";
import Resources from "./features/Resources/Resources";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostEvent from "./pages/PostEvent";

// ADMIN IMPORTS
import Dashboard from "./admin/Dashboard";
import Overview from "./admin/Overview";
import EventsMngmt from "./admin/EventsMngmt";
import Course from "./features/learning/Course";
import ClassMngmt from "./admin/Courses";

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
            <Route path="courses" element={<Course />} />
            <Route path="events" element={<Events />} />
            <Route path="resources" element={<Resources />} />
            <Route path="newevent" element={<PostEvent />} />
            <Route path="*" element={<PageNotfound />} />
          </Route>

          {/* ADMIN PAGE ROUTES */}
          <Route element={<Dashboard />}>
            {/* <Route path="admin" element={<Dashboard />} /> */}

            <Route index element={<Navigate replace to="/admin" />} />
            <Route path="admin" element={<Overview />} />
            <Route path="classes" element={<ClassMngmt />} />
            <Route path="eventsmanagement" element={<EventsMngmt />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
