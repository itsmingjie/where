export const tagTransform = (tag: string): string => {
  return tag
    .split(/_|-/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
