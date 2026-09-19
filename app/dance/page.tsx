import Image from "next/image";

async function getAllContributors() {
  const repos = ["PluginV2", "Plugin", "Website"];

  const requests = repos.map(async (repo) => {
    const res = await fetch(
      `https://api.github.com/repos/ServerOpenMC/${repo}/contributors`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  });

  const rawResults = await Promise.all(requests);
  const allContributors = rawResults.flat();

  const uniqueContributors = Array.from(
    new Map(allContributors.map((user) => [user.id, user])).values()
  );

  return uniqueContributors;
}

export default async function SecretPage() {
  const contributors = await getAllContributors();

  return (
    <main className="pt-28 pb-12 px-4 text-center min-h-screen bg-background text-foreground flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-3xl font-bold text-primary mb-8">Les contributeurs dansent (easter egg sympa xD) ! </h1>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        {contributors.map((user: any, index: number) => {
          const delay = `${(index % 5) * 0.15}s`;

          return (
            <a
              key={user.id}
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className="relative w-20 h-20 animate-dance group-hover:scale-110 transition-transform"
                style={{ animationDelay: delay }}
              >
                <Image
                  src={user.avatar_url}
                  alt={user.login}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-primary object-cover"
                />
              </div>
              <span className="text-xs mt-2 font-mono text-muted-foreground group-hover:text-primary transition-colors">
                {user.login}
              </span>
            </a>
          );
        })}
      </div>
    </main>
  );
}