import supabase from "./supabase";

export async function getClasses() {
  const { data: classes, error } = await supabase.from("classes").select("*");

  if (error) {
    console.log("Error", error);
    throw new error("Could not get class");
  }
  return classes;
}
// Add a new class to the database

export async function addClass(newClass) {
  let { data, error } = await supabase.from("classes").insert([newClass]);
  // If there's an error, log it out to the console
  if (error) {
    console.log("Error", error);
    throw new error("Could not create class. Try again");
  }
  return data;
}

export async function deleteClass(id) {
  const { error } = await supabase.from("classes").delete().eq("id", id);

  if (error) {
    throw new error("Could not delete class. Try again");
  }
}
