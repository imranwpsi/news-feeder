import React from 'react';
import { humanReadableTime } from '../../utils/commonFunction';

const NewsLeftItem = ({ newsInfo, index }) => {
    const newsHtml = () => {
        if (index === 0) {
            return (
                <div className="col-span-12 grid grid-cols-12 gap-4">
                    {/* -- info -- */}
                    <div className="col-span-12 lg:col-span-4">
                        <a href="#">
                            <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                                {newsInfo.title}
                            </h3>
                        </a>
                        <p className="text-base text-[#5C5955]">{newsInfo.description}</p>
                        <p className="mt-5 text-base text-[#5C5955]">
                            {humanReadableTime(newsInfo.publishedAt)}
                        </p>
                    </div>
                    {/* -- thumb -- */}
                    <div className="col-span-12 lg:col-span-8">
                        <img
                            className="w-full"
                            src={newsInfo.urlToImage}
                            alt="thumb"
                        />
                        <p className="mt-5 text-base text-[#5C5955]">
                            Illustration: {newsInfo.author}
                        </p>
                    </div>
                </div>
            );
        }
        else if (index === 1) {
            return (
                <div
                    className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8"
                >
                    {/* -- info -- */}
                    <div className="col-span-12 md:col-span-6">
                        <a href=""
                        >
                            <h3
                                className="mb-2.5 text-xl font-bold lg:text-2xl"
                            >
                                {newsInfo.title}
                            </h3>
                        </a>
                        <p className="text-base text-[#292219]">
                            {newsInfo.description}
                        </p>
                        <p className="mt-5 text-base text-[#5C5955]">
                            {humanReadableTime(newsInfo.publishedAt)}
                        </p>
                    </div>
                    {/* -- thumb -- */}
                    <div className="col-span-12 md:col-span-6">
                        <img
                            className="w-full"
                            src={newsInfo.urlToImage}
                            alt="thumb"
                        />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    {/* -- info -- */}
                    <div className="col-span-12 md:col-span-4">
                        <a href="#"
                        >
                            <h3
                                className="mb-2.5 text-xl font-bold lg:text-2xl"
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

export default NewsLeftItem;
