import React from "react";
import "./services.css";
import Line from "../components/Line.js";

import BannerLogo from "../asset/img/LogoBanner.png";
import BannerOverlay from "../asset/img/OverlayBanner.png";

import { useTranslation } from "react-i18next";
import ServicesCards from "../components/ServicesCards";

import { motion } from "framer-motion/dist/framer-motion";

const allServices = [
	{
		id: "1",
		image: BannerLogo,
		title: "services.logocard.title",
		descrition: "services.logocard.descrition",
		link: "/services/1",
	},
	{
		id: "2",
		image: BannerOverlay,
		title: "services.overlaycard.title",
		descrition: "services.overlaycard.descrition",
		link: "/services/2",
	},
];

function Services() {
	const [t] = useTranslation();

	return (
		<motion.section className="services">
			<h1>{t("services.title")}</h1>
			<Line />
			<p>{t("services.info")}</p>
			<div className="services-container">
				{allServices.map((servicesStatus) => {
					return (
						<ServicesCards
							key={servicesStatus.id}
							image={servicesStatus.image}
							title={t(servicesStatus.title)}
							descrition={t(servicesStatus.descrition)}
							link={servicesStatus.link}
						/>
					);
				})}
			</div>
		</motion.section>
	);
}

export default Services;
