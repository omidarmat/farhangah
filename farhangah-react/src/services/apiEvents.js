import supabase from "./supabase";

export default async function getEvents() {
  const { data, error } = await supabase.from("events").select("*");

  if (error) {
    console.log(`💻 ${error}`);
    throw new Error("🔴 در بارگزاری اطلاعات رویدادها مشکلی پیش آمده است.");
  }

  return data;
}
