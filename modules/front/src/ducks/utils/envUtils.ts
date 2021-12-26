
/**
 * BackendAPIのホスト名を解決します.
 * 解決するのは、スキーマ、ホスト名、ポートのURL体系の文字列です.
 * @returns 
 */
export const backendHost = (): String => {
    // ホスト名、ポートの解決（ポートについては存在しない場合もある）
    const hostAndPort =
        (process.env.REACT_APP_BACKEND_SCHEMA ? process.env.REACT_APP_BACKEND_SCHEMA + "://" : "http://") +
        (process.env.REACT_APP_BACKEND_HOST ? process.env.REACT_APP_BACKEND_HOST : "localhost") +
        (process.env.REACT_APP_BACKEND_PORT ? ":" + process.env.REACT_APP_BACKEND_PORT : "");
    return hostAndPort;
};