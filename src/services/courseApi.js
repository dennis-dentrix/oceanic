import supabase from "./supabase";

export async function getCourses() {
  const { data: courses, error } = await supabase.from("courses").select("*");

  if (error) {
    console.error();
    throw new error("Could not get courses");
  }
  return courses;
}

export async function deleteCourse(id) {
  const { error } = await supabase.from("courses").delete().eq("id", id);

  if (error) {
    throw new Error(`Failed to delete course with id ${id}`);
  }
}
