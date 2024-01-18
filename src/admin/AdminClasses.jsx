/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteClass, getClasses } from "../services/classApi";
import Spinner from "../ui/Spin";
import { useState } from "react";
import { Drawer, Modal } from "antd";
import ClassForm from "./ClassForm";
import toast from "react-hot-toast";

function AdminClasses() {
  const [open, setOpen] = useState(false);

  const { data: classes, isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: getClasses,
  });
  if (isLoading) return <Spinner />;

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="flex justify-between items-center border-b-2">
        <h3 className="font-semibold text-lg tracking-wider capitalize">
          All classes
        </h3>
        <button
          className="px-2 py-1 m-2 text-grey rounded-md bg-blue"
          onClick={showDrawer}
        >
          Create class
        </button>
        <Drawer title="Create class" onClose={onClose} open={open}>
          <ClassForm />
        </Drawer>
      </div>
      <div className="flex  grid-flow-col flex-wrap gap-3 place-items-center py-4">
        {classes.map((cls) => (
          <ClassCard
            key={cls.id}
            cls={cls}
            title={cls.title}
            image={cls.image}
            description={cls.description}
            id={cls.id}
          />
        ))}
      </div>
    </div>
  );
}

function ClassCard({ title, image, description, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: deleteClass,
    onSuccess: () => {
      toast.success("Class deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["classes"],
      });
    },
  });

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    mutate(id);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="w-56 h-[21rem] border flex flex-col gap-3 rounded-md">
        <img src={image} alt="" className="w-full h-40" />

        <div className="px-2 py-2 space-y-2">
          <h4 className="font-bold">{title}</h4>
          <p className="text-sm line-clamp-3 overflow-hidden text-ellipsis">
            {description}
          </p>

          <div className="flex justify-between">
            <button
              className="bg-gray-200 rounded-lg px-2 py-1"
              onClick={() => navigate(`/admin/class/${id}`)}
            >
              View class
            </button>

            <button
              className="bg-blush text-white rounded-lg px-2 py-1"
              onClick={showModal}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting.." : "DeleteClass"}
            </button>
            <Modal
              title="Delete Class"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <h5>Are you sure you want to delete class?</h5>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminClasses;
