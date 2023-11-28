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
