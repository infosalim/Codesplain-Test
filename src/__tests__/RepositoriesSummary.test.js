import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "../components/repositories/RepositoriesSummary";

test("displays information about the repository", () => {
  const repository = {
    stargazers_count: 4,
    open_issues: 5,
    forks: 30,
    language: "Javascript",
  };
  render(<RepositoriesSummary repository={repository} />);

  for(let key in repository){
    const value = repository[key];
    const element = screen.getByText(new RegExp(value));

    expect(element).toBeInTheDocument();
  }
});
