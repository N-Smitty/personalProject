import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Litters.scss';

class gallery extends Component {
    render() {
        return (

            <div className='gallery-holder'>
                <h5>Gallery</h5>
            <div className='gallery-images'>
                <img className='gallery-image' src='https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Bulldog-trio.jpg?bust=1538074854' alt='gallery'/>
                <img className='gallery-image' src='https://img.ksl.com/mx/mplace-classifieds.ksl.com/3551967-1591062403-886657.JPG?filter=marketplace/400x300_cropped' alt='gallery'/>
                <img className='gallery-image' src='https://i.pinimg.com/originals/7d/70/5f/7d705fa63fe13367ff8ac9181d7e68bb.jpg' alt='gallery'/>
                <img className='gallery-image' src='https://cdn.abcotvs.com/dip/images/432731_121114-BulldogPuppy.jpg?w=1280&r=16%3A9' alt='gallery'/>
                <img className='gallery-image' src='https://bulldogguide.com/wp-content/uploads/2019/07/DSC05703-1-800x500.jpg' alt='gallery'/>
                <img className='gallery-image' src='https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F151030064738-tillman-the-english-bulldog-file.jpg' alt='gallery'/>
                <img className='gallery-image' src='https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1024/https://dreamybulldogs.com/wp-content/uploads/2019/12/MG_3148.jpg' alt='gallery'/>
                <img className='gallery-image' src='https://www.al.com/resizer/wfIw4qid39t7aGuEyGG-TVLgbFc=/450x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/sports_impact/photo/ugajpg-2682c41a2a65f721.jpg' alt='gallery'/>
                <img className='gallery-image'src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR04HeOg-1ttdoM1TjIHxj4ZIaN_uvfA40cPg&usqp=CAU' alt='gallery'/>
                <img className='gallery-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfR9BEnU7frnlwruGAWCKpes9cIVwca78BWA&usqp=CAU' alt='gallery'/>
            </div>
            </div>
        )
    }
}

export default gallery;