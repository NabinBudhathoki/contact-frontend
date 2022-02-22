let baseUrl = process.env.NEXT_PUBLIC_API_URL

if (baseUrl === undefined) {
    baseUrl = "http://localhost:3000";
}

export {baseUrl}