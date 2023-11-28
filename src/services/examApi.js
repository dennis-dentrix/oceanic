import supabase from "./supabase";

export async function getQuestion() {
  const { data: exam, error } = await supabase.from("exam").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not get the questions");
  }
  return exam;
}
