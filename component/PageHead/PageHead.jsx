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
