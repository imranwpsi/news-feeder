import React from 'react';
import NewsLeftItem from './NewsLeftItem';
import NewsRightItem from './NewsRightItem';

function NewsMain({ newsData, isLoading, error }) {
    if (isLoading) {
        return <p className="loading">Loading News...</p>;
    }

    if (error) {
        return <p className="error">Error: {error.message}</p>;
    }

    // Separate left-side and right-side records
    const leftSideRecords = newsData.filter((record, index) => index % 2 !== 0);
    const rightSideRecords = newsData.filter((record, index) => index % 2 === 0);

    return (
        <main className="my-10 lg:my-14">
            <div className="container mx-auto grid grid-cols-12 gap-8">
                {/* -- left -- */}
                <div
                    className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8"
                >
                    {leftSideRecords.map((item, index) => (
                        <NewsLeftItem key={item.source.id} index={index} newsInfo={item} />
                    ))}
                    
                </div>


                {/* -- right -- */}
                <div className="col-span-12 self-start xl:col-span-4">
                    <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                        {rightSideRecords.map((item, index) => (
                            <NewsRightItem key={item.source.id} index={index} newsInfo={item} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NewsMain;
