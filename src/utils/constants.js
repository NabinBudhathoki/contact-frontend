let baseUrl = process.env.NEXT_PUBLIC_API_URL

if (baseUrl === undefined) {
    baseUrl = "https://n-c-b.herokuapp.com";
}

export {baseUrl}