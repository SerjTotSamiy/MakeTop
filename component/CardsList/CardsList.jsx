import React from "react";
import buyLikesStyles from "../../styles/BuyLikes.module.sass";
import BuyLikes from "../BuyLikes/BuyLikes";
import {useRouter} from "next/router";

const CardsList = ({ store }) => {
    const router = useRouter();

    return (
        <div className={buyLikesStyles.buyLikes_item_container}>
        {store.getData()?.plans.map((item, index) => {
            return (
                <BuyLikes
                    key={item?.count}
                    likes={item?.count}
                    newPrice={item?.price}
                    color="#285FFF"
                    text="Real Instagram Likes"
                    type={"instagram"}
                    id={"LIKES"}
                    onClick={() => {
                        router.push({
                            pathname: "/basket",
                            query: {
                                service: store.service,
                                counts: item?.count,
                                system: store.system,
                                priceValue: item?.price,
                            },
                        });
                    }}
                />
            );
        })}
    </div>
    );
}

export default CardsList;
