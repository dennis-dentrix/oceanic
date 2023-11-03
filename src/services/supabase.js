import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://vraoqqbiytmansequxql.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyYW9xcWJpeXRtYW5zZXF1eHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNTcxMDEsImV4cCI6MjAxMTgzMzEwMX0.AGgSrBocXJ3Kw-M9PRI5Ln0e3YTvw6S3SSi8dfIF4FQ"
const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export default supabase;
