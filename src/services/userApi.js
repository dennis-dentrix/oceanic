import supabase, { supabaseUrl } from "./supabase";

export async function getUsers() {
  const { data: users, error } = await supabase.from("users").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not get users");
  }

  return users;
}

export async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "oceanicadmin@gmail.com",
    password: "",

    options: {
      redirect: "/admin",
    },
  });

  if (error) {
    console.error(error);
    throw new Error("Could not login to account");
  }
  return data;
}

export async function deleteUser(id) {
  const { data, error } = await supabase.from("users").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Could not delete user");
  }

  return data;
}

export async function createUser() {
  const { data: profiles, error } = await supabase.from("profiles").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not delete user");
  }

  return profiles;
}
