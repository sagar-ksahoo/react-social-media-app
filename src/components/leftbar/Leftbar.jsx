import "./Leftbar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const Leftbar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="data:image/jpeg;base64,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"
              alt="user-pic"
            />
            <span>John Wick</span>
          </div>

          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>

          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>

          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>

          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>

          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>

          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>

          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>

          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>

          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>

          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
