export interface ReturnOk<T> {
    statusCode: number;
    messages: string[];
    ok: boolean;
    data: T;
}