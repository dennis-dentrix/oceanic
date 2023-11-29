import supabase from "./supabase";

export async function getCourses() {
  const { data: courses, error } = await supabase.from("courses").select("*");

  if (error) {
    console.error();
    throw new error("Could not get courses");
  }
  return courses;
}
