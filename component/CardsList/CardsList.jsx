import React from "react";
import buyLikesStyles from "../../styles/BuyLikes.module.sass";
import BuyLikes from "../BuyLikes/BuyLikes";
import {useRouter} from "next/router";
import {toJS} from "mobx";

const CardsList = ({ store, setModalOpen}) => {
    const router = useRouter();
    const { data, system, service } = toJS(store);

    return (
        <div className={buyLikesStyles.buyLikes_item_container}>
            {/*<button onClick={() => console.log(store)}>CLICK ME</button>*/}
        {data?.plans?.map((item, index) => {
            return (
                <BuyLikes
                    key={item?.count}
                    likes={item?.count}
                    newPrice={item?.price}
                    color="#285FFF"
                    text={`Real ${system.charAt(0).toUpperCase() + system.slice(1)} ${service}`}
                    type={system}
                    id={"LIKES"}
                    onClick={() => {
                        setModalOpen(true);
                        router.push({
                            // pathname: "/basket",
                            query: {
                                service: service,
                                counts: item?.count,
                                system: system,
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
