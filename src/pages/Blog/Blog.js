import React, { useEffect } from 'react';
import "./Blog.css"

const Blog = ({setNotFoundPage}) => {
    setNotFoundPage(false);
    useEffect(()=>{
        document.body.style = 'background:black;';
    },[])
    return (
        <div className='blog mx-auto mt-4 text-center'>
            <h2 className='mb-4'> Blogs</h2>
            <div>
                <p> <strong className='pe-3 ques'>Ques: </strong> Difference between Javascript and nodejs</p>
                <p> <strong className='pe-3 ans'>Ans: </strong>
                    "The main difference between javascript and nodejs is, javascript is a programming language whiel nodejs is a interpreter or environment for javascript. Javascript is a client side language which can run on browser, but nodejs is a server side environment which use v8 engine along with some c++ combination to do server side works like serve data transfer, listen and response to req and provide apis for proper functionality of the client side work.
                    Mainly Javascript is a programming language which is very light weight and run on browser using some engines like chakra, V8 or some. While nodejs is an environment for running javascript in server side while use V8 engien and make a environment so javascript can also run locally."
                </p>

                <p> <strong className='pe-3 ques'>Ques: </strong>When should you use nodejs and when should you use mongodb
                </p>
                <p> <strong className='pe-3 ans'>Ans: </strong>
                "Nodejs is an runtime engine for javascript and mongodb is a nosql database. Database is mainly used for storing data and do CRUD opperation on it. when we need to listen, response and process some infromation form the client side, we will use nodejs. When need to save some data provided by client or other source, we will use mongodb. Along with storing data, mongodb also provides some additional features but its out of our scope of consideration now. Main take-away is to run server will use nodejs and to store data in nosql formal will use mongodb. "
                </p>

                <p> <strong className='pe-3 ques'>Ques: </strong>Differences between sql and nosql databases.
                </p>
                <p> <strong className='pe-3 ans'>Ans: </strong>
                "sql is structured query language where every data is formatted in row and column and related to each other, thats why its called relational database manage system.
                On the other hand, NoSql or non-sql is a database which technically stores JSON like object where the datas are not formatted in row and columns. NoSql database is more flexible and can change the formate any time on the go. But in Sql before passing the data, need do defined, hwo the data will be formatted in the database following row and column. But should consider also that Sql is best for complex queries where no-sql is not."
                
                </p>


                <p> <strong className='pe-3 ques'>Ques: </strong>What is the purpose of jwt and how does it work.
                </p>
                <p> <strong className='pe-3 ans'>Ans: </strong>
                "JWT stands for jesson web token which is mainly used for authorization. We can provide unique JWT to each or our client or user of the web with expiry time. If the client while requesting sensitive data can't provide the proper token, will be considered as a unauthorized access. This will prevent the data steal and web will be more secure. Jwt is made usign best open source and industry standard algorith so its quite hard to decode by unauthoried personal. "
                </p>
            </div>
        </div>
    );
};

export default Blog;