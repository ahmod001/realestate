// Products JSON Data //
export const apartmentsData = [
    {
        id: 1,
        location: "Dhaka, Bangladesh",
        title: "Luxury Living in the Heart of Dhaka",
        price: { int: 20000, string: '20,000' },
        bedrooms: 3,
        type: 'minimalistic',
        bathrooms: 2,
        roomSize: "10X16m",
        description:
            "Experience luxury living in this spacious apartment located in the heart of Dhaka. With 3 bedrooms, 2 bathrooms, and rooms sized at 10X16m, it offers a comfortable and convenient lifestyle.",
        img: "/apartments/Rectangle 14.png",
    },
    {
        id: 2,
        location: "New York, USA",
        title: "Stunning Apartment with Central Park View",
        type: 'victorian',
        price: { int: 160000, string: '160,000' },
        bedrooms: 2,
        bathrooms: 2,
        roomSize: "12X18m",
        description:
            "Enjoy breathtaking views of Central Park from this stunning 2-bedroom apartment in New York. With top-notch amenities and rooms sized at 12X18m, it's a dream home for city dwellers.",
        img: "/apartments/Rectangle 15.png",
    },
    {
        id: 3,
        location: "London, UK",
        title: "Elegant Living in London's Finest Neighborhood",
        price: { int: 30000, string: '30,000' },
        bedrooms: 4,
        bathrooms: 3,
        type: 'minimalistic',
        roomSize: "15X20m",
        description:
            "Live in style in this elegant 4-bedroom apartment situated in one of London's finest neighborhoods. The spacious interior, modern design, and rooms sized at 15X20m make it a desirable choice.",
        img: "/apartments/Rectangle 16.png",
    },
    {
        id: 4,
        location: "New York, USA",
        title: "Modern Waterfront Apartment with Spectacular Views",
        price: { int: 180000, string: '180,000' },
        bedrooms: 3,
        type: 'victorian',
        bathrooms: 2,
        roomSize: "14X18m",
        description:
            "Wake up to stunning waterfront views in this modern 3-bedroom apartment in Sydney. The prime location, sleek design, and rooms sized at 14X18m offer a premium living experience.",
        img: "/apartments/Rectangle 17.jpeg",
    },
]

export const housesData = [
    {
        id: 5,
        location: "Dhaka, Bangladesh",
        title: "Luxury Living in the Heart of Dhaka",
        price: { int: 20000, string: "20,000" },
        bedrooms: 4,
        type: 'minimalistic',
        bathrooms: 3,
        roomSize: "12X15m",
        description:
            "Experience luxury living in this spacious house located in the heart of Dhaka. With 4 bedrooms, 3 bathrooms, and rooms sized at 12X15m, it offers a comfortable and convenient lifestyle.",
        img: "/houses/h1.jpg",
    },
    {
        id: 6,
        location: "New York, USA",
        title: "Modern Penthouse with Stunning City Views",
        price: { int: 20000, string: "20,000" },
        bedrooms: 3,
        type: 'minimalistic',
        bathrooms: 2.5,
        roomSize: "20X25m",
        description:
            "Live in style in this modern penthouse located in the heart of New York. Enjoy breathtaking city views from every room. With 3 bedrooms, 2.5 bathrooms, and rooms sized at 20X25m, it's a luxurious retreat.",
        img: "/houses/h2.jpg",
    },
    {
        id: 7,
        location: "London, UK",
        title: "Charming Townhouse in the Historic District",
        price: { int: 150000, string: "150,000" },
        bedrooms: 2,
        bathrooms: 1.5,
        type: 'victorian',
        roomSize: "8X12m",
        description:
            "Step back in time with this charming townhouse nestled in London's historic district. With 2 bedrooms, 1.5 bathrooms, and rooms sized at 8X12m, it offers a cozy and intimate living space.",
        img: "/houses/h3.jpg",
    },
    {
        id: 8,
        location: "New York, USA",
        title: "Spacious Family Home with Ocean Views",
        price: { int: 95000, string: "95,000" },
        bedrooms: 5,
        type: 'victorian',
        bathrooms: 4,
        roomSize: "18X20m",
        description:
            "Enjoy the ultimate coastal lifestyle in this spacious family home located in Sydney. Wake up to breathtaking ocean views every day. With 5 bedrooms, 4 bathrooms, and rooms sized at 18X20m, it's a dream come true.",
        img: "/houses/h4.jpg",
    },
];


//Blur Img URL 
export const mainPlaceholderImgData = `/placeholder.png`

export const cardPlaceholderImgData = `data:image/jpeg;base64,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zSZpAOzSZpM0maBjs0maTNJmkAuaTNJmkzSGOzSZpM0maQwJpCaM00mkMXNITSE0hNIAJppNBNNJqGUBNITSE0hNIYE00mgmmk1SQwJphNBNMY1SRSEY0ygmkrRFC0lFJTFcWkopKCWwopM0maZLYuaSikpk3FpKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUALRSUUALRSUUALRSUUAdNmjNNzRmmYDs0ZpuaM0DHZozTc0ZpALmjNJmkzQA7NGabmjNADs0maTNJmkMdmkzSZozQAuaM03NGaQxc0maTNGaAFzSZpKTNIYuaTNGaSkMM0maSkpDAmkJoNIaVhiE00mlNNNQ0MCaaTQaQmgYhNNJpTTCapDEJqNjTmNRk1aRaCkooqguFJRSZpkti0maSighsKSiimIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAOizRmm5ozVWOa47NGabmjNFguOzRmm5ozRYdx2aM03NGaLBcdmkzSZozRYLi5ozSZpM0rDuOpM0maM0WC4uaTNFJSsO4tJmikosO4uaSikpWC4UlFJRYdxaaaWkpWHcSkNBpKVh3ENNNONNNS0O400hpTTTU2KuIaYacaYaaHca1RmntUZq0UmFFJRVCbDNJRSUybi0lFFAgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAN7NGabmjNa2OLmHZozTc0ZosO47NGabmjNFguOzRmm5ozRYdx2aM03NGaVguOzRmkzSZosO47NGabmjNKw7i0UlFFh3FpKKSlYLi0lFFFh3CkopKVh3CkpaSiw7iUhpaSlYdxppDSmkNKw7jTTTTjTTSsO4w00080w1Nh3GNUZqRqiaqRSYlFFJVCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDaopKK6DzhaKSigBaKSigYuaM0lFFgFzRmkoosFx2aM02ilYdx2aM03NGaLFXHUUmaKVh3FopKKVirhRRSUWHcKKKKVh3EpKWkosFwpKWkpWHcaaQ04000WHcaaQ04000rDuNNMNPNNNFguRNUbCpjUbClYpMjpKUikpFhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBs0UUV1HnhRRRQAUUUUAFFFFABRRRSAKKKKAEooooAKXNJRQAuaKSilYq4tFJRSsO4tJRRRYq4UlLSUrDuFJS0lFh3EpDS0hpWHcaaQ0ppDRYLjTTDTzTTRYLjCKYRUhppFKxSZEwplSkVGRSaNExtFLSVBQUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBs0UUV1nnhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFIApKWigBKKKKACiiigYUUUUrDuFJS0lIdwpKWkoKuJSUtJSC4hpppxpDQMaaaacaQ0AMNNNPNIaRSIyKjYVKRTCKDRMjpKcRTahosSilpKgYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAGxRRRXYeeLRSUUALRRRQAUUUUAFFFFABRRRQAUUUUgCiiigApKWigBKKWkoAKKKKQBSUtJQUFJS0UhiUlLSUDENNNONIaQDTSGnGmmgY00008000ikMNNNPNNNBaImFNqRqjpGiEpKWis2ihKKKKkAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA2aKKK7TzwooooAKKKKACiiikAUUUUAFFFFABRRRQAUUUUAFFFFABRRRSASilpKACkpaSkMKKKKBiUlLSUhiUlLSUAJSUtJQUNNIacaaaQ0NNNNONNNItDGqM1Iajag0QlJS0lRIoSiiisxhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBsUtFFdp54UUUUAFFFFABRRRQAUUUUCCiiikAUUUUDCiiigQUUUUDCiiikAUlFFABSUUUAFFFFIoSg0UUDGmkoopAJSUUUDENNNFFIpCGmGiigtDTUbUUUi0NpKKKiRYlFFFZjCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//2Q==`