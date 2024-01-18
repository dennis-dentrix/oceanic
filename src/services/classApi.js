import supabase, { supabaseUrl } from "./supabase";

export async function getClasses() {
  const { data: classes, error } = await supabase.from("classes").select("*");

  if (error) {
    console.log("Error", error);
    throw new error("Could not get class");
  }
  return classes;
}
// Add a new class to the database

export async function createClass(newClass) {
  // https://vraoqqbiytmansequxql.supabase.co/storage/v1/object/sign/images/img-1.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvaW1nLTEuanBlZyIsImlhdCI6MTcwNTQwMDIyNywiZXhwIjoxNzM2OTM2MjI3fQ.fAKXfFyquVPy9geqgNpDNGVuTMGOEL-v-PKHwuH2evc&t=2024-01-16T10%3A17%3A07.518Z

  const imageName = `${Math.random()}-${newClass.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/sign/images/${imageName}`;

  // CREATING THE CABIN
  const { data, error } = await supabase
    .from("classes")
    .insert([{ ...newClass, image: imagePath }])
    .select();

  // If there's an error, log it out to the console
  if (error) {
    console.log("Error", error);
    throw new error("Could not create class. Try again");
  }

  // UPLOADING THE IMAGE
  const { error: storageError } = await supabase.storage
    .from("images")
    .upload(imageName, newClass.image);

  if (storageError) {
    await supabase.from("classes").delete().eq("id", data.id);
    console.log("Error", storageError);
    throw new error("Could not upload image. Class not created");
  }

  return data;
}

export async function deleteClass(id) {
  const { error } = await supabase.from("classes").delete().eq("id", id);

  if (error) {
    throw new error("Could not delete class. Try again");
  }
}
