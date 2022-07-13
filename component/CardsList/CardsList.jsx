import React, {useEffect} from "react";
import buyLikesStyles from "../../styles/BuyLikes.module.sass";
import BuyLikes from "../BuyLikes/BuyLikes";
import {useRouter} from "next/router";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";
import {useStores} from "../../stores";

const CardsList = observer(({ store, setModalOpen}) => {
    // const router = useRouter();
    const { data, additionalData, system, service } = toJS(store);
    const { modalStore } = useStores();

    const currentData = system === 'instagram' ? data : additionalData;
    const currentType = system === 'Vk.com' ? 'vk' : system;

    return (
        <div className={buyLikesStyles.buyLikes_item_container}>
            {/*<button onClick={() => console.log(store)}>CLICK ME</button>*/}
        {currentData?.plans?.map((item, index) => {
            return (
                <BuyLikes
                    key={item?.count}
                    likes={item?.count}
                    newPrice={item?.price}
                    info={currentData.info}
                    system={system}
                    color="#285FFF"
                    text={`Real ${system.charAt(0).toUpperCase() + system.slice(1)} ${service}`}
                    type={currentType}
                    id={"LIKES"}
                    onClick={(e) => {
                        const position = e.pageY - e.clientY;
                        modalStore.setModalOpen(position);
                        modalStore.item = item;
                        // router.push({
                            // pathname: "/basket",
                        //     query: {
                        //         service: service,
                        //         counts: item?.count,
                        //         system: system,
                        //         priceValue: item?.price,
                        //     },
                        // });
                    }}
                />
            );
        })}
    </div>
    );
})

export default CardsList;
