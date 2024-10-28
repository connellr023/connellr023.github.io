// place files you want to import through the `$lib` alias in this folder.

// First: Name of data point
// Second: CSS class of data point (for coloring)
// Third: Value of data point as a percentage
export type GraphData = [string, string, number];

export type CommitResponse = {
  commit: {
    committer: {
      name: string;
      email: string;
      date: string;
    };
  };
  html_url: string;
};
