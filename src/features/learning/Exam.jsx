import * as React from "react";
import { styled } from "@mui/material/styles";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ChevronBarRight } from "react-bootstrap-icons";
import { useQuery } from "@tanstack/react-query";
import { getQuestion } from "../../services/examApi";
import Spinner from "./../../ui/Spin";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ChevronBarRight sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// eslint-disable-next-line react/prop-types
export default function Exam({ onClick }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const {
    data: exam,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["exams"],
    queryFn: getQuestion,
  });

  if (isLoading) return <Spinner />;

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="my-6">
      <h1 className="py-2">Take your test </h1>
      <div className="p-2">
        {exam.map((exam) => {
          return (
            <Accordion
              key={exam.id}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>{exam.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <select name="" id="" className="focus:outline-none px-3 py-2">
                  <option value={exam.optionA}>A. {exam.optionA}</option>
                  <option value={exam.optionB}>B. {exam.optionB}</option>
                  <option value={exam.optionC}>C. {exam.optionC}</option>
                </select>
              </AccordionDetails>
            </Accordion>
          );

          // <Accordion
          //   expanded={expanded === "panel2"}
          //   onChange={handleChange("panel2")}
          // >
          //   <AccordionSummary
          //     aria-controls="panel2d-content"
          //     id="panel2d-header"
          //   >
          //     <Typography>Collapsible Group Item #2</Typography>
          //   </AccordionSummary>
          //   <AccordionDetails>
          //     <Typography>
          //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          //       Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          //       eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          //       Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          //       eget.
          //     </Typography>
          //   </AccordionDetails>
          // </Accordion>
          // <Accordion
          //   expanded={expanded === "panel3"}
          //   onChange={handleChange("panel3")}
          // >
          //   <AccordionSummary
          //     aria-controls="panel3d-content"
          //     id="panel3d-header"
          //   >
          //     <Typography>Collapsible Group Item #3</Typography>
          //   </AccordionSummary>
          //   <AccordionDetails>
          //     <Typography>
          //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          //       Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          //       eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          //       Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          //       eget.
          //     </Typography>
          //   </AccordionDetails>
          // </Accordion>
          // <Accordion
          //   expanded={expanded === "panel4"}
          //   onChange={handleChange("panel4")}
          // >
          //   <AccordionSummary
          //     aria-controls="panel2d-content"
          //     id="panel2d-header"
          //   >
          //     <Typography>Collapsible Group Item #4</Typography>
          //   </AccordionSummary>
          //   <AccordionDetails>
          //     <Typography>
          //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          //       Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          //       eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          //       Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
          //       eget.
          //     </Typography>
          //   </AccordionDetails>
          // </Accordion>
        })}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={onClick}
          className="px-2 py-1 bg-red-300 text-black tracking-wide rounded-full my-3"
        >
          Finish
        </button>

        <p className="text-lg font-medium">10/100</p>
      </div>
    </div>
  );
}

{
  /* <div className="my-6">
      <h1 className="py-2">Take your test </h1>
      <div className="p-2">
        {exam.map((exam) => {
          <Accordion
            key={exam.id}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>{exam.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Collapsible Group Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Collapsible Group Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Collapsible Group Item #4</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion> 
        })}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={onClick}
          className="px-2 py-1 bg-red-300 text-black tracking-wide rounded-full my-3"
        >
          Finish
        </button>

        <p className="text-lg font-medium">10/100</p>
      </div>
    </div> */
}
