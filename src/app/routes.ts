import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { TestInterface } from "./pages/TestInterface";
import { AnswerEvaluator } from "./pages/AnswerEvaluator";
import { Chatbot } from "./pages/Chatbot";
import { StudyMaterials } from "./pages/StudyMaterials";
import { AppLayout } from "./components/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/app",
    Component: AppLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "tests", Component: TestInterface },
      { path: "evaluator", Component: AnswerEvaluator },
      { path: "chatbot", Component: Chatbot },
      { path: "materials", Component: StudyMaterials },
    ],
  },
]);
