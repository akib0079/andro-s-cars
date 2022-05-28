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
                                <h3>How will you improve the performance of a React Application ?</h3>
                                <p>For good React application performance we should use low resolution image and optimize able css animations. Avoid unnecessary props rendering. All component handle locally if possible.We should pass only the relevant value to Main instead of the style object.Unlike the previous performance technique where refactoring our code gives us a performance boost, here we trade memory space for time. So, we must only memoize a component when necessary.</p>
                            </div>
                            <div className="ques">
                                <h3> What are the different ways to manage a state in a React application ?</h3>
                                <p>There is a many kind of ways to manage state in React application. For example (Local state ,Global state, Server state) URL state Local state is most often managed in React using the useState hook. Globaly state use when we need to update data in our application. the server state use when we integrated with from an external server. URL data hold all data over the url or pathname in our application.</p>
                            </div>
                            <div className="ques">
                                <h3>What is a unit test? Why should write unit tests ?</h3>
                                <p>Unit testing is a way to check our code performance.The purpose is to validate that each unit of the software code performs as expected. Unit testing usually use a developer when applcation develop by user. When developer develop for a application section or a funciton for test. Unit Testing has tow types :
                                    Manual
                                    Automated</p>
                            </div>
                            <div className="ques">
                                <h3>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name ?</h3>
                                <p>If i have an array of products. I can find prodcut by the product name. first i need to use JavaScript Array method of filter()all products. then each prodcut come and filtered by search keyword in product name. for doing this ,we need includes() funciton for finding the product by product name.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;