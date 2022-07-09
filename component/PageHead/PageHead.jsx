import React from "react";
import styles from "../../styles/Home.module.sass";
import buyLikesStyles from "../../styles/BuyLikes.module.sass";
import { ButtonComponent} from "../ButtonComponent/ButtonComponent";
import { useRouter } from "next/router";

const content = {
	likes: {
		title: "BUY INSTAGRAM LIKES",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/buyLikesPhoto.webp",
		alt: "Buy Instagram Likes",
		type: "instagram"
	},
	followers: {
		title: "BUY INSTAGRAM FOLLOWERS",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta " +
			"likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/buyLikesPhoto.webp",
		alt: "Buy Instagram Followers",
		type: "instagram"
	},
	autoLikes: {
		title: "AUTOMATIC INSTAGRAM LIKES",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta " +
			"likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/buyLikesPhoto.webp",
		alt: "Automatic Instagram Likes",
		type: "instagram"
	},
	views: {
		title: "BUY INSTAGRAM VIEWS",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta " +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/buyLikesPhoto.webp",
		alt: "Buy Instagram Views",
		type: "instagram"
	},
	comments: {
		title: "BUY INSTAGRAM COMMENTS",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			"likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/buyLikesPhoto.webp",
		alt: "Buy Instagram Comments",
		type: "instagram"
	},
	"free-followers": {
		title: "FREE INSTAGRAM FOLLOWERS",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta " +
			"likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/buyLikesPhoto.webp",
		alt: "Free Instagram Followers",
		type: "instagram"
	},
	"free-likes": {
		title: "FREE INSTAGRAM LIKES",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/buyLikesPhoto.webp",
		alt: "Free Instagram Likes",
		type: "instagram"
	},
	"youtube-views": {
		title: "YOUTUBE VIEWS",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/youtubePhoto.webp",
		alt: "Buy Youtube Views",
		type: "youtube"
	},
	"youtube-likes": {
		title: "YOUTUBE LIKES",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/youtubePhoto.webp",
		alt: "Buy Youtube Likes",
		type: "youtube"
	},
	"youtube-comments": {
		title: "YOUTUBE COMMENTS",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/youtubePhoto.webp",
		alt: "Buy Youtube Comments",
		type: "youtube"
	}
}

const PageHead = ({ page }) => {
	const { push, pathname } = useRouter();

	const { title, text, image, alt, type } = content[page];

	return (
		<div className={styles.phone}>
			<img
				src={image}
				alt={alt}
				className={styles.instagramImg}
			/>
			<div className={buyLikesStyles.mainTitle}>
				<p className={buyLikesStyles.title}>{title}</p>
				<p className={buyLikesStyles.text}>{text}</p>
				<ButtonComponent
					text={"Leave Feedback"}
					type={type}
					onClick={() => push(`/${pathname}#comment`)}
					style={undefined}
					typeInput={undefined}
					disabled={undefined}
					id={undefined}
				/>
			</div>
		</div>
	);
}

export default PageHead;
