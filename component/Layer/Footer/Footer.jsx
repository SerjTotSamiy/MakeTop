import React from "react";
import styles from './Footer.module.sass';

import {useRouter} from "next/router";
import Link from 'next/link'
export const Footer = () => {
    const router = useRouter()
    return (
        <div className={styles.container}>

                <div className={styles.content}>
            <div className={styles.logoContainer}>
                <img src="/123.gif" width={"100%"}/>
                <p className={styles.make}>MAKE</p>
                <p className={styles.top}>TOP</p>
            </div>

                    <div className={styles.rowColumnLinks}>

                        <div className={styles.firstRowColumn}>

                            <div className={styles.logoColumn}>

                                <p >Map Sites</p>
                            <div className={styles.logoLinksColumn}>
                                <Link href={'/buy-instagram-likes'}><span>Buy Instagram Likes</span></Link>
                                <Link href={'/automatic-instagram-likes'}><span> Automatic Instagram Likes</span></Link>
                                <Link href={'/buy-instagram-followers'}><span> Buy Instagram Followers</span></Link>
                                <Link href={'/buy-instagram-views'}><span> Buy Instagram Views</span></Link>
                                <Link href={'/free-instagram-likes'}><span>Free Instagram Likes</span></Link>
                                <Link href={'/buy-instagram-comments'}><span> Buy Instagram Comments</span></Link>
                            </div>
                        </div>
                            <div className={styles.linksColumn}>
                                <Link href={'/buy-youtube-likes'}><span>Youtube Likes</span></Link>
                                <Link href={'/buy-youtube-views'}><span>Youtube Views</span></Link>
                                <Link href={'/buy-youtube-comments'}><span>Youtube Comments</span></Link>
                                <Link href={'/buy-spotify-playlist-followers'}><span>Spotify Playlist Followers</span></Link>

                            </div>
                        </div>
                        <div className={styles.secondRowColumn}>
                        <div className={styles.firstRowColumn}>
                            <div className={styles.linksColumn}>
                                <Link href={'/buy-tiktok-followers'}><span>TikTok Followers</span></Link>
                                <Link href={'/buy-tiktok-likes'}><span>TikTok Likes</span></Link>
                                <Link href={'/buy-tiktok-views'}><span>TikTok Views</span></Link>
                                <Link href={'/buy-facebook-page-likes'}><span>Facebook Pages Likes</span></Link>
                            </div>
                        </div>

                        <div className={styles.firstRowColumn} style={{alignItems:'flex-start'}}>
                            <div className={styles.linksColumn}>
                                <Link href={'/buy-twitter-followers'}><span>Twitter Followers</span></Link>
                                <Link href={'/buy-twitter-likes'}><span>Twitter Likes</span></Link>
                                <Link href={'/buy-vk-group-followers'}><span>VK Group followers</span></Link>
                                <Link href={'/buy-vk-post-likes'}><span>VK Post Likes</span></Link>

                            </div>
                            <div className={styles.linksColumn} >
                                <Link href={'/support'}><span>Contact</span></Link>
                                <Link href={'/blog'}><span>Blog</span></Link>
                                <Link href={'/privacy-policy'}><span>Privacy</span></Link>
                                {/*<Link href={'/support'}><span>Support</span></Link>*/}

                            </div>
                        </div>
                        </div>



                    </div>

                </div>
            <div className={styles.rights}>
                <p>Name company.  © All Rights Reserved</p>
                <span>
                            <img src="/mastercard.svg"/>
                            <img src="/visa.svg"/>
                            <img src="/maestro.svg"/>
                            <img src="/americanExpress.svg"/>
                            <img src="/discover.svg"/>
                        </span>
            </div>

        </div>
    )
}
