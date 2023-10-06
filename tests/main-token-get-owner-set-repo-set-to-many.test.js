// @ts-check
import { test } from "./main.js";

// Verify `main` successfully obtains a token when the `owner` and `repositories` inputs are set (and the latter is a list of repos).
await test(() => {
  process.env.INPUT_OWNER = process.env.GITHUB_REPOSITORY_OWNER;
  process.env.INPUT_REPOSITORIES = `${process.env.GITHUB_REPOSITORY},actions/toolkit`;
});
