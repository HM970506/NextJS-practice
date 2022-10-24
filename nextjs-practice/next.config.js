/** @type {import('next').NextConfig} */

const API_KEY="ef84351b94903c34ce113fddd7775209";

const nextConfig = {
  reactStrictMode: false,
  async redirects(){
    return[
      { 
        source:"/contact/:page*", //유저가 이동할 장소이름을 찾는다
        destination:"/form/:page*", //유저의 도착장소를 찾는다
        permanent: false, //브라우저가 해당정보를 기억할지를 결정한다
      },
      
        //,{여기엔 추가하고 싶은 redirect를 적으면 된다}
      
    ];
  },
  async rewrites() {
    return [
      { 
        source:"/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source:"/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ];
  },
};

module.exports = nextConfig
