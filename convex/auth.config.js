export default {
    providers: [
        {
            domain: process.env.CLERK_JWT_ISSUER_DOMAIN, // injected from clerk dashboard
            applicationID: "convex",
        },
    ]
};