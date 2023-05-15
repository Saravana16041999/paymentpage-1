import { useDispatch, useSelector } from "react-redux";
import { Active, Disable, Limited } from "../Icons/Icons";
import {
  ActiveSecondOne,
  ActiveFirstOne,
  ActiveThirdtOne,
} from "../featurs/Course/CourseSlice";
const RightContent = () => {
  const dispatch = useDispatch();

  const { Firstone, Secondone, Thirdone } = useSelector(
    (state) => state.courses
  );

  let total;
  let discount;
  const AllTotal = (one, two, three) => {
    if (one.isActive) {
      total = one.price;
      discount = one.discount;
    } else if (two.isActive) {
      total = two.price;
      discount = two.discount;
    } else {
      total = three.price;
      discount = three.discount;
    }
  };

  AllTotal(Firstone, Secondone, Thirdone);

  return (
    <section className="right-content">
      <div className="user-container">
        <div className="user">
          <button>1</button>
          <p className="user-content">Sign Up</p>
        </div>
        <div className="user">
          <button>2</button>
          <p className="user-content">Subscribe</p>
        </div>
      </div>
      <h3>Select your subcription plan</h3>
      <button id="course-sub" className="disable">
        <div htmlFor="checkbox" className="checkbox-name">
          <div>
            <Disable />
          </div>
          <h4>12 Months Subscription</h4>
        </div>
        <div className="total">
          <p>Total ₹99</p>
          <small className="mo">
            ₹8/<span>mo</span>
          </small>
        </div>
        <small className="tag tag1">Offer expired</small>
      </button>
      <button
        id="course-sub"
        className={Firstone.isActive ? "active" : "none"}
        onClick={() => {
          dispatch(ActiveFirstOne());
        }}
      >
        <div htmlFor="checkbox" className="checkbox-name">
          <div className="tick">{Firstone.isActive && <Active />}</div>
          <h4>12 Months Subscription</h4>
        </div>
        <div className="total">
          <p>Total ₹179</p>
          <small>
            ₹15/<span>mo</span>
          </small>
        </div>
        <small className="tag tag2">Recommended</small>
      </button>
      <button
        id="course-sub"
        className={Secondone.isActive ? "active" : "none"}
        onClick={() => {
          dispatch(ActiveSecondOne());
        }}
      >
        <div htmlFor="checkbox" className="checkbox-name">
          <div className="tick">{Secondone.isActive && <Active />}</div>
          <h4>6 Months Subscription</h4>
        </div>
        <div className="total">
          <p>Total ₹149</p>
          <small>
            ₹25/<span>mo</span>
          </small>
        </div>
      </button>
      <button
        id="course-sub"
        className={Thirdone.isActive ? "active" : "none"}
        onClick={() => {
          dispatch(ActiveThirdtOne());
        }}
      >
        <div className="checkbox-name">
          <div className="tick">{Thirdone.isActive && <Active />}</div>
          <h4>3 Months Subscription</h4>
        </div>
        <div className="total">
          <p>Total ₹99</p>
          <small>
            ₹33/<span>mo</span>
          </small>
        </div>
      </button>
      <div className="bar"></div>
      <div className="Subscription">
        <p>Subscription Fee</p>
        <span>₹{total}</span>
      </div>
      <div className="Limited-offer">
        <h4>
          Limited time offer
          <span>
            <Limited /> Offer valid till 25th March 2023
          </span>
        </h4>
        <p>- ₹{discount}</p>
      </div>
      <div className="total-gst">
        <h4>
          Total<span>(Inc.of 18% GST)</span>
        </h4>
        <h3>₹149</h3>
      </div>
      <div className="btn-contain">
        <button className="cancle-btn">CANCLE</button>
        <button className="pay-btn">PROCEED TO PAY</button>
      </div>
      <div className="image-end">
        <img src="./images/Frame12537.png" alt="Razorpay" />
      </div>
    </section>
  );
};

export default RightContent;
