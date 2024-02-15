import React from 'react';
import { humanReadableTime } from '../../utils/commonFunction';

const NewsRightItem = ({ newsInfo, index }) => {
    const newsHtml = () => {
        if (index === 0) {
            return (
                <div className="col-span-12 mb-6 md:col-span-8">
                    <img
                        className="w-full"
                        src={newsInfo.urlToImage ?? "./assets/thumb.png"}
                        alt="thumb"
                    />
                    {/* -- info -- */}
                    <div className="col-span-12 mt-6 md:col-span-4">
                        <a href="#"
                        >
                            <h3
                                className="mb-2.5 text-xl font-bold lg:text-[20px]"
                            >
                                {newsInfo.title}
                            </h3>
                        </a>
                        <p className="text-base text-[#292219]">
                            {newsInfo.description}
                        </p>
                        <p className="mt-5 text-base text-[#94908C]">
                            {humanReadableTime(newsInfo.publishedAt)}
                        </p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="col-span-12 md:col-span-8">
                    {/* -- info -- */}
                    <div className="col-span-12 md:col-span-4">
                        <a href="#"
                        >
                            <h3
                                className="mb-2.5 text-xl font-bold lg:text-[20px]"
                            >
                                {newsInfo.title}
                            </h3>
                        </a>
                        <p className="text-base text-[#292219]">
                            {newsInfo.description}
                        </p>
                        <p className="mt-5 text-base text-[#94908C]">
                            {humanReadableTime(newsInfo.publishedAt)}
                        </p>
                    </div>
                </div>
            )
        }
    };

    return (
        <>
            {newsHtml()}
        </>
    );
};

export default NewsRightItem;
