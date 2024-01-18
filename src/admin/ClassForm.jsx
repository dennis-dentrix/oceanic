import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { createClass } from "../services/classApi";
import toast from "react-hot-toast";

function ClassForm() {
  const { register, reset, handleSubmit } = useForm();

  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createClass,
    onSuccess: () => {
      toast.success("New class created");
      queryClient.invalidateQueries({ queryKey: ["classes"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data, e) {
    e.preventDefault();
    mutate({ ...data, image: data.image[0] });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label className="font-semibold text-[14px]">
          Class Title
        </Form.Label>
        <Form.Control
          placeholder="Enter Title"
          type="input"
          {...register("title", {
            required: "This field is required",
          })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="font-semibold text-[14px]">
          Description
        </Form.Label>
        <Form.Control
          as="textarea"
          {...register("description", {
            required: "This field is required",
          })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="font-semibold text-[14px]">Add image</Form.Label>
        <Form.Control
          id="image"
          type="file"
          accept=".jpg, .jpeg, .png"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </Form.Group>

      <Button
        className="px-2 py-1 m-2 text-grey rounded-md bg-blue"
        type="submit"
        disabled={isCreating}
      >
        {isCreating ? "Submiting..." : "Submit"}
      </Button>
    </Form>
  );
}

export default ClassForm;
