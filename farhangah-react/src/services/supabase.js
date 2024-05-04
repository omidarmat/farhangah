import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pktgalalvymdesbwrycr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrdGdhbGFsdnltZGVzYndyeWNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3NjAzMzgsImV4cCI6MjAzMDMzNjMzOH0.9VliNI3nX_sdVN7f22MQBqqkGJe6jhHH0DAjGKbCdM4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
