import axios from 'axios'

export const fetchShow = () => {
    return axios // what is this new layout for axios call?
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
          console.log(res)
          return res.data
      })
      .catch(error => {
        console.log(error);
      })
  };

