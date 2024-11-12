export type CommitResponse = {
  commit: {
    committer: {
      name: string,
      email: string,
      date: string,
    },
  },
  html_url: string,
};
