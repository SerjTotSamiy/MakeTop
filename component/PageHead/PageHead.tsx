import React from "react";
import styles from "../../styles/Home.module.sass";
import buyLikesStyles from "../../styles/BuyLikes.module.sass";
import { ButtonComponent} from "../ButtonComponent/ButtonComponent";
import { useRouter } from "next/router";

const PageHead = () => {
	const { push } = useRouter()

	return (
		<div className={styles.phone}>
			<img
				src="/buyLikesPhoto.webp"
				alt="Buy Instagram Likes"
				className={styles.instagramImg}
			/>
			<div className={buyLikesStyles.mainTitle}>
				<p className={buyLikesStyles.title}>BUY INSTAGRAM LIKES</p>
				<p className={buyLikesStyles.text}>
					Where you can buy cheap likes for Instagram photos and
					videos. Buy real Insta
					<br/> likes for the most reasonable prices here and grow
					your Instagram popularity in a flash!
				</p>
				<ButtonComponent
					text={"Leave Feedback"}
					type={"instagram"}
					onClick={() => push("/")} style={undefined} typeInput={undefined} disabled={undefined}
					id={undefined}				/>
			</div>
		</div>
	);
}

export default PageHead;
