export const requestQuery = (object: Record<string, unknown>) => {
    let query = "";
    for (let key in object) {
        query += key + "=" + object[key] + "&";
    }

    if (!query) return query;

    return "?" + query.substring(0, query.length - 1);
};
