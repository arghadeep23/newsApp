import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>SendNewwzs - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-3"><NewsItem title="mytitle" description="my desc" newsUrl="todo" imageUrl="https://s.yimg.com/uu/api/res/1.2/w5eokYEru719pqXSfleocA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/989f60f0-ce54-11ed-ae79-580cd063061e.cf.jpg"/></div>
                    <div className="col-md-3"><NewsItem title="mytitle" description="my desc" imageUrl="https://images.mktw.net/im-794600/social"/></div>
                    <div className="col-md-3"><NewsItem title="mytitle" description="my desc" /></div>
                    
                </div>
                <div className="row my-3">
                    <div className="col-md-3"><NewsItem title="mytitle" description="my desc" /></div>
                    <div className="col-md-3"><NewsItem title="mytitle" description="my desc" /></div>
                    <div className="col-md-3"><NewsItem title="mytitle" description="my desc" /></div>
                </div>
            </div>
        )
    }
}

export default News