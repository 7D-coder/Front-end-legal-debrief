import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import { useParams } from "react-router-dom";
import React, {useEffect,useState} from 'react';
import { getTotalPosts } from "../../api/posts";



export default function Single() {
  const params = useParams();
  const postId = params.postId;
  // console.log(postId);
  const [totalPosts, setTotalPost] = useState([]);
  const [postCount, setPostCount] = useState([]);
  const fetchPosts = async () => {
    const totalPosts= await getTotalPosts();
    setTotalPost(totalPosts);
    setPostCount(totalPosts.posts.length);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  var ptitle;
  var pslug;
  var pimg;
  var pcontent="Lorem, changed dolor sit amet consectetur adipisicing elit. Voluptates asperiores eius autem dolores doloremque repellat enim, reprehenderit, incidunt recusandae voluptatum eveniet sapiente neque ut nisi eos minus, sit cumque. Unde! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores eius autem dolores doloremque repellat enim, reprehenderit, incidunt recusandae voluptatum eveniet sapiente neque ut nisi eos minus, sit cumque. Unde! Lorem, changed dolor sit amet consectetur adipisicing elit. Voluptates asperiores eius autem dolores doloremque repellat enim, reprehenderit, incidunt recusandae voluptatum eveniet sapiente neque ut nisi eos minus, sit cumque. Unde! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores eius autem dolores doloremque repellat enim, reprehenderit, incidunt recusandae voluptatum eveniet sapiente neque ut nisi eos minus, sit cumque. Unde! ";
  
  
  if(postCount!=0){
    console.log("inside if condition");
    totalPosts.posts.map(post => {
      if(postId==post.id){
         ptitle=post.title;
         pslug=post.slug;
         pimg=post.thumbnail;
      }
    }) 
  }

  return (
    <div>
      {postCount?
      <div>
      <SinglePost key={pslug} id={postId} title={ptitle} img={pimg} content={pcontent}></SinglePost>
      <Sidebar/>
      </div>
      :<h1>NO POST</h1>
      }
    </div>
  
  
  
  );
 
 
 
}
