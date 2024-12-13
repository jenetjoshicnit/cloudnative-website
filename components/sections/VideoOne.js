import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Image from 'next/image';

const VideoOne = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="video-section">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="title-box text-center">
                            <h3 className="title">Trusted IT Solution<br /> &amp; Service Business Agency</h3>
                            <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion <br />for our Company. We have to a tendency to believe</div>
                        </div>
                        <div className="video-box wow fadeInUp">
                            <figure className="image"><Image src="/images/resource/video-img.jpg" alt="Oitech" /></figure>
                            <div className="content">
                                <a className="play-btn lightbox-image" onClick={() => setOpen(true)}><i className="icon fa fa-play" /></a>

                                <h2 className="title">Watch Video</h2>
                            </div>
                        </div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default VideoOne;