import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
// Check if the path to LightGallery is correct
import LightGallery from "lightgallery/react";

// Corrected the import statement for LightGallery
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { Link } from "react-router-dom";

const Batch2020 = () => {
    const lightGallery = useRef(null);
    const [items] = useState([

        {
            id: '1',
            size: '1400-932',
            src: 'https://i.ibb.co/FV6JJVk/435514851-1445477716353748-7901227329153964898-n.jpg',
            thumb: 'https://i.ibb.co/FV6JJVk/435514851-1445477716353748-7901227329153964898-n.jpg',
        },
        {
            id: '2',
            size: '1280-720',
            poster: 'https://vimeo.com/936211279?share=copy',
            src: 'https://vimeo.com/936211279?share=copy',
            thumb: 'https://i.ibb.co/tMPkZtQ/batch20.jpg'
        },
        {
            id: '3',
            size: '1400-933',
            src: 'https://i.ibb.co/QNdYq6G/IMG-2176-2.jpg',
            thumb: 'https://i.ibb.co/QNdYq6G/IMG-2176-2.jpg',
        },
        {
            id: '4',
            size: '1400-932',
            src: 'https://i.ibb.co/cCH6QB8/IMG-1793.jpg',
            thumb: 'https://i.ibb.co/cCH6QB8/IMG-1793.jpg',
        },
        {
            id: '5',
            size: '1400-932',
            src: 'https://i.ibb.co/XsVVRKJ/IMG-0337.jpg',
            thumb: 'https://i.ibb.co/XsVVRKJ/IMG-0337.jpg',
        },
        {
            id: '6',
            size: '1400-933',
            src: 'https://i.ibb.co/F06FzRd/342025998-763651352057101-8413328987837985290-n.jpg',
            thumb: 'https://i.ibb.co/F06FzRd/342025998-763651352057101-8413328987837985290-n.jpg',

        },
        {
            id: '7',
            size: '1400-932',
            src: 'https://i.ibb.co/fXD4TwJ/435457055-1445477476353772-2646873413816955494-n.jpg',
            thumb: 'https://i.ibb.co/fXD4TwJ/435457055-1445477476353772-2646873413816955494-n.jpg',
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

export default Batch2020;
