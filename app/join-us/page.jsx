import dynamic from 'next/dynamic';
import React from 'react';
const LogIn = dynamic(()=> import('@/Components/LogIn/LogIn'))

// SEO
export const metadata = {
    title: 'Realhome: Join us',
    description: 'Unlock a world of possibilities with our secure and convenient login page. Seamlessly access your account and explore exclusive features tailored just for you. Sign in now and embark on a personalized journey towards your goals.'
}
const page = () => (
    <LogIn />
)
export default page;