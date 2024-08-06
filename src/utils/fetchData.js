 export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'dfe5f643bamsh356328f65f21a0ep121572jsn768c925d521e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
    };
    
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    //console.log(data);
  
    return data;
  };