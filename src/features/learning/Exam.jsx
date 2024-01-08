/* eslint-disable react/prop-types */
import * as React from "react";
import Spinner from "./../../ui/Spin";
import supabase from "../../services/supabase";
import { ExamBox } from "./ExamBox.1";
import { ExamContainer } from "./ExamContainer";

const initialState = {
  questions: [],
  status: "loading",
  index: 1,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "startTest": {
      return {
        ...state,
        status: "active",
      };
    }

    case "newAnswer": {
      const curQuestion = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === curQuestion.correctAnswer
            ? state.points + curQuestion.points
            : state.points,
      };
    }

    case "nextQuestion": {
      return {
        ...state,
        index: state.index + 1,
      };
    }

    default:
      throw new Error("Action unknown");
  }
}

// eslint-disable-next-line react/prop-types
export default function Exam({ onClick }) {
  const [{ questions, status }, dispatch] = React.useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  React.useEffect(function () {
    const fetchCourses = async () => {
      const { data: test, error } = await supabase.from("exam").select("*");
      if (error) {
        console.error("Error fetching test:", error);
        dispatch({ type: "dataFailed" });
      } else {
        console.log(test);
        dispatch({ type: "dataReceived", payload: test });
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="my-6 h-screen">
      <h1 className="py-2 font-bold text-black capitalize underline">
        Take your test...
      </h1>
      <div className="p-2 h-full">
        {status === "loading" && <Spinner />}
        {status === "error" && (
          <p className="px-3 py-2 rounded-lg bg-grey text-red-400 grid place-content-center">
            Error!! could not get questions try again
          </p>
        )}

        {status === "ready" && (
          <ExamContainer
            onClick={onClick}
            dispatch={dispatch}
            status={status}
            numQuestions={numQuestions}
          />
        )}

        {status === "active" && (
          <>
            <ExamBox />
            {/* <ActionBtns dispatch={dispatch} answer={answer} /> */}
          </>
        )}
      </div>
    </div>
  );
}
