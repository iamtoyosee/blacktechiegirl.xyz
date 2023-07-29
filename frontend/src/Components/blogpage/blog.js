import React from "react";
import Navbar from "../Navbar/navabar";
// import Proto1 from "../../assets/blogimage1.avif";
import Proto6 from "../../assets/proto6.jpg";
import Proto1 from "../../assets/cyber1 (5).jpg";


const BlogPage = () => {



    return (
        <div>
            <Navbar />
            <div className="max-w-screen-xl  mx-auto py-10">
                <div className="px-3">
                <p className="text-gray-400 font-bold pt-[50px] pb-2 text-xl ">category</p>
                <h1 className="font-bignote text-[30px] md:text-[60px] font-bold ">Divide and Conquer Algorithms with Python Examples</h1>
                </div>
                <div className="">
                    <div className="flex my-5 px-3">

                        <img src={Proto6} className="h-[100px]  w-[100px] rounded-full  object-cover object-center border-2 p-1 border-[#d6a419] duration-500 ease-in" />
                        <div className="m-5">
                            <p className="font-lvreg font-bold text-2xl">BlackTechieGirl</p>
                            <p className="text-gray-400 ">Jun 22, 2023 • 13 min read</p>


                        </div>
                    </div>
                    <img
                        src={Proto1}
                        alt="product "
                        className="h-[400px] mb-10 w-full object-cover object-top cursor-pointer "
                    />

                </div>

                <div className="font-lvreg text-2xl px-2">
                    <p className="py-4" >Often I&rsquo;ll hear about how you can optimise a for loop to be faster or how switch statements are faster than if statements. Most computers have over 1 core, with the ability to support multiple threads. Before worrying about optimising for loops or if statements try to attack your problem from a different angle.</p>
                    <hr ></hr>
                    <p className="py-4">Divide and Conquer is one way to attack a problem from a different angle. Don&rsquo;t worry if you have zero experience or knowledge on the topic. This article is designed to be read by someone with very little programming knowledge.</p>
                    <hr ></hr>
                    <p className="py-4">I will explain this using 3 examples. The first will be a simple explanation. The second will be some code. The final will get into the mathematical core of divide and conquer techniques. (Don&rsquo;t worry, I hate maths too).</p>
                    <hr ></hr>
                    <p className="py-4">What Is Divide and Conquer? &#55356;&#57102; Divide and conquer is where you divide a large problem up into many smaller, much easier-to-solve problems. The rather small example below illustrates this.</p>
                    <hr ></hr>
                    <p className="py-4">What Is Divide and Conquer? &#55356;&#57102; Divide and conquer is where you divide a large problem up into many smaller, much easier-to-solve problems. The rather small example below illustrates this.</p>

                    <p className="py-4">3+6+2+4 is divided into 3+6 and 2+4 We take the equation &ldquo;3 + 6 + 2 + 4&rdquo; and cut it down into the smallest set of equations, which is [3 + 6, 2 + 4]. It could also be [2 + 3, 4 + 6]. The order doesn&rsquo;t matter, as long as we turn this one long equation into many smaller equations.</p>

                    <p className="py-4">Let&rsquo;s say we have 8 numbers:</p>

                    <p className="py-4"> We want to add them all together. We first divide the problem into 8 equal sub-problems. We do this by breaking the addition up into individual numbers.</p>

                    <p className="py-4"> We then add 2 numbers at a time.</p>

                    <p className="py-4"> Then 4 numbers into 8 numbers which is our resultant.</p>

                    <p className="py-4"> Why do we break it down to individual numbers at stage 1? Why don&rsquo;t we just start from stage 2? Because while this list of numbers is even if the list was odd you would need to break it down to individual numbers to better handle it.</p>

                    <p className="py-4">A divide and conquer algorithm tries to break a problem down into as many little chunks as possible since it is easier to solve with little chunks. It does this with recursion.</p>
                </div>
            </div>

        </div>
    )
}


export default BlogPage;