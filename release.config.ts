import { type GlobalConfig } from "semantic-release";

export default {
  branches: ["release", "main"],
  // repositoryUrl: "https://github.com/integratop/retailcrm-bot-api-schema.git",
  tagFormat: "v${version}",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    ["@semantic-release/npm", { npmPublish: false }],
    /*
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
*/
    /*
    [
      "@semantic-release/exec",
      {
        successCmd: "echo 'RELEASE_VERSION=${nextRelease.version}' >> $GITHUB_ENV",
      },
    ],
*/
    /*
    [
      "@semantic-release/github",
      {
        successComment: false,
        failComment: false,
      },
    ],
*/
  ],
} satisfies Partial<GlobalConfig>;
