import { type HistoricalRecord, records } from './records';

export function searchRecords(
  query: string,
  filters: {
    documentType?: string[];
    era?: string[];
    classification?: string[];
    source?: string[];
  } = {}
): HistoricalRecord[] {
  let results = [...records];

  // Apply text search
  if (query.trim()) {
    const q = query.toLowerCase();
    results = results.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q) ||
        r.classification.toLowerCase().includes(q) ||
        r.era.toLowerCase().includes(q) ||
        r.documentType.toLowerCase().includes(q) ||
        r.date.toLowerCase().includes(q)
    );
  }

  // Apply filters
  if (filters.documentType?.length) {
    results = results.filter((r) => filters.documentType!.includes(r.documentType));
  }
  if (filters.era?.length) {
    results = results.filter((r) => filters.era!.includes(r.era));
  }
  if (filters.classification?.length) {
    results = results.filter((r) => filters.classification!.includes(r.classification));
  }
  if (filters.source?.length) {
    results = results.filter((r) => filters.source!.includes(r.source));
  }

  return results;
}

