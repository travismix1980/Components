import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";

import './App.css';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h2 className="Warning">Warning!</h2>
                <p>Are you sure?</p>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={Faker.image.avatar()}
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice Post!"
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    avatar={Faker.image.avatar()}
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    content="Thumbs Up!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={Faker.image.avatar()}
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    content="That's Amazing!"
                />
            </ApprovalCard>

        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"));