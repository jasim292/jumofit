import Vapi from "@vapi-ai/web";

// ✅ Must pass the API token in constructor (older versions require this)
export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
