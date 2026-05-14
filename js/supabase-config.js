// Supabase Configuration using Vite Environment Variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// If we are using the CDN version, 'supabase' is already on the window.
// If we were using the NPM package, we would import { createClient } from '@supabase/supabase-js'
const { createClient } = window.supabase || {};

if (!createClient) {
    console.error('Supabase library not loaded. Make sure the CDN script is included.');
} else {
    const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.supabaseClient = _supabase;
}
