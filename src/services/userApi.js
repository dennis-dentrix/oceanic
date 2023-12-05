import supabase, { supabaseUrl } from "./supabase";

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

export async function createProfile(newProfile, id) {
  const hasImagePath = newProfile.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newProfile.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newProfile.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  let query = supabase.from("users");

  if (!id) query = query.insert([{ ...newProfile, image: imagePath }]);
  if (id) query = query.update({ newProfile });

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Profile could not be created");
  }
  return data;
  // const { data: users, error } = await supabase
  //   .from("users")
  //   .insert([{ ...newProfile }])
  //   .select()
  //   .single();

  // if (error) {
  //   console.error(error);
  //   throw new Error("could not create profile");
  // }
  // return users;
}
