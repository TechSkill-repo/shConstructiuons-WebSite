import React from 'react'
import {news} from '../data'
import '../../styles/News.css'


function News() {
  return (
    <div className='news'>
        <h3><i class="fa-regular fa-newspaper"></i> News and Happenings </h3>
        
        <div className="news-content"> 

            {
                news.map(news=>(
                    <div key={news.headline}>
                        <h5>{news.headline}  <i class="fa-solid fa-rss"></i></h5>
                        <p>{news.summary}</p>
                    </div>))
            }
        </div>
    </div>
  )
}

export default News