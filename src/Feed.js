import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import db from "./firebase";

import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  // db.collection("posts")
  //   .orderBy("timestamp", "desc")
  //   .onSnapshot((snapshot) => {
  //     setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
  //   });

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            username={post.data.username}
            timestamp={post.data.timestamp}
            image={post.data.image}
          />
        );
      })}

      {/* <Post
        profilePic='https://scontent.fsac1-2.fna.fbcdn.net/v/t1.6435-9/127888375_218300336321987_6610281921678445672_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6Gj5JfmSBiQAX_D2mGa&_nc_ht=scontent.fsac1-2.fna&oh=d67abf1b74e0c7a8005a03c683d2704d&oe=61BE5403'
        message='Official Tiny Tucker collection available now!'
        username='Tucker Budzyn'
        timestamp='This is tucker timestamp'
        image='https://pbs.twimg.com/media/EoE81JpWEAABkwG.jpg'
      />

      <Post
        profilePic='https://scontent.fsac1-2.fna.fbcdn.net/v/t1.6435-9/55680146_10157229216648057_4295515389661544448_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ei5Z6rAkENIAX_T-J2L&_nc_ht=scontent.fsac1-2.fna&oh=bfce90a2feced874cb1c61eb6f7629b8&oe=61C4DE74'
        message='A new way to holiday. The Iced Sugar Cookie Almondmilk Latte has arrived. ✨'
        username='Starbucks'
        timestamp='This is timestamp'
        image='https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-6/p526x296/260316249_10159988647418057_6158355858306837096_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=U87Xe931-sUAX-nSCrS&_nc_ht=scontent.fsac1-2.fna&oh=f55c7bcd499132ad33e1a9320a82e652&oe=61A20E25'
      />

      <Post
        profilePic='https://scontent.fsac1-2.fna.fbcdn.net/v/t39.30808-1/p200x200/240873041_4216733091752553_7946246000069716009_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=563THV6gMJAAX9PXFkS&_nc_ht=scontent.fsac1-2.fna&oh=a3d42f6fb0973b6200cdcdda45305551&oe=619CC2EB'
        message='STOP making EXCUSES!!!😙 #irontherapy'
        username='Vikas Pal'
        timestamp='this is a timestamp'
      />

      <Post
        profilePic='https://scontent.fsac1-1.fna.fbcdn.net/v/t1.18169-9/10653282_10153339499914968_1892444343562191201_n.png?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=ZJoqo9IfuD0AX9VaHMQ&_nc_ht=scontent.fsac1-1.fna&oh=be635182f242253d6cdc6a3a4f57ec4c&oe=61BCFC7C'
        message='Stay Tuned for The Vampire Diaries Next Season'
        username='The Vampire Diaries'
        timestamp='this is timestamp'
        image='https://www.denofgeek.com/wp-content/uploads/2017/01/vampire-diaries-series-finale-nina-dobrev.jpg?fit=2000%2C1492'
      />

      <Post
        profilePic='https://scontent.fsac1-2.fna.fbcdn.net/v/t1.18169-9/10154300_10152378088732277_666138812986984185_n.png?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=RD1CoH_yndIAX8LXKA8&_nc_oc=AQli51RY3dH5B0LToeU9lCfRuwHJm0Wkvw_mGKKl2Rcmk59QuMUxsIxDVPXRbEwQvrs&_nc_ht=scontent.fsac1-2.fna&oh=dfdc5bd40b50346db25fa75b7a70fb4e&oe=61BBDFE0'
        message='The #HIMYM pilot aired 16 years ago today! Tell us your favorite episode in the comments 🎉'
        username='How I Met Your Mother'
        timestamp='this is timestamp'
        image='https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/242013367_10159528922297277_3423592409407397722_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=N76hOMNKDHoAX8SRSOg&_nc_ht=scontent.fsac1-1.fna&oh=7d0a8fd2b850aef4accd96fcd4a932a1&oe=619C8803'
      /> */}
    </div>
  );
}

export default Feed;
