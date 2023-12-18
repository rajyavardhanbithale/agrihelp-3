/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    images: {
        domains: [
            "5.imimg.com", "api.website.com",
        ],
    },
    output: "standalone",

    experimental: {
        turbotrace: {
            logLevel:'info',
            logDetail:false
        }
    }

}

module.exports = nextConfig
