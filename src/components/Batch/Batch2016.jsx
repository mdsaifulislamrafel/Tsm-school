import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
// Check if the path to LightGallery is correct
import LightGallery from "lightgallery/react";

// Corrected the import statement for LightGallery
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { Link } from "react-router-dom";

const Batch2016 = () => {
    const lightGallery = useRef(null);
    const [items] = useState([

        {
            id: '1',
            size: '1400-932',
            src: 'https://i.ibb.co/hXMgXrT/IMG-4237.jpg',
            thumb: 'https://i.ibb.co/hXMgXrT/IMG-4237.jpg',
        },
        {
            id: '2',
            size: '1280-720',
            src: 'https://i.ibb.co/GfD7RT0/184773248-1276313222770981-5112410742809793535-n.jpg',
            thumb: 'https://i.ibb.co/GfD7RT0/184773248-1276313222770981-5112410742809793535-n.jpg'
        },
        {
            id: '3',
            size: '1400-933',
            src: 'https://i.ibb.co/7CwTsYW/61783539-2394476837487452-4545797423355658240-n.jpg',
            thumb: 'https://i.ibb.co/7CwTsYW/61783539-2394476837487452-4545797423355658240-n.jpg',
        },
        {
            id: '4',
            size: '1400-932',
            src: 'https://i.ibb.co/fnxFFSD/44124505-534866340271598-281083387362410496-n.jpg',
            thumb: 'https://i.ibb.co/fnxFFSD/44124505-534866340271598-281083387362410496-n.jpg',
        },
        {
            id: '5',
            size: '1400-932',
            src: 'https://i.ibb.co/zbsm10c/67475502-689970088094555-6168949848952274944-n.jpg',
            thumb: 'https://i.ibb.co/zbsm10c/67475502-689970088094555-6168949848952274944-n.jpg',
        },
        {
            id: '6',
            size: '1400-932',
            src: 'https://i.ibb.co/Bs8bDHn/68789547-2448676815400787-2784115049579413504-n.jpg',
            thumb: 'https://i.ibb.co/Bs8bDHn/68789547-2448676815400787-2784115049579413504-n.jpg',
        },
        {
            id: '7',
            size: '1400-932',
            src: 'https://i.ibb.co/zrNFK9Y/78853211-889485644787076-3240233713056874496-n.jpg',
            thumb: 'https://i.ibb.co/zrNFK9Y/78853211-889485644787076-3240233713056874496-n.jpg',
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

export default Batch2016;
