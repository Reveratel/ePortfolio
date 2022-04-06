import React from "react";
import "./feedback.css";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

// import Swiper modules
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/a11y/a11y.scss";

import { Navigation, Scrollbar, Pagination } from "swiper";

import data from "../data/data.js";

const allFeedback = data.feedback;

function Feedback() {
	return (
		<Swiper
			className="feedback-container"
			// install Swiper modules
			modules={[Navigation, Scrollbar, Pagination]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
		>
			{allFeedback.map((feedbackStatus) => {
				return (
					<SwiperSlide className="single-feedback" key={feedbackStatus.id}>
						<img src={feedbackStatus.image} alt={feedbackStatus.altImg} />
						<h3>{feedbackStatus.name}</h3>
						<p>"{feedbackStatus.feedback}"</p>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

export default Feedback;