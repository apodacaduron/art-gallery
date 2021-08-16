export type Artwork = {
    id: number,
    title: string,
    artist_display: string,
    place_of_origin: string,
    dimensions: string,
    medium_display: string,
    image_id: string,
    term_titles: string[],
    last_updated_source: string,
    last_updated: string,
    timestamp: string,
}

export type PayloadRecords<T> = {
    pagination: Pagination
    data: T
}

export type Pagination = {
    total: number
    limit: number
    offset: number
    total_pages: number
    current_page: number
}