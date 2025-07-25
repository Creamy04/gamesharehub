import { useState } from "react";

const mockGames = [
  {
    title: "Cosmic Blaster",
    description: "A retro space shooter with endless waves.",
    link: "https://yourgamehost.com/cosmic-blaster",
    tags: ["Arcade", "Retro", "NSFW Allowed"]
  },
  {
    title: "Dreamwalker",
    description: "Explore lucid dreams in a beautiful puzzle world.",
    link: "https://yourgamehost.com/dreamwalker",
    tags: ["Puzzle", "Story", "Safe"]
  }
];

export default function GameHub() {
  const [games, setGames] = useState(mockGames);
  const [newGame, setNewGame] = useState({
    title: "",
    description: "",
    link: "",
    tags: ""
  });

  const handleSubmit = () => {
    if (!newGame.title || !newGame.link) return;
    setGames([...games, { ...newGame, tags: newGame.tags.split(",") }]);
    setNewGame({ title: "", description: "", link: "", tags: "" });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">GameShareHub</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Explore Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {games.map((game, i) => (
            <div key={i} className="border rounded-xl p-4 shadow">
              <h2 className="text-xl font-semibold mb-1">{game.title}</h2>
              <p className="mb-2 text-sm text-gray-600">{game.description}</p>
              <p className="text-xs mb-2">Tags: {game.tags.join(", ")}</p>
              <a href={game.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm underline">
                Play Now
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 space-y-4 max-w-lg">
        <h2 className="text-2xl font-semibold mb-2">Upload Your Game</h2>
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Game Title"
          value={newGame.title}
          onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
        />
        <textarea
          className="w-full border rounded px-3 py-2"
          placeholder="Short Description"
          value={newGame.description}
          onChange={(e) => setNewGame({ ...newGame, description: e.target.value })}
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Link to Game (e.g., itch.io, Dropbox, etc.)"
          value={newGame.link}
          onChange={(e) => setNewGame({ ...newGame, link: e.target.value })}
        />
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Tags (comma separated)"
          value={newGame.tags}
          onChange={(e) => setNewGame({ ...newGame, tags: e.target.value })}
        />
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Game
        </button>
      </div>
    </div>
  );
}
