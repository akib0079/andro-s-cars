import React from 'react';

const SummarySec = () => {
    return (
        < section className="summary" >
            <div className="container">
                <h2 className='text-center mb-5 brandsHeader'>Our Business Summary</h2>
                <div className="row text-center summaries">
                    <div className="col summaryInner">
                        <i className='bx bx-happy'></i>
                        <h4>100+<br></br>Customers</h4>
                    </div>
                    <div className="col summaryInner">
                        <i className='bx bx-trending-up' ></i>
                        <h4>120M+<br></br> Revenue</h4>
                    </div>
                    <div className="col summaryInner">
                        <i className='bx bx-calendar-star' ></i>
                        <h4>33K+<br></br> Reviews</h4>
                    </div>
                    <div className="col summaryInner">
                        <i className='bx bxs-car-mechanic'></i>
                        <h4>50+<br></br> Tools</h4>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SummarySec;