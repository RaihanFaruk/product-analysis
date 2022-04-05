import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20 mx-12'>
            <h1 className='font-bold text-2xl mb-11'>Questions And Answers</h1>
            <div>
            <h1 className='font-bold text-xl mb-5'>What is context api?</h1>
            <p> কন্টেক্সট এ,পি,আই প্রতিটি স্তরে ম্যানুয়ালি প্রপস ডাউন না করেই কম্পনেন্ট ট্রি এর মাধ্যমে ডেটা পাস করার একটি উপায় সরবরাহ করে। একটি সাধারণ রিঅ্যাক্ট অ্যাপ্লিকেশনে প্রপসের মাধ্যমে ডেটা আপ-ডাউন করে প্যারেন্টের  থেকে চাইল্ড এর কাছে পাস করা হয়, কিন্তু এই ধরনের ব্যবহার নির্দিষ্ট ধরনের প্রপসের জন্য কষ্টকর হতে পারে ,যেমন লোকাল প্রিফারেন্স বা UI থিম যা একটি অ্যাপ্লিকেশনের মধ্যে অনেক কম্পনেন্ট এর জন্য প্রয়োজন। প্রসঙ্গ ট্রির প্রতিটি স্তরের মধ্য দিয়ে স্পষ্টভাবে একটি প্রপস পাস না করে কম্পনেন্ট এর মধ্যে এই জাতীয় মানগুলি ভাগ করার একটি উপায় দিয়ে থাকে কন্টেক্সট এ,পি,আই ।</p>
            </div>
            <div className='my-10'>
            <h1 className='font-bold text-xl mb-5'>
            what is symantic tag?
            </h1>
            <p>
                
            </p>
            </div>
            <div>
                <h1 className='font-bold text-xl mb-5'>
                Defferent between inline , block , inlineBlock?
                </h1>
            </div>
        </div>
    );
};

export default Blog;
