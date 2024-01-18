import supabase, { supabaseUrl } from "./supabase";

export async function getCourses() {
  const { data: courses, error } = await supabase
    .from("allCourses")
    .select("*");

  if (error) {
    console.error();
    throw new error("Could not get courses");
  }
  return courses;
}

function generateToken() {
  const timestamp = Date.now();
  return `t=${timestamp}`;
}
export async function createCourse(newCourse) {
  // https://vraoqqbiytmansequxql.supabase.co/storage/v1/object/sign/images/bg-image.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYmctaW1hZ2UuanBnIiwiaWF0IjoxNzA1NDg4NTU5LCJleHAiOjE3MzcwMjQ1NTl9.2PsTH68aJUbkWsztrsZQ8qHAZyQ2CK9PknsVXtVyDaI&t=2024-01-17T10%3A49%3A19.160Z4
  // const timestamp = new Date().toISOString();
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyYW9xcWJpeXRtYW5zZXF1eHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNTcxMDEsImV4cCI6MjAxMTgzMzEwMX0.AGgSrBocXJ3Kw-M9PRI5Ln0e3YTvw6S3SSi8dfIF4FQ${generateToken()}`;

  const fileName = `${Math.random()}-${newCourse.file.name}`.replaceAll(
    "/",
    ""
  );
  const filePath = `${supabaseUrl}/storage/v1/object/sign/courses/${fileName}`;

  const { data, error } = await supabase
    .from("allCourses")
    .insert([{ ...newCourse, file: filePath }])
    .select();
  if (error) {
    console.log(error);
    throw error;
  }

  const { error: storageError } = await supabase.storage
    .from("courses")
    .createSignedUrl(`${fileName}`, newCourse.file);

  if (storageError) {
    await supabase.from("allCourses").delete().eq("id", data.id);
    console.log("Error", storageError);
    throw new error("Could not upload file. Course not created");
  }

  return data;
}

export async function deleteCourse(id) {
  const { error } = await supabase.from("allCourses").delete().eq("id", id);

  if (error) {
    throw new Error(`Failed to delete course with id ${id}`);
  }
}
