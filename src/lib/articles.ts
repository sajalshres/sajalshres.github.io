export interface Article {
  title: string;
  link: string;
  published: string;
  categories: string[];
}

interface FeedItem {
  title?: string;
  link?: string;
  pubDate?: string;
  categories?: string[];
}

export async function getLatestArticles(feedUrl: string): Promise<Article[]> {
  if (import.meta.env.MEDIUM_FEED_DISABLED === "true") return [];

  try {
    const response = await fetch(feedUrl, { signal: AbortSignal.timeout(4_000) });
    if (!response.ok) return [];
    const data = (await response.json()) as { items?: FeedItem[] };
    return (data.items ?? [])
      .filter((item) => item.title && item.link && item.categories?.length)
      .slice(0, 3)
      .map((item) => ({
        title: item.title!,
        link: item.link!,
        published: item.pubDate ?? "",
        categories: item.categories ?? [],
      }));
  } catch {
    return [];
  }
}
