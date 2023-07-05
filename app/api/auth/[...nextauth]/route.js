import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

const authOptions = {
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                const { email, password } = credentials;

                if (email === 'john@gmail.com' && password === 'John1234') {
                    return {
                        id: '1',
                        name: 'John Doe',
                        email: 'john@gmail.com'
                    }
                } else {
                    return null;
                }
            }
        })
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
