const { context, getOctokit } = require("@actions/github");

const newIssueMessage = async () => {
  try {
    const octokit = getOctokit(process.env.GITHUB_TOKEN);
    const issueComment =
      "Thank you for opening an issue! 🚀\n\n" +
      "Our team will review it as soon as possible. In the meantime, please make sure that you've provided all the necessary details to help us understand and address the issue effectively.\n\n" +
      "Feel free to contribute and participate in discussions!";

    await octokit.rest.issues.createComment({
      ...context.repo,
      issue_number: context.issue.number,
      body: issueComment,
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

newIssueMessage();
