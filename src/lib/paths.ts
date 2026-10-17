/**
 * Prefixes a /public asset path with the deployment base path.
 * next/image doesn't add basePath to string sources, so every image
 * that points into /public goes through this.
 */
export function withBasePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
