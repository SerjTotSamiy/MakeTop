import React, {useEffect} from "react";
import buyLikesStyles from "../../styles/BuyLikes.module.sass";
import BuyLikes from "../BuyLikes/BuyLikes";
import {useRouter} from "next/router";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";

const CardsList = observer(({ store, setModalOpen}) => {
    const router = useRouter();
    const { data, additionalData, system, service } = toJS(store);

    const currentData = system === 'instagram' ? data : additionalData;

    return (
        <div className={buyLikesStyles.buyLikes_item_container}>
            {/*<button onClick={() => console.log(additionalData)}>CLICK ME</button>*/}
        {currentData?.plans?.map((item, index) => {
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
})

export default CardsList;
