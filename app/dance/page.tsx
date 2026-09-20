import DanceContent from "./dance-content";

export const dynamic = "force-static";
export const revalidate = 1800;

export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

async function getAllContributors(): Promise<GitHubUser[]> {
  const repos = ["PluginV2", "Plugin", "Website"];

  const requests = repos.map(async (repo) => {
    const res = await fetch(
      `https://api.github.com/repos/ServerOpenMC/${repo}/contributors`,
      { next: { revalidate: 1800 } }
    );
    if (!res.ok) return [];
    return res.json();
  });

  const rawResults = await Promise.all(requests);
  const allContributors = rawResults.flat();

  const uniqueContributors = Array.from(
    new Map(allContributors.map((user: GitHubUser) => [user.id, user])).values()
  );

  return uniqueContributors;
}

export default async function Dance() {
  const contributors = await getAllContributors();

  return (
    <main className="pt-28 pb-12 px-4 text-center min-h-screen bg-background text-foreground flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-3xl font-bold text-primary mb-8">
        Les contributeurs dansent (easter egg sympa xD) !{" "}
      </h1>

      <DanceContent contributors={contributors} />
    </main>
  );
}