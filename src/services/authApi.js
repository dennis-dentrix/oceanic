import supabase from "./supabase";

export async function getAdmin({ password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "admin@gmail.com",
    password,
  });

  if (data && data.user) {
    if (data.user.identities && data.user.identities.length > 0) {
      console.log("Email is taken");
    } else {
      console.log("Email is available");
    }
  }

  if (error) {
    console.error(error);
    throw new Error("Email or password not valid");
  }
}
