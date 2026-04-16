import { StitchProxy } from "@google/stitch-sdk";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { existsSync, readFileSync } from "node:fs";

const fallbackKeyPath = new URL("../google stitch API key.md", import.meta.url);

const apiKey =
  process.env.STITCH_API_KEY ||
  (existsSync(fallbackKeyPath) ? readFileSync(fallbackKeyPath, "utf8").trim() : "");

if (!apiKey) {
  console.error("STITCH_API_KEY is not set.");
  process.exit(1);
}

const proxy = new StitchProxy({ apiKey });
const transport = new StdioServerTransport();

try {
  await proxy.start(transport);
} catch (error) {
  console.error("Failed to start Stitch MCP proxy:", error);
  process.exit(1);
}
