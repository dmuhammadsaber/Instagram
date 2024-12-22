import "./MiddlSide.css";
import ImgStory from "../assets/palestineImg.jpg";
import ImgStory1 from "../assets/palestine2.webp";
import align from "../assets/palestine3.webp";
import falestineSt from "../assets/palestine4.webp";
import falestineSt2 from "../assets/palestine5.jpg";
import falestineSt3 from "../assets/palestine6.webp";
import falestineSt4 from "../assets/palestine7.jpg";
import msaber from "../assets/mmsaber.jpg";
import palestinePost from "../assets/postPalestine.jpg";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { LuBookmark } from "react-icons/lu";

const MiddlSide = () => {
  return (
    <div className="middleSide">
      <div className="storyBlock">
        <div className="storyParticular">
          <div className="imageStory">
            <img className="statusImg" src={ImgStory} alt="story" />
          </div>
          <div className="nameProfile">Palestine</div>
        </div>

        <div className="storyParticular">
          <div className="imageStory">
            <img className="statusImg" src={ImgStory1} alt="story" />
          </div>
          <div className="nameProfile">Palestine</div>
        </div>

        <div className="storyParticular">
          <div className="imageStory">
            <img className="statusImg" src={align} alt="story" />
          </div>
          <div className="nameProfile">Palestine</div>
        </div>

        <div className="storyParticular">
          <div className="imageStory">
            <img className="statusImg" src={falestineSt} alt="story" />
          </div>
          <div className="nameProfile">Palestine</div>
        </div>

        <div className="storyParticular">
          <div className="imageStory">
            <img className="statusImg" src={falestineSt2} alt="story" />
          </div>
          <div className="nameProfile">Palestine</div>
        </div>

        <div className="storyParticular">
          <div className="imageStory">
            <img className="statusImg" src={falestineSt3} alt="story" />
          </div>
          <div className="nameProfile">Palestine</div>
        </div>

        <div className="storyParticular">
          <div className="imageStory">
            <img className="statusImg" src={falestineSt4} alt="story" />
          </div>
          <div className="nameProfile">Palestine</div>
        </div>

        <div className="storyParticular">
          <div className="imageStory">
            <img className="statusImg" src={ImgStory} alt="story" />
          </div>
          <div className="nameProfile">Palestine</div>
        </div>

        <div className="storyParticular">
          <div className="imageStory">
            <img className="statusImg" src={ImgStory1} alt="story" />
          </div>
          <div className="nameProfile">Palestine</div>
        </div>

        <div className="storyParticular">
          <div className="imageStory">
            <img className="statusImg" src={align} alt="story" />
          </div>
          <div className="nameProfile">Palestine</div>
        </div>
      </div>

      <div className="postSection">
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src={msaber} alt="post" />

            <div className="postInfoUser">mmsaber_</div>
            <div className="timingInfo">. 48m</div>
          </div>
          <div className="postImg">
            <img className="postImge" src={palestinePost} alt="mm" />
          </div>
          <div className="iconBlock">
            <div className="leftIcon">
              <FaRegHeart sx={{ fontSize: "25px" }} />
              <FaRegComment sx={{ fontSize: "25px" }} />
              <LuSend sx={{ fontSize: "25px" }} />
            </div>
            <div>
              <LuBookmark sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike"></div>
            <img className="likeImg" src={msaber} alt="like" />
            <img className="likeImg2" src={msaber} alt="like" />
            <div className="nolikes">122,111 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Palestine</div>
            <div className="infoComment">Happy day !! ..</div>
          </div>
          <div className="noOfComment">View All 543 Comments...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src={msaber} alt="post" />

            <div className="postInfoUser">mmsaber_</div>
            <div className="timingInfo">. 48m</div>
          </div>
          <div className="postImg">
            <img className="postImge" src={palestinePost} alt="mm" />
          </div>
          <div className="iconBlock">
            <div className="leftIcon">
              <FaRegHeart sx={{ fontSize: "25px" }} />
              <FaRegComment sx={{ fontSize: "25px" }} />
              <LuSend sx={{ fontSize: "25px" }} />
            </div>
            <div>
              <LuBookmark sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike"></div>
            <img className="likeImg" src={msaber} alt="like" />
            <img className="likeImg2" src={msaber} alt="like" />
            <div className="nolikes">122,111 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Palestine</div>
            <div className="infoComment">Happy day !! ..</div>
          </div>
          <div className="noOfComment">View All 543 Comments...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src={msaber} alt="post" />

            <div className="postInfoUser">mmsaber_</div>
            <div className="timingInfo">. 48m</div>
          </div>
          <div className="postImg">
            <img className="postImge" src={palestinePost} alt="mm" />
          </div>
          <div className="iconBlock">
            <div className="leftIcon">
              <FaRegHeart sx={{ fontSize: "25px" }} />
              <FaRegComment sx={{ fontSize: "25px" }} />
              <LuSend sx={{ fontSize: "25px" }} />
            </div>
            <div>
              <LuBookmark sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike"></div>
            <img className="likeImg" src={msaber} alt="like" />
            <img className="likeImg2" src={msaber} alt="like" />
            <div className="nolikes">122,111 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Palestine</div>
            <div className="infoComment">Happy day !! ..</div>
          </div>
          <div className="noOfComment">View All 543 Comments...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src={msaber} alt="post" />

            <div className="postInfoUser">mmsaber_</div>
            <div className="timingInfo">. 48m</div>
          </div>
          <div className="postImg">
            <img className="postImge" src={palestinePost} alt="mm" />
          </div>
          <div className="iconBlock">
            <div className="leftIcon">
              <FaRegHeart sx={{ fontSize: "25px" }} />
              <FaRegComment sx={{ fontSize: "25px" }} />
              <LuSend sx={{ fontSize: "25px" }} />
            </div>
            <div>
              <LuBookmark sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike"></div>
            <img className="likeImg" src={msaber} alt="like" />
            <img className="likeImg2" src={msaber} alt="like" />
            <div className="nolikes">122,111 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Palestine</div>
            <div className="infoComment">Happy day !! ..</div>
          </div>
          <div className="noOfComment">View All 543 Comments...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src={msaber} alt="post" />

            <div className="postInfoUser">mmsaber_</div>
            <div className="timingInfo">. 48m</div>
          </div>
          <div className="postImg">
            <img className="postImge" src={palestinePost} alt="mm" />
          </div>
          <div className="iconBlock">
            <div className="leftIcon">
              <FaRegHeart sx={{ fontSize: "25px" }} />
              <FaRegComment sx={{ fontSize: "25px" }} />
              <LuSend sx={{ fontSize: "25px" }} />
            </div>
            <div>
              <LuBookmark sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike"></div>
            <img className="likeImg" src={msaber} alt="like" />
            <img className="likeImg2" src={msaber} alt="like" />
            <div className="nolikes">122,111 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Palestine</div>
            <div className="infoComment">Happy day !! ..</div>
          </div>
          <div className="noOfComment">View All 543 Comments...</div>
        </div>
        <div className="post">
          <div className="postInfo">
            <img className="postInfoImg" src={msaber} alt="post" />

            <div className="postInfoUser">mmsaber_</div>
            <div className="timingInfo">. 48m</div>
          </div>
          <div className="postImg">
            <img className="postImge" src={palestinePost} alt="mm" />
          </div>
          <div className="iconBlock">
            <div className="leftIcon">
              <FaRegHeart sx={{ fontSize: "25px" }} />
              <FaRegComment sx={{ fontSize: "25px" }} />
              <LuSend sx={{ fontSize: "25px" }} />
            </div>
            <div>
              <LuBookmark sx={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="likeSection">
            <div className="imagesLike"></div>
            <img className="likeImg" src={msaber} alt="like" />
            <img className="likeImg2" src={msaber} alt="like" />
            <div className="nolikes">122,111 Likes</div>
          </div>
          <div className="postAbout">
            <div className="postAboutName">Palestine</div>
            <div className="infoComment">Happy day !! ..</div>
          </div>
          <div className="noOfComment">View All 543 Comments...</div>
        </div>
      </div>
    </div>
  );
};

export default MiddlSide;
