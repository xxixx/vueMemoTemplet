const express = require('express')
const app = express()
const port = 3300
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cookieParser = require('cookie-parser')
app.use(cookieParser());
const jwt = require('jsonwebtoken');
const e = require('express');
// const databases = require('./databases');
const mysql = require('mariadb')
// const db = require('./db')
const jwtKey = "abc1234567";
const members = [
  {
      id: 3,
      name: "aaa",
      loginId: "aaa",
      loginPw: "111"
  },
  {
      id: 4,
      name: "bbb",
      loginId: "bbb",
      loginPw: "222"
  }
];
const memos =[ 
 
  ];
  app.get('/api/memos', (req,res)=>{
    res.send(memos)
  });
  app.post('/api/memos', (req,res)=>{
    memos.push(req.data)
    console.log("add")
    res.send(memos)
  });
  app.put('/api/memos/:index', (req,res)=>{
    
    console.log("edit req", req.body.editmemo)
    console.log("req.body", req.body)
    memos[req.params.index] = req.body.editmemo
    res.send(memos)
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })