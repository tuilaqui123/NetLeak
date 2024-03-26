
// ten, the loai, dien vien, hinh anh, mo ta,
const moviesData = [
    {
        title: "Doraemon Stand By Me",
        category: "Phim gia đình",
        actors: ["jack 5 cu", "Kakazu Yumi"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2FDoraemon.jpg?alt=media&token=5c060ca5-e128-470d-a28b-946a607ff649",
        des: "Cậu học sinh lớp 4 Nobita nỗ lực tiến bộ trong cuộc sống hiện tại để chú mèo máy Doraemon trung thành của cậu có thể trở về nhà trong tương lai"
    },
    {
        title: "Doraemon Stand By Me 2",
        category: "Phim gia đình",
        actors: ["jack 5 cu", "Bẻy siu"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2FDoraemon2.jpg?alt=media&token=8a8b9689-0479-438d-8def-d112819d64e2",
        des: "Nobita đến từ tương lai để giới thiệu vị hôn thê với bà, song Nobita trưởng thành thì đã chạy khỏi đám cưới. Bruh"
    },
    {
        title: "Pokémon: Mewtwo Strikes Back",
        category: "Phim gia đình",
        actors: ["Lmao Lmao", "Anh Huy gà điên"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2Fpokemon.jpg?alt=media&token=3e67fe24-3a27-43c5-bfb0-f480921f50da",
        des: "Sau khi nhận lời mời của một huấn luyện viên bí ẩn, Ash, Misty và Brock gặp Mewtow - một Pokémon nhân tạo muốn gây chiến"
    },
    {
        title: "Test 1",
        category: "Phim hài",
        actors: ["Feed âm mạng", "Anh Phát"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2Fpokemon.jpg?alt=media&token=3e67fe24-3a27-43c5-bfb0-f480921f50da",
        des: "Đây là test phim hài"
    },
    {
        title: "Test 2",
        category: "Phim hành động",
        actors: ["Quá mạnh", "Anh Quí"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2Fpokemon.jpg?alt=media&token=3e67fe24-3a27-43c5-bfb0-f480921f50da",
        des: "Đây là test phim hành động"
    },
    {
        title: "Test 3",
        category: "Phim kinh dị",
        actors: ["Cứu tôi", "Chị Hương"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2Fpokemon.jpg?alt=media&token=3e67fe24-3a27-43c5-bfb0-f480921f50da",
        des: "Đây là test phim kinh dị"
    },
    {
        title: "Test 4",
        category: "Phim khoa học viễn tưởng",
        actors: ["Ảo ma", "Anh QMinh"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2Fpokemon.jpg?alt=media&token=3e67fe24-3a27-43c5-bfb0-f480921f50da",
        des: "Đây là test phim khoa học viễn tưởng"
    },
    {
        title: "Test 5",
        category: "Phim lãng mạn",
        actors: ["Ảo ma", "Anh TMinh"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2Fpokemon.jpg?alt=media&token=3e67fe24-3a27-43c5-bfb0-f480921f50da",
        des: "Đây là test phim lãng mạn"
    },
    {
        title: "Test 6",
        category: "Phim lãng mạn",
        actors: ["Ảo ma", "Anh TMinh"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2Fpokemon.jpg?alt=media&token=3e67fe24-3a27-43c5-bfb0-f480921f50da",
        des: "Đây là test phim lãng mạn"
    },
    {
        title: "Test 7",
        category: "Phim lãng mạn",
        actors: ["Ảo ma", "Anh TMinh"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2Fpokemon.jpg?alt=media&token=3e67fe24-3a27-43c5-bfb0-f480921f50da",
        des: "Đây là test phim lãng mạn"
    },
    {
        title: "Test 8",
        category: "Phim lãng mạn",
        actors: ["Ảo ma", "Anh TMinh"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2Fpokemon.jpg?alt=media&token=3e67fe24-3a27-43c5-bfb0-f480921f50da",
        des: "Đây là test phim lãng mạn"
    },
    {
        title: "Test 9",
        category: "Phim lãng mạn",
        actors: ["Ảo ma", "Anh TMinh"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2Fpokemon.jpg?alt=media&token=3e67fe24-3a27-43c5-bfb0-f480921f50da",
        des: "Đây là test phim lãng mạn"
    },
    {
        title: "Test 10",
        category: "Phim lãng mạn",
        actors: ["Ảo ma", "Anh TMinh"],
        img: "https://firebasestorage.googleapis.com/v0/b/doan-1e6e0.appspot.com/o/movie%2Fpokemon.jpg?alt=media&token=3e67fe24-3a27-43c5-bfb0-f480921f50da",
        des: "Đây là test phim lãng mạn"
    }
];


export default moviesData