/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { PostForm } from "../ui/PostForm";
import { useQuery } from "@tanstack/react-query";
import { getClasses } from "../services/classApi";
import Spinner from "../ui/Spin";

function AdminClasses() {
  const { data: classes, isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: getClasses,
  });
  if (isLoading) return <Spinner />;
  return (
    <div>
      <PostForm placeholder={"Create class"} />
      <h3>All classes</h3>
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
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-56 h-[21rem] border flex flex-col gap-3 rounded-md">
        <img src={image} alt="" className="w-full h-40" />

        <div className="px-2 py-2 space-y-2">
          <h4 className="font-bold">{title}</h4>
          <p className="text-sm line-clamp-3 overflow-hidden text-ellipsis">
            {description}
          </p>

          <button
            className="bg-gray-200 rounded-lg px-2 py-1"
            onClick={() => navigate(`/admin/class/${id}`)}
          >
            View class
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminClasses;
