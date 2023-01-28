import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { setupURLPolyfill } from "react-native-url-polyfill";

setupURLPolyfill();

const supabaseUrl = "https://mqbvynynjhxcsvjffdmm.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xYnZ5bnluamh4Y3N2amZmZG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4ODMyNTgsImV4cCI6MTk5MDQ1OTI1OH0.Ut18bpL2J6P0amEGSvRrgczQiZFSlNkACaYBJYkjrPc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
