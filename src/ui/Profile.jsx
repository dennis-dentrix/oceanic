/* eslint-disable react/prop-types */
import { ArrowLeft, X } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Spinner from "./Spin";
import { InputField } from "./InputField";
import { createProfile } from "../services/userApi";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col sm:items-center items-start ">
        <div className="flex items-center justify-between border border-blue px-3 py-2 rounded-sm sm:w-1/2 w-full">
          <div>
            <ArrowLeft />
          </div>
          <h1 className="text-blue tracking-wider text-lg">update profile</h1>

          {/* <div className="flex items-center gap-2">
            <X />
            <p className="text-sm text-maroon">Clear</p>
          </div> */}
        </div>

        <CreatePost />
      </div>
    </>
  );
}

function CreatePost({ editProfile = {} }) {
  const { id: editID, ...editValues } = editProfile;
  const isEditSession = Boolean(editID);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate: CreatePost, isLoading: isCreating } = useMutation({
    mutationFn: createProfile,
    onSuccess: () => {
      toast.success("Profile updates");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  if (isCreating) return <Spinner />;

  function onSubmit(data) {
    CreatePost({ data });
    // navigate("/myads/all");
    console.log(data);
  }
  function onError(error) {
    <p>{error.message}</p>;
    console.log(error);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="my-6 flex flex-col items-start gap-4 h-full w-full sm:w-1/2 bg-white shadow-md shadow-blue px-3 py-2 rounded-md"
    >
      <div className="flex flex-col items-start w-full gap-2">
        <label className="font-medium tracking-wider" htmlFor="source">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="John "
          {...register("firstName", {
            required: "This field is required",
          })}
          className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-blue placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
        />
      </div>

      <InputField label="Last Name" error={errors?.lastName?.message}>
        <input
          type="text"
          name="lastName"
          id="lastName"
          {...register("lastName", {
            required: "This field is required",
          })}
          placeholder="Doe"
          className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-blue placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
        />
      </InputField>

      {/* <div className="flex flex-col items-start w-full gap-2">
        <label className="font-medium tracking-wider" htmlFor="source">
          Minimum price (kes)
        </label>
        <input
          type="text"
          name="price"
          placeholder="eg. 200"
          {...register("price", {
            required: "This field is required",
          })}
          className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-green placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
        />
      </div> */}

      {/* <div className="flex flex-col items-start w-full gap-2">
        <label className="font-medium tracking-wider" htmlFor="source">
          Source
        </label>
        <input
          type="text"
          name="source"
          placeholder="eg. Lake Baringo"
          className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-green placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
          {...register("source", {
            required: "This field is required",
          })}
        />
      </div> */}

      <div className="flex flex-col items-start w-full gap-2">
        <label className="font-medium tracking-wider" htmlFor="phone">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          placeholder="25411223344"
          {...register("phone")}
          className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-blue placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
        />
      </div>
      {/* 
      <div className="flex flex-col items-start w-full gap-2">
        <label className="font-medium tracking-wider" htmlFor="description">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          {...register("description", {
            required: "This field is required",
          })}
          cols="30"
          rows="10"
          className="bg-grey text-sm focus:outline-none focus:ring-1 focus:ring-blue focus:scale-[1.01] transition-all duration-500 px-2 py-1"
        ></textarea>
      </div> */}

      {/* <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <label htmlFor="inStock" className="font-medium tracking-wider">
            Instock
          </label>
          <input
            type="checkbox"
            name="inStock"
            defaultChecked
            id=""
            {...register("inStock")}
            className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-blue placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="delivery" className="font-medium tracking-wider">
            Delivery
          </label>
          <input
            type="checkbox"
            name="delivery"
            id=""
            {...register("delivery")}
            className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-blue placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
          />
        </div>
      </div> */}

      <div className="w-[18vw]">
        <button
          className="px-4 py-2 text-grey bg-blue hover:text-white rounded-md inline-block font-semibold  tracking-wide  transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-1"
          disabled={isCreating}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
