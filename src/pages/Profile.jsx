import { useState } from "react";
import ProfileForm from "../ui/ProfileForm";

function Profile() {
  const [form, setForm] = useState(false);

  function handleViewForm() {
    setForm(!form);
  }
  return (
    <div className="h-[64vh]">
      <div className="flex gap-3 ">
        <img src="./img-7.jpeg" alt="" className="rounded-full w-32 h-32" />

        <div className="space-y-2">
          <h2 className="text-xl">
            <span className="font-medium text-lg">Name:</span> John Doe
          </h2>
          <p className="text-lg">
            <span className="font-medium">Role:</span> Student
          </p>
          <p className="text-lg">
            <span className="font-medium">Phone:</span> +2541234567
          </p>

          <button
            className="bg-blue text-white py-1 px-6 rounded-md"
            onClick={handleViewForm}
          >
            {form ? "Done" : "Edit form"}
          </button>
          {form && <ProfileForm />}
        </div>
      </div>
    </div>
  );
}

export default Profile;
