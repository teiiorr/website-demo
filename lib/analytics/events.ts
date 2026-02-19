export function trackEvent(event: string, payload?: Record<string, string>) {
  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics-placeholder]", event, payload ?? {});
  }
}
