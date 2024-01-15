import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Homepage from "./pages/Homepage";
import Events from "./pages/Events";
import AppLayout from "./ui/AppLayout";
import PageNotfound from "./pages/PageNotfound";
import Resources from "./features/Resources/Resources";
import PostEvent from "./pages/PostEvent";

// ADMIN IMPORTS
import Dashboard from "./admin/Dashboard";
import Course from "./features/learning/Course";
import Exam from "./features/learning/Exam";
import ExamDrawer from "./features/learning/ExamDrawer";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./services/store";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Adminlogin from "./admin/Adminlogin";
import AdminUsers from "./admin/AdminUsers";
import AdminClasses from "./admin/AdminClasses";
import AdminEvents from "./admin/AdminEvents";
import { Class } from "./admin/Class";
import UserClass from "./pages/UserClass";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminLogin" element={<Adminlogin />} />

            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Homepage />} />
              <Route path="/events" element={<Events />} />
              <Route path="/class/:id" element={<UserClass />} />

              <Route path="courses" element={<Course />} />
              <Route path="exam" element={<Exam />} />
              <Route path="courseView" element={<ExamDrawer />} />

              <Route path="resources" element={<Resources />} />
              <Route path="newevent" element={<PostEvent />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<PageNotfound />} />
            </Route>

            <Route element={<Dashboard />}>
              <Route index element={<Navigate replace to={"/admin"} />} />
              <Route path="admin" element={<AdminUsers />} />
              <Route path="admin/classes" element={<AdminClasses />} />
              {/* CLASS WITH ITS SECIFIC ID */}
              <Route path="admin/class/:id" element={<Class />} />
              <Route path="admin/events" element={<AdminEvents />} />
            </Route>

            {/* ADMIN PAGE ROUTES */}
            {/* <Route index element={<Navigate replace to="/admin" />} /> */}
            {/* <Route element={<Dashboard />}>
              <Route path="admin" element={<Overview />} />
              <Route>
                <Route index element={<Navigate replace to="/admin/users" />} />
                <Route path="/adimn/users" element={<AdminUsers />} />
              </Route>
            </Route> */}

            {/* <Route path="classes" element={<ClassMngmt />} /> */}
            {/* <Route path="eventsmanagement" element={<EventsMngmt />} /> */}
          </Routes>
          <Toaster
            position="bottom-left"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 3000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 12px",
                backgroundColor: "#E55381",
                color: "white",
              },
            }}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}
