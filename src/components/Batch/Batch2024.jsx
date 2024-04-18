import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
// Check if the path to LightGallery is correct
import LightGallery from "lightgallery/react";

// Corrected the import statement for LightGallery
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { Link } from "react-router-dom";

const Batch2024 = () => {
    const lightGallery = useRef(null);
    const [items] = useState([

        {
            id: '1',
            size: '1400-932',
            src: 'https://i.ibb.co/M5Q6c7P/IMG-4511-01.jpg',
            thumb: 'https://i.ibb.co/M5Q6c7P/IMG-4511-01.jpg',
        },
        {
            id: '2',
            size: '1400-932',
            src: 'https://i.ibb.co/dPtHF2v/IMG-4194.jpg',
            thumb: 'https://i.ibb.co/dPtHF2v/IMG-4194.jpg',
        },
        {
            id: '3',
            size: '1400-933',
            src: 'https://i.ibb.co/QbbVt5H/IMG-4483-01.jpg',
            thumb: 'https://i.ibb.co/QbbVt5H/IMG-4483-01.jpg',
        },
        {
            id: '4',
            size: '1400-932',
            src: 'https://i.ibb.co/m6zTxfR/Screenshot-2024-04-18-191430.png',
            thumb: 'https://i.ibb.co/m6zTxfR/Screenshot-2024-04-18-191430.png',
        },
        {
            id: '5',
            size: '1400-932',
            src: 'https://i.ibb.co/T0GDdrq/Screenshot-2024-04-18-192703.png',
            thumb: 'https://i.ibb.co/T0GDdrq/Screenshot-2024-04-18-192703.png',
        },
        {
            id: '6',
            size: '1400-933',
            src: 'https://i.ibb.co/F04NH6c/Screenshot-2024-04-18-192835.png',
            thumb: 'https://i.ibb.co/F04NH6c/Screenshot-2024-04-18-192835.png',

        },
        {
            id: '7',
            size: '1400-932',
            src: 'https://i.ibb.co/4SdmMtw/Screenshot-2024-04-18-181242.png',
            thumb: 'https://i.ibb.co/4SdmMtw/Screenshot-2024-04-18-181242.png',
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

export default Batch2024;
