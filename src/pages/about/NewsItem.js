import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
      let {title , discription , imageUrl , newsUrl, author, date} = this.props;
    return (
     <div className="contaimer my-3">
                <div className="card">
                <img src={imageUrl?imageUrl:"https://images.wsj.net/im-821286/social"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <p class="card-text"><small class="text-body-secondary">By {!author?"Anonymous":author} On {new Date (date).toGMTString() }</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-dark">
                    Read More
                    </a>
                </div>
                </div>
            
      </div>  
      
    );
  }
}

export default NewsItem;
