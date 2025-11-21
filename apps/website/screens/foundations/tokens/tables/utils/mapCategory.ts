const getTokensByCategory = (tokens: Record<string, string | number>, categories: string[]) =>
  Object.entries(tokens).filter(([token]) => categories.some((category) => token.startsWith(`--${category}`)));

export default getTokensByCategory;
