import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
    constructor() {
        super();
        console.log('constructor');
        this.state = {
            articles: [],
            loading:false
        }
    }
    async componentDidMount(){
        console.log('cdm');
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=49a7d9961bd74a909ee04c8b6dea5247`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles});
    }
    render() {
        console.log('render')
        return (
            <div className="container my-3">
                <h2>SendNewwzs - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} newsUrl={element.url} imageUrl={element.urlToImage?element.urlToImage:"https://www.openpr.com/wiki/images/56-400x300_4851"}/>
                            </div>
                    })}
                    
                    
                    
                </div>
                
            </div>
        )
    }
}

export default News