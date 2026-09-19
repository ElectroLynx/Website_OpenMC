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

export default async function Dance() {
  const contributors = await getAllContributors();

  return (
    <main className="p-8 text-center min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Les contributeurs dansent ! </h1>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        {contributors.map((user: any) => (
          <div key={user.id} className="flex flex-col items-center">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full border-4 border-yellow-400"
            />
            <span className="text-xs mt-2 font-mono">{user.login}</span>
          </div>
        ))}
      </div>
    </main>
  );
}