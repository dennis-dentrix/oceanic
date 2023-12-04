import supabase from "./supabase";

export async function createReserve(newEvent) {
  const { data, error } = await supabase
    .from("reservedEvents")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();

  if (error) throw new Error(error);

  return data;
}
