import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
// Check if the path to LightGallery is correct
import LightGallery from "lightgallery/react";

// Corrected the import statement for LightGallery
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { Link } from "react-router-dom";

const Batch2021 = () => {
    const lightGallery = useRef(null);
    const [items] = useState([

        {
            id: '1',
            size: '1400-932',
            src: 'https://i.ibb.co/Cv70jvh/IMG-4225.jpg',
            thumb: 'https://i.ibb.co/Cv70jvh/IMG-4225.jpg',
        },
        {
            id: '2',
            size: '1280-720',
            src: 'https://i.ibb.co/RBKbS0b/291584008-1093432328223837-3243831562910606764-n.jpg',
            thumb: 'https://i.ibb.co/RBKbS0b/291584008-1093432328223837-3243831562910606764-n.jpg'
        },
        {
            id: '3',
            size: '1400-933',
            src: 'https://i.ibb.co/6F8Y1LB/284059388-1072247897008947-4079803098903088685-n.jpg',
            thumb: 'https://i.ibb.co/6F8Y1LB/284059388-1072247897008947-4079803098903088685-n.jpg',
        },
        {
            id: '4',
            size: '1400-932',
            src: 'https://i.ibb.co/gyVxm4R/279047212-1044228206477583-5479086725806383282-n.jpg',
            thumb: 'https://i.ibb.co/gyVxm4R/279047212-1044228206477583-5479086725806383282-n.jpg',
        },
        {
            id: '5',
            size: '1400-932',
            src: 'https://i.ibb.co/t22TKZg/121530343-692054945028246-4835759167541992777-n.jpg',
            thumb: 'https://i.ibb.co/t22TKZg/121530343-692054945028246-4835759167541992777-n.jpg',
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

export default Batch2021;
