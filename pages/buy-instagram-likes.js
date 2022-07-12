import React, {useEffect, useRef, useState} from "react";
import styles from "../styles/Home.module.sass";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {Layer} from "../component/Layer/Layer";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import {useRouter} from "next/router";
import {useStores} from "../stores";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import CardsList from "../component/CardsList/CardsList";
import {ModalComponent} from "../component/Modal/ModalComponent";
import PageHead from "../component/PageHead/PageHead";
import appStore from "../stores/app.store";
import Modal from "../component/Modal/Modal";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy Instagram Likes Guaranteed by MakeTop #1 since 2017",
            canonical: "https://maketop.io/buy-instagram-likes",
            description:
                "Buy Instagram likes from MakeTop. Cheap instant delivery to your profile. High rated likes and 100% quality. 24/7 Simple payment by crypto or credit card",
        },
    };
}

const BuyInstagramLikes = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [comment, setComment] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const { appStore, likesStore } = useStores();
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const [modalPosition, setModalPosition] = useState(0);
    const { query } = useRouter();
    const ref = useRef(null);

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        // likesStore.getData();
        likesStore.getComment().then(data => setComment(data));
    }, []);

    return (
        <div
            className={styles.background}
            style={{
                background: "url('instagramBg.webp') no-repeat 100%  ",
                backgroundSize: "cover",
            }}
        >
            <HeadComponent {...props} />
            <div className={styles.container}>
                <Layer type="link">
                    <div className={`container`}>
                        <PageTitle title={"Buy Instagram likes"}/>
                        <PageHead page="likes" />
                        <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                            <p>GET STARTED</p>
                        </div>
                        <CardsList store={likesStore} setModalOpen={setIsOpen} />
                        <ReviewsBlock
                            comment={comment}
                            isReviewButtonPress={isReviewButtonPress}
                            setIsReviewButtonPress={setIsReviewButtonPress}
                            type={likesStore.system}
                            service={likesStore.service}
                        />
                        <InfoBlock />
                        <Modal isOpen={appStore.isModalOpen} onClose={() => appStore.setModalShow(false)} position={modalPosition}>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias aliquam
                                architecto asperiores esse harum incidunt itaque maxime nam nisi praesentium provident
                                quibusdam quo reiciendis rem tenetur voluptate voluptates voluptatum!
                            </div>
                            <div>Amet consectetur dicta eum, expedita incidunt laudantium libero magnam minus modi nobis
                                odit reiciendis reprehenderit rerum, saepe, sit tempora voluptatem? Accusantium
                                blanditiis debitis, fugit impedit incidunt ipsam nemo tenetur ut.
                            </div>
                            <div>Autem consequuntur ducimus odit pariatur quibusdam quidem repellat. Atque debitis eius
                                enim est quia? Aliquam consectetur deleniti dolorem earum eligendi error fugit laborum
                                minima, quas ut vel voluptas voluptatem voluptatum.
                            </div>
                            <div>Ab ad atque ex harum laborum nulla. Aperiam aspernatur commodi consequuntur delectus
                                excepturi explicabo facilis illo iste maiores officia, optio quis reprehenderit sunt
                                totam vero. Expedita id inventore unde voluptatem.
                            </div>
                            <div>Architecto autem beatae, commodi doloribus eos et harum itaque libero maxime natus
                                nihil officia omnis quaerat vel, veniam vitae voluptatibus voluptatum. Aperiam
                                asperiores culpa dolore eligendi nihil placeat quod tempora.
                            </div>
                        </Modal>
                        {/*{isOpen && (*/}
                        {/*   <ModalComponent
                                open={isOpen}
                                setOpen={setIsOpen}
                                service={query.service}
                                counts={query.counts}
                                priceValue={query.priceValue}
                                system={query.system}
                            /> */}
                        {/*)}*/}
                    </div>
                </Layer>
            </div>
        </div>
    );
}

export default BuyInstagramLikes;
