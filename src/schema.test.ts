import { expect, test } from "vitest";
import { schema } from "./schema.js";

test("Detect schema version change", async () => {
  expect(schema.openapi).toBe("3.0.3");
});
