import { GITHUB_REVALIDATE_SECONDS, GITHUB_USERNAME } from "@/lib/constants";

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
};

export type GitHubProfile = {
  login: string;
  name: string | null;
  html_url: string;
  avatar_url: string;
  public_repos: number;
  bio: string | null;
};

type GitHubResult<T> =
  | { data: T; error: null }
  | { data: null; error: string };

async function githubFetch<T>(path: string): Promise<GitHubResult<T>> {
  try {
    const response = await fetch(`https://api.github.com${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "wendell-portfolio",
      },
      next: { revalidate: GITHUB_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return {
        data: null,
        error: `GitHub API responded with ${response.status}`,
      };
    }

    const data = (await response.json()) as T;
    return { data, error: null };
  } catch {
    return { data: null, error: "Unable to reach GitHub API" };
  }
}

export async function getGitHubProfile(): Promise<GitHubResult<GitHubProfile>> {
  return githubFetch<GitHubProfile>(`/users/${GITHUB_USERNAME}`);
}

export async function getGitHubRepos(
  limit = 6
): Promise<GitHubResult<GitHubRepo[]>> {
  const result = await githubFetch<GitHubRepo[]>(
    `/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${limit}`
  );

  if (!result.data) return result;

  const filtered = result.data
    .filter((repo) => !repo.name.startsWith("."))
    .slice(0, limit);

  return { data: filtered, error: null };
}
