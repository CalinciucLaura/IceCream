import React from "react";
import "./services.scss"

const items = [
    {
        id: 1,
        title: "Natural Ingredients",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
        id: 2,
        title: "Homemade",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
        id: 3,
        title: "Quality Assurance",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
        id: 4,
        title: "Quick Delivery",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
];

// const variants = {
//     initial: {
//         y: 0,
//         opacity: 0,
//     },
//     animate: {
//         y: 30,
//         opacity: 1,
//         transition: {
//             duration: 0.5,
//             staggerChildren: 0.1,
//         },
//     },
// };

const Services = () => {
    //const ref = useRef();
    const item1 = Object.values(items)[0];
    const item2 = Object.values(items)[1];
    const item3 = Object.values(items)[2];
    const item4 = Object.values(items)[3];

    return (
        //     <motion.div
        //         ref={ref}
        //         className="container"
        //         variants={variants}
        //         initial="initial"
        //         whileInView="animate">
        //         {[...Array(items.length + 1).keys()].map((_, i) => (
        //             <>
        //                 {i % 2 === 0 && (
        //                     <div className="services">
        //                         {items.map((item, index) => (
        //                             <>
        //                                 {index >= i && index < i + 2 && (
        //                                     <motion.div className={index % 2 === 0 ? "item1" : "item2"} key={item.id} variants={{
        //                                         initial: {
        //                                             y: 0,
        //                                             opacity: 0,
        //                                         },
        //                                         animate: {
        //                                             y: 30,
        //                                             opacity: 1,
        //                                             transition: {
        //                                                 duration: 0.5,
        //                                                 delay: index * 0.5,
        //                                                 staggerChildren: 0.1,
        //                                             },
        //                                         },
        //                                     }}>
        //                                         <motion.h3>{item.title}</motion.h3>
        //                                         <motion.p>{item.desc}</motion.p>
        //                                         <div className="line"></div>
        //                                     </motion.div>
        //                                 )}
        //                             </>
        //                         ))}
        //                     </div>

        //                 )}
        //             </>
        //         ))}

        //     </motion.div>

        <div className="services">
            <div className="block">
                <div className="item">
                    <h3>{item1.title}</h3>
                    <p>{item1.desc}</p>
                </div>
                <div className="item">
                    <h3>{item2.title}</h3>
                    <p>{item2.desc}</p>
                </div>
            </div>

            <div className="block">
                <div className="item">
                    <h3>{item3.title}</h3>
                    <p>{item3.desc}</p>
                </div>
                <div className="item">
                    <h3>{item4.title}</h3>
                    <p>{item4.desc}</p>
                </div>
            </div>
        </div>

    );
}


export default Services;




