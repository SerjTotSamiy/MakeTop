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
	},
	"tiktok-followers": {
		title: "TIKTOK FOLLOWERS",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/tiktokPhoto.webp",
		alt: "Buy Tiktok Followers",
		type: "tiktok"
	},
	"tiktok-likes": {
		title: "TIKTOK LIKES",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/tiktokPhoto.webp",
		alt: "Buy Tiktok Likes",
		type: "tiktok"
	},
	"tiktok-views": {
		title: "TIKTOK VIEWS",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/tiktokPhoto.webp",
		alt: "Buy Tiktok Views",
		type: "tiktok"
	},
	"twitter-followers": {
		title: "TWITTER FOLLOWERS",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/twitterPhoto1.webp",
		alt: "Buy Twitter Followers",
		type: "twitter"
	},
	"twitter-post-likes": {
		title: "TWITTER LIKES",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/twitterPhoto1.webp",
		alt: "Buy Twitter Post Likes",
		type: "twitter"
	},
	"facebook-likes": {
		title: "FACEBOOK LIKES",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/facebookImg1.svg",
		alt: "buy facebook page likes",
		type: "facebook"
	},
	"spotify-followers": {
		title: "SPOTIFY PLAYLIST FOLLOWERS",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/spotifyPhoto.png",
		alt: "buy spotify playlist followers",
		type: "spotify"
	},
	"vk-followers": {
		title: "VK GROUP FOLLOWERS",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/vkPhoto.webp",
		alt: "buy vk group followers",
		type: "vk"
	},
	"vk-likes": {
		title: "VK POST LIKES",
		text: "Where you can buy cheap likes for Instagram photos and videos. Buy real Insta" +
			" likes for the most reasonable prices here and grow your Instagram popularity in a flash!",
		image: "/vkPhoto.webp",
		alt: "buy vk group likes",
		type: "vk"
	}
}

const PageHead = ({ page }) => {
	const { push, pathname } = useRouter();

	const { title, text, image, alt, type } = content[page];

	return (
		<div className={type === 'twitter' || type === 'spotify' || type === 'vk' ? styles.phone2 : styles.phone}>
			{type === 'twitter' || type === 'spotify' || type === 'vk'
				? null
				: <img
					src={image}
					alt={alt}
					className={type === 'facebook' ? styles.facebookImg1 : styles.instagramImg}
				/>
			}
			{type === 'facebook'
				? <>
					<img
						src="/facebookImg2.svg"
						alt="get facebook page likes"
						className={styles.facebookImg2}
					/>
					<img
						src="/facebookImg3.svg"
						alt="buy more facebook page likes"
						className={styles.facebookImg3}
					/>
					<img
						src="/facebookImg4.svg"
						alt="get real facebook page likes"
						className={styles.facebookImg4}
					/>
				</>
				: null
			}
			<div className={type === 'twitter' || type === 'spotify' || type === 'vk' ? buyLikesStyles.secondTitle : buyLikesStyles.mainTitle}>
				<p className={buyLikesStyles.title}>{title}</p>
				<p className={buyLikesStyles.text}>{text}</p>
				<ButtonComponent
					text={"Leave Feedback"}
					type={type}
					onClick={() => push(`/${pathname}#comment`)}
				/>
			</div>
			{
				type === 'twitter'
					? <>
						<img
							src={image}
							alt="buy twitter likes"
							className={styles.twitterImg1}
						/>
						<img
							src="/twitterPhoto2.webp"
							alt="buy twitter likes cheap"
							className={styles.twitterImg2}
						/>
					</>
					: type === 'spotify' || type === 'vk'
					? <img
							src={image}
							alt={alt}
							className={styles.spotifyImg}
						/>
					: null
			}
		</div>
	);
}

export default PageHead;
