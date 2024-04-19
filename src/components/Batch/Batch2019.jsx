import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
// Check if the path to LightGallery is correct
import LightGallery from "lightgallery/react";

// Corrected the import statement for LightGallery
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { Link } from "react-router-dom";

const Batch2019 = () => {
    const lightGallery = useRef(null);
    const [items] = useState([

        {
            id: '1',
            size: '1400-932',
            src: 'https://i.ibb.co/58ZnhV4/IMG-4242.jpg',
            thumb: 'https://i.ibb.co/58ZnhV4/IMG-4242.jpg',
        },
        {
            id: '2',
            size: '1400-932',
            src: 'https://i.ibb.co/7J0qnRd/IMG-4313.jpg',
            thumb: 'https://i.ibb.co/7J0qnRd/IMG-4313.jpg',
        },
        {
            id: '3',
            size: '1400-933',
            src: 'https://i.ibb.co/r2XTwhy/41513644-666623093723256-5352645783399170048-n.jpg',
            thumb: 'https://i.ibb.co/r2XTwhy/41513644-666623093723256-5352645783399170048-n.jpg',
        },
        {
            id: '4',
            size: '1400-932',
            src: 'https://i.ibb.co/XFcb5Lz/80998262-987409531644609-6085551479668604928-n.jpg',
            thumb: 'https://i.ibb.co/XFcb5Lz/80998262-987409531644609-6085551479668604928-n.jpg',
        }
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

export default Batch2019;
