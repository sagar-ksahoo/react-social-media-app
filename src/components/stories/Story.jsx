import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Story.scss";

const Story = () => {
  const { currUser } = useContext(AuthContext);

  //TEMPORARY DATA
  const stories = [
    {
      id: 1,
      name: "John Wick",
      img: "https://cdn.dribbble.com/users/3956699/screenshots/6982399/john_wick_dribble_4x.png",
    },
    {
      id: 2,
      name: "John Wick",
      img: "https://cdn.dribbble.com/users/3956699/screenshots/6982399/john_wick_dribble_4x.png",
    },
    {
      id: 3,
      name: "John Wick",
      img: "https://cdn.dribbble.com/users/3956699/screenshots/6982399/john_wick_dribble_4x.png",
    },
    {
      id: 4,
      name: "John Wick",
      img: "https://cdn.dribbble.com/users/3956699/screenshots/6982399/john_wick_dribble_4x.png",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currUser.dp} alt="story-img" />
        <span>{currUser.name}</span>
        <button>+</button>
      </div>

      {stories.map((story) => (
        <div className="story">
          <img src={story.img} alt="story-img" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Story;
