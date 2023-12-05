import supabase from "./supabase";

export async function getUsers() {
  const { data: users, error } = await supabase.from("users").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not get users");
  }

  return users;
}

export async function deleteUser(id) {
  const { data, error } = await supabase.from("users").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Could not delete user");
  }

  return data;
}

export async function createProfile() {
  const { data, error } = await supabase
    .from("users")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Could not delete user");
  }
  return data;
}
