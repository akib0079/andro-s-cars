import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blogPage'>
            <section className="blogHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='a_title'>My Blogs</h2>
                        </div>
                    </div>
                </div>
            </section>

            <div className="questions">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ques">
                                <h3>Difference between authorization and authentication?</h3>
                                <p>The main difference between authentication and authorization is one is the process of verifying a user or someone and other one is the process what kind access does the verified user have. Morally Authentication is done before the authorization process. Common example of authentication is when we login to a specific website, on the other hand what kind of file or page access  the user would have is the process of authorization.</p>
                            </div>
                            <div className="ques">
                                <h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
                                <p>One of most useful things in firebase is It makes the process of syncing data across Android ISO and Web much easier. Beside that it has the advantage of cloud server configuration.  It is much easier to implement third party provider like facebook and github. Beside firebase we have Auth0, Passport, Okta, Firebase etc as a authentication  alternative.</p>
                            </div>
                            <div className="ques">
                                <h3>What other services does firebase provide other than authentication?</h3>
                                <p>Beside authentication firebase provides:</p>
                                <ul>
                                    <li>Cloud fire-store.</li>
                                    <li>Cloud function.</li>
                                    <li>Hosting.</li>
                                    <li>Cloud messaging.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;