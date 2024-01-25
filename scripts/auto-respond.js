const { context, Octokit } = require('@actions/github');

const autoRespond = async () => {
  try {
    const token = process.env.GITHUB_TOKEN;
    const octokit = new Octokit({ auth: token });
    const issueComment =
      `Thank you for opening an issue! 🚀
      
      Our team will review it as soon as possible. In the meantime, please make sure that you've provided all the necessary details to help us understand and address the issue effectively.
      
      Feel free to contribute and participate in discussions!`;
    await octokit.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      body: issueComment,
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

autoRespond();