'use strict';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

const Blogs =$('#Blogs');
const Posts =$('#Posts');
const previous = $('#previous');
const next = $('#next');
const page =$('#page');
const control =$('.control');
let openComments;
const PostPerPage=3;
let currentPageNumber = 1;
let Pages =[];



fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...Failed to fetch the blog');
        }
      })
      .then(users => {
          users.forEach(user => {
            const blog = $(`
             <div class="col-sm-6">
               <div class="card">
                 <div class="card-body" >
                   <h5 class="card-title">${user.name}</h5>
                   <a href="#" class="card-link">${user.website}</a>
                   <p class="card-text">${user.company.name}</p>
                   <p class="card-text">${user.company.catchPhrase}</p>
                   <p class="card-text">${user.company.bs}</p>
                </div>
               </div>
               </div>
             `)
                .appendTo(Blogs);
                blog.click(()=>{
                    Blogs.css('display', 'none');
                    displayUserPost(user);
                });              
            });
        })      

function getUsersPost(user){
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...Failed to fetch the blog');
        }
      })
    .then(posts => {
        $('#header').text(`Welcome to ${user.name}'s Blog`);
            posts.forEach(post => {
            Pages.push({Title: post.title, Body: post.body, Id: post.id});
            loadPost();           
        });               
    });
}
function displayUserPost(user){
    getUsersPost(user);
    control.css("display" , "block");
    loadPost();
    previous.click(()=>{
        if(currentPageNumber > 1){
            currentPageNumber -= 1;
            loadPost();
            $('#comments').empty();
        }
    });
    
    next.click(()=>{
        if(currentPageNumber < getNumberOfPages()){
            currentPageNumber += 1;
            loadPost();
        }    
    });
}
function loadPost() {
    Posts.html("");
    const begin = ((currentPageNumber - 1) * PostPerPage);
    const end = begin + PostPerPage;
    const i = Pages.slice(begin, end)
    page.text("Page: " + currentPageNumber);        
    i.forEach(post=>{
        $( `<div id = "post" class="list-group-item list-group-item-action"> 
                <h2 class="mb-1">${post.Title}</h2>
                <p class="mb-1">${post.Body}</p>
                <button id="ShowHideComments"  class="btn btn-primary btn-sm text-right"> Show comments</button>
                <div id="comments"  class="list-group"></div
            </div>`).appendTo(Posts)
        .click(()=>{
            //when click on the post it gets the right comments but appends the comments to the first post on that page 
            //the id selectors are not working

            let button = $('.post').find('button');
            if(button.text() == 'Hide Comments'){
                button.text('Show Comments');
            } 
            else{
                button.text('Hide Comments');
            }
            const comments = $('#comments');
            if (!openComments) {       
                openComments = true;
                ShowComments(post,comments);                                          
                comments.css('display','block');
            }
            else {
                comments.css('display','none');
                openComments =false;
            }
        })
    })
}
function getNumberOfPages() {
    return Math.ceil(Pages.length / PostPerPage);
}
function ShowComments(post,commentdiv){
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.Id}`)
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...Failed to fetch the blog');
        }
      })
    .then(comments => {
        commentdiv.empty();
        comments.forEach(comment => {
            console.log(comment);
                const com =$(`<div class="list-group-item list-group-item-action " > 
                   <h5 class="mb-1">${comment.name}  </h5>
                   <p class="mb-1"> ${comment.body}</p>
                   <small>${comment.email}</small>
                   </div>`);
                commentdiv.append(com);
        })
    })
}
