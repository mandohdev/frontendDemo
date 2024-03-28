import React from 'react';


const Body = () => {
    return (
        <div>
            <div> 
                <h1>Pricing</h1>
                <h3>You can get started for free, with zero upfront cost. We can also build you a custom contract, if you have unique requirements.</h3>
            </div>
            <div>
                <h1>Boxes</h1>
            </div>
            <div>
                <h1>Frequently asked</h1>
                <h2>Still have questions? Email <a href="mailto:hi@proofplatform.io">hi@proofplatform.io</a></h2>
            </div>
            <div class="dropdown">
                <button class="dropdown-btn">Select a Question</button>
                <div class="dropdown-content">
                    <a href="#">Question 1</a>
                    <a href="#">Question 2</a>
                    <a href="#">Question 3</a>
                </div>
            </div>
            <div id="answer">
                <p>Answer will appear here.</p>
            </div>

        </div>
    );
};

export default Body;