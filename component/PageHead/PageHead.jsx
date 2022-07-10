import React from "react";
import styles from "../../styles/Home.module.sass";
import buyLikesStyles from "../../styles/BuyLikes.module.sass";
import { ButtonComponent} from "../ButtonComponent/ButtonComponent";
import { useRouter } from "next/router";
import content from "./pageHeadData";

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
