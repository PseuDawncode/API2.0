export const fetchGames = () => {
    return Promise.resolve([
      { id: "swedish", name: "English to Swedish" },
      { id: "science", name: "Science Quiz" },
    ]);
  };