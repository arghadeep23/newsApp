import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>SendNewwzs - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-3"><NewsItem title="mytitle" description="my desc" /></div>
                    <div className="col-md-3"><NewsItem title="mytitle" description="my desc" /></div>
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