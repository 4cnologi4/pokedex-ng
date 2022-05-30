// export interface Node {
//     records: any[];
//     prev: Node;
//     next: Node;
//     numberPage: number;
// }

// export interface Paginator {
//     size: number;
//     pagesNumber: number;
//     pageSize: number;
// }

export interface Paginator {
    count: number;
    next: string;
    prev: string;
    results: any;
}