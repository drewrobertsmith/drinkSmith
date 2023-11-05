import "react-native-url-polyfill/auto";

import { createClient } from "@supabase/supabase-js";

const URL = "https://btdwijqlskntdigvjhlp.supabase.co";
const KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0ZHdpanFsc2tudGRpZ3ZqaGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4ODg5MzIsImV4cCI6MjAxNDQ2NDkzMn0.EWtTO3qAZCftNXZ7LGYSVoed8RN4eb7vqvWuVEaipLQ";

const supabase = createClient(URL, KEY, {
  detectSessionInUrl: false,
});

export const getDrinksData = async () => {
  const { data, error } = await supabase
    .from("Drinks")
    .select()
    .order('name', {ascending: true});
  if (error) throw error;
  return data;
};
  