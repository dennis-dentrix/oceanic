import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createCourse } from "../services/courseApi";
import { useParams } from "react-router-dom";
import { getClasses } from "../services/classApi";
import Spinner from "../ui/Spin";

function CourseForm({ id }) {
  const { register, reset, handleSubmit } = useForm();

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
      toast.success("New class created");
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  console.log(isPending);

  const { data: classes, isLoading: isFetching } = useQuery({
    queryKey: ["classes"],
    queryFn: getClasses,
  });

  function onSubmit(data, e) {
    e.preventDefault();
    mutate({ ...data, file: data.file[0] });
  }

  if (isFetching) return <Spinner />;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Control
          type="input"
          value={parseInt(id)}
          {...register("classID")}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="font-semibold text-[14px]">
          Course Name
        </Form.Label>
        <Form.Control
          placeholder="Enter Title"
          type="input"
          value={"Hello"}
          {...register("title", {
            required: "This field is required",
          })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="font-semibold text-[14px]">Add File</Form.Label>
        <Form.Control
          id="file"
          type="file"
          accept=".pdf, .docx, .doc, .pptx"
          {...register("file", {
            required: "This field is required",
          })}
        />
      </Form.Group>

      <Button
        className="px-2 py-1 m-2 text-grey rounded-md bg-blue"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Submiting..." : "Create"}
      </Button>
    </Form>
  );
}

export default CourseForm;
