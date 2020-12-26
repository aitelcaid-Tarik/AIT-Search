
export interface GoogleResponse {
    kind: string;
    url: Url;
    queries: Queries;
    context: Context;
    searchInformation: SearchInformation;
    items?: (ItemsEntity)[] | null;
  }
  export interface Url {
    type: string;
    template: string;
  }
  export interface Queries {
    request?: (RequestEntity)[] | null;
  }
  export interface RequestEntity {
    title: string;
    totalResults: string;
    searchTerms: string;
    count: number;
    startIndex: number;
    inputEncoding: string;
    outputEncoding: string;
    safe: string;
    cx: string;
  }
  export interface Context {
    title: string;
    facets?: ((EntityOrFacetsEntityEntity)[] | null)[] | null;
  }
  export interface EntityOrFacetsEntityEntity {
    anchor: string;
    label: string;
    label_with_op: string;
  }
  export interface SearchInformation {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  }
  export interface ItemsEntity {
    kind: string;
    title: string;
    htmlTitle: string;
    link: string;
    displayLink: string;
    snippet: string;
    htmlSnippet: string;
    cacheId: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    pagemap: Pagemap;
  }
  export interface Pagemap {
    cse_thumbnail?: (CseThumbnailEntity)[] | null;
    Item?: (ItemEntity)[] | null;
    metatags?: (MetatagsEntity)[] | null;
    cse_image?: (CseImageEntity)[] | null;
  }
  export interface CseThumbnailEntity {
    src: string;
    width: string;
    height: string;
  }
  export interface ItemEntity {
    num_replies: string;
    title: string;
    encoded?: string | null;
    date?: string | null;
    created?: string | null;
  }
  export interface MetatagsEntity {
    handheldfriendly: string;
    viewport: string;
    mobileoptimized: string;
  }
  export interface CseImageEntity {
    src: string;
  }