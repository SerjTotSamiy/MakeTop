import React, {useState} from "react";
import styles from './Header.module.sass';

import Link from 'next/link'
import {useRouter} from "next/router";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";


export const Header = ({type}) => {

    const [openMenu, setOpenMenu] = useState(false);
    const router = useRouter()
    return (
        <div className={`${styles.container} ${openMenu ? styles.container_active : ''}`}>
            <div className={styles.menu}>
                <Link href={'/'}><div className={styles.logoContainer} style={{cursor:'pointer'}}>
                    <img src="/123.gif" alt="maketop.io" width={"100%"}/>
                    <p className={styles.make}>MAKE</p>
                    <p className={styles.top}>TOP</p>
                </div></Link>
                <button className={styles.burger_menu} onClick={() => setOpenMenu(prev => !prev)}>{!openMenu ?
                    <img src="/menu.svg" alt=""/> : <img src="/close.svg" alt=""/>}</button>
            </div>

            <Link href={'/buy-instagram-likes'}><span className={` ${styles.link} ${type==='youtube' ? styles.youtube_link : type==='twitter'?styles.twitter_link:type==='facebook'?styles.facebook_link:type==='spotify'?styles.spotify_link:type==='vk'?styles.vk_link:type==='tiktok'?styles.tiktok_link:styles.instagram_link}`}>Buy Instagram Likes</span></Link>
            <Link href={'/buy-instagram-followers'}><span className={` ${styles.link} ${type==='youtube' ? styles.youtube_link : type==='twitter'?styles.twitter_link:type==='facebook'?styles.facebook_link:type==='spotify'?styles.spotify_link:type==='vk'?styles.vk_link:type==='tiktok'?styles.tiktok_link: styles.instagram_link}`}>Buy Instagram Followers</span></Link>
            <div className={ styles.link} ><p style={{height:70,display:'flex',alignItems:'center'}}>Premium Services<ExpandMore/></p>
                <div className={styles.hoverBlock}>
                    <div>
                        <Link href={'/buy-instagram-likes'}><p>Buy Instagram Likes</p></Link>
                        <Link href={'/automatic-instagram-likes'}><p> Automatic Instagram Likes</p></Link>
                        <Link href={'/buy-instagram-followers'}><p>Buy Instagram Followers</p></Link>
                        <Link href={'/buy-instagram-views'}><p>Buy Instagram Views</p></Link>
                        <Link href={'/buy-instagram-comments'}><p>Buy Instagram Сomments</p></Link>
                        <Link href={'/free-instagram-likes'}><p>Free Instagram Likes</p></Link>
                        <Link href={'/free-instagram-followers'}><p style={{marginBottom:50}}> Free Instagram Followers</p></Link>
                        <Link href={'/buy-youtube-views'}><p>YouTube Views</p></Link>
                        <Link href={'/buy-youtube-likes'}><p>YouTube Likes</p></Link>
                        <Link href={'/buy-youtube-comments'}><p>YouTube Comments</p></Link>
                    </div>
                    <div>
                        <Link href={'/buy-tiktok-followers'}><p>TikTok Followers</p></Link>
                        <Link href={'/buy-tiktok-likes'}><p> TikTok Likes</p></Link>
                        <Link href={'/buy-tiktok-views'}><p style={{marginBottom:50}}>TikTok Views</p></Link>
                        <Link href={'/buy-twitter-followers'}><p>Twitter Followers</p></Link>
                        <Link href={'/buy-twitter-likes'}><p>Twitter Likes</p></Link>
                    </div>
                    <div>
                        <Link href={'/buy-facebook-page-likes'}><p style={{marginBottom:50}}>Facebook Page Likes</p></Link>
                        <Link href={'/buy-spotify-playlist-followers'}><p style={{marginBottom:50}}>Spotify Playlist Followers</p></Link>
                        <Link href={'/buy-vk-group-followers'}><p>VK Group followers</p></Link>
                        <Link href={'/buy-vk-post-likes'}><p>VK Post likes</p></Link>
                    </div>
                </div>
            </div>
            <Link href={'/support'}><span className={` ${styles.link} ${type==='youtube' ? styles.youtube_link : type==='twitter'?styles.twitter_link:type==='facebook'?styles.facebook_link:type==='spotify'?styles.spotify_link:type==='vk'?styles.vk_link:type==='tiktok'?styles.tiktok_link:styles.instagram_link}`}>Contact</span></Link>

            <div className={`${styles.menu_open} ${openMenu && styles.active}`}>
                <Link href={'/buy-instagram-likes'}><span className={styles.mobile_span}>Buy Instagram Likes</span></Link>
                <Link href={'/buy-instagram-followers'}><span
                    className={styles.mobile_span}>Buy Instagram Followers</span></Link>
                <div className={styles.mobile_span}>
                <Accordion  style={{background:"transparent",border:0,boxShadow:"none",maxWidth:250,width:'100%'}} TransitionProps={{timeout:500}}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{display:"flex",alignItems:'center',textAlign:'center',top:-10}}
                        expandIcon={<ExpandMore style={{color:"white" }}/>}>

                            <p className={styles.mobile_span}  > Premium Services</p>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordion} >

                        <Link href={'/buy-instagram-likes'}><p>Buy Instagram Likes</p></Link>
                        <Link href={'/automatic-instagram-likes'}><p> Automatic Instagram Likes</p></Link>
                        <Link href={'/buy-instagram-followers'}><p>Buy Instagram Followers</p></Link>
                        <Link href={'/buy-instagram-views'}><p>Buy Instagram Views</p></Link>
                        <Link href={'/buy-instagram-comments'}><p>Buy Instagram Сomments</p></Link>
                        <Link href={'/free-instagram-likes'}><p>Free Instagram Likes</p></Link>
                        <Link href={'/free-instagram-followers'}><p style={{marginBottom:50}}> Free Instagram Followers</p></Link>
                        <Link href={'/buy-youtube-views'}><p>YouTube Views</p></Link>
                        <Link href={'/buy-youtube-likes'}><p>YouTube Likes</p></Link>
                        <Link href={'/buy-youtube-comments'}><p>YouTube Comments</p></Link>
                        <Link href={'/buy-tiktok-followers'}><p>TikTok Followers</p></Link>
                        <Link href={'/buy-tiktok-likes'}><p> TikTok Likes</p></Link>
                        <Link href={'/buy-tiktok-views'}><p style={{marginBottom:50}}>TikTok Views</p></Link>
                        <Link href={'/buy-twitter-followers'}><p>Twitter Followers</p></Link>
                        <Link href={'/buy-twitter-likes'}><p>Twitter Likes</p></Link>
                        <Link href={'/buy-facebook-page-likes'}><p style={{marginBottom:50}}>Facebook Page Likes</p></Link>
                        <Link href={'/buy-spotify-playlist-followers'}><p style={{marginBottom:50}}>Spotify Playlist Followers</p></Link>
                        <Link href={'/buy-vk-group-followers'}><p>VK Group followers</p></Link>
                        <Link href={'/buy-vk-post-likes'}><p>VK Post likes</p></Link>

                    </AccordionDetails>
                </Accordion>
                </div>
                <Link href={'/support'}><span
                    className={styles.mobile_span}>Contact</span></Link>
            </div>
        </div>
    )
}
