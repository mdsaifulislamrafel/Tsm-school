import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
// Check if the path to LightGallery is correct
import LightGallery from "lightgallery/react";

// Corrected the import statement for LightGallery
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { Link } from "react-router-dom";

const Batch2022 = () => {
    const lightGallery = useRef(null);
    const [items] = useState([

        {
            id: '1',
            size: '1400-932',
            src: 'https://i.ibb.co/xsY00ZZ/DSC097331.jpg',
            thumb: 'https://i.ibb.co/xsY00ZZ/DSC097331.jpg',
        },
        {
            id: '2',
            size: '1400-932',
            src: 'https://i.ibb.co/zZkHYmg/DSC092171.jpg',
            thumb: 'https://i.ibb.co/zZkHYmg/DSC092171.jpg',
        },
        {
            id: '3',
            size: '1400-932',
            src: 'https://i.ibb.co/ZYnFVhR/312715078-668733804767747-4857508405237181739-n.jpg',
            thumb: 'https://i.ibb.co/ZYnFVhR/312715078-668733804767747-4857508405237181739-n.jpg',
        },
        {
            id: '4',
            size: '1400-932',
            src: 'https://i.ibb.co/bmJm83w/285870727-569915374649591-5290402603688555487-n.jpg',
            thumb: 'https://i.ibb.co/bmJm83w/285870727-569915374649591-5290402603688555487-n.jpg',
        },
        {
            id: '5',
            size: '1400-932',
            src: 'https://i.ibb.co/x1X7KXt/435464495-952792346258466-1049924889274993903-n.jpg',
            thumb: 'https://i.ibb.co/x1X7KXt/435464495-952792346258466-1049924889274993903-n.jpg',
        },
        {
            id: '6',
            size: '1400-932',
            src: 'https://i.ibb.co/524FdN4/276058631-504623847741987-4329843461226666698-n.jpg',
            thumb: 'https://i.ibb.co/524FdN4/276058631-504623847741987-4329843461226666698-n.jpg',
        },
        {
            id: '7',
            size: '1400-932',
            src: 'https://i.ibb.co/NxMQkWW/435264212-952792239591810-2318162191431643479-n.jpg',
            thumb: 'https://i.ibb.co/NxMQkWW/435264212-952792239591810-2318162191431643479-n.jpg',
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

export default Batch2022;
