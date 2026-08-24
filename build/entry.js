// Bundled at build time into vendor/teleproto.bundle.js by esbuild.
// Only re-exports what index.html actually imports, so the bundle stays
// as small as possible.
export { TelegramClient } from "teleproto";
export { StringSession } from "teleproto/sessions";
export { Api } from "teleproto";
