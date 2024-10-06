export const paramSerializer = (params: Record<string, any>) => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([key, value]) => value !== undefined && value !== ''
    )
  );
  return new URLSearchParams(filteredParams).toString();
};
