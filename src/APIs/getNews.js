
import axios from 'axios'
let data=null;
const api_key ="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e3098fc987f34c92b38cca585a2f667d"
export default async function getNews() {
   
  await axios.get(api_key)
  .then(response =>{
    console.log(response)
    data =  response.data.articles
  })
  .catch(err => console.log(err))
  return data;
}
