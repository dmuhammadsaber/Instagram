import "./RightSide.css";
import msaber from "../assets/mmsaber.jpg";


const RightSection = () => {
  return (
    <div className='rightSideHome'>
      <div className='topProfileRight'>
        <div className='leftRightProfile'>
          <div className="imageDivRightSide">
            <img className='imageRightSideProfile' alt='/' src={msaber} />
          </div>
        </div>
        <div className='userNameBlock'>
          <div className='userNameRightSide'>_mosaber</div>
          <div className='userFullName'>Muhammad Saber</div>
        </div>
        <div className='switchBtn'>
          Switch
        </div>
      </div>
      <div className='bottomRightSide'>
        <div className='suggestedBlock'>
          <div className='suggestedForYou'>suggested For You</div>
          <div className='seeAll'>See All</div>
        </div>
        <div className='followBlockRightSide'>
          <div className='topProfileRight'>
            <div className='leftRightProfile'>
              <div className='imageDivRightSide'>
                <img className='imageRightSideProfile' src={msaber} alt='/' />
              </div>
              <div className='userNameBlock'> _mosaber</div>
              <div className='userFullName'>New Account</div>
              <div className='switchBtn'>Follow</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSection;