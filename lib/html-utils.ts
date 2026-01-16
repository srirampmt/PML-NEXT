// Helper to strip HTML tags for plain text display
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

// Helper to parse HTML list items
export function parseHtmlList(html: string): string[] {
  const matches = html.match(/<li[^>]*>(.*?)<\/li>/gi);
  if (!matches) return [];
  return matches.map((item) => stripHtml(item));
}

// Get board basis icon component
export function getBoardBasisIcon(code: string): string {
  // Returns appropriate icon based on board basis
  return code === "AI" ? "🍽️" : "🍴";
}
