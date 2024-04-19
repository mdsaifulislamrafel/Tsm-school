import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
// Check if the path to LightGallery is correct
import LightGallery from "lightgallery/react";

// Corrected the import statement for LightGallery
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { Link } from "react-router-dom";

const Batch2017 = () => {
    const lightGallery = useRef(null);
    const [items] = useState([

        {
            id: '1',
            size: '1400-932',
            src: 'https://i.ibb.co/x6qhj60/100045626-1676693772484375-2487825880261328896-n.jpg',
            thumb: 'https://i.ibb.co/x6qhj60/100045626-1676693772484375-2487825880261328896-n.jpg',
        },
        {
            id: '2',
            size: '1400-932',
            src: 'https://i.ibb.co/7QhzPMv/356831379-2605239219629821-3723494103195428497-n.jpg',
            thumb: 'https://i.ibb.co/7QhzPMv/356831379-2605239219629821-3723494103195428497-n.jpg',
        },
        {
            id: '3',
            size: '1400-933',
            src: 'https://i.ibb.co/9YcrGVt/99138503-1676694215817664-849076126310465536-n.jpg',
            thumb: 'https://i.ibb.co/9YcrGVt/99138503-1676694215817664-849076126310465536-n.jpg',
        },
        {
            id: '4',
            size: '1400-932',
            src: 'https://i.ibb.co/0GYVwjX/98469891-1676694455817640-9034353549814792192-n.jpg',
            thumb: 'https://i.ibb.co/0GYVwjX/98469891-1676694455817640-9034353549814792192-n.jpg',
        },
        {
            id: '5',
            size: '1400-932',
            src: 'https://i.ibb.co/RSW7zqK/IMG-4056.jpg',
            thumb: 'https://i.ibb.co/RSW7zqK/IMG-4056.jpg',
        },
        {
            id: '6',
            size: '1400-933',
            src: 'https://i.ibb.co/zX7W6nW/IMG-4072.jpg',
            thumb: 'https://i.ibb.co/zX7W6nW/IMG-4072.jpg',

        },
        {
            id: '7',
            size: '1400-932',
            src: 'https://i.ibb.co/JcVXh4g/IMG-4203.jpg',
            thumb: 'https://i.ibb.co/JcVXh4g/IMG-4203.jpg',
        },
    ]);

    const onInit = useCallback((detail) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);

    const getItems = useCallback(() => {
        return items.map((item) => {
            return (
                <a
                    key={item.id}
                    data-lg-size={item.size}
                    className="gallery-item"
                    data-src={item.src}
                >
                    <img
                        style={{ maxWidth: '280px' }}
                        className="img-responsive"
                        src={item.thumb}
                    />
                </a>
            );
        });
    }, [items]);

    useEffect(() => {
        if (lightGallery.current) {
            lightGallery.current.refresh();
        }
    }, [items]);

    return (
        <div className="App">
            <LightGallery
                plugins={[lgVideo, lgZoom]}
                elementClassNames="custom-class-name"
                onInit={onInit}
            >
                {getItems()}
            </LightGallery>
            <div className="text-center my-5">
                <Link to={"/gallery"} className="btn text-white btn-info">Back</Link>
            </div>
        </div>
    );
};

export default Batch2017;
