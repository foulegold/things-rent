import React from "react";
import s from "./ProductList.module.css";
import AnnouncementMiniCard from "../AnnouncementMiniCard/AnnouncementMiniCard";
import { shallowEqual, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

const ProductList = (props) => {
    const announcements = useSelector(
        (state) => state.announcements,
        shallowEqual
    );
    const loading = useSelector((state) => state.loading, shallowEqual);

    return (
        <div className={s.productList + " appContainer"}>
            <h1 className={s.title}>Новые объявления</h1>
            <div className="appContainer">
                <div className={s.announcement__wrapper}>
                    {loading && (
                        <div className="spinnerWrapper">
                            <Spinner animation="border" />
                        </div>
                    )}
                    {announcements.length ? (
                        announcements
                            .slice(0, 8)
                            .map((el) => (
                                <AnnouncementMiniCard
                                    title={el.title}
                                    price={el.price}
                                    id={el.id}
                                    key={el.id}
                                />
                            ))
                    ) : (
                        <span className={s.empty}>Ничего не найдено</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
