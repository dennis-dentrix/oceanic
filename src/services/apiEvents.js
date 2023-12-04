import supabase from "./supabase";

export async function createEvent(newEvent) {
  const { data, error } = await supabase
    .from("events")
    .insert([newEvent])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Could not create event.");
  }

  return data;
}

export async function getEvents() {
  const { data: events, error } = await supabase.from("events").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not get events");
  }

  return events;
}

export async function deleteEvent(id) {
  const { data, error } = await supabase.from("events").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Event could not be deleted");
  }
  return data;
}

export async function createReservation(newEvent, id) {
  let query = supabase.from("post");

  if (!id) query = query.insert([{ ...newEvent }]);
  if (id) query = query.update({ newEvent });

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Post could not be created");
  }
  return data;
}
