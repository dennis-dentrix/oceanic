import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vraoqqbiytmansequxql.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyYW9xcWJpeXRtYW5zZXF1eHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNTcxMDEsImV4cCI6MjAxMTgzMzEwMX0.AGgSrBocXJ3Kw-M9PRI5Ln0e3YTvw6S3SSi8dfIF4FQ";
export const service_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyYW9xcWJpeXRtYW5zZXF1eHFsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjI1NzEwMSwiZXhwIjoyMDExODMzMTAxfQ.HaTLy2mIPCgaSvUgxS3B_yS28h7tACdnzOnZk36IQSE";
// const supabase = createClient(supabaseUrl, supabaseKey, {
//   autoRefreshToken: false,
//   persistSession: false,
// });

export const supabase = createClient(supabaseUrl, service_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export default supabase;

export async function getAdmin() {
  const { data, error } = await supabase.auth.admin.getUserById(
    "84f8b145-57cf-45a5-8ae5-32008b9c6387"
  );
  console.log(data);
}
